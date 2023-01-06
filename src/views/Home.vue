<template>
  <div class="home">
    <header-tab></header-tab>
    <router-view></router-view>
    <audio
      class="play"
      controls
      style="width: 100%"
      :src="url()"
      autoplay
    ></audio>
  </div>
</template>

<script>
import { mapState } from "vuex";
import HeaderTab from "@/components/HeaderTab/HeaderTab.vue";
export default {
  name: "home",
  components: {
    HeaderTab,
  },
  data() {
    return {
      ...mapState("currentSong", { url: "url" }),
    };
  },
  methods: {},
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
