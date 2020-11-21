<template>
  <body>
  <div id="app" >
    <form @submit.prevent = "register">
      <h1 class="auth" id="enter">Регистрация</h1>
      <input class="auth" id="reg_login" required type="text" v-model="reg_login" name="reg_login" placeholder="Логин">
      <input class="auth" id="reg_password" required type="password" v-model="reg_password" name="reg_password" placeholder="Пароль">
      <input class="auth" id="confirm_password" required type="password" v-model="confirm_password" name="confirm_password" placeholder="Повторите пароль">
      <button id="button_login" type="submit">Зарегистрироваться</button>
    </form>
  </div>
  </body>
</template>

<script>
export default {
name: "Register",
  data() {
    return {
      reg_login:"",
      reg_password:"",
      confirm_password:"",
    }
  },
  methods:{
    register: function (){
      let reg_login = this.reg_login;
      let reg_password = this.reg_password;
      let confirm_password = this.confirm_password;
      this.$store.dispatch('register', {reg_login, reg_password, confirm_password}).then(() => this.$router.push('/main'))
          .catch(error => {
            console.log(error)
          })
    }
  }
}
</script>

<style scoped>
#app {
  background: linear-gradient(0deg,#A74187 5%, #4633A7 );
  box-shadow: 0 0 10px;
  width: 25%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
form{
  width: 100vw;
  height: 80vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
input{
  color: #CDCBD7;
  width: 20vw;
  margin-top: 30px;
}
button{
  width: 15vw !important;
  margin-top: 30px;
}

</style>