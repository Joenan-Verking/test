<template>
  <div id="demo">
    <CardBox></CardBox>
  </div>
</template>

<script>
  import CardBox from "./components/CardBox.vue";

  export default {
    name: "Demo",
    components: {
      CardBox,
    },
  };
</script>

<style>
  #demo {
    width: 100vw;
    height: 100vh;
    display: flex;
    padding: 0;
    margin: 0;
    justify-content: center;
    align-items: center;
    background: url('./assets/background.jpg') fixed no-repeat;
    background-size: cover;
  }
</style>