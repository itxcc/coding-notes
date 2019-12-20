<style scoped lang="stylus">
.box {
  width: 50px;
  margin:50px auto;
  position: relative;
}
button {
  z-index: 1;
  position: relative;
  font-size: inherit;
  font-family: inherit;
  color: white;
  padding: 0.5em 1em;
  outline: none;
  border: none;
  background-color: #3eaf7c;
  overflow: hidden;
  cursor: pointer;
}

button::after {
  content: '';
  z-index: -1;
  background-color: hsla(0, 0%, 100%, 0.2);
  position: absolute;
  top: -50%;
  bottom: -50%;
  width: 1.25em;
  transform: translate3d(-525%, 0, 0) rotate(35deg);
}

button:hover::after {
  transition: transform .45s ease-in-out;
  transform: translate3d(200%, 0, 0) rotate(35deg);
}


</style>

<template>
  <div class="box">
    <button>itxcc</button>
  </div>
</template>

<script>
export default {
  name: "Button2",
  data() {
    return {};
  }
};
</script>
