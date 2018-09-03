<template>
  <div class="tags">
    <div class="" v-for="(group,key) in groups" :key="key">
      <div class="tag">{{group}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'tag',
    props: ['groups'],
  };
</script>

<style>
  .tags {
    display: flex;
    margin-right: 10px;
  }
  .tag {
    width: fit-content;
    height: fit-content;
    padding: 5px 15px 5px 15px;
    margin: 5px;
    border-radius: 30px;
    color: #ff960e;
    border: 1px solid #ff960e;
    text-align: center;
  }
</style>
