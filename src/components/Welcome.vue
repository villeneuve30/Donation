<template>
  <div class="jumbotron">
    <h1 class="display-3">Welcome !</h1>
    <p class="lead">This website gathers a large number of associations ready to receive your help</p>
    <hr class="my-4">
    <p>Choose a theme that is important to you !</p>
    <p class="lead">
      <router-link class="btn btn-primary btn-lg" href="#" role="button" to="/how-it-works">Let's go</router-link>
    </p>
  </div>
</template>

<script>

  export default {
    name: 'Welcome',
    data () {
      return {
      }
    }
  }
</script>

<style scoped>
</style>
