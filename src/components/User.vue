<template>
  <div>
    <h1>Berikut adalah daftar semua pengguna kita: </h1>
    <input v-model="username" />
    <input v-model="password" type="password"/>
    <button @click="add">Add</button>
    <ul>
      <li v-for="(item) in users" v-bind:key="item._id">
        {{ item.username }} 
        <button @click="del(item._id)" :disabled="isDisable">X</button>  
      </li>
    </ul>
  </div>
</template>
<script>
  import axios from 'axios'

  const username = localStorage.getItem('usr')
  const password = localStorage.getItem('pwd')
  const headers = { headers: { username, password } }

  export default {
    data: function(){
      return{
        users: [],
        username: '',
        password: ''
      }
    },
    created: function(){
      axios.get('http://localhost:3000/user', headers)
      .then(result => {
        this.users = result.data
        console.log("rendering")
      })
    },
    methods: {
      add: function(){
        let newUser = { username: this.username, password: this.password }
        axios.post('http://localhost:3000/user', newUser, headers)
        .then(result => {
          console.log(result)
          this.users.push({ _id: result.data._id, username: result.data.username })
        })
      },
      del: function(id){
        axios.delete(`http://localhost:3000/user/${id}`, headers)
        .then(() => {
          let idx = this.users.findIndex(i => i._id === id)
          this.users.splice(idx, 1)
        })
      }
    },
    computed: {
      isDisable: function(){
        console.log(this.users.length)
        if (this.users.length == 1) return true
        else return false
      }
    }
  }
</script>