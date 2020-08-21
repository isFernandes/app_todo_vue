<template>
  <div id="app">
    <div class="container grid-xs py-2">
      <img class="img-responsive logo" alt="Vue logo" src="./assets/task.png" />
      <form @submit.prevent="addTodo(todo)" class="forms">
        <div class="input-group">
          <input type="text" v-model="todo.description" class="form-input" placeholder="Nova tarefa" />
          <button class="btn btn-primary input-group-btn">Adicionar</button>
        </div>
      </form>
      <Todo v-for="t in todos" :key="t.id" @toogle="toogleTodo" @remove="removeTodo" :todo="t" />
    </div>
  </div>
</template>

<script>
//
import Todo from "./components/List";
export default {
  name: "App",
  // setando components
  components: { Todo },
  data() {
    return { todos: [], todo: { checked: false } };
  },
  methods: {
    addTodo(todo) {
      todo.id = Date.now();
      this.todos.push(todo);

      // Passando esse obj todo fica clean, e salva novos dados
      this.todo = { checked: false };
    },
    toogleTodo(todo) {
      const index = this.todos.findIndex((item) => item.id === todo.id);
      if (index > -1) {
        const checked = !this.todos[index].checked;
        this.$set(this.todos, index, { ...this.todos[index], checked });
      }
    },
    removeTodo(todo) {
      const index = this.todos.findIndex(item => item.id === todo.id);
      if(index > -1){
        this.$delete(this.todos, index);
      }
    },
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.logo {
  max-width: 150px;
  margin: 0 auto;
}

.forms {
  margin: 15px;
}
</style>
