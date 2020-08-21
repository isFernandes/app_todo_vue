<template>
  <div class="containerStyle container grid-xs py-2">
    <img class="img-responsive logo" alt="Vue logo" src="@/assets/task.png" />
    <form @submit.prevent="addTodo(todo)" class="forms">
      <div class="input-group">
        <input type="text" v-model="todo.description" class="form-input" placeholder="Nova tarefa" />
        <button class="btn btn-primary input-group-btn" :class="{loading}">Adicionar</button>
      </div>
    </form>
    <Todo v-for="t in todos" :key="t.id" @toogle="toogleTodo" @remove="removeTodo" :todo="t" />
  </div>
</template>


<script>
//
import Todo from "@/components/List";
import { mapState } from "vuex";
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
    async addTodo(todo) {
      // Verificando se campo não esta vazio
      if (todo.description === "") {
        alert("Insira algum conteudo na sua tarefa!");
      } else {
        // Utilizando função addTodo da Store
        await this.$store.dispatch("addTodo", todo);
        this.todo = { checked: false };
      }
    },

    toogleTodo(todo) {
      this.$store.dispatch("toggleTodo", todo);
    },

    removeTodo(todo) {
      this.$store.dispatch("removeTodo", todo);
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
