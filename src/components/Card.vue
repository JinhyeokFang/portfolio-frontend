<template>
  <div class="card">
    <div class="info">
      <div>
        <h1 class="title">버블팝</h1>
        <p class="contest">2017 Smarteen App + Challenge 특별상 수상</p>
        <div class="overview">
            <p>{{overview}}</p>
        </div>
      </div>
      <div class="details">
        <tag :groups="groups"></tag>
        <div class="team">
          <span>홍길동</span>
          <span>홍길동</span>
          <span>홍길동</span>
          <span>홍길동</span>
        </div>
      </div>
    </div>
    <div class="image">
      <img src="http://via.placeholder.com/150x150" alt="">
    </div>
  </div>
</template>

<script>
  import Tag from './Tag.vue';
  export default {
    name: 'work-card',
    props: ['overview', 'groups'],
    components: {
      'tag': Tag,
    },
  };

</script>

<style>
  .card {
    width: 650px;
    height: 250px;
    margin: 10px;
    border-radius: 10px;
    box-shadow: 0px 10px 30px 0 rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    text-align: left;
  }

  .card .info {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 380px;
    margin: 20px 0px 20px 20px;
  }
  .card .info .title{
      font-size: 2em;
  }
  .card .info .contest {
    margin: 5px 0px;
  }

  .card .info .overview {
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .card .image {
    width: 150px;
    height: 150px;
    margin: 20px;
    box-shadow: 0px 10px 30px 0 rgba(0, 0, 0, 0.15);
  }

  .details {
    margin-top: 10px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  .details .team {
    width: 200px;
    padding: 5px;
  }


  @media screen and (max-width: 700px) {
    .card {
      width: 420px;
      height: 220px;
    }
    .card .info {
      width: 200px;
      justify-content: flex-start;
    }
    .overview {
      display: none;
    }
  }

</style>
