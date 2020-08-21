<template>
  <div class="tile flex-centered" :class="{checked: todo.checked}">
    <div class="tile-icon">
      <i class="icon" :class="todo.checked ? 'icon-check' : 'icon-time'"></i>
    </div>
    <div class="tile-content">
      <div class="tile-subtitle">{{todo.description}}</div>
    </div>
    <div class="tile-action">
      <button @click="$emit('toogle', todo)" class="btn btn-link">
        <span v-if="todo.checked">Desmarcar</span>
        <span v-else>Concluido</span>
      </button>
      <button class="btn btn-link">
        <span @click="$emit('remove', todo)" class="text-error">Remover</span>
      </button>
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
  color: lightgray;
}
</style>
