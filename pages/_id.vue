<template>
    <div class="posts">

        <section class="hero is-primary">

          <div class="hero-body">
            <div class="container has-text-centered">
              <h1 class="title" v-if="page.acf.heading">
                {{ page.acf.heading }}
              </h1>
              <p class="is-size-5" style="max-width:700px;margin:0 auto;" v-if="page.acf.preamble">{{ page.acf.preamble }}</p>
            </div>
          </div>

        </section>

        <div class="section has-text-centered" v-if="page.acf.image" style="padding-bottom:0">
            <div class="container">
                <img :src="page.acf.image.url" alt="">
            </div>
        </div>

        <div class="section" v-if="page.acf.left_column && page.acf.right_column">
            <div class="container">
                <div class="columns">
                    <div class="column content" v-html="page.acf.left_column"></div>
                    <div class="column content" v-html="page.acf.right_column"></div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import axios from 'axios';

export default {
    async asyncData (context) {
        const id = context.params.id;
        let res = await axios.get(`https://playground.kimlarsson.se/wp-json/wp/v2/pages/${id}`);

        return {
            page: res.data
        }
    },
}
</script>

<style>

</style>
