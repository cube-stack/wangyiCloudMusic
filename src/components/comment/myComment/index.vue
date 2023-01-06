<template>
  <div class="my-comment">
    <!-- 头像 -->
    <div class="img">
      <img
        src="https://p4.music.126.net/OPAZXwa860GPw1M-SWw5EQ==/18547661650973190.jpg?param=50y50"
        alt=""
      />
    </div>
    <!-- 评论 -->
    <div class="comment">
      <textarea class="comment-text" v-model="comment" placeholder="评论" />
      <replyBtn></replyBtn>
      <div class="tri">
        <span class="tri-o">◆</span>
        <span class="tri-i">◆</span>
      </div>
    </div>
  </div>
</template>

<script>
import replyBtn from "@/components/comment/replyBtn/index.vue";
export default {
  name: "myComment",
  components: {
    replyBtn,
  },
  data() {
    return {
      comment: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.my-comment {
  margin: 20px 0;
  display: flex;
  .img {
    margin-top: -5px;
  }
  .comment {
    position: relative;
    margin-left: 15px;
    flex-grow: 1;
    &-text {
      resize: none;
      padding: 5px;
      width: 100%;
      height: 60px;
      font-size: 12px;
      box-sizing: border-box;
      &:focus {
        outline: none;
      }
    }
    .tri {
      position: absolute;
      top: -1px;
      left: -7px;
      width: 20px;
      height: 22px;
      overflow: hidden;
      font-size: 24px;
      span {
        display: block;
      }
      &-o {
        color: #000;
      }
      &-i {
        margin: -31px 0 0 1px;
        color: #fff;
      }
    }
  }
}
</style>
