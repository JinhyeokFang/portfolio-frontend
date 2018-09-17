<template>
  <div class="all">
    <navigation-bar></navigation-bar>
    <section class="main-container">
      <div class="row check">
        <div class="checkbox-container">
          <div class="header">
            <h1>Search</h1>
            <div class="bar"></div>
          </div>
          <div class="checkbox-col">
            <div class="options">
              <h1>분야</h1>
              <div class="checkbox-row">
                <div class="checkbox">
                  <input type="checkbox" id="game" value="selected_game" v-model="checkedType" @click="waitSearch">
                  <label for="game">게임</label>
                </div>
                <div class="checkbox">
                  <input type="checkbox" id="life" value="selected_life" v-model="checkedType" @click="waitSearch">
                  <label for="life">생활</label>
                </div>
                <div class="checkbox">
                  <input type="checkbox" id="multimedia" value="selected_multi" v-model="checkedType" @click="waitSearch">
                  <label for="multimedia">멀티미디어</label>
                </div>
              </div>
              <div class="checkbox">
                <input type="checkbox" id="web" value="selected_web" v-model="checkedType" @click="waitSearch">
                <label for="web">웹</label>
              </div>

              <div class="checkbox">
                <input type="checkbox" id="application" value="selected_application" v-model="checkedType" @click="waitSearch">
                <label for="application">응용</label>
              </div>
            </div>
            <div class="options">
              <h1>대회</h1>
              <div class="checkbox-row">
                <div class="checkbox">
                  <input type="checkbox" id="digital" value="selected_digital" v-model="checkedType" @click="waitSearch">
                  <label for="digital">디지털 컨텐츠 경진대회</label>
                </div>
                <div class="checkbox">
                  <input type="checkbox" id="mobile" value="selected_mobile" v-model="checkedType" @click="waitSearch">
                  <label for="mobile">모바일 컨텐츠 경진대회</label>
                </div>
                <div class="checkbox">
                  <input type="checkbox" id="sunrinthon" value="selected_sunrinthon" v-model="checkedType" @click="waitSearch">
                  <label for="sunrinthon">선린 해커톤</label>
                </div>
              </div>
            </div>
            <div class="options">
              <h1>상</h1>
              <div class="checkbox-row">
                <div class="checkbox">
                  <input type="checkbox" id="grand" value="selected_grand" v-model="checkedType" @click="waitSearch">
                  <label for="grand">대상</label>
                </div>
                <div class="checkbox">
                  <input type="checkbox" id="gold" value="selected_gold" v-model="checkedType" @click="waitSearch">
                  <label for="gold">금상</label>
                </div>
                <div class="checkbox">
                  <input type="checkbox" id="silver" value="selected_silver" v-model="checkedType" @click="waitSearch">
                  <label for="silver">은상</label>
                </div>
                <div class="checkbox">
                  <input type="checkbox" id="bronze" value="selected_bronze" v-model="checkedType" @click="waitSearch">
                  <label for="bronze">동상</label>
                </div>
              </div>
            </div>
            <!-- <div>
              <span>연도</span> <input type="number" min="2016" :max="new Date().getFullYear()" id="min_year" v-model="min_year"
                                     title="Min Year"><input type="number" min="2016" :max="new Date().getFullYear()" id="max_year"
                                                             v-model="max_year" title="Max Year">
            </div>
            <div>
              <span>개발자명</span> <input type="text" id="developer" placeHolder="1명의 이름만 입력하세요" v-model="developer" title="developer">
            </div>
            <div >
              <span>프로젝트명</span> <input type="text" id="project-name" v-model="projectName" title="project name">
            </div> -->
          </div>
          <!--<button class="search-btn" @click="search">검색</button>-->
        </div>
      </div>
      <div class="row projects">
        <bottom-scroll class="result-cards" @on-bottom="moreLoad">
          <work-card class="work-card" v-for="(item,index) in list" :projectName="item.projectName" :groups="item.groups"
                     :team="item.developers"
                     :contestInfo="item.contestInfo" :id="item.id" :qualification="item.qualification" :brief="item.brief" :key="index">
          </work-card>
        </bottom-scroll>
      </div>
    </section>
  </div>
</template>
<script>
  import axios from 'axios';
  import Card from '../../components/Card.vue';
  import Navbar from '../../components/Navbar.vue';
  import {generator} from '../../lib/queryBuilder';

  export default {
    name: 'Work',
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
        loadedPage: 1,
        /** search options
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
        options: {
          division: 'software',
        },
      };
    },
    methods: {
      waitSearch() {
        setTimeout(() => this.search(), 1);
      },
      search() {
        const options = this.options.extend({page: 1});
        this.loadedPage = 1;
        this.checkedType.forEach((checkedType) => options[checkedType.split('_')[1]] = true);
        if (this.min_year >= 2016 && this.min_year <= 2018) options.min = this.min_year;
        if (this.max_year >= 2016 && this.max_year <= 2018) options.max = this.max_year;
        if (this.developer) options.developer = this.developer;
        if (this.projectName) options.projectName = this.projectName;
        if (Object.keys(options).length !== 0) {
          axios.get(generator(options))
            .then((res) => {
              this.list = [];
              res.data.forEach((v) => {
                const contest = {
                  'digital-contents': '디지털 콘텐츠 경진대회',
                  'mobile-contents': '모바일 콘텐츠 경진대회',
                  'sunrin-thon': '선린 해커톤',
                };
                const prize = ['대상', '금상'];
                v.contestInfo.type = contest[v.contestInfo.type];
                v.contestInfo.rate = prize[v.contestInfo.rate - 1];
                if (v.contestInfo.field === 'game') v.contestInfo.field = '게임';
                if (v.contestInfo.field === 'life') v.contestInfo.field = '생활';
                if (v.contestInfo.field === 'web') v.contestInfo.field = '웹';
                if (v.contestInfo.field === 'application') v.contestInfo.field = '응용';
                if (v.contestInfo.field === 'multimedia') v.contestInfo.field = '멀티미디어';
                this.list.push(v);
              });
            })
            .catch(() => alert('검색에 실패했습니다.'));
        } else {
          alert('검색할 조건을 선택하시거나 입력하여주세요.');
        }
      },
      moreLoad() {
        const options = this.options.extend({page: ++this.loadedPage});
        axios.get(generator(options))
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
              if (v.contestInfo.field === 'game') v.contestInfo.field = '게임';
              if (v.contestInfo.field === 'life') v.contestInfo.field = '생활';
              if (v.contestInfo.field === 'web') v.contestInfo.field = '웹';
              if (v.contestInfo.field === 'application') v.contestInfo.field = '응용';
              if (v.contestInfo.field === 'multimedia') v.contestInfo.field = '멀티미디어';
              this.list.push(v);
            });
          })
          .catch(() => alert('페이지로드에 실패했습니다.'));
      },
    },
    created() {
      this.search();
    },
  };
</script>

<style scoped>
  .all {
    overflow: hidden;
  }

  .main-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
  }

  .header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
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
    max-width: 90%;
    min-height: 70vh;
  }

  .row.check {
    display: flex;
  }

  .checkbox-container {
    display: flex;
    flex-direction: column;
    justify-content: center;

  }

  .checkbox-col {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin-left: -20px;
  }

  .checkbox-row {
    display: flex;
    flex-direction: column;
  }

  .options {
    text-align: left;
    margin: 5px;
  }

  .options h1 {
    margin: 10px 0;
    padding-left: 20px;
  }

  .checkbox input[type="checkbox"] {
    opacity: 0;
  }

  .checkbox label {
    position: relative;
    display: inline-block;
    padding-left: 40px;
    margin: 10px;
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
    border: 2px solid;
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

  .search-btn {
    width: 100%;
    height: 50px;
    background-color: #fff;
    border: 2px solid black;
    border-radius: 10px;
    font-size: 15px;
    box-shadow: 0px 10px 20px 0 rgba(0, 0, 0, 0.1);
  }

  /*
     result 부분
   */
  .result.header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .result.header > .title > h1 {
    text-align: left;
  }

  .result.bar {
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
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
    height: 80vh;

  }

  @media screen and (min-width: 768px)and (max-width: 1440px) {

  }

</style>
