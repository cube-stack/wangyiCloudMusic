<template>
  <li class="cats-item">
    <div class="l">
      <i class="icon" :style="getBKGPosition(catlist.position)"></i
      >{{ catlist.name }}
    </div>
    <div class="r">
      <ul>
        <li class="left" v-for="(item, index) in catlist.catlist" :key="index">
          <a class="cat-t" @click="handleChooseCat(item.name)">
            {{ item.name }}</a
          ><span class="cat-t" style="padding: 0 10px">|</span>
        </li>
      </ul>
    </div>
  </li>
</template>

<script>
export default {
  name: "catsItem",
  props: {
    catlist: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {};
  },
  methods: {
    getBKGPosition({ x = "0px", y = "0px" }) {
      return { "background-position": `${x} ${y}` };
    },
    handleChooseCat(cat) {
      this.$router.push({ name: "playlists", query: { cat, key: Date.now() } });
    },
  },
};
</script>

<style lang="scss" scoped>
.cats-item {
  display: flex;
  //   padding: 5px 10px;
  font-size: 14px;
  .l {
    display: inline;
    padding: 5px 0 5px 20px;
    width: 20%;
    font-weight: 600;
    box-sizing: border-box;
    vertical-align: middle;
    .icon {
      display: inline-block;
      background-position: -20px -735px;
      width: 23px;
      height: 23px;
      margin-right: 8px;
      margin-bottom: 4px;
      vertical-align: middle;
      cursor: default;
    }
  }
  .r {
    padding: 5px 0 5px 10px;
    border-left: 1px solid #d3d3d3;
    width: 80%;
    line-height: 23px;
    vertical-align: middle;
    .cat-t {
      color: #000;
      font-size: 13px;
    }
  }
}
</style>
