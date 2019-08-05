<template>
  <div id="app">

    <my-head></my-head>
  <router-view></router-view>
  </div>
</template>

<script>

import myhead from './components/Header/myhead'
export default {
  name: 'App',
  components: {
    "my-head":myhead
  }
}
</script>
