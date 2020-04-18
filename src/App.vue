<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
  import Header from "./components/Header";
  import "bootswatch/dist/lumen/bootstrap.min.css";

  export default {
    name: 'App',
    components: {Header}
  }
</script>

<style>

</style>
