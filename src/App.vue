<template>
  <div class="forDarkTheme">
    <div id="app">
      <div class="container grid-lg">
        <header class="navbar">
          <section class="navbar-section">
            <router-link to="/" class="text-success btn btn-link">Home</router-link>
            <router-link to="/kanban" class="text-success btn btn-link">Kanban</router-link>
          </section>
          <section class="navbar-center">
            <img class="img-responsive imgStyle" src="@/assets/To-Do.png" />
          </section>
          <section class="navbar-section">
            <a
              target="about_blank"
              href="https://github.com/isFernandes/app_todo_vue"
              class="text-success btn btn-link"
            >GitHub</a>
            <a
              target="about_blank"
              href="https://www.linkedin.com/in/iago-fernandes/"
              class="text-success btn btn-link"
            >LinkedIn</a>
          </section>
        </header>
        <router-view class="pt-2" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.imgStyle {
  width: 50px;
  height: 50px;
  margin: 0 auto;
}

.forDarkTheme {
  background: #3b4351;
  width: 100%;
  height: 100vh;
  padding: 15px;
}
</style>
