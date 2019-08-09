<template>
  <div v-theme:color="theme" id="showblog" >
      <h2>博客列表</h2>
      <input type="text" placeholder="Search" v-model="search">
              <div>
                <!-- {{blogs}} -->

             <p>当前主题:{{theme}}</p>
              <button @click="changeTheme">修改主题</button>
              </div>
            
              <div v-for="blog in filteredBlogs"class="single-blog">
                 
              <!-- <div v-for="blog in blogs" class="single-blog">  一条信息 一共有多条 -->
              <!-- 自定义rainbow 指令-->
              <!-- 在main.js中 通过Vue.directive实现 -->
        <router-link v-bind:to="'/blog/'+ blog.id"><h3 v-rainbow>{{blog.title | toUpper}}</h3></router-link>  
        <article>
         <h5>{{blog.content | snippet}}</h5>
        </article>
      </div>

  </div>
</template>

<script>
 

 
export default {
  name: 'showblog',
   data(){
       return{
            blogs:[],
            theme:"day",
            search:""
       }
   },
   methods:{
     changeTheme:function(){
          if(this.theme=="day")
          {
            this.theme="night";
          }
          else
          {
            this.theme="day";
          }
     },
      
   },
   computed:{
        filteredBlogs:function(){
          return this.blogs.filter((blog)=>{
              return blog.title.match(this.search);   //ES6语法
          })
        },
  
   },
   //请求数据
   created(){
          var documentName='/posts.json' //自定义
            //数据库会自动创建这个文件
            var dburl='https://blogdb-cee87.firebaseio.com/'+documentName; //firebase数据库
        //  var url='https://jsonplaceholder.typicode.com/posts'
        this.$http.get(dburl).then((data)=>{
            // this.blogs=data.body.slice(0,10);
            // this.blogs.push(data.data['-Llk8sotYwnm56iLnCGO'].content);
            return data.json();
            }).then((data)=>{
              console.log(data);
              var blogsArray=new Array();
              console.log(typeof data);
                  for(let k in data)
                  {
                    data[k].id=k;
                    blogsArray.push(data[k]);
                    console.log(k);   //获取data的key值 ——Llk8sotYwnm56iLnCGO
                  }
                  this.blogs=blogsArray;
 
            })
        //从本地读取文件只能将文件放到static文件夹中
            // this.$http.get("./../static/post.json").then((data)=>{
            // this.blogs=data.body.slice(0,10);
            // console.log(this.blogs);
            // });
   },
   filters:{
     //局部过滤器 在当前组件内生效
     toUpper:function(value)
     {
       return value.toUpperCase();
     }
   },
   //组件局部指令
  //  directives:{
  //     'rainbow':{
  //       bind(el,binding,vnode){}
  //     }
  //  }
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
input[type="text"]
{
  width:100%;
}
 </style>
 