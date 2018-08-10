<template>
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
              <input type="checkbox" id="game">
              <label for="game">게임</label>
          </div>
          <div class="checkbox">
              <input type="checkbox" id="life">
              <label for="life">생활</label>
          </div>
          <div class="checkbox">
              <input type="checkbox" id="things">
              <label for="things">IoT</label>
          </div>       
          <div class="checkbox">
              <input type="checkbox" id="mobile">
              <label for="mobile">모바일</label>
          </div>
          <div class="checkbox">
              <input type="checkbox" id="web">
              <label for="web">웹</label>
          </div>
          <div class="checkbox">
              <input type="checkbox" id="ai">
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
</template>

<style scoped>
.main-container{
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.header{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 20px;
  margin-bottom: 20px;
}
.header h1{
  font-size: 36px;
}
.bar {
  width: 220px;
  height: 10px;
  background-color: #000000;
}
.row{
  height: 360px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
}
.row2{
  flex:2;
}

.checkbox-container{
  display: flex;  
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;

}
.checkbox-row{
  width: 330px;
  display: flex;  
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.checkbox{
  margin: 2px;
}
.checkbox:nth-child(1){
  margin-right: 15px;
}
.checkbox:nth-child(3){
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

.checkbox label::before{
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

.btn-container{
  width: 100%;
}
.search-btn{

  width: 100%;
  height: 50px;
  background-color: #fff;
  border: 2px solid black;
  font-size: 15px;
   box-shadow: 0px 10px 20px 0 rgba(0, 0, 0, 0.1);
}
</style>
