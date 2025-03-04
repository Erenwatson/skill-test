import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})

export const useTaskData = defineStore('task_data', () => {
  const taskLists = [
    {
      id: 1,
      taskTitle: 'Task Title Number 1',
      isCompleted: false
    },
    {
      id: 2,
      taskTitle: 'Task Title Number 2',
      isCompleted: false
    },    {
      id: 3,
      taskTitle: 'Task Title Number 3',
      isCompleted: false
    },    {
      id: 4,
      taskTitle: 'Task Title Number 4',
      isCompleted: false
    },    {
      id: 5,
      taskTitle: 'Task Title Number 5',
      isCompleted: false
    },    {
      id: 6,
      taskTitle: 'Task Title Number 6',
      isCompleted: false
    },
  ]

  return {taskLists}
})
