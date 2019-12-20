<template>
  <div class="scroll-container">
    <p class="row" v-for="(value,index) in poem.split('。')">{{value}}</p>
  </div>
</template>
<script>
export default {
  name: 'ScrollBar',
  data() {
    return {
      poem:
        "滚滚长江东逝水，浪花淘尽英雄。是非成败转头空。青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢。古今多少事，都付笑谈中。滚滚长江东逝水，浪花淘尽英雄。是非成败转头空。青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢。古今多少事，都付笑谈中。滚滚长江东逝水，浪花淘尽英雄。是非成败转头空。青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢。古今多少事，都付笑谈中。"
    }
  },
  methods: {
    // 获取背景定位样式
    getBackgroundStyle () {
      return {
        'background-position': `${this.form.horizontal} ${this.form.vertical}`
      }
    }
  },
  watch: {
    form: {
      handler () {
        this.getBackgroundStyle()
      },
      deep: true
    }
  }
}
</script>
<style lang="stylus" scoped>
  .scroll-container {
  height: 250px;
  border: 1px solid #ddd;
  padding: 15px;
  overflow: auto;
  .row {
    margin: 0;
    line-height: 1.5;
  }

  &::-webkit-scrollbar {
    width: 8px;
    background: white;
  }
  &::-webkit-scrollbar-corner, /* 滚动条角落 */
  &::-webkit-scrollbar-thumb,
  &::-webkit-scrollbar-track {
    border-radius: 4px;
  }
  &::-webkit-scrollbar-corner,
  &::-webkit-scrollbar-track {
    /* 滚动条轨道 */
    background-color: rgba(180, 160, 120, 0.1);
    box-shadow: inset 0 0 1px rgba(180, 160, 120, 0.5);
  }
  &::-webkit-scrollbar-thumb {
    /* 滚动条手柄 */
    background-color: rgb(60, 179, 116);
  }
}
</style>
