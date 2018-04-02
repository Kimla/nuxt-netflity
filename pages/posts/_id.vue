<template>
    <div class="single-post">

        <section class="hero is-primary">

          <div class="hero-body">
            <div class="container has-text-centered">
              <h1 class="title">
                {{ post.title }}
              </h1>
            </div>
          </div>

        </section>

        <section class="section">
            <div class="container" style="max-width:700px;margin:0 auto;">
                <p class="is-size-5" style="margin-bottom:30px;">{{ post.body }}</p>
                <router-link class="button" to="/">Back</router-link>
            </div>
        </section>


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
