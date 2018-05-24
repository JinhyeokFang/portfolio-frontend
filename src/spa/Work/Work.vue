<template>
  <section class="card-container">
    <work-card></work-card>
    <work-card></work-card>
  </section>
</template>


<script>
import Card from '../../components/Card.vue';

export default {
  name: 'Work',
  data() {
    return {};
  },
  components: {
    'work-card': Card,
  },
  methods: {},
};
</script>

<style scoped>
.card-container{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
}
</style>
