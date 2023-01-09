<template>
  <div class="all-cats">
    <h1 class="h">
      <a class="button" @click="handleChooseCat"><i>全部风格</i></a>
    </h1>
    <ul>
      <catsItem
        v-for="(item, index) in catlist"
        :key="index"
        :catlist="item"
      ></catsItem>
    </ul>
    <i class="iconall"></i>
  </div>
</template>

<script>
import catsItem from "@/views/discover/playlist/components/catsItem.vue";
export default {
  name: "allCats",
  components: {
    catsItem,
  },
  props: {
    catlist: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    handleChooseCat(cat) {
      this.$router.push({ name: "playlists", query: { cat: "全部" } });
    },
  },
};
</script>

<style lang="scss" scoped>
.all-cats {
  position: relative;
  top: 0;
  left: 0;
  background: #fff;
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 1px #d3d3d3;
  margin: 0 auto;
  margin-bottom: 200px;
  width: 600px;
  z-index: 999;
  .h {
    padding-top: 5px;
    padding-bottom: 10px;
    border-bottom: 1px solid #d3d3d3;
    margin: 0;
    .button {
      display: inline-block;
      background-position: 0 -64px;
      margin-left: 30px;
      padding: 4px 10px;
      font-size: 14px;
      text-align: center;
    }
  }
  .iconall {
    position: absolute;
    top: -11px;
    left: 285px;
    width: 24px;
    height: 11px;
    background-position: -48px 0;
    cursor: default;
  }
}
</style>
