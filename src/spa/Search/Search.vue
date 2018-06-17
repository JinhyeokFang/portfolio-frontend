<template>
  <section>
    <div class="custom-checkbox">
      <input type="checkbox" id="checkbox_1">
      <label for="game">게임</label>
    </div>
  </section>
</template>

<style scoped>
.custom-checbox:checked + label::before {
    background-color: #f2f2f2;
}

.custom-checbox:checked + label::after {
    display: block;
    position: absolute;
    top: 0.2rem;
    left: 0.375rem;
    width: 0.25rem;
    height: 0.5rem;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    content: '';
}


</style>
