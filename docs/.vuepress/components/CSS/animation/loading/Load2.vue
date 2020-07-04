<style scoped lang="stylus">
.box {
  width: 50px;
  margin:50px auto;
  position: relative;

  div {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    width: 2em;
  }

  span {
    width: 0.3em;
    height: 1em;
    background-color: #3eaf7c;
  }

  span:nth-of-type(1) {
    animation: grow 1s -0.45s ease-in-out infinite;
  }

  span:nth-of-type(2) {
    animation: grow 1s -0.3s ease-in-out infinite;
  }

  span:nth-of-type(3) {
    animation: grow 1s -0.15s ease-in-out infinite;
  }

  span:nth-of-type(4) {
    animation: grow 1s ease-in-out infinite;
  }

  @keyframes grow {
    0%,
    100% {
      transform: scaleY(1);
    }

    50% {
      transform: scaleY(2);
    }
  }

}
</style>

<template>
  <div class="box">
    <div>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Load2",
  data() {
    return {};
  }
};
</script>
