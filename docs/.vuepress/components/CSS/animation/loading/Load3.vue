<style scoped lang="stylus">
.box {
  width: 50px;
  margin:50px auto;
  position: relative;

  div {
    border: 3px solid #fafafa;
    border-top-color: #3eaf7c;
    border-radius: 50%;
    width: 3em;
    height: 3em;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

}
</style>

<template>
  <div class="box">
    <div></div>
  </div>
</template>

<script>
export default {
  name: "Load3",
  data() {
    return {};
  }
};
</script>
