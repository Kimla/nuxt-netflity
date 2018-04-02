<template>
    <div>
        <Header></Header>
        <nuxt/>
        <footer class="footer has-text-centered" style="padding: 15px;">NUXT</footer>
    </div>
</template>

<script>
import Header from '../components/Header';

export default {
    components: {
        Header
    }
}
</script>

<style>
@import '../node_modules/bulma/css/bulma.css';
</style>
