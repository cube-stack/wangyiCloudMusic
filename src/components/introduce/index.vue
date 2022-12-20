<template>
  <div class="introduce">
    <p class="text" v-if="open">{{ "介绍：" + text }}</p>
    <p class="text" v-else>{{ "介绍：" + textc }}</p>
    <div class="open">
      <a href="javascript:;" @click="handleClick">{{
        open ? "收起" : "展开"
      }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "introduce",
  props: {
    text: {
      default: "",
      type: String,
    },
  },
  data() {
    return {
      open: false,
    };
  },
  methods: {
    handleClick() {
      this.open = !this.open;
    },
  },
  computed: {
    textc() {
      const index = this.text.search(/\n/);
      let textc = this.text.slice(0, index).split("");
      textc.splice(textc.length - 1, 1, "...");
      return textc.join("");
    },
  },
};
</script>

<style lang="scss" scoped>
.introduce {
  .text {
    white-space: pre-wrap;
    line-height: 22px;
    overflow: hidden;
    word-break: break-all;
  }
  .open {
    text-align: right;
    a {
      color: #0c73c2;
    }
  }
}
</style>
