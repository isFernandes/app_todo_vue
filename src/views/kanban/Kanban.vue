<template>
  <div class="container-board">
    <div class="columns">
      <div id="todo" class="column col-4">
        <div class="panel">
          <div class="panel-header">
            <div class="forDarkTheme panel-title">A fazer</div>
          </div>
          <div class="panel-body">
            <Todo
              v-for="todo in uncheckeds"
              :key="todo.id"
              @toogle="toggleTodo"
              @remove="removeTodo"
              :todo="todo"
            />
          </div>
          <div class="panel-footer">
            <button
              v-if="uncheckeds.length > 0"
              @click="checkAllTodo"
              class="text-success btn btn-link float-right"
            >Concluir tudo</button>
          </div>
        </div>
      </div>
      <div id="done" class="column col-4">
        <div class="panel">
          <div class="panel-header">
            <div class="forDarkTheme panel-title">Feito</div>
          </div>
          <div class="panel-body">
            <Todo
              v-for="todo in checkeds"
              :key="todo.id"
              @toogle="toggleTodo"
              @remove="removeTodo"
              :todo="todo"
            />
          </div>
          <div class="panel-footer">
            <button v-if="checkeds.length > 0" @click="removeAllTodo" class="btn-link btn text-error">Remover tudo</button>
            <button v-if="checkeds.length > 0" @click="uncheckAllTodo" class="text-success btn btn-link float-right">Desmarcar tudo</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Todo from "@/components/List";
import { mapGetters, mapActions } from "vuex";
export default {
  components: { Todo },
  computed: {
    ...mapGetters(["uncheckeds", "checkeds"]),
  },
  methods: {
    ...mapActions([
      "removeTodo",
      "toggleTodo",
      "checkAllTodo",
      "uncheckAllTodo",
      "removeAllTodo",
    ]),
  },
};
</script>

<style scoped>
.container-board {
  height: calc(100vh - 100px);
  padding: 10px;
}

.columns {
  height: 100%;
}

.columns .column .panel {
  height: 100%;
  border: 0;
  box-shadow: 0 0.25rem 1rem rgba(98, 108, 124, 0.15);
}

.forDarkTheme{
  color: rgb(240, 238, 238);
}

/* Espaçamento dos PANELS */
#todo {
  margin: 0 0 0 10%;
}

#done {
  margin: 0 0 0 15%;
}
</style>