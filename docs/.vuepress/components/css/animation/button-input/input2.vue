<style scoped lang="stylus">
.box {
  width: 7.5em;
  margin:50px auto;
  position: relative;
}
input {
  width: 7.5em;
  color: white;
  font-size: inherit;
  font-family: inherit;
  background-color: transparent;
  border: 1px solid transparent;
  border-bottom-color: rgba(53,162,105,.2);
}

input:focus {
  outline: none;
}

input::placeholder {
  color: #666;
}

span {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background-color: #3eaf7c;
  transform-origin: bottom right;
  transform: scaleX(0);
  transition: transform 0.5s ease;
}

input:focus ~ span {
  transform-origin: bottom left;
  transform: scaleX(1);
}

</style>

<template>
  <div class="box">
    <input type="text" placeholder="Input Underline">
    <span></span>
  </div>
</template>

<script>
export default {
  name: "Input2",
  data() {
    return {};
  }
};
</script>
