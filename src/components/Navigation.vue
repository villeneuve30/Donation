<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <router-link to="/"><img id="logo" src="@/assets/logo.png"></router-link>

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <router-link class="nav-link" to="/animals">Animals</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/forests">Forests</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/humans">Humans</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/education">Education</router-link>
        </li>
      </ul>
      <router-link class="btn btn-success mr-3" role="button" to="/login">Login</router-link>
      <router-link type="button" class="btn btn-secondary" to="/register">Register</router-link>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'Navigation',
    data () {
      return {

      }
    }
  }
</script>

<style scoped>
  #logo{
    width: 70px;
  }
</style>
