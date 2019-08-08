<template>
    <div id="read">
      <p>{{blog.title}}</p>  
      <em>{{blog.author}}</em> <br>
      <em>分类:{{blog.type}}</em>
      <article><p>{{blog.content}}</p> </article>
    
    </div>
</template>


<script>
 
export default {
    name:"read",
    data(){
        return {
            id:this.$route.params.id,
         blog:{
             
         }
        }
    },
    created(){
          var documentName='/posts' //自定义
            //数据库会自动创建这个文件
            var dburl='https://blogdb-cee87.firebaseio.com/'+documentName; //firebase数据库
            //    var url='https://jsonplaceholder.typicode.com/posts'
             console.log(this.id);
            this.$http.get(dburl+'/'+this.id+'/'+'.json').then((data)=>{
            // this.blog.content=data.body.body;
            //  this.blog.title=data.body.title;
            this.blog=data.body;
           console.log(data.body);
            });
        
    }
}
</script>

<style scoped>
article
{
    font-weight: 500;
    font-size: 35px;
    word-wrap:break-word;
}
#read
{
    background: #eee;
    border-radius: 5px;
    border:1px dotted black;
}
</style>
