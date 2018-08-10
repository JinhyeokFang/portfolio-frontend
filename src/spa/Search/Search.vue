<template>
  <section>
    <div class="checkbox-container">
      <div class="row">
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
  </section>
</template>

<style scoped>
#game{grid-area: game;}
#life{grid-area: life;}
#things{grid-area: iot;}
#mobile{grid-area: mobile;}
#web{grid-area: web;}
#ai{grid-area: ai;}

.checkbox-container{

  display: grid;
  /* grid-template: 
    'game life iot'
    'mobile web ai';
  grid-gap: 10px; */
  display: flex;  
  flex-direction: column;

  align-items: center;
}
.row{
  width: 0px;
  display: flex;  
  flex-direction: row;
  flex-wrap: wrap;

}
.checkbox{

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

</style>
