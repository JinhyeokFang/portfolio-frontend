<template>
  <section class="container">
    <navigation-bar></navigation-bar>
    <section class="wrapper">
      <div class="header">
        <div class="title">
          <h1>More View</h1>
          <div class="bar"></div>
        </div>
        <div class="order-select">
          <select>
            <option value="">최신순</option>
            <option value="">최신순</option>
            <option value="">최신순</option>
          </select>
        </div>
      </div>
      <section class="cards">
        <work-card v-for="(item,index) in list" :overview="item.overview" :groups="item.groups" :key="index"></work-card>
      </section>
    </section>
  </section>
</template>


<script>
  import Card from '../../components/Card.vue';
  import Navbar from '../../components/Navbar.vue';

  export default {
    name: 'Work',
    data() {
      return {
        list: [{
          overview: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate neque consequatur ab nulla.',
          team: ['홍길동', '홍길동', '홍길동'],
          groups: ['생활', '모바일'],
        }, {
          overview: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate neque consequatur ab nulla.',
          team: ['홍길동', '홍길동', '홍길동'],
          groups: ['생활', '모바일'],
        }],
      };
    },
    components: {
      'work-card': Card,
      'navigation-bar': Navbar,
    },
    created() {
    },
    methods: {},
  };

</script>

<style scoped>
  .wrapper {
    max-width: 80%;
    margin: 0 auto;
  }

  .header {
    height: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 50px;
  }

  .header > .title > h1 {
    font-size: 2rem;
    text-align: left;
  }

  .bar {
    width: 190px;
    height: 10px;
    margin: 20px 0px 0px 0px;
    background-color: #000000;
  }

  .order-select {
    margin-left: 10px;
  }

  .order-select select {
    outline: none;
    margin-left: 80px;
    -webkit-appearance: none;
    appearance: none;
    background: transparent;
    font-size: 1.2rem;
    text-align: center;
    text-align-last: center; /* chrome */
    width: 140px;
    height: 40px;
    border: 3px solid black;
    border-radius: 24px;
    background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
    background-repeat: no-repeat;
    background-position-x: 100%;
    background-position-y: 5px;
  }

  /* IE compatibility
  .order-select select::-ms-expand {
    display: none;
    background-image: url(data:image/svg+xml;base64,PHN2ZyBmaWxsPSdibGFjaycgaGVpZ2h0PScyNCcgdmlld0JveD0nMCAwIDI
    0IDI0JyB3aWR0aD0nMjQnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc
    +PHBhdGggZD0nTTcgMTBsNSA1IDUtNXonLz48cGF0aCBkPSdNMCAwaDI0djI0SDB6JyBmaWxsPSdub25lJy8+PC9zdmc+);
  } */

  .cards {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

</style>
