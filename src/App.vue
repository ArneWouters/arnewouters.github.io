<template>
<!--
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
-->
  <div id="app">
    <DesktopNav id="desktop-nav"/>
    <MobileNav id="mobile-nav"/>
    <div class="view-container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import DesktopNav from '@/components/DesktopNav'
import MobileNav from '@/components/MobileNav'

export default {
  components: {
    DesktopNav,
    MobileNav
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

#app {
  font-family: 'Lato', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#mobile-nav {
  display: none;
}

.view-container {
  padding: 3em;
  margin-left: 40vw;
  margin-right: 10vw;
  min-height: 50vh;
  box-sizing: border-box;
}

.card {
  padding: 1.5em;
  border-radius: 10px;
  color: #222;

  .card-title {
    align-items: center;
  }

  .card-content {
    line-height: 1.5;
    margin: 30px auto;
  }
}

@media screen and (max-width: 1096px) {
  .view-container {
    width: 100%;
    margin-left: 0;
    margin-right: 0;
  }

  #desktop-nav {
    display: none;
  }

  #mobile-nav {
    display: flex;
  }

}
</style>
