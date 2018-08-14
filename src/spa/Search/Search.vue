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
              <input type="checkbox" id="game" value="selected_game">
              <label for="game">게임</label>
            </div>
            <div class="checkbox">
              <input type="checkbox" id="life" value="selected_life">
              <label for="life">생활</label>
            </div>
            <div class="checkbox">
              <input type="checkbox" id="things" value="selected_things" disabled>
              <label for="things">IoT</label>
            </div>
            <div class="checkbox">
              <input type="checkbox" id="mobile" value="selected_mobile">
              <label for="mobile">모바일</label>
            </div>
            <div class="checkbox">
              <input type="checkbox" id="web" value="selected_web" disabled>
              <label for="web">웹</label>
            </div>
            <div class="checkbox">
              <input type="checkbox" id="ai" value="selected_ai" disabled>
              <label for="ai">AI(인공지능)</label>
            </div>
          </div>
        </div>
        <div class="btn-container">
          <button class="search-btn">검색하기</button>
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
            <option value="">최신순</option>
            <option value="">최신순</option>
            <option value="">최신순</option>
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

  const URL = 'http://ec2-18-222-183-3.us-east-2.compute.amazonaws.com/api/list/2/?';

  export default {
    name: 'Search',
    components: {
      'work-card': Card,
      'navigation-bar': Navbar,
    },
    data() {
      return {
        checkedType: [],
      };
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
