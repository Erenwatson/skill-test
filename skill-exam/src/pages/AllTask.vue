<script setup>
import {ref} from 'vue'
import {useTaskData} from '@/stores/stores.js'
import { RouterLink } from 'vue-router'

const {lists, completeTask, completed} = useTaskData()

const showAddTask = ref(false)
const addTaskTitle = ref('')

function markAsDone(list){
  lists.find((a) => {
    if(a.id == list.id){
      a.status = 'completed'
    }
  })
}

function addTask(){
  showAddTask.value = true
}

function submitTask(){
  let obj = {
    id: lists.length + 1,
    taskTitle: addTaskTitle.value,
    status: 'pending',
  }
  lists.push(obj)
  addTaskTitle.value = ''
}
</script>


<template>
  <div class="box-container">
    <div class="task-container">
      <div class="_logo">
        <img src="../assets/VIPTutorlogo.png" alt="">
      </div>
      <div class="task-list-container">
        <div class="button-container">
          <button class="all-task-btn" @click="showAddTask = false">
            <router-link :to="'/'">All Tasks</router-link>
          </button>
          <button class="complete-task-btn" @click="completeTask()">
            <router-link :to="'/completed'">Completed</router-link>
          </button>
          <button class="add-task-btn" @click="addTask()">
            Add Task
          </button>
        </div>
        <div class="show-task" v-if="!showAddTask">
          <div class="task-lists" v-for="list in lists" :key="list.id" >
            <div class="__list">
              <p :class="{'_done' : list.status == 'completed'}">Title: {{ list.taskTitle }}</p>
              <p :class="{'_completed' : list.status == 'completed', '_pending': list.status == 'pending'}">{{ list.status }}</p>
              <button class="mark-as-done" @click="markAsDone(list)" v-if="list.status == 'pending'">Mark as Done</button>
            </div>
          </div>
        </div>
        <div class="add-task" v-else>
          <h2>Add Task</h2>
          <input type="text" name="title" id="title" placeholder="Add task" v-model="addTaskTitle">
          <button class="submit-task" @click="submitTask()">Submit</button>
      </div>
      </div>
    </div>
  </div>
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