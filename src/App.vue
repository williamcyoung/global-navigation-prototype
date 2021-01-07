<template>
  <div id="app">
    <TopNav/>
    <!-- <SideBar/> -->
    <router-view/>
  </div>
</template>

<script>
import TopNav from "./components/layout/TopNav";

// import SideBar from "./components/layout/SideBar";

export default {
  name: "app",
  components: {
    TopNav
    // SideBar
  }
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700");
</style>
