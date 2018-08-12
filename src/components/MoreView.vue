<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <button class="modal-default-button" @click="$emit('close')">X</button>
          <div class="col">
            <div class="image">
              <img src="http://via.placeholder.com/150x150" alt="">
            </div>
            <div class="info">
              <div>
                <h1 class="title">{{projectName}}</h1>
                <p class="contest">{{contestInfo.type.main}} {{contestInfo.rate}}</p>

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
            <div class="details" v-for="(item1, index) in qualification" :key="index">
              <div v-for="(item2, index) in item1.contents" :key="index" style="width:180px">
                <div v-if="item2.content.length!==0">
                  <h1>{{item2.title}}</h1>
                  <tag v-if="item2.content.indexOf(',') > -1" :groups="item2.content.split(', ')"></tag>
                  <tag v-else :groups="[item2.content]"></tag>
                </div>

              </div>
            </div>
          </div>
          <h1>기획 설명</h1>
          <hr>
          <div class="overview">
            <p v-html="overview.replace(/\n/g,'<br>')"></p>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import Tag from './Tag.vue';

  export default {
    name: 'MoreView',
    props: ['overview', 'groups', 'team', 'projectName', 'contestInfo', 'qualification'],
    components: {
      'tag': Tag,
    },
  };
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 900px;
  margin: 0 auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.col {
  display: flex;
  flex-direction: row;
  margin: 15px 15px 0 15px;
}

.card .info {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
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

.more-btn {
  width: 120px;
  height: 30px;
}
</style>
