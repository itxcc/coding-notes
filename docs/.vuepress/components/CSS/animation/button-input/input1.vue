<style scoped lang="stylus">
.box {
  width: 7.5em;
  margin:50px auto;
  position: relative;
}
input {
  width: 6.5em;
  color: white;
  font-size: inherit;
  font-family: inherit;
  background-color: rgb(240,240,240);
  padding: 0.35em 0.45em;
  border: 1px solid transparent;
  transition: background-color 0.3s ease-in-out;
}

input:focus {
  outline: none;
}

input::placeholder {
  color: #666;
}

span {
  position: absolute;
  background-color: #3eaf7c;
  transform-origin: center;
  transition: transform 0.5s ease;
}

.bottom,
.top {
  height: 1px;
  left: 0;
  right: 0;
  transform: scaleX(0);
}

.left,
.right {
  width: 1px;
  top: 0;
  bottom: 0;
  transform: scaleY(0);
}

.top {
  top: 0;
}

.bottom {
  bottom: 0;
}

.left {
  left: 0;
}

.right {
  right: 0;
}

input:focus ~ .top, input:focus ~ .bottom {
  transform: scaleX(1);
}

input:focus ~ .left, input:focus ~ .right {
  transform: scaleY(1);
}

</style>

<template>
  <div class="box">
    <input type="text" placeholder="Input Outline">
    <span class="bottom"></span>
    <span class="right"></span>
    <span class="top"></span>
    <span class="left"></span>
  </div>
</template>

<script>
export default {
  name: "Input1",
  data() {
    return {};
  }
};
</script>
