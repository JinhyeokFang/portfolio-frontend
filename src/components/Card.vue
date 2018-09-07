<template>
  <div>
    <div class="card" @click="modalChange">
      <div class="col">
        <div class="info">
          <div>
            <h1 class="title">{{projectName}}</h1>
            <p class="contest">{{contestInfo.type}} {{contestInfo.rate}}</p>
            <p>{{brief}}</p>
          </div>
        </div>
        <div class="image">
          <img src="http://via.placeholder.com/150x150" alt="">
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
    <div class="modal" v-if="modal">
      <div v-html="overview"></div>
      <button @click="modalChange()">close Modal</button>
      <router-link :to="{name:'detail', params:{id:id}}">
        <button>Go detail</button>
      </router-link>
    </div>
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
      };
    },
    methods: {
      modalChange() {
        this.modal = !this.modal;
      },
    },
    mounted() {
      axios.get(`${server}/api//overview?id=${this.id}`).then((res) => {
        this.overview = rendering(res.data);
      });
    },
  };

</script>

<style>
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
    width: 150px;
    height: 150px;
    margin: 20px;
    box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.15);
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

  @media screen and (max-width: 420px) {
    .image {
      display: none;
    }
  }

  @media screen and (min-width: 420px)and (max-width: 768px) {
    .card {
      width: 95vw;
    }

    .card .info {
      width: 40vw;
      justify-content: flex-start;
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
