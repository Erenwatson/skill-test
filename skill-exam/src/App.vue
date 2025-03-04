<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <main>
    <div class="container">
      <RouterView />
    </div>
  </main>
</template>

<style lang="sass" scoped>
.container
  margin: 0 auto
  width: 100%
  height: 100vh
  // padding: 0 1rem 0 2rem
  position: relative
</style>
