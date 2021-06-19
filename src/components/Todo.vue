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
  import io from 'socket.io-client'

  const username = localStorage.getItem('usr')
  const password = localStorage.getItem('pwd')
  const headers = { headers: { username, password } }

  export default{
    data: function() {
      return{
        todos: [],
        myText: '',
        socket: io('http://localhost:3000')
      }
    },
    created: function(){
      axios.get('http://localhost:3000/todo', headers)
      .then(result => {
        this.todos = result.data
        console.log("rendering")
        
        this.socket.on('get-data', todo => {
          this.todos.push(todo)
        })
        this.socket.on('data-deleted', id => {
          let idx = this.todos.findIndex(i => i._id === id)
            this.todos.splice(idx, 1)
        })
      })
    },
    methods: {
      add: function(){
        let newTodo = { deskripsi: this.myText }
        axios.post('http://localhost:3000/todo', newTodo, headers)
        .then(result => {
          console.log(result)
          let todo = { _id: result.data._id, deskripsi: result.data.deskripsi }
          this.todos.push(todo)
          this.socket.emit('send-data', todo)
        })
        this.myText = ""
      },
      del: function(id){
        console.log(id)
        axios.delete(`http://localhost:3000/todo/${id}`, headers)
        .then(() => {
          let idx = this.todos.findIndex(i => i._id === id)
          this.todos.splice(idx, 1)
          this.socket.emit('delete-data', id)
          console.log(idx)
        })
      }
    }
  }
</script>
