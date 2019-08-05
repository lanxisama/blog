<template>
  <div id="app">
    <img src="./assets/logo.png">
    <addblog></addblog>
    <showblog></showblog>
  </div>
</template>

<script>

import addblog from './components/AddBlog'
import showblog from './components/showBlog'
export default {
  name: 'App',
  components: {
    "addblog":addblog,"showblog":showblog
  }
}
</script>

 <style scoped>
 img{
   height: 150px;
    width: 150px;
    margin:32 auto;
    position: absolute;
    left: 80%;
 }
 </style>
 