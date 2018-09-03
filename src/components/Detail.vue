<template>
  <section>
    <navigation-bar></navigation-bar>
    <div class="container">

      <article class="markdown-body">
        <div v-html="html"></div>
      </article>
    </div>
  </section>
</template>

<script>
  import axios from 'axios';
  import Navbar from './Navbar.vue';
  import * as markdown from '../lib/markdown';


  export default {
    name: 'Detail',
    components: {
      'navigation-bar': Navbar,
    },
    data() {
      return {
        markdown: '',
        html: '',
      };
    },
    methods: {
      markdownChanged() {
        this.html = markdown.rendering(this.markdown);
      },
    },
    mounted() {
      const URL = `http://ec2-18-222-183-3.us-east-2.compute.amazonaws.com/api/description?id=${this.$route.params.id}`;
      axios.get(`${URL}`)
        .then((v) => {
          this.markdown = v.data;
          this.markdownChanged();
        })
        .catch((err) => console.log(err));
    },
  };
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Nanum+Gothic');

  .container {
    font-family: 'Nanum Gothic', sans-serif !important;
    display: flex;
    justify-content: center;
    padding: 20px;
    width: 80%;
    margin: auto;
    text-align: left;
  }

  h1 {
    margin-bottom: 10px !important;
  }
</style>
