<template>
    <div class="single-post ">
        <h2>{{ post.title }}</h2>
        <p>{{ post.body }}</p>

        <router-link to="/">Back</router-link>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    async asyncData (context) {
        const id = context.params.id;
        let res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);

        return {
            post: res.data
        }
    },
    computed: {
        postId() {
            console.log(this.$route.id);
            return this.$route.id;
        }
    }
}
</script>

<style>
.single-post {
    width: 800px;
    margin: 0 auto;
}
</style>
