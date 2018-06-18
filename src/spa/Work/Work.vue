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
<<<<<<< HEAD
        <work-card :overview="overview" :groups="groups"></work-card>
        <work-card :overview="overview" :groups="groups"></work-card>

=======
        <work-card v-for="(item,index) in list" :projectName="item.projectName" :groups="item.groups" :team="item.developers"
                   :contestInfo="item.contestInfo" :overview="item.overview.slice(0,155)+'...'" :key="index"></work-card>
>>>>>>> fe350798c8a4132b56682ee9b4b40d06d89d4aaa
      </section>
    </section>
  </section>
</template>


<script>
  import Card from '../../components/Card.vue';
  import Navbar from '../../components/Navbar.vue';
  import jsonData from '../../data/data.json';

  export default {
    name: 'Work',
    data() {
      return {
        list: [{
          'projectName': '',
          'teamName': '',
          'developers': [''],
          'contestInfo': {
            'type': {
              'main': '',
              'sub': '',
            },
            'rate': '',
            'year': 2017,
          },
          'qualification': [{
            'title': '',
            'contents': [{
              'title': '',
              'content': '',
            }],
          }, {
            'title': '',
            'contents': [{
              'title': '',
              'content': '',
            }],
          }],
          'overview': '',
          'description': '',
        }],
      };
    },
    components: {
      'work-card': Card,
      'navigation-bar': Navbar,
    },
    created() {
      this.list = Object.values(jsonData).map((v) => {
        const contest = ['디지털 콘텐츠 경진대회', '모바일 콘텐츠 경진대회', '선린 해커톤'];
        const prize = ['대상', '금상'];
        const tags = ['모바일', '게임', '생활', '영상'];
        v.groups = [tags[v.contestInfo.type.sub]];
        if (v.contestInfo.type.main === 2) v.groups.push(tags[0]);
        v.contestInfo.type.main = contest[v.contestInfo.type.main - 1];
        v.contestInfo.rate = prize[v.contestInfo.rate - 1];
        return v;
      });
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
    margin: 20px 0px 0px 0px;
    background-color: #000000;
  }
<<<<<<< HEAD
  .order-select select{
=======

  .order-select {
    margin-left: 10px;
  }

  .order-select select {
>>>>>>> fe350798c8a4132b56682ee9b4b40d06d89d4aaa
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
