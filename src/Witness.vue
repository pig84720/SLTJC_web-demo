<template>
  <div class="container">
    <div class="document">
      <img class="paper" src="https://i.ibb.co/XjP48Rb/1.png" alt />
      <img class="paper" src="https://i.ibb.co/VLcJyPg/2.png" alt />
      <img class="paper" src="https://i.ibb.co/BZLSrxD/3.png" alt />
      <img class="paper" src="https://i.ibb.co/8swPvFC/4.png" alt />
    </div>
  </div>
</template>

<style scoped>
.container {
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
}
.document {
  width: 60%;
  display: flex;
  flex-direction: column;
  height: auto;
}
.paper {
  width: 100%;
  height: auto;
}
</style>