<template>
  <div class="head">
    <div class="content">
      <h2 class="header">
        <div
          class="header-item"
          v-for="(item, index) in headerList"
          :key="index"
          @click="handleJump(item)"
        >
          <span>{{ item.name }}</span>
        </div>
        <div @click="handleLogin" class="login" v-if="!loginStatus">登录</div>

        <img :src="avatarUrl" alt="" class="photo" />
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderTab",
  props: {
    avatarUrl: {
      default: "",
      type: String,
    },
    loginStatus: {
      default: false,
      type: Boolean,
    },
  },
  data() {
    return {
      headerList: [
        { name: "发现音乐", pathName: "discover" },
        { name: "我的音乐", pathName: "myMusic" },
        { name: "关注", pathName: "focus" },
        { name: "商城", pathName: "supermarket" },
        { name: "音乐人", pathName: "musicer" },
        { name: "下载客户端", pathName: "download" },
      ],
    };
  },
  methods: {
    handleJump(item) {
      this.$router.push({ name: item.pathName });
    },
    handleLogin() {
      this.$emit("login");
    },
  },
};
</script>

<style lang="scss" scoped>
.head {
  background: #242424;
  margin: 0 auto;
  max-width: 1903px;

  .content {
    width: 1485px;
    margin: 0 auto;
    .header {
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin: 0 auto;
      &-item {
        flex: 1;
        background: #242424;
        height: 60px;
        line-height: 60px;
        font-size: 16px;
        font-weight: 400;
        text-align: center;
        color: #cccccc;
      }
      &-item:hover {
        background: #000000;
        color: #fff;
        cursor: pointer;
      }
      .photo {
        width: 40px;
        height: 40px;
        border: 1px solid #000;
        cursor: pointer;
        border-radius: 20px;
        &:hover {
          transform: scale(1.1);
        }
      }
    }
    .login {
      padding: 20px 20px;
      color: #fff;
      cursor: pointer;
      &:hover {
        background: #000;
      }
    }
  }
}
</style>
