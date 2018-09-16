<template>
  <div>
    <div class="card" @click="modalChange()">
      <div class="col">
        <div class="info">
          <div>
            <h1 class="title">{{projectName}}</h1>
            <p class="contest">{{contestInfo.type}} {{contestInfo.rate}}</p>
            <p>{{brief}}</p>
          </div>
        </div>
        <div class="image">
          <div class="prize" :class="contestInfo.rate"></div>
        </div>
      </div>
      <div class="details">
        <div>
          <tag :groups="groups"></tag>
          <div class="team">
            <span v-for="(item, index) in team" :key="index">{{item}}  </span>
          </div>
        </div>
      </div>
    </div>
    <transition name="modal">
      <div class="modal-mask" v-if="modal">
        <div class="modal-container" >
          <div class="btn">
            <button class="close-btn" @click="modalChange()"><i class="material-icons">close</i></button>
          </div>
          <div class="modal-header">
            <div class="image">
              <div class="prize" :class="contestInfo.rate"></div>
            </div>
            <div class="header-details">
              <div class="modal-col">
                <h1 class="title">{{projectName}}</h1>
                <p class="contest">{{contestInfo.type}} {{contestInfo.rate}} 수상</p>
              </div>
              <div class="modal-col row">
                <tag :groups="contestInfo.type === '모바일 콘텐츠 경진대회' ? ['모바일',contestInfo.field]:[contestInfo.field]"></tag>
                <div class="team">
                  {{team.toString()}}의 작품
                </div>
              </div>
            </div>
          </div>
          <div class="modal-body">
            <div class="overview" v-html="overview"></div>
            <div class="btn">
              <router-link :to="{name:'detail', params:{id:id}}">
                <button class="detail-btn">자세히 보기</button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import axios from 'axios';
  import Tag from './Tag.vue';
  import {server} from '../lib/queryBuilder';
  import {rendering} from '../lib/markdown';

  export default {
    name: 'work-card',
    props: ['id', 'groups', 'team', 'projectName', 'contestInfo', 'qualification', 'brief'],
    components: {
      'tag': Tag,
    },
    data() {
      return {
        overview: '',
        modal: false,
        clicked: false,
      };
    },
    methods: {
      modalChange() {
        this.modal = !this.modal;
        if (!this.clicked) {
          axios.get(`${server}/api//overview?id=${this.id}`).then((res) => {
            this.overview = rendering(res.data);
          });
          this.clicked = true;
        }
      },
    },
  };

</script>

<style>

  .prize {
    width: 150px;
    height: 150px;
  }

  .대상 {
    background-image: url('../assets/1.png');
  }

  .금상 {
    background-image: url('../assets/2.png');
  }

  .은상 {
    background-image: url('../assets/3.png');
  }

  .동상 {
    background-image: url('../assets/4.png');
  }

  .card {
    color: #444444;
    width: 320px;
    margin: 10px;
    border-radius: 10px;
    box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
  }

  .col {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 15px 15px 0 15px;
  }

  .card .info {
    display: flex;
    flex-direction: column;
    margin: 20px 0 20px 20px;
  }

  .card .info .title {
    font-size: 2rem;
  }

  .card .info .contest {
    margin: 5px 0;
  }

  .card .image {
    width: 130px;
    height: 130px;
    margin: 20px;
  }

  .details {
    width: 100%;
    max-width: 90%;
    margin: 0 auto 20px auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    align-items: flex-end;
    flex-wrap: wrap;
  }

  .details .team {
    padding: 5px;
  }

  /* modal code */
  .modal-mask {
    /* overflow: hidden; */
    position: fixed;
    z-index: 9998;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    transition: opacity .3s ease;
    overflow: auto;

  }

  .modal-container {
    width: 50vw;
    min-height: 75vh;
    margin: 100px auto;
    padding: 20px 50px;
    background-color: #fff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
  }
  .modal-header {
    max-width: 75vw;
    display: flex;
    justify-content: flex-start;
  }
  .modal-body{
    margin-top: 20px;
  }
  .modal-header .image{
    margin-right: 50px;
  }
  .header-details{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
  }
  .modal-col{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .modal-col.row{
    flex-direction: row;
    align-items: center;

  }
  .overview{
    text-align: left;
    font-size: 1.2rem;
  }
  .modal-col .title{
    font-size: 2rem;
  }
  .modal-enter {
    opacity: 0;
  }

  .modal-leave-active {
    opacity: 0;
  }

  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
  .btn{
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
  .btn:nth-child(2){
    margin-top: 30px;
  }
  .close-btn {
    right: 0;
    width: 30px;
    height: 30px;
    background: none;
    border: none;
  }
  .close-btn i {
    font-size: 1.5rem;
  }
  .detail-btn{
    font-weight: bold;
    font-size: 1.3rem;
    color: #fff;
    width: 180px;
    height: 64px;
    border-radius: 32px;
    background-color: #000000;
    box-shadow: 0px 10px 20px 0 rgba(0, 0, 0, 0.2);
  }

  @media screen and (max-width: 1200px){
    .image {
      display: none;
    }
    .modal-container {
      width: 100%;
      min-height: 100vh;
      border-radius: 0;
      margin: 0;
    }
  }
  @media screen and (min-width: 420px)and (max-width: 768px) {
    .card {
      width: 85vw;
    }
    .card .info {
      width: 40vw;
      justify-content: flex-start;
    }
    .modal-container {
      width: 100%;
      min-height: 100vh;
      border-radius: 0;
      margin: 0;
    }
  }

  @media screen and (min-width: 768px)and (max-width: 1440px) {
    .card {
      width: 80vw;
    }
  }

  @media screen and (min-width: 1440px)and (max-width: 2560px) {
    .card {
      width: 38vw;
    }
  }

  .card {
    transition: 0.3s ease;
    animation: scale 0.5s ease;

  }

  @keyframes scale {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
</style>
