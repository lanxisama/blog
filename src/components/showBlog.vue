<template>
  <div id="showblog">
      <h2>博客列表</h2>
      <div v-for="blog in blogs" class="single-blog">  <!--一条信息 一共有多条-->
          <h3>{{blog.title}}</h3>
        <article>
         <h5>{{blog.body}}</h5>
        </article>
      </div>
  </div>
</template>

<script>
 
export default {
  name: 'showblog',
   data(){
       return{
            blogs:[]
       }
   },
   //请求数据
   created(){
         var url='https://jsonplaceholder.typicode.com/posts'
        // this.$http.get(url).then((data)=>{
        //     this.blogs=data.body.slice(0,10);
        //     console.log(this.blogs);
        //     });
        //从本地读取文件只能将文件放到static文件夹中
            this.$http.get("./../static/post.json").then((data)=>{
            this.blogs=data.body.slice(0,10);
            console.log(this.blogs);
            });
   }
}
</script>

 <style scoped>
#showblog{
    max-width: 800px;
    margin:0 auto;
}
.single-blog{
    padding:20px;
    margin:20px 0;
    box-sizing:  border-box;
    box-shadow: 1px 5px 5px #5c5858;
    background: #eee;
}
 </style>
 