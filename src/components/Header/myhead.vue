<template>
    <div id="myhead">
       <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="py-2" href="#">
    </a>
    <router-link :to="{name:'Home'}" class="navbar-brand">   <img src="../../assets/logo.png">博客首页</router-link>
    <ul class="navbar-nav">
        <li><router-link :to="{name:'Scan'}" class="nav-link">浏览博客</router-link></li>
        <li><router-link :to="{name:'Write'}" class="nav-link">写博客</router-link></li>
    </ul>
        </nav>
    </div>
</template>

<script>
export default {
    name:"myhead",
    data(){
        return{
            
        }
    }
}
</script>


 
 <style scoped>
 img{
   height: 45px;
    width: 45px;
    margin:32 auto;
    left: 80%;
 }
 </style>
 
