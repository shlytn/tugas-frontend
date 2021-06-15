<template>
  <div>
    <h1>Berikut ini adalah daftar tugas kita:</h1>
    <ul>
      <li v-for="(item) in todos" v-bind:key="item._id">
        {{ item.deskripsi }} 
        <button @click="del(item._id)">X</button>  
      </li>
    </ul>
    <input v-model="myText" @keyup.enter="add" />
    <button @click="add">Add</button>
  </div>
</template>

<script>
  import axios from 'axios'

  const username = localStorage.getItem('usr')
  const password = localStorage.getItem('pwd')
  const headers = { headers: { username, password } }

  export default{
    data: function() {
      return{
        todos: [],
        myText: ''
      }
    },
    created: function(){
      axios.get('http://localhost:3000/todo', headers)
      .then(result => {
        this.todos = result.data
        console.log("rendering")
      })
    },
    methods: {
      add: function(){
        let newTodo = { deskripsi: this.myText }
        axios.post('http://localhost:3000/todo', newTodo, headers)
        .then(result => {
          console.log(result)
          this.todos.push({ _id: result.data._id, deskripsi: result.data.deskripsi })
        })
        this.myText = ""
      },
      del: function(id){
        console.log(id)
        axios.delete(`http://localhost:3000/todo/${id}`, headers)
        .then(() => {
          let idx = this.todos.findIndex(i => i._id === id)
          this.todos.splice(idx, 1)
          console.log(idx)
        })
      }
    }
  }
</script>
