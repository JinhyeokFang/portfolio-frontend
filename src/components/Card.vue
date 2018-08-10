<template>
  <div class="card">
    <div class="col">
      <div class="info">
        <div>
          <h1 class="title">{{projectName}}</h1>
          <p class="contest">{{contestInfo.type.main}} {{contestInfo.rate}}</p>
          <div class="overview">
            <p v-html="overview"></p>
          </div>
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
      <div>
        <button class="more-btn">More</button>
      </div>
    </div>
  </div>

</template>

<script>
  import Tag from './Tag.vue';

  export default {
    name: 'work-card',
    props: ['overview', 'groups', 'team', 'projectName', 'contestInfo'],
    components: {
      'tag': Tag,
    },
  };

</script>

<style>
  .card {
    width: 600px;
    height: 250px;
    margin: 10px;
    border-radius: 10px;
    box-shadow: 0px 10px 30px 0 rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
  }
  .col{
    display: flex;
    flex-direction: row;
    margin: 15px 15px 0px 15px;
  }

  .card .info {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 20px 0px 20px 20px;
  }

  .card .info .title {
    font-size: 2rem;
  }

  .card .info .contest {
    margin: 5px 0px;
  }

  .card .image {
    width: 150px;
    height: 150px;
    margin: 20px;
    box-shadow: 0px 10px 30px 0 rgba(0, 0, 0, 0.15);
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
  .more-btn{
    width: 120px;
    height: 30px;
  }

  @media screen and (max-width: 700px) {
    .card {
      width: 420px;
      height: 250px;
    }

    .card .info {
      width: 200px;
      justify-content: flex-start;
    }
    .card .info .title{
      font-size: 1.5rem;
    }
    .overview {
      display: none;
    }
  }

</style>
