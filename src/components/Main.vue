<template>
  <body>
    <form id="main" @submit.prevent="data_form">
      <div class="main_name">
      <label>Название кнопки</label>
      <input class="name_button" v-model="name_button">
      <label>Название</label>
      <input class="name" v-model="name">
      <label>Связь</label>
      <select class="link" v-model="selected_link">
        <option value="" >Выбрать</option>
        <option v-for="(links,i) in links" :key="i">{{links.fields}}</option>
      </select>
      </div>
      <div class="main_text">
      <label>Текст</label>
      <textarea class="text" v-model="text"></textarea>
      </div>
      <button id="button" type="submit"></button>
      <p>{{selected_link}}</p>
    </form>
  </body>
</template>

<script>
import axios from 'axios'
export default {
  name: "Main",
  data() {
    return {
      links: [
        {
          name: 'name1',
          active: true,
          fields:[
            {
              id: 0,
              name: 'name1.1',
              value: 'name1.1'
            },
            {
              id: 1,
              name: 'name1.2',
              value: 'name1.2'
            },

          ]
        },
        {
          name: 'name2',
          active: true,
          fields: [
            {
              id: 0,
              name: 'name2.1',
              value: 'name2.1'
            },
            {
              id: 1,
              name: 'name2.2',
              value: 'name2.2',
            }
          ]
        },
      ],
      selected_link: "",
      text: "",
      name: "",
      name_button: "",
    }
  },
  mounted() {
    this.load_link();

  },
  methods: {
    load_link() {
      axios.get('a').then(resp => {
        this.links = resp.data
      })
    },
    data_form(){
      axios.post('a', {
        name: this.name,
        name_button: this.name_button,
        link: this.link,
        text: this.text,
      }).then(response => {
        this.response = JSON.stringify(response, null, 2)
      })
    }
  }
}
</script>

<style scoped>
body{
  font-family: 'OpenSans-Light';
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 20px;
}
label{
  text-align: center;
}
#main{
  background: linear-gradient(0deg,#A74187 5%, #4633A7);
  box-shadow: 0 0 10px rgb(0, 0, 0);
  width: 60%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.main_name{
  display: flex;
  flex-direction: column;
  padding: 20px;
}
.main_text{
  display: flex;
  flex-direction: column;
  padding: 20px;
}
input{
  font-family: 'OpenSans-Light';
  color: #FFFFFF;
  font-size: 1.1vw;
  top:32%;
  width: 25vw;
  height: 5vh;
  background: none;
  border: solid 0.5px #FFFFFF;
}
input:focus{
  outline:none;
  box-shadow: 0 0 3px rgba(255, 255, 255) ;
}
textarea:focus{
  outline:none;
  box-shadow: 0 0 3px rgb(70, 51, 167);
}
.text{
  height: 40vh;
  width: 53vh;
  resize: none;
  font-family: 'OpenSans-Light';
  color: #FFFFFF;
  font-size: 1.1vw;
  background: none;
  border: solid 0.5px #FFFFFF;
}
.link{
  overflow-y: auto;
  font-family: 'OpenSans-Light';
  color: #949494;
  font-size: 1.1vw;
  top:32%;
  width: 25.5vw;
  height: 5vh;
  background: none;
  border: solid 0.5px #FFFFFF;
}
#button{
  font-family: 'OpenSans-Light';
  font-size: 1.1vw;
  width: 20%;
  height: 7vh;
  position: absolute;
  top:73%;
  background: #4633A7;
  border: none;
  color: #FFFFFF;
  margin: 10px;
}
#button:hover{
}
button:focus{
  outline: none;
  box-shadow:  0 0 7px #FFFFFF;
}
::-webkit-scrollbar{
  width: 5px;
}
::-webkit-scrollbar-thumb{
  background: #FFFFFF;
}
</style>