<template>
  <body class="body">
    <form id="main" @submit.prevent="data_form">
      <div class="menu">
        <div class="menu_list">
          <div v-for="value in links"  :key="value.code">
            <button class="menu_button" @click="edit(value.name)" :value="value.name_button">{{value.name_button}}</button>
          </div>
        </div>
        <div class="add">
          <div id="add">
          <input placeholder="Введите название" v-model="add_name_button"><button class="button" @click="add_link">Добавить</button>
          </div>
        </div>
      </div>
      <div class="main_name">
      <label></label>
      <input class="name_button" v-model="name_button" placeholder="Название кнопки">
      <label></label>
      <input class="name" v-model="name" placeholder="Название">
        <label></label>
        <multiselect v-model="selected_links"
                     tag-placeholder="Введите"
                     label="name"
                     track-by="code"
                     :options="links"
                     :multiple="true"
                     :taggable="true"
                     @tag="addTag">
        </multiselect>
      <div class="main_text">
      <label></label>
      <textarea class="text" v-model="text" placeholder="Текст"></textarea>
      </div>
      <div>
        <button class="button" @click="save">ОК</button></div>
      </div>
      <button id="save" class="button" type="submit" @click="data_form">Сохранить</button>
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
      val:[],
      add_name_button: '',
      selected_links:[],
      button: this.button,
      current_code: '',
      links: [
        {
          code: 'n1',
          name_button:'name_button1',
          name: 'Название',
          text: 'text1',
          link:[]
        },
        {
          code: 'n2',
          name_button:'name_button2',
          name: 'name2',
          text: 'text2',
          link:[]
        },
        {
          code: 'n3',
          name_button:'name_button3',
          name: 'name3',
          text: 'text3',
          link:[]
        },
        {
          code: 'n4',
          name_button:'name_button4',
          name: 'name4',
          text: 'text4',
          link:[]
        },
        {
          code: 'n5',
          name_button:'name_button5',
          name: 'name5',
          text: 'text5',
          link:[]
        },
        {
          code: 'n6',
          name_button:'name_button6',
          name: 'name6',
          text: 'text6',
          link:[]
        },
        {
          code: 'n7',
          name_button:'name_button7',
          name: 'name7',
          text: 'text7',
          link:[]
        },
        {
          code: 'n8',
          name_button:'name_button8',
          name: 'name8',
          text: 'text8',
          link:[]
        },
      ],
      new_links:{
        code: '',
        name_button:'',
        name: '',
        text: ''
      },
      selected_link: "",
      text: "",
      name: "",
      name_button: "",
    }
  },
  created() {
    this.load_link();

  },
  methods: {
    values(){

    },
    add_link(){
      this.links.push(
          {
            name_button: this.add_name_button,
            code: this.add_name_button.substring(0, 2) + Math.floor((Math.random() * 10000000)),
            name: '',
            text: ''
          }
      );
      this.add_name_button = '';
    },
    edit(uu){
      for (let i=0; i<this.links.length; i++){
        if ( uu === this.links[i].name){
          this.name_button=this.links[i].name_button;
          this.name=this.links[i].name;
          this.text = this.links[i].text;
          this.current_code = this.links[i].code;
        }
      }
    },
    load_link() {
      axios.get('a').then(resp => {
        this.links = resp.data;
      })
    },
    save(){
      for (let i=0; i<this.links.length; i++) {
        if (this.current_code === this.links[i].code) {
          this.links[i].name = this.name;
          this.links[i].name_button = this.name_button;
          this.links[i].text = this.text;
          this.current_code = '';
          this.name = '';
          this.name_button = '';
          this.text = '';
        }
      }
    },
    data_form(){
      let json=JSON.stringify(this.links);
      let post_data={json_data: json}
      axios.post('a', post_data)
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
.multiselect__option{
}
.multiselect__input{
  margin: 0;
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
.multiselect{
  margin-left: 20%;
  background: white;
  width: 25.5vw;
}
.body{
  font-family: 'OpenSans-Light';
  display: flex;
  color: white;
  font-size: 20px;
}
.menu_button{
  padding: 0;
  height: 7vh;
  width: 98%;
  background: #FFFFFF;
  border: none;
  margin: 2px;
  opacity: 85%;
}
.menu_button:hover{
  opacity: 100%;
}
.menu_list{
  margin-left: 10%;
  border: solid 1px #e7e6e6;
  display: flex;
  flex-direction: column;
  justify-content: left;
  text-align: left;
  height: 100%;
  width: 90%;
  overflow-y: auto;
}
.add .button{
  margin: 0;
  height: 33px;
}
.add input{
  margin-left: 11%;
  border: none;
  height: 31px;
  width: 70vw;
}
#add{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  text-align: left;
  margin-top: 10px;
}
.menu{
  height: 60vh;
  width: 90%;
}
label{
  text-align: left;
  margin-top: 5px;
  margin-bottom: 3px;
}
#main{
  background: linear-gradient(0deg,#A74187 5%, #4633A7);
  box-shadow: 0 0 10px rgb(0, 0, 0);
  width: 80vw;
  height: 90vh;
  display: grid;
  grid-template-columns: 50% 50%;
  text-align: center;
}
.main_name{
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

}
.main_text{
  display: flex;
  flex-direction: column;
  justify-content: left;
  text-align: left;
}
input{
  margin-left: 20%;
  font-family: 'OpenSans-Light';
  color: black;
  font-size: 1.1vw;
  top:32%;
  width: 25vw;
  height: 4vh;
  background: white;
  opacity: 85%;
  border: solid 2px #FFFFFF;
}
input:focus{
  outline:none;
  box-shadow: 0 0 3px rgba(255, 255, 255) ;
}
textarea:focus{
  outline:none;
  box-shadow: 0 0 3px rgb(70, 51, 167);
}
textarea::-webkit-input-placeholder{
  color: #a7a7a7;
  padding-left: 6px;
}
.text{
  margin-left: 20%;
  height: 20vh;
  width: 25vw;
  resize: none;
  font-family: 'OpenSans-Light';
  color: black;
  font-size: 1.1vw;
  background: white;
  opacity: 85%;
  border: solid 2px #FFFFFF;
}
#save{
  margin-left: 75%;
}
.button{
  font-family: 'OpenSans-Light';
  font-size: 1.1vw;
  width: 20vw;
  height: 7vh;
  top:73%;
  background: #4633A7;
  border: none;
  color: #FFFFFF;
  margin-top: 2vh;
  margin-left: 10%;
}
.button:hover{
  border: solid 2px #4633A7;
  background: rgba(0,0,0,0);
  transition: all 0.05s;
}
.button:focus{
  outline: none;
  box-shadow:  0 0 7px #FFFFFF;
}
::-webkit-scrollbar{
  width: 5px;
}
::-webkit-scrollbar-thumb{
  background: #e7e6e6;
}
</style>