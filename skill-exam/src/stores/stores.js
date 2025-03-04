import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTaskData = defineStore('task_data', {
  state: () => {
    return {
      completed: [],
      pending: [],
      lists: [
          {
            id: 1,
            taskTitle: 'Task Title Number 1',
            status: 'completed'
          },
          {
            id: 2,
            taskTitle: 'Task Title Number 2',
            status: 'pending'
          },    {
            id: 3,
            taskTitle: 'Task Title Number 3',
            status: 'completed'
          },    {
            id: 4,
            taskTitle: 'Task Title Number 4',
            status: 'pending'
          },    {
            id: 5,
            taskTitle: 'Task Title Number 5',
            status: 'completed'
          },    {
            id: 6,
            taskTitle: 'Task Title Number 6',
            status: 'completed'
          },
      ]
    }
  },
  actions: {
    completeTask(){
      const filterComplete = this.lists.filter(list => list.status == 'completed')
      this.completed = filterComplete
    }
  }
})