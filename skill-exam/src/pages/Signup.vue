<script setup>
import {ref} from 'vue'
const signUp = ref('Sign Up')
</script>

<template>
  <div class="container">
    <h2>{{signUp}}</h2>
  </div>
</template>


<style lang="scss" scoped>
.container{
  border: 1px solid red;
}

</style>