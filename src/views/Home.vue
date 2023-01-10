<template>
  <div class="home">
    <header-tab @login="handleLogin"></header-tab>
    <router-view></router-view>
    <audio
      class="play"
      controls
      style="width: 100%"
      :src="url()"
      autoplay
    ></audio>
    <login :visible.sync="loginVisible" v-if="loginVisible"></login>
  </div>
</template>

<script>
import login from "@/components/login/index.vue";
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
    };
  },
  methods: {
    handleLogin() {
      this.loginVisible = true;
    },
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
