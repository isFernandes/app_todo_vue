<template>
  <div class="tile" :class="{checked: todo.checked}">
    <div class="tile-icon">
      <i class="forDarkTheme icon icon-2x" :class="todo.checked ? 'icon-check' : 'icon-time'"></i>
    </div>
    <div class="tile-content">
      <div class="forDarkTheme tile-subtitle">{{todo.description}}</div>
      <div>
        <button @click="$emit('toogle', todo)" class="text-success btn btn-link">
          <span v-if="todo.checked">Desmarcar</span>
          <span v-else>Concluido</span>
        </button>
        <button class="btn btn-link">
          <span @click="$emit('remove', todo)" class="text-error">Remover</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    todo: { type: Object, required: true },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.checked {
  text-decoration: line-through;
  color: rgba(63, 56, 56, 0.527);
  opacity: 0.7;
}

.tile {
  margin-top: 10px;
  padding: 1rem;
  box-shadow: 0 0.25rem 1rem rgba(98, 108, 124, 0.15);
}

.forDarkTheme{
  color: rgb(240, 238, 238);
}
</style>
