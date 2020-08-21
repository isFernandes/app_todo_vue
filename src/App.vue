<template>
  <div id="app">
    <div class="container grid-lg">
      <header class="navbar">
        <section class="navbar-section">
          <router-link to="/" class="btn btn-link">Home</router-link>
          <router-link to="/kanban" class="btn btn-link">Kanban</router-link>
        </section>
        <section class="navbar-center">
          <img class="img-responsive imgStyle" src="@/assets/To-Do.png" />
        </section>
        <section class="navbar-section">
          <a target="about_blank" href="https://github.com/isFernandes/app_todo_vue" class="btn btn-link">GitHub</a>
          <a target="about_blank" href="https://www.linkedin.com/in/iago-fernandes/" class="btn btn-link">LinkedIn</a>
        </section>
      </header>
      <router-view class="pt-2"/>
    </div>
  </div>
</template>

<style scoped>
#app {
  margin-top: 15px;
}

.imgStyle {
  width: 50px;
  height: 50px;
  margin: 0 auto;
}
</style>
