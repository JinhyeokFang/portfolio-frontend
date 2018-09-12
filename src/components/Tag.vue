<template>
  <div class="tags">
    <div class="" v-for="(group,key) in groups" :key="key">
      <div class="tag">{{group}}</div>
    </div>
  </div>
</template>

<script>
<<<<<<< HEAD
export default {
  name: 'tag',
  props: ['groups'],
};
=======
  export default {
    name: 'tag',
    props: ['groups'],
  };
>>>>>>> 5c77a3999eb9e84a9b2129ccb2ec7f24a26026c6
</script>

<style>
  .tags {
    display: flex;
    margin-right: 10px;
  }
  .tag {
    width: 60px;
    height: 30px;
    padding: 5px;
    margin-right: 5px;
    border-radius: 20px;
    color: #ff960e;
    border: 1px solid #ff960e;
    text-align: center;
  }
</style>
