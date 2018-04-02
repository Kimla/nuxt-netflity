<template>
    <div id="navbarMenuHeroA" class="navbar-menu">
      <div class="navbar-end">
        <router-link class="navbar-item" v-for="item in menu.items" :to="`/${item.object_id}`" :key="item.ID">
          {{ item.title }}
        </router-link>
      </div>
    </div>
</template>

<script>
export default {
    computed: {
        menu() {
            return this.$store.state.menu;
        }
    },
}
</script>

<style lang="css">
</style>
