<template>
  <!-- <Todo />
  <router-link>Auth</router-link>
  <router-link></router-link> -->
  <router-view />
</template>

<script setup>
import Todo from './components/Todo.vue'
import User from './components/User'
import Auth from './components/Auth'
import axios from 'axios'

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
</style>
