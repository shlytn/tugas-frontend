<template>
  <div>
    <nav>
      <router-link to="/">Auth</router-link> &nbsp;
      <router-link to="/user">User</router-link> &nbsp;
      <router-link to="/todo">Todo</router-link> &nbsp;
    </nav>
    <router-view> </router-view>
  </div> 
</template>

<script setup>
import Todo from './components/Todo.vue'
import User from './components/User.vue'
import Auth from './components/Auth.vue'

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
nav{
  font-size: 20px;
}
</style>
