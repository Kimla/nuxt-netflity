<template>
    <div class="posts">
        <router-link :to="`/posts/${post.id}`" class="post" v-for="post in posts" :key="post.id">
            <h2>{{ post.title }}</h2>
            <p>{{ post.body }}</p>
        </router-link>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    async asyncData () {
        let res = await axios.get('https://jsonplaceholder.typicode.com/posts');

        return {
            posts: res.data
        }
    },
}
</script>

<style>
.posts {
    width: 800px;
    margin: 0 auto;
}
.post {
    margin-bottom: 30px;
    display: block;
    text-decoration: none;
    color: inherit;
}
</style>
