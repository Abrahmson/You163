<template>
  <div>
    <router-view></router-view>
    <FooterGuide />
  </div>
</template>

<script>
import FooterGuide from "./components/FooterGuide/FooterGuide.vue";
export default {
  name: "app",
  components: {
    FooterGuide
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus"></style>
