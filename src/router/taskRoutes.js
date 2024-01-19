export default [
  {
    path: '/addTask',
    name: 'AddTask',
    component: () => import('../components/AddTask.vue'),
  },
  {
    path: '/taskList',
    name: 'TaskList',
    component: () => import('../components/TaskList.vue'),
  },
]
