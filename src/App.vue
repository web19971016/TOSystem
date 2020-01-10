<template>
  <div id="app">
    <router-view v-wechat-title="`${$route.meta.title} | 宅特工外卖`"></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
  @import 'assets/css/normalize.css';
  @import "assets/css/base.css";
</style>
