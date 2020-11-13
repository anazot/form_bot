<template>
  <body class="body">
    <form id="main" @submit.prevent="data_form">
      <div class="main_name">
      <label>Название кнопки</label>
      <input class="name_button" v-model="name_button">
      <label>Название</label>
      <input class="name" v-model="name">
      <label>Связь</label>
        <multiselect v-model="selected_links"
                     tag-placeholder="Введите"
                     label="name"
                     track-by="code"
                     :options="links"
                     :multiple="true"
                     :taggable="true"
                     @tag="addTag">
        </multiselect>
        <div>
        <button id="button" @click="data_form">ОК</button></div>
      </div>
      <div class="main_text">
      <label>Текст</label>
      <textarea class="text" v-model="text"></textarea>
      </div>

    </form>
  </body>
</template>

<script>
import Multiselect from 'vue-multiselect'
import axios from 'axios'
export default {
  components: { Multiselect },
  name: "Main",
  data() {
    return {
      selected_links:[],
      links: [
        {
          code: 'n1',
          name: 'name1',
        },
        {
          code: 'n2',
          name: 'name2',
        },
        {
          code: 'n3',
          name: 'name3',
        },
        {
          code: 'n4',
          name: 'name4',
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
    },
    addTag(newTag){
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000)),
      }
      this.selected_links.push(tag);
    }
  }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css">

</style>
<style>
.multiselect__tags{
  border-radius: 0;
}
.multiselect__content-wrapper{
  border-radius: 0;
}
.multiselect__option:hover{
  background-color:#4633A7;
  color: white;
}
.multiselect__option--highlight{
  background-color:#4633A7;
  color: white;
}
.multiselect__option--highlight:after{
  background-color:#4633A7;
  color: white;
}
.multiselect__tag{
  background: #4633A7;
}
.multiselect__spinner:before{
  border-color:#4633A7 ;
}

/*
.multiselect__option:hover{
  background-color: #4633A7 ;
}*/
.body{
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
  width: 70vw;
  height: 70vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.main_name{
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding-right: 2vw;
}
.main_text{
  display: flex;
  flex-direction: column;
  padding-left: 2vw;
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
  height: 60vh;
  width: 30vw;
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
  width: 20vw;
  height: 7vh;
  top:73%;
  background: #4633A7;
  border: none;
  color: #FFFFFF;
  margin-top: 10vh;
}
#button:hover{
}
#button:focus{
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