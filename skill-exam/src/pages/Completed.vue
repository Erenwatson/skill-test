<script setup>
import {useTaskData} from '@/stores/stores.js'
import { RouterLink } from 'vue-router'
const {lists, completeTask, completed} = useTaskData()
console.log(':::completed', completed)


</script>
<template>
  <div class="box-container">
    <div class="task-container">
      <div class="_logo">
        <img src="../assets/VIPTutorlogo.png" alt="">
      </div>
      <div class="task-list-container">
        <div class="button-container">
          <button class="all-task-btn">
            <router-link :to="'/'">All Tasks</router-link>
          </button>
        </div>
        <div class="show-task">
          <div class="task-lists" v-for="list in completed" :key="list.id">
            <div class="__list">
              <p :class="{'_done' : list.status == 'completed'}">Title: {{ list.taskTitle }}</p>
              <p :class="{'_completed' : list.status == 'completed', '_pending': list.status == 'pending'}">{{ list.status }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <div class="complete-task-container">
    <div class="complete-task-box-transparent">
      <div class="btn-container">
        <button class="all-task-btn">
          <router-link :to="'/'">All Tasks</router-link>
        </button>
      </div>
      <div class="task-lists" v-for="list in completed" :key="list.id">
        <div class="__list">
          <p :class="{'_done' : list.status == 'completed'}">Title: {{ list.taskTitle }}</p>
          <p :class="{'_completed' : list.status == 'completed', '_pending': list.status == 'pending'}">{{ list.status }}</p>
        </div>
      </div>
    </div>
  </div> -->
</template>


<style lang="sass" scoped>
.box-container
  height: 100vh
  width: 100%
  display: flex
  justify-content: center
  align-items: center
  .task-container
    background-color: white
    display: flex
    justify-content: space-between
    align-items: center
    border-radius: 1rem
    width: 100%
    padding: 4rem 9rem
    margin: 5rem
    ._logo
      height: 45rem
      max-height: 45rem
      img
        width: 20rem
        height: 5rem
    .task-list-container
      width: 43rem
      .button-container
        padding: 1rem
        display: flex
        gap: 1rem
        margin-bottom: 1rem
        button
          border: none
          border-radius: 1rem
          padding: 1rem
          width: 10rem
          font-size: 1.5rem
      .add-task
        padding: 1rem
        display: flex
        justify-content: center
        align-items: center
        flex-direction: column
        gap: 1rem
        border: 2px solid black
        border-radius: 1rem
        & input[type = 'text']
          height: 2rem
          width: 100%
        & button
          padding: 1rem
          border-radius: 1rem
          border: none
          width: 10rem
      .show-task
        border: 2px solid black
        border-radius: 1rem
        display: flex
        justify-content: center
        align-items: center
        flex-direction: column
        gap: 1rem
        width: 100%auto
        padding: 6rem 1rem 1rem 1rem
        height: 45rem
        overflow: hidden auto
        .task-lists
          border: 1px solid black
          display: flex
          justify-content: center
          align-items: center
          gap: 1rem
          padding: 1rem
          background-color: white
          padding: 1rem
          width: 95%
          border-radius: 1rem
          ._completed
            color: green      
          ._pending
            color: red
          ._done
            text-decoration: line-through
            font-size: 1.5rem
          .__list
            display: flex
            gap: 0.5rem
            width: 100%
            flex-direction: column
            .mark-as-done
              padding: 0.5rem
              border-radius: 1rem
              background-color: #69A8EA
              font-size: 1rem
              margin: 0 1rem
</style>