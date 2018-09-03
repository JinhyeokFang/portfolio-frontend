<template>
  <section>
    <navigation-bar></navigation-bar>
    <section class="main-container">
      <section class="info">
        <h1 class="title">선린인터넷고등학교
          <br>소프트웨어과</h1>
        <div class="bar"></div>
        <section class="buttons">
          <a href="/#/search" class="search btn">Search</a>
          <a href="/#/work" class="more btn">More</a>
        </section>
      </section>
    </section>
    <section class="bottom">
      <section class="alert">
        <p>Chrome, Firefox 등의 브라우저를 이용해주세요</p>
      </section>
    </section>
  </section>
</template>

<script>
  import Navbar from '../../components/Navbar.vue';

  export default {
    name: 'Index',
    components: {
      'navigation-bar': Navbar,
    },
    data() {
      return {};
    },
    methods: {},
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  * {
    color: #000000;
  }

  .navbar {
    height: 120px;
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .logo {
    width: 200px;
  }

  .main-container {
    width: 100%;
    max-width: 65%;
    margin: 0 auto;
    min-height: 70vh;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background: url('../../assets/background.png') no-repeat right;
    background-size: contain;
  }

  .main-container .info {
    text-align: left;
    font-size: 3.5rem;
  }

  .bar {
    margin-top: 50px;
    width: 120px;
    height: 10px;
    background-color: #000000;
  }

  .buttons {
    margin-top: 80px;
    display: flex;
  }

  .btn {
    margin-right: 20px;
    display: block;
    text-align: center;
    width: 180px;
    height: 60px;
    line-height: 60px;
    border-radius: 100px;
    font-size: 1.5rem;
    -webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
    text-decoration: none;
  }

  .info .search.btn {
    background-color: #000000;
    color: #fff;
  }

  .info .more.btn {
    background-color: #fff;
  }

  .main-container img {
    height: 650px;
  }

  .bottom {
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
    bottom: 0;
  }

  .alert {
    line-height: 50px;
    width: 500px;
    height: 50px;
    background-color: #ff7f7b;
    border-radius: 20px 20px 0 0;
  }

  .alert > p {
    color: #fff;
  }

  @media screen and (max-width: 1024px) {
    .title {
      font-size: 3rem;
    }

    .main-container {
      justify-content: center;
      align-items: center;
      background: none;
    }

    .bar {
      width: 80%;
      margin: 50px auto;
    }

    .buttons {
      justify-content: center;
    }

    .btn {
      margin: 10px;
    }

  }

</style>
