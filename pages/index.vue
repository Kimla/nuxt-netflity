<template>
    <div class="posts">
        <div class="post" v-for="post in posts" :key="post.id">
            <h2>{{ post.title }}</h2>
            <p>{{ post.body }}</p>
        </div>
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
body {
    font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
    display: block;
    font-weight: 300;
    color: #35495e;
    letter-spacing: 1px;
    padding: 15px;
}
.posts {
    width: 800px;
    margin: 0 auto;
}
.post {
    margin-bottom: 30px;
}
</style>
