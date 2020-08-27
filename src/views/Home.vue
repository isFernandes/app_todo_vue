<template>
  <div class="containerStyle container grid-xs py-2">
    <img class="img-responsive logo" alt="Vue logo" src="@/assets/task.png" />
    <form @submit.prevent="add(todo)" class="forms">
      <div class="input-group">
        <input type="text" v-model="todo.description" class="form-input" placeholder="Nova tarefa" />
        <button class="btn btn-primary input-group-btn" :class="{loading}">Adicionar</button>
      </div>
    </form>
    <Todo v-for="t in todos" :key="t.id" @toogle="toggleTodo" @remove="removeTodo" :todo="t" />
  </div>
</template>


<script>
//
import Todo from "@/components/List";
import { mapState, mapActions } from "vuex";
export default {
  name: "App",
  // setando components
  components: { Todo },
  data() {
    return { todo: { description: "", checked: false } };
  },
  computed: {
    // Ele mapeia as variaveis da store, simplificando uso
    ...mapState(["todos", "loading"]),
  },
  methods: {

    ...mapActions(["addTodo","toggleTodo","removeTodo"]),

    async add(todo){
      // Verificando se campo não esta vazio
      if (todo.description === "") {
         alert("Insira algum conteudo na sua tarefa!");
       } else {
         // Utilizando função addTodo da Store
          await this.addTodo(todo);   
         this.todo = { checked: false };
       } 
    },
  },
};
</script>

<style scoped>
.logo {
  max-width: 150px;
  margin: 0 auto;
}

.forms {
  margin: 20px;
}

.containerStyle {
  margin-top: 10%;
}
</style>
