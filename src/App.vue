<template>
  <div id="app">
    <div id="nav">
     <router-view/>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',

  components:{


  },
  computed:{
    isLogged: function (){
      return (this.$store.getters.isLogged)
    }
  },
  methods:{
    logout: function (){
      this.$store.dispatch('logout')
      .then(() => {
        this.$router.push('/login')
      })
    }
  }
}
</script>

<style>
body, html {
  background:#CDCBD7;
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 100vh;
}
</style>
