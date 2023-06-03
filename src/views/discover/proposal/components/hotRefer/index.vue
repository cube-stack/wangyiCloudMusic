<template>
  <sectionsItem title="热门推荐" @cilckMore="handleClick('全部')">
    <template slot="tags">
      <div class="tags">
        <a
          @click="handleClick(item.name)"
          v-for="(item, index) in tags"
          :key="index"
          >{{ item.name
          }}<span class="line" v-if="!(tags.length - 1 === index)">|</span></a
        >
      </div>
    </template>
    <template slot="contents">
      <playlists :playlists="playlists"> </playlists>
    </template>
  </sectionsItem>
</template>

<script>
import sectionsItem from "@/views/discover/proposal/components/sectionsItem/index.vue";
import playlists from "@/components/playlists/playlists.vue";
import { tags, getHotPlaylist } from "@/api/request.js";
export default {
  name: "hotRefer",
  components: {
    sectionsItem,
    playlists,
  },
  data() {
    return {
      tags: [],
      playlists: [{}],
    };
  },
  methods: {
    getTags() {
      tags().then((res) => {
        this.tags = res.tags.slice(0, 5);
      });
    },
    getHotPlaylist() {
      const params = {
        limit: 8,
      };
      getHotPlaylist(params).then((res) => {
        this.playlists = res.playlists;
      });
    },
    handleClick(cat) {
      this.$router.push({ name: "playlists", query: { cat } });
    },
  },
  created() {
    this.getTags();
    this.getHotPlaylist();
  },
};
</script>

<style lang="scss" scoped>
.tags {
  display: inline-block;
  .line {
    margin: 0 5px;
    overflow: hidden;
  }
}
</style>
