<template>
    <div id='addblog'>
        
        <form v-if="!submit">
            <h2>文章标题</h2>
            <input v-model="blog.title">
            <h2>文章内容</h2>
            <textarea  id="" cols="30" rows="10" v-model="blog.content"></textarea>
            <h2>文章类型</h2>
            <select v-model="blog.type">
                <option v-for="type in types">{{type}}</option>
            </select>    
            <h2>作者</h2>
            <select v-model="blog.author">
                <option v-for="au in authors">{{au}}</option>
            </select>   
            <br>
            <button class="btn-primary" id="btn" @click.prevent="post">提交</button>
        </form>
            <hr>
            <div id="show" v-show="this.submit">
             <h2>文章标题</h2>
            {{blog.title}}  
            <h2>文章内容</h2>
            {{blog.content}}  
            <h2>文章类型</h2>
            {{blog.type}}  
            <h2>作者</h2>
            {{blog.author}}  
           </div>




    </div>
    
</template>


<script>
 
export default {
    name:'AddBlog',
    data(){
        return {
            submit:"",
            blog:{
                title:"",content:"",type:"",author:""
            },
            types:["nodejs","vuejs","html","css"],authors:["Yukinosita","Hakayamaza","Bakakana"],submit:false 
        }
    },
    methods:{
        post:function(){
            //发送信息
            // var url='https://jsonplaceholder.typicode.com/posts'
            var documentName='/posts.json' //自定义
            //数据库会自动创建这个文件
            var dburl='https://blogdb-cee87.firebaseio.com/'+documentName; //firebase数据库
          
            this.$http.post(dburl,this.blog).then((data)=>{
                
                this.submit=true;
                        if(this.submit)
                            alert("提交成功");
                        else
                        {      
                            alert("提交失败");
                        }
            });
   

        }
    }
}
</script>


<style scoped>
h2{
    font-size: 15px; 
  
    color:black;
}
#btn
{
    position: relative;
    top:10px;
     
}
#addblog
{
    vertical-align: center;
    margin:0 auto;
    padding:10px 10px;
    
}
#addblog *{
    box-sizing: border-box;
}
#addblog{
    margin:20 auto;
    max-width: 600px;
    padding: 20px;
}
label
{
    display: block;
    margin:20px 0 10px;
}
input[type="text"],textarea,select{
    display: block;
    width:100%;
    padding:8px;
}
#show{
    background:#eee;
    border:1px solid black;
    border-radius: 4px;
}
</style>
