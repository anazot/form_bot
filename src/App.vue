<template>
  <div id="app">
    <div id="nav">
      <Main></Main>
     <!--<router-view/>-->
    </div>
  </div>
</template>

<script>

import Main from "@/components/Main";
export default {
  name: 'App',

  components:{
    Main

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
