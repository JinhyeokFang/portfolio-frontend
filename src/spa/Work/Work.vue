<template>
  <section class="container">
    <navigation-bar></navigation-bar>
    <section class="wrapper">
      <div class="header">
        <div class="title">
          <h1>More View</h1>
          <div class="bar"></div>
        </div>
      </div>
      <section class="cards">
        <work-card v-for="(item,index) in list" :projectName="item.projectName" :groups="item.groups" :team="item.developers"
                   :contestInfo="item.contestInfo" :id="item.id" :qualification="item.qualification" :key="index">
        </work-card>
      </section>
    </section>
  </section>
</template>


<script>
  import Card from '../../components/Card.vue';
  import Navbar from '../../components/Navbar.vue';
  import axios from 'axios';

  const URL = 'http://ec2-18-222-183-3.us-east-2.compute.amazonaws.com/api/list?division=software';
  export default {
    name: 'Work',
    data() {
      return {
        list: [],
      };
    },
    components: {
      'work-card': Card,
      'navigation-bar': Navbar,
    },
    created() {
      axios.get(URL)
        .then((res) => {
          res.data.forEach((v) => {
            const contest = {
              'digital-contents': '디지털 콘텐츠 경진대회',
              'mobile-contents': '모바일 콘텐츠 경진대회',
              'sunrin-thon': '선린 해커톤',
            };
            const prize = ['대상', '금상'];
            v.contestInfo.type = contest[v.contestInfo.type];
            v.contestInfo.rate = prize[v.contestInfo.rate - 1];
            this.list.push(v);
          });
        })
        .catch(() => alert('검색에 실패했습니다.'));
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
    justify-content: space-between;
    margin-bottom: 50px;
  }

  .header > .title > h1 {
    font-size: 2rem;
    text-align: left;
  }

  .bar {
    width: 190px;
    height: 10px;
    margin: 20px 0 0 0;
    background-color: #000000;
  }

  .order-select select {
    outline: none;
    margin-left: 80px;
    -webkit-appearance: none;
    appearance: none;
    font-size: 1.2rem;
    text-align: center;
    text-align-last: center; /* chrome */
    width: 140px;
    height: 40px;
    border: 3px solid black;
    border-radius: 24px;
    background: transparent url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>") no-repeat;
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
