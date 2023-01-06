<template>
  <div class="comment-item">
    <div class="cover">
      <img class="avatar" :src="user.avatarUrl || ''" alt="" />
    </div>
    <div class="comment">
      <span class="nickname">{{ user.nickname }}</span>
      <span class="text">：{{ commitDetail.content }}</span>
      <div class="reply">
        <span class="date">{{ commitDetail.timeStr }}</span>
        <span class="liked-count" @click="handleLike">
          <i class="icon2 common" ref="icon"></i>{{ "(" + likedCount + ") " }}
        </span>
        <span style="padding: 0 7px">|</span>
        <span class="areply" @click="handleReply">回复</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "commentItem",
  props: {
    commitDetail: {
      default: () => {},
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      likedCount: "",
      isLiked: false,
    };
  },
  methods: {
    handleLike() {
      this.likedCount = this.isLiked
        ? this.likedCount - 1
        : this.likedCount + 1;
      this.$refs.icon.classList.toggle("liked");
      this.$refs.icon.classList.toggle("common");
      this.isLiked = !this.isLiked;
    },
    handleReply() {},
  },
  computed: {
    user() {
      return this.commitDetail.user;
    },
  },
  created() {
    this.likedCount = this.commitDetail.likedCount;
  },
};
</script>

<style lang="scss" scoped>
.comment-item {
  display: flex;
  margin: 10px 0;
  .comment {
    flex-grow: 1;
  }
  .cover {
    margin-right: 10px;
  }
  .text {
    line-height: 18px;
    letter-spacing: 0.1px;
  }
  .reply {
    display: flex;
    margin: 18px 0 10px;
    color: #999;
    .liked-count {
      margin-left: auto;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
      .icon2 {
        display: inline-block;
        width: 15px;
        height: 14px;
        margin-right: 5px;
        vertical-align: -1px;
      }
      .common {
        background-position: -150px 0;
        &:hover {
          background-position: -150px -20px;
        }
      }
      .liked {
        background-position: -170px 0;
      }
    }
    .areply {
      line-height: 16px;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
