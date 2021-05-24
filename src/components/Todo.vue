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

  export default{
    data: function() {
      return{
        todos: [],
        myText: ''
      }
    },
    created: function(){
      axios.get('http://localhost:3000/todo')
      .then(result => {
        this.todos = result.data
        // alert(JSON.stringify(result.data))
        console.log("rendering")
      })
    },
    methods: {
      add: function(){
        this.refreshList()
        let newTodo = { deskripsi: this.myText }
        axios.post('http://localhost:3000/todo', newTodo)
        .then(result => {
          console.log(result)
          // this.todos = result.data
          this.todos.push({ deskripsi: result.data.deskripsi })
          console.log("post...")
        })
        this.myText = ""
      },
      del: function(id){
        console.log(id)
        axios.delete(`http://localhost:3000/todo/${id}`)
        // this.todos = this.todos.filter(todo => todo._id !== id)
        let idx = this.todos.findIndex(i => i._id === id)
        this.todos.splice(idx, 1)
        console.log(idx)
      },
      refreshList: async function(){
        await axios.get('http://localhost:3000/todo')
        .then(result => {
          this.todos = result.data
        })
      }
    }
  }
</script>
