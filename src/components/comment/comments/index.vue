<template>
  <div class="comments">
    <h2 class="title" v-if="title">{{ title }}</h2>
    <commentItem
      v-for="(item, index) in hotComments"
      :key="index"
      :commitDetail="item"
    ></commentItem>
  </div>
</template>

<script>
import commentItem from "@/components/comment/commentItem/index.vue";
export default {
  name: "comments",
  props: {
    title: {
      default: "",
      type: String,
    },
    hotComments: {
      default: () => [],
      type: Array,
    },
  },
  components: {
    commentItem,
  },
};
</script>

<style lang="scss" scoped>
.comments {
  margin-top: 60px;
  .title {
    height: 30px;
    font-weight: 600;
    border-bottom: 1px solid #cfcfcf;
  }
}
</style>
