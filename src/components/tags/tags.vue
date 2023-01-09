<template>
  <div class="tags">
    <span class="left">标签：</span>
    <a
      href=""
      v-for="(item, index) in tags"
      :key="index"
      class="tag button2 left"
    >
      <i class="button2">
        {{ item }}
      </i>
    </a>
  </div>
</template>

<script>
export default {
  name: "tags",
  props: {
    tags: {
      default: () => [],
      type: Array,
    },
  },
};
</script>

<style lang="scss" scoped>
.tags {
  margin-bottom: 10px;
  line-height: 22px;
  //清除浮动
  overflow: hidden;

  .tag {
    padding-right: 10px;
    margin-right: 10px;
  }
  .button2 {
    background-position: right -27px;
    text-decoration: none;
    i {
      background-position: 0 3px;
      padding: 4px 0px;
      padding-left: 10px;
      height: 22px;
      line-height: 22px;
    }
  }
  .button2:hover {
    background-position: right -1430px;
    i {
      background-position: 0 -1397px;
    }
  }
}
</style>
