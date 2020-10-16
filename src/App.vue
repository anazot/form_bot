<template>
  <div id="app">
    <HelloWorld></HelloWorld>
    <form>
      <label>Логин</label>
      <input required type="text" v-model="login">
      <label>Пароль</label>
      <input required type="text" v-model="password">
      <button>Войти</button>
    </form>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
export default {
  name: 'App',
  data(){
    return{
      login: "",
      password: "",
    }

  },
  computed:{

  },
  components:{
    HelloWorld,
  },
  methods:{
    signup: function (){
      let login = this.login;
      let password = this.password;
      this.$store.dispatch('signup', {login, password}).then(() => {
        this.$router.push('/')
        .catch(error => {
          console.log(error)
        })
      })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
