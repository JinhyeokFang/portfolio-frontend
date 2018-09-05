<template>
  <div>
    <navigation-bar></navigation-bar>
    <section class="main-container">
      <div class="row">
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
                <div class="checkbox">
                  <input type="checkbox" id="application" value="selected_application" v-model="checkedType">
                  <label for="web">응용</label>
                </div>
                <div class="checkbox">
                  <input type="checkbox" id="web" value="selected_web" v-model="checkedType">
                  <label for="web">웹</label>
                </div>
              </div>
            </div>
            <div class="options">
              <h1>대회</h1>
              <div class="checkbox-row">
                <div class="checkbox">
                  <input type="checkbox" id="digital" value="selected_digital" v-model="checkedType">
                  <label for="digital">디지털 컨텐츠 경진대회</label>
                </div>
                <div class="checkbox">
                  <input type="checkbox" id="mobile" value="selected_mobile" v-model="checkedType">
                  <label for="mobile">모바일 컨텐츠 경진대회</label>
                </div>
                <div class="checkbox">
                  <input type="checkbox" id="sunrinthon" value="selected_sunrinthon" v-model="checkedType">
                  <label for="sunrinthon">선린 해커톤</label>
                </div>
              </div>
            </div>
            <div class="options">
              <h1>상</h1>
              <div class="checkbox-row">
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
          <button class="search-btn" @click="search">검색하기</button>

        </div>
      </div>
      <div class="row projects">
        <!-- <div class="result header">
          <div class="result title">
            <h1>검색결과</h1>
            <div class="bar"></div>
          </div>
          <div class="result-order-select">
            <select>
              <option value="">-</option>
              <option value="">-</option>
              <option value="">-</option>
            </select>
          </div>
        </div> -->
        <section class="result-cards">
          <work-card v-for="(item,index) in list" :projectName="item.projectName" :groups="item.groups" :team="item.developers"
                     :contestInfo="item.contestInfo" :id="item.id" :qualification="item.qualification" :key="index">
          </work-card>
        </section>
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
        const options = {
          division: 'software',
        };
        this.checkedType.forEach((checkedType) => options[checkedType.split('_')[1]] = true);
        if (this.min_year >= 2016 && this.min_year <= 2018) options.min = this.min_year;
        if (this.max_year >= 2016 && this.max_year <= 2018) options.max = this.max_year;
        if (this.developer) options.developer = this.developer;
        if (this.projectName) options.projectName = this.projectName;
        if (Object.keys(options).length !== 0) {
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
                this.list.push(v);
              });
            })
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
    min-height: 80vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
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
    flex-basis: min-content;
    height: 100vh;
    max-height: 80vh;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .row.projects {
    flex: 2;
  }

  .result-cards {
    overflow-y: scroll;
  }

  .checkbox-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
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

  .checkbox {
  }

  .options {
    text-align: left;
    margin: 5px;
  }

  .options h1 {
    margin: 10px 0;
    padding-left: 20px;
  }
</style>
