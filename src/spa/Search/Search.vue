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
              <input type="checkbox" id="things" value="selected_things" v-model="checkedType" disabled>
              <label for="things">IoT</label>
            </div>
            <div class="checkbox">
              <input type="checkbox" id="mobile" value="selected_mobile" v-model="checkedType">
              <label for="mobile">모바일</label>
            </div>
            <div class="checkbox">
              <input type="checkbox" id="web" value="selected_web" v-model="checkedType" disabled>
              <label for="web">웹</label>
            </div>
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
            <!--div class="checkbox"> 서버측에서 연도별 검색 미지원
               <span>연도</span> <input type="number" min="2015" :max="new Date().getFullYear()" id="year" v-model="year" title="year">
             </div>-->
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
        <div class="result-order-select">
          <select>
            <option value="">-</option>
            <option value="">-</option>
            <option value="">-</option>
          </select>
        </div>
      </div>
      <section class="result-cards">
        <work-card v-for="(item,index) in list" :projectName="item.projectName" :groups="item.groups" :team="item.developers"
                   :contestInfo="item.contestInfo" :overview="item.overview" :qualification="item.qualification" :key="index">
        </work-card>
      </section>
    </section>
  </div>
</template>
<script>
  import axios from 'axios';
  import Card from '../../components/Card.vue';
  import Navbar from '../../components/Navbar.vue';
  import * as markdown from '../../lib/markdown';

  const SearchQueryURL = 'http://ec2-18-222-183-3.us-east-2.compute.amazonaws.com/api/list?division=software&';
  const OverViewLoadURL = 'http://ec2-18-222-183-3.us-east-2.compute.amazonaws.com/api/overview?id=';

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
        year: 0,
        developer: '',
        projectName: '',
        loadedProject: [],
      };
    },
    methods: {
      /**
       * 검색 메소드
       */
      search() {
        /**
         * 기존 데이터 초기화
         */
        this.list = [];
        this.loadedProject = [];
        /**
         * 검색 내용이 있는지 확인
         */
        const queries = this.checkedType.map((checkedType) => {
          checkedType = checkedType.split('_')[1];
          if (checkedType === 'game') return 'subType=1';
          else if (checkedType === 'life') return 'subType=2';
          // else if (checkedType === 'things') return '';
          else if (checkedType === 'mobile') return 'type=2';
          // else if (checkedType === 'web') return '';
          // else if (checkedType === 'ai') return '';
          else if (checkedType === 'grand') return 'rate=1';
          else if (checkedType === 'gold') return 'rate=2';
          else if (checkedType === 'silver') return 'rate=3';
          else if (checkedType === 'bronze') return 'rate=4';
        });
        // 서버측에서 연도별 검색 미지원
        // if (this.year && this.year >= 2001) queries.push(`date=${this.year}`);
        if (this.developer) queries.push(`developer=${this.developer}`);
        if (this.projectName) queries.push(`name=${this.projectName}`);
        if (queries.length !== 0) {
          Promise.all(queries.map((query) => new Promise((resolve, reject) => axios.get(`${SearchQueryURL}${query}`)
            .then((response) => resolve(response.data))
            .catch(() => reject())
          )))
            .then((dataArrayList) => {
              dataArrayList.forEach((dataList) => dataList.forEach((cardData) => {
                if (!this.loadedProject.includes(cardData.projectName)) {
                  this.loadedProject = this.list.map((projectData) => projectData.projectName);
                  axios.get(`${OverViewLoadURL}${cardData.id}`).then((overView) => {
                    cardData.overview = markdown.rendering(overView.data);
                    this.list.push(cardData);
                  });
                }
              }));
            })
            .catch((err) => alert(err));
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
    min-height: 100vh;
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
