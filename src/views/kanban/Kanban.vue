<template>
  <div class="container-board">
    <div class="columns">
      <div class="column col-4">
        <div class="panel">
          <div class="panel-header">
            <div class="panel-title">A fazer</div>
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
            <!-- buttons or inputs -->
          </div>
        </div>
      </div>
      <div class="column col-4">
        <div class="panel">
          <div class="panel-header">
            <div class="panel-title">Feito</div>
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
            <!-- buttons or inputs -->
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
  methods:{
    ...mapActions(["removeTodo", "toggleTodo"])
  }
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
  box-shadow: 0 0.25rem 1rem rgba(48, 55, 66, 0.15);
}
</style>