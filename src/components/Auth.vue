<template>
  <div>
    <h1>Authenticate</h1>
    <div>
      <label>Username: </label>
      <input type="text" v-model="username"/>
    </div>
    <br />
    <div>
      <label>Password: </label>
      <input type="password" v-model="password"/>
    </div>
    <br />
    <button @click="auth">Log In</button> &nbsp;
    <button @click="del">Log Out</button>
  </div>
</template>

<script>
  import axios from 'axios'

  export default{
    data: function() {
      return{
        username: '',
        password: ''
      }
    },
    created: function(){
      this.username = localStorage.getItem('usr')
      this.password = localStorage.getItem('pwd')
    },
    methods: {
      auth: function(){
        localStorage.setItem('usr', this.username)
        localStorage.setItem('pwd', this.password)
      },
      del: function(){
        localStorage.removeItem('usr')
        localStorage.removeItem('pwd')
        this.username = ''
        this.password = ''
      }
    }
  }
</script>
