<template>
  <div class="root">
    <div class="card-container">
      <div class="card">
        <div class="info">
          <h1>버블팝</h1>
          <p class="contest">2017 Smarteen App + Challenge 특별상 수상</p>
          <div class="overview">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis...
            </p>
          </div>

          <div class="details">
              <div class="tags">
                  <div class="tag">생활</div>
                  <div class="tag">생활</div>                  
              </div>
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
      <div class="card">
        <div class="info">
          <h1>버블팝</h1>
          <p class="contest">2017 Smarteen App + Challenge 특별상 수상</p>
          <p class="overview">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis...
          </p>
          <div class="details">
              <div class="tags">
                  <div class="tag">생활</div>
                  <div class="tag">생활</div>                  
              </div>
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
    </div>

  </div>
</template>

<script>
export default {
  name: 'Work',
  data () {
    return {
    }
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-container{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
}
.card{
    width: 600px;
    height: 280px;
    margin: 10px;
    border-radius: 10px;
    box-shadow: 0px 10px 30px 0 rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: row;
    text-align: left;
}
.card .info{
    margin: 30px 0px 30px 30px;
}
.card .info .contest{
    margin: 5px 0px;
}
.card .info .overview{
    height: 4em;
    overflow: hidden;     
    text-overflow: ellipsis;     
}
.card .image{
    width: 150px;
    height: 150px;
    margin: 20px;
    box-shadow: 0px 10px 30px 0 rgba(0, 0, 0, 0.15);
}
.details{
    margin-top:10px;    
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}
.details .team{
    width: 200px;
    padding: 5px;
}
.details .tags{
    display: flex;
    margin-right: 10px;
}
.tag{
    width: 60px;
    height: 30px;
    padding: 5px;
    margin-right: 5px;    
    border-radius: 20px;
    color: #ff960e;
    border: 1px solid #ff960e;
    text-align: center;
}
@media screen and (max-width: 700px) {
    .card{
        width: 420px;
        height: 250px;
    }
    .overview{
        display: none;  
    }

}
</style>
