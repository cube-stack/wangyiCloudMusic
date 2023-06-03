<template>
  <div class="home">
    <header-tab
      @login="handleLogin"
      :loginStatus="loginStatus"
      :avatarUrl="avatarUrl"
    >
    </header-tab>
    <router-view></router-view>
    <audio
      class="play"
      controls
      style="width: 100%"
      :src="url()"
      autoplay
    ></audio>
    <login
      :visible.sync="loginVisible"
      @handleLoginConfirm="handleLoginConfirm"
    ></login>
  </div>
</template>

<script>
import login from "@/components/login/index.vue";
import { getLoginStatus } from "@/api/request.js";
import { mapState } from "vuex";
import HeaderTab from "@/components/HeaderTab/HeaderTab.vue";
export default {
  name: "home",
  components: {
    HeaderTab,
    login,
  },
  data() {
    return {
      ...mapState("currentSong", { url: "url" }),
      loginVisible: false,
      loginStatus: false,
      avatarUrl: "",
    };
  },
  methods: {
    handleLogin() {
      this.loginVisible = true;
    },
    handleLoginConfirm() {
      getLoginStatus().then((res) => {
        this.loginStatus = res.data.code === 200;
        this.avatarUrl = res.data.profile.avatarUrl || "";
      });
    },
  },
  created() {
    this.handleLoginConfirm();
  },
};
</script>
<style lang="scss" scoped>
.home {
  margin-bottom: 54px;
  .play {
    position: fixed;
    bottom: 0;
  }
}
</style>
