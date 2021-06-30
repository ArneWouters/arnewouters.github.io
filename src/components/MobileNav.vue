<template>
  <section class="nav">
    <div class="nav-menu">
      <ul class="nav-menu-list">
        <li class="nav-list-item"><router-link to="/" class="routerlink">About</router-link></li>
        <li class="nav-list-item">Contact Me</li>
        <li class="nav-list-item">PGP Key</li>
        <li class="nav-list-item"><router-link to="/github" class="routerlink"><github class="icon"/></router-link></li>
        <li class="nav-list-item"><linkedin class="icon"/></li>
        <li class="nav-list-item"><twitter class="icon"/></li>
      </ul>
    </div>
  </section>
</template>

<script>
import { Linkedin, Github, Twitter } from 'mdue';

export default {
  components: {
    Linkedin,
    Github,
    Twitter,
  },
};
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  .nav-menu {
    color: #222;
    width: 100%
  }

  .nav-menu-list {
    list-style: none;
    padding: 0;
    display: flex;
    margin: 0;

    .nav-list-item {
      padding: 10px 0;
      text-align: center;
      width: 50%;

      .icon {
        font-size: 20px;
      }
    }
  }
}

.routerlink {
  color: inherit;
  text-decoration: none;
}
</style>
