<template>
  <div class="article">
    <div class="mainContent">
      <playlistDetail :playlistDetail="playlistDetail"></playlistDetail>
      <songsList
        :songList="playlistDetail.tracks || []"
        :tableHeader="tableHeader"
      ></songsList>
    </div>
    <div class="contentAside"></div>
  </div>
</template>

<script>
import playlistDetail from "@/views/playlist/components/playlistDetail.vue";
import songsList from "@/components/songsList/index.vue";
import { getPlaylistDetail } from "@/api/request.js";
export default {
  name: "playlist",
  components: {
    playlistDetail,
    songsList,
  },
  data() {
    return {
      playlistDetail: {},
      tableHeader: [
        { label: "歌曲标题", code: "name", width: 300 },
        { label: "时长", code: "duration" },
        { label: "歌手", code: "singer" },
        { label: "专辑", code: "album" },
      ],
    };
  },
  computed: {
    id() {
      return this.$route.query.id;
    },
  },
  created() {
    getPlaylistDetail({ id: this.id }).then((res) => {
      this.playlistDetail = res.data.playlist;
    });
  },
};
</script>

<style lang="scss" scoped></style>
