<template>
  <div class="root">
    <nav class="navbar">
      <a href="/" class="logo"><img src="./../assets/logo.png" alt="" srcset=""></a>
    </nav>
    <div class="container">
      <div class="row">
        <h1 class="title">SUNRIN<br>PORTFOLIO</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
    }
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.root{
  height: 100%;
  width: 100%;  
  max-width: 90%;
  margin: 0 auto;
}
.navbar{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 80px;
}
.container{
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('./../assets/pic_index.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
.row{
  flex: 1;
}
.title{
  font-size:6.5em;
  line-height: 0.8em;
  text-align: left;
}

@media screen and (max-width: 768px){
  .navbar{

  }
}
</style>
