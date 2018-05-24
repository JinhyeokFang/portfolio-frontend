<template>
  <section>
    <nav class="navbar">
      <a href="/"><img class="logo" src=".././assets/logo.png" alt="선린인터넷고등학교"></a>
    </nav>
    <section class="main-container">
      <section class="info">
        <h1 class="title">선린인터넷고등학교<br>소프트웨어과</h1>    
        <div class="bar"></div>
        <section class="buttons">
          <a href="/#/work" class="search btn">Search</a>  
          <a href="/" class="more btn">More</a>      
        </section> 
      </section>
    </section>
  </section>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  color: #444444;
}
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

.main-container{
  width: 100%;
  max-width: 65%;
  margin: 0 auto;  
  min-height: 70vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-image: url('../assets/background.png');
  background-position: right;
  background-repeat: no-repeat;
  background-size: contain;
}
.main-container .info{
  text-align: left;  
  font-size: 3.5rem;
}
.bar{
  margin-top: 50px;
  width: 120px;
  height: 10px;
  background-color: #444444;
}
.buttons{
  margin-top: 80px;  
  display: flex;
}
.btn{
  margin-right: 20px;
  display: block;  
  text-align: center;  
  width: 180px;
  height: 60px;
  line-height: 60px;  
  border-radius: 100px;
  font-size: 1.5rem;  
  -webkit-box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.2);
  -moz-box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.2);
  box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.2);
  text-decoration: none;
}
.info .search.btn{
  background-color: #444444;
  color: #fff;
}
.info .more.btn{
  background-color: #fff;
}
.main-container img{
  height: 650px;
}
@media screen and (max-width: 1024px){
  .title{
    font-size: 3rem;
  }
  .main-container{
    justify-content: center;
    align-items: center;
    background: none;
  }
  .bar{
    width: 80%;
    margin: 50px auto;
  }
  .buttons{
    justify-content: center;
  }
  .btn{
    margin: 10px;
  }

}
</style>
