<template>
    <header>
        <nav class="navbar is-primary">
          <div class="container">
            <div class="navbar-brand">
              <router-link class="navbar-item" to="/">
                <img src="../assets/logo.svg" alt="Logo">
            </router-link>
              <span class="navbar-burger burger" data-target="navbarMenuHeroA" @click="menuOpen = !menuOpen">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
            <Menu :menuOpen="menuOpen"></Menu>
          </div>
        </nav>
    </header>
</template>

<script>
import Menu from '../components/Menu';

export default {
    components: {
        Menu,
    },
    data() {
        return {
            menuOpen: false,
        }
    }
}
</script>

<style lang="css">
</style>
