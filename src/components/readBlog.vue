<template>
    <div id="read">
      <p>{{blog.title}}</p>  
      <em>{{blog.author}}</em> <br>
      <em>分类:{{blog.type}}</em>
      <article><p>{{blog.content}}</p> </article>
    <button @click="deleteBlog">删除文章</button>
    <router-link tag="a" v-bind:to="'/edit/'+id">编辑博客</router-link>
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
    methods:{
        deleteBlog()
        {
            var documentName='/posts' //自定义
            //数据库会自动创建这个文件
            var dburl='https://blogdb-cee87.firebaseio.com/'+documentName; //firebase数据库
            this.$http.delete(dburl+'/'+this.id+'/'+'.json').then(data=>{
               this.$router.go(-1);
            })
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
