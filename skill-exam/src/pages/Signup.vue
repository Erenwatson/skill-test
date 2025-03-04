<script setup>
import {ref} from 'vue'
const menuList = ref([
  {
    name: 'Personal',
    hasButton: true,
    description: '<p>Use HYPSMOC tutors and apps for your own need.</p>',
    image: 'profile.svg',
    class: '_personal'
  },
  {
    name: 'Professional',
    hasButton: true,
    description: '<p>If you are an independent professional, you can use HYPSMOC tutors and apps for your own services.</p>',
    image: 'suitcase.svg',
    class: '_professional'
  },
  {
    name: 'Business',
    hasButton: true,
    description: '<p>If you are an education business, you can use HYPSMOC tutors and apps for your own services.</p><br><p>Enhance your online visibility with dedicated business profile.</p><br><p>Give your team access to tutors and apps.</p>',
    image: 'qrcode.svg',
    class: '_business'
  },
  {
    name: 'Tutor',
    hasButton: true,
    description: '<p>If you are a HYSMOC tutor, you can monetize your expertise and spare time.<pp>',
    image: 'medal.svg',
    class: '_tutor'
  },
])


</script>

<template>
  <div class="box-container">
    <div class="box">
      <div class="logo-container">
        <p class="sentence">To begin enjoying our services, please take a moment to create and set up your account.</p>
        <p class="question">Already have an account?</p>
      </div>
      <div class="boxes" :class="menu.class" v-for="menu in menuList" :key="menu.name">
        <div class="logo">
          <img class="__image" src="../assets/suitcase.svg" alt="profile">
        </div>
        <h2 class="__name">{{ menu.name }}</h2>
        <button class="signup-btn">Free Signup</button>
        <div class="__paragraph" v-html="menu.description"></div>
      </div>
    </div>
  </div>
</template>


<style lang="sass" scoped>
.box-container
  width: 95%
  height: 100%
  display: flex
  justify-content: center
  align-items: center
  background-color: inherit
  .box  
    width: 100%
    margin: 1rem
    background-color: #fefeff
    display: flex
    justify-content: center
    gap: 0.5rem
    padding: 1rem
    border-radius: 1rem
    .logo-container
      padding: 1rem
      margin: 0.5rem
      display: flex
      justify-content: center
      align-items: center
      flex-direction: column
      text-wrap: wrap
      width: 20rem
      gap: 1rem
      & p
        width: 100%
    ._personal
      background-color: #E7E9EB
      background-image: url('../assets/viptutor-leaning-vector.png')
      background-size: cover
      background-position: center
      background-repeat: no-repeat
      &:hover
        background-color: #60A5FA
        transition: all ease-in 0.2s
        cursor: pointer
      .signup-btn
        background-color: #6680B3
    ._professional
      background-color: #FEF9C3
      background-image: url('../assets/page-human-resources2.png')
      background-size: cover
      background-position: center
      background-repeat: no-repeat
      &:hover
        background-color: #FACC15
        transition: all ease-in 0.2s
        cursor: pointer
      .signup-btn
        background-color: #F2D066
    ._business
      background-color: #DCFCE7
      background-image: url('../assets/page-digital-marketing.png')
      background-size: cover
      background-position: center
      background-repeat: no-repeat
      &:hover
        background-color: #4ADE80
        transition: all ease-in 0.2s
        cursor: pointer
      .signup-btn
        background-color: #76DA9A
    ._tutor
      background-color: #FFEDD5
      background-image: url('../assets/viptutor-leaning-vector.png')
      background-size: cover
      background-position: center
      background-repeat: no-repeat
      &:hover
        background-color: #EA580C
        transition: all ease-in 0.2s
        cursor: pointer
      .signup-btn
        background-color: #FAA86E
    .boxes
      padding: 1rem
      margin: 0.5rem
      display: flex
      justify-content: center
      align-items: center
      flex-direction: column
      border-radius: 1rem
      width: 30rem
      gap: 1rem
      .logo
        border-radius: 50%
        padding: 1rem
        background-color: #fefeff
        position: relative
        .__image
          width: 3rem
          height: 3rem
      .signup-btn
        padding: 1rem
        border-radius: 2rem
        width: 100%
        cursor: pointer
        color: #fefeff
        border: none
      .__paragraph
        height: 15rem
        line-height: 1.5
        padding: 0.5rem 0.5rem 0 0.5rem

</style>