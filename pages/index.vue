<template>
    <div>
        <section class="hero is-primary">

          <div class="hero-body">
            <div class="container has-text-centered">
              <h1 class="title">
                Blogg
              </h1>
            </div>
          </div>

        </section>
        <div class="section">

            <div class="container">
                <router-link :to="`/posts/${post.id}`" v-for="post in posts" :key="post.id">
                    <div class="card" style="margin-bottom:20px;">

                          <div class="card-content">
                              <p class="title is-4">{{ post.title }}</p>
                            <div class="content">
                              {{ post.body }}
                            </div>
                          </div>
                    </div>
                </router-link>
            </div>
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

</style>
