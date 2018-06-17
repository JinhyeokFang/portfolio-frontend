<template>
  <nav class="navbar">
    <a href="/">
      <img class="logo" src="@/assets/logo.png" alt="선린인터넷고등학교">
    </a>
  </nav>
</template>

<script>
export default {
  name: 'navigation-bar',
};
</script>

<style>
.navbar{
  height: 120px;
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.logo{
    width: 200px;
}


</style>
