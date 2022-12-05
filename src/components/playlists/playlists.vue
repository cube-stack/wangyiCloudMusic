<template>
  <ul class="playlists">
    <playlist-item
      v-for="item in playlists"
      :key="item.id"
      :playListDetail="item"
    >
    </playlist-item>
  </ul>
</template>

<script>
import playlistItem from "@/components/playlistItem/playlistItem.vue";
export default {
  name: "playlists",
  props: {
    playlists: {
      default: () => [{}],
      type: Array,
    },
  },
  components: {
    playlistItem,
  },
};
</script>

<style lang="scss" scoped>
.playlists {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;
}
</style>
