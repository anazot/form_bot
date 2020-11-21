
<template>
  <body>
  <div id="app" >
    <form @submit.prevent = "signup">
      <h1 class="auth" id="enter">Авторизация</h1>
      <input class="auth" id="login" required type="text" v-model="login" name="login" placeholder="Логин">
      <input class="auth" id="password" required type="password" v-model="password" name="password" placeholder="Пароль">
      <button id="button_login" type="submit">Войти</button>
      <label class="register" @click="path_register">Зарегистрироваться</label>
    </form>
  </div>
  </body>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      login: "",
      password: "",
      color: '#ADA8A8'
    }

  },
  computed:{

  },
  components:{

  },
  methods:{
    path_register: function(){
      this.$router.push('/register')
    },
    signup: function (){
      let login = this.login;
      let password = this.password;
      this.$store.dispatch('signup', {login, password}).then(() => this.$router.push('/main'))
          .catch(error => {
              console.log(error)
            })
    }
  }
}
</script>
<style>
@font-face {
  font-family: 'OpenSans-Light';
  src: url("../fonts/OpenSans-Light.ttf")
}
body{
  font-family: 'OpenSans-Light';
  display: flex;
  justify-content: center;
  align-items: center;
}

#app {
  background: linear-gradient(0deg,#A74187 5%, #4633A7 );
  box-shadow: 0 0 10px;
  width: 25%;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
form{
  width: 100vw;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#enter{
  position: absolute;
  top: 13%;
  color:#FFFFFF;
  font-family: 'OpenSans-Light';
  font-size: 1.9vw;
  font-weight: lighter !important;

}
#login{
  position: absolute;
  font-family: 'OpenSans-Light';
  color: #CDCBD7;
  font-size: 1.1vw;
  top:32%;
  width: 17vw;
  height: 5vh;
  background: none;
  border: solid 2px #CDCBD7;

}
.register{
  font-size: 0.9vw;
  color: #FFFFFF;
  position: absolute;
  top: 52vh;
  border-bottom: solid 1px;
}
input:focus{
  outline:none;
  box-shadow: 0 0 3px rgba(255, 255, 255) ;
}
#password{
  size: 2px;
  color:#CDCBD7;
  font-family: 'OpenSans-Light';
  position: absolute;
  top:50%;
  width: 17vw;
  height: 5vh;
  background: none;
  border: solid 2px #CDCBD7;
  font-size: 1.1vw;
}
input::-webkit-input-placeholder{
  color: #a7a7a7;
  padding-left: 6px;
}
#button_login{
  font-family: 'OpenSans-Light';
  font-size: 1.1vw;
  width: 10vw;
  height: 7vh;
  position: absolute;
  top:73%;
  background: #4633A7;
  border: none;
  color: #FFFFFF;
}
#button_login:hover{
  border: solid 2px #4633A7;
  background: rgba(0,0,0,0);
  transition: all 0.05s;
}
button:focus{
  outline: none;
  box-shadow: inset 0 0 7px #4633A7;
}
.register:hover{
  color: #4633A7;
  transition: all 0.05s;
}
.auth{
  margin:15px;
}
</style>