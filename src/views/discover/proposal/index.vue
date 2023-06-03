<template>
  <div>
    <swiper></swiper>
    <div class="article">
      <div class="mainContent">
        <!--热门推荐  -->
        <hotRefer></hotRefer>
        <!-- 新碟上架 -->
        <newRecord></newRecord>
        <!-- 榜单 -->
        <div class="n-bill"></div>
      </div>
      <div class="contentAside"></div>
    </div>
  </div>
</template>

<script>
import login from "@/components/login/index.vue";
// import Swiper from "@/components/Swiper/index.vue";
import Swiper from "@/components/Swiper/swiper.vue";
import playlists from "@/components/playlists/playlists.vue";
import hotRefer from "@/views/discover/proposal/components/hotRefer/index.vue";
import newRecord from "@/views/discover/proposal/components/newRecord/index.vue";
export default {
  name: "proposal",
  data() {
    return {
      tags: [],
      playlists: [],
    };
  },
  components: {
    Swiper,
    playlists,
    login,
    hotRefer,
    newRecord,
  },
  methods: {
    handleClick(cat) {
      this.$router.push({ name: "playlists", query: { cat } });
    },
  },
};
</script>

<style lang="scss" scoped>
.article {
  .mainContent {
    a {
      color: #666666;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
    .n-hot_title {
      a {
        font-size: 10px;
      }

      .tags {
        display: inline-block;
        .line {
          margin: 0 5px;
          overflow: hidden;
        }
      }

      .more {
        margin-top: 8px;
        float: right;
      }

      .under-line {
        width: 100%;
        height: 2px;
        background: #c10d0c;
      }
    }
  }
  .contentAside {
    width: 262px;
  }
}
</style>
