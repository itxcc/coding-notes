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
}

button:hover {
  cursor: pointer;
}

button::before {
  content: '';
  z-index: -1;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border: 4px solid #3eaf7c;
  transform-origin: center;
  transform: scale(1);
}

button:hover::before {
  transition: all 0.75s ease-in-out;
  transform-origin: center;
  transform: scale(1.75);
  opacity: 0;
}

</style>

<template>
  <div class="box">
   <button>itxcc</button>
  </div>
</template>

<script>
export default {
  name: "Button1",
  data() {
    return {};
  }
};
</script>
