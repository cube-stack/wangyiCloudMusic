<template>
  <div class="sectionsItem">
    <div class="title">
      <a style="font-size: 25px; margin-right: 20px; color: #333333">{{
        title
      }}</a>
      <slot name="tags"></slot>
      <div class="more">
        <a @click="handleClick">更多</a>
        <i>-></i>
      </div>
      <div class="under-line"></div>
    </div>
    <div>
      <slot name="contents"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "sectionsItem",
  props: {
    title: {
      default: "热门推荐",
      type: String,
    },
  },
  data() {
    return {};
  },
  methods: {
    handleClick() {
      this.$emit("cilckMore");
    },
  },
};
</script>

<style lang="scss" scoped>
.sectionsItem {
  margin-bottom: 40px;
  .title {
    margin-bottom: 10px;
    a {
      font-size: 10px;
    }
    .more {
      margin-top: 8px;
      float: right;
    }

    .under-line {
      width: 100%;
      height: 2px;
      background: #c10d0c;
    }
  }
}
</style>
