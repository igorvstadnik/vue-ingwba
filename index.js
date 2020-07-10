import Vue from 'vue'

import TodoList from 'components/TodoList'

new Vue({
  el: '#app',
  template: '<h1>Todo application</h1>',
  components:{
    TodoList: TodoList  
  }
})