<template>
  <div id="login" class="text-center">
    <form class="form-signin">
      <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input type="email" id="inputEmail" class="form-control mb-2" placeholder="Email address" required="" autofocus="">
      <label for="inputPassword" class="sr-only">Password</label>
      <input type="password" id="inputPassword" class="form-control" placeholder="Password" required="">
      <div class="checkbox mb-3 mt-3">
        <label>
          <input type="checkbox" value="remember-me"> Remember me
        </label>
      </div>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
      <p class="mt-5 mb-3 text-muted">© 2020-2021</p>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data () {
      return {
      }
    }
  }
</script>

<style scoped>
  #login{
    margin: 10% 40%;
  }
</style>
