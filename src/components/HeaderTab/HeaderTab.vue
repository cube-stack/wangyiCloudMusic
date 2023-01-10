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
        <div @click="handleLogin">登录</div>
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderTab",
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
    }
  }
}
</style>
