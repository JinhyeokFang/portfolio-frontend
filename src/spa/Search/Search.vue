<template>
  <div>
    <navigation-bar></navigation-bar>
    <section class="main-container">
      <div class="row">
        <div class="header">
          <h1>Search</h1>
          <div class="bar"></div>
        </div>
        <div class="checkbox-container">
          <div class="header">
            <h2>카테고리 선택</h2>
          </div>
          <div class="checkbox-row">
            <div class="checkbox">
              <input type="checkbox" id="game" value="selected_game" v-model="checkedType">
              <label for="game">게임</label>
            </div>
            <div class="checkbox">
              <input type="checkbox" id="life" value="selected_life" v-model="checkedType">
              <label for="life">생활</label>
            </div>
            <div class="checkbox">
              <input type="checkbox" id="multimedia" value="selected_multi" v-model="checkedType">
              <label for="multimedia">멀티미디어</label>
            </div>
            <!--<div class="checkbox">-->
            <!--<input type="checkbox" id="things" value="selected_things" v-model="checkedType" disabled>-->
            <!--<label for="things">IoT</label>-->
            <!--</div>-->
            <div class="checkbox">
              <input type="checkbox" id="mobile" value="selected_mobile" v-model="checkedType">
              <label for="mobile">모바일</label>
            </div>
            <!--<div class="checkbox">-->
            <!--<input type="checkbox" id="web" value="selected_web" v-model="checkedType" disabled>-->
            <!--<label for="web">웹</label>-->
            <!--</div>-->
            <div class="checkbox">
              <input type="checkbox" id="ai" value="selected_ai" v-model="checkedType" disabled>
              <label for="ai">AI(인공지능)</label>
            </div>
            <div class="checkbox">
              <input type="checkbox" id="grand" value="selected_grand" v-model="checkedType">
              <label for="grand">대상</label>
            </div>
            <div class="checkbox">
              <input type="checkbox" id="gold" value="selected_gold" v-model="checkedType">
              <label for="gold">금상</label>
            </div>
            <div class="checkbox">
              <input type="checkbox" id="silver" value="selected_silver" v-model="checkedType">
              <label for="silver">은상</label>
            </div>
            <div class="checkbox">
              <input type="checkbox" id="bronze" value="selected_bronze" v-model="checkedType">
              <label for="bronze">동상</label>
            </div>
            <div class="checkbox">
              <span>연도</span> <input type="number" min="2016" :max="new Date().getFullYear()" id="min_year" v-model="min_year"
                                     title="Min Year"><input type="number" min="2016" :max="new Date().getFullYear()" id="max_year"
                                                             v-model="max_year" title="Max Year">
            </div>
            <div class="checkbox">
              <span>개발자명</span> <input type="text" id="developer" placeHolder="1명의 이름만 입력하세요" v-model="developer" title="developer">
            </div>
            <div class="checkbox">
              <span>프로젝트명</span> <input type="text" id="project-name" v-model="projectName" title="project name">
            </div>
          </div>
        </div>
        <div class="btn-container">
          <button class="search-btn" @click="search">검색하기</button>
        </div>
      </div>
      <div class="row2">

      </div>
    </section>
    <section class="result-wrapper">
      <div class="result-header">
        <div class="result-title">
          <h1>검색결과</h1>
          <div class="result-bar"></div>
        </div>
      </div>
      <section class="result-cards">
        <work-card v-for="(item,index) in list" :projectName="item.projectName" :groups="item.groups" :team="item.developers"
                   :contestInfo="item.contestInfo" :id="item.id" :qualification="item.qualification" :key="index">
        </work-card>
      </section>
    </section>
  </div>
</template>
<script>
  import axios from 'axios';
  import Card from '../../components/Card.vue';
  import Navbar from '../../components/Navbar.vue';
  import {generator} from '../../lib/queryBuilder';

  export default {
    name: 'Search',
    components: {
      'work-card': Card,
      'navigation-bar': Navbar,
    },
    data() {
      return {
        checkedType: [],
        list: [],
        min_year: 2016,
        max_year: 2018,
        developer: '',
        projectName: '',
      };
    },
    methods: {
      search() {
        this.list = [];
        /**
         * division: string,
         * min: number,
         * max: number,
         * digital: boolean,
         * mobile: boolean,
         * sunrinthon: boolean,
         * game: boolean,
         * life: boolean,
         * application: boolean,
         * web: boolean,
         * multimedia: boolean,
         * grand: boolean,
         * gold: boolean,
         * silver: boolean,
         * bronze: boolean,
         * developer: string,
         * name : string
         */
        const options = {};
        this.checkedType.forEach((checkedType) => options[checkedType.split('_')[1]] = true);
        if (this.min_year >= 2016 && this.min_year <= 2018) options.min = this.min_year;
        if (this.max_year >= 2016 && this.max_year <= 2018) options.max = this.max_year;
        if (this.developer) options.developer = this.developer;
        if (this.projectName) options.projectName = this.projectName;
        if (Object.options.length !== 0) {
          axios.get(generator(options))
            .then((dataList) => this.list = dataList)
            .catch(() => alert('검색에 실패했습니다.'));
        } else {
          alert('검색할 조건을 선택하시거나 입력하여주세요.');
        }
      },
    },

  };
</script>
<style scoped>
  .main-container {
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 20px;
    margin-bottom: 20px;
  }

  .header h1 {
    font-size: 36px;
  }

  .bar {
    width: 220px;
    height: 10px;
    background-color: #000000;
  }

  .row {
    height: 360px;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
  }

  .row2 {
    flex: 2;
  }

  .checkbox-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 20px;

  }

  .checkbox-row {
    width: 330px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
  }

  .checkbox {
    margin: 2px;
  }

  .checkbox:nth-child(1) {
    margin-right: 15px;
  }

  .checkbox:nth-child(3) {
    margin-left: -11px;
  }

  .checkbox input[type="checkbox"] {
    opacity: 0;
  }

  .checkbox label {
    position: relative;
    display: inline-block;
    padding-left: 40px;
    height: 30px;
    line-height: 30px;
  }

  .checkbox label::before,
  .checkbox label::after {
    position: absolute;
    content: "";
    display: inline-block;
  }

  .checkbox label::before {
    height: 26px;
    width: 26px;
    border: 1px solid;
    border-radius: 4px;
    left: 1px;
    top: 1px;
  }

  .checkbox label::after {
    height: 13px;
    width: 13px;
    background-color: black;
    border-radius: 100%;
    top: 9px;
    left: 9px;
  }

  .checkbox input[type="checkbox"] + label::after {
    content: none;
  }

  .checkbox input[type="checkbox"]:checked + label::after {
    content: "";
  }

  .checkbox input[type="checkbox"]:focus + label::before {
    outline: rgb(59, 153, 252) auto 5px;
  }

  .btn-container {
    width: 100%;
  }

  .search-btn {

    width: 100%;
    height: 50px;
    background-color: #fff;
    border: 2px solid black;
    font-size: 15px;
    box-shadow: 0px 10px 20px 0 rgba(0, 0, 0, 0.1);
  }

  /*
     result 부분
   */
  .result-wrapper {
    max-width: 80%;
    margin: 0 auto;
  }

  .result-header {
    height: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 50px;
  }

  .result-header > .title > h1 {
    font-size: 2rem;
    text-align: left;
  }

  .result-bar {
    width: 190px;
    height: 10px;
    margin: 20px 0 0 0;
    background-color: #000000;
  }

  .result-order-select select {
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
  .result-order-select select::-ms-expand {
    display: none;
    background-image: url(data:image/svg+xml;base64,PHN2ZyBmaWxsPSdibGFjaycgaGVpZ2h0PScyNCcgdmlld0JveD0nMCAwIDI
    0IDI0JyB3aWR0aD0nMjQnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc
    +PHBhdGggZD0nTTcgMTBsNSA1IDUtNXonLz48cGF0aCBkPSdNMCAwaDI0djI0SDB6JyBmaWxsPSdub25lJy8+PC9zdmc+);
  } */

  .result-cards {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }


</style>
