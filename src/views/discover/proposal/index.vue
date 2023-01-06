<template>
  <div>
    <swiper></swiper>
    <div class="article">
      <div class="mainContent">
        <!--热门推荐  -->
        <div class="n-hot">
          <div class="n-hot_title">
            <a
              href=""
              style="font-size: 25px; margin-right: 20px; color: #333333"
              >热门推荐</a
            >
            <div class="tags">
              <a
                @click="handleClick(item.name)"
                v-for="(item, index) in tags"
                :key="index"
                >{{ item.name
                }}<span class="line" v-if="!(tags.length - 1 === index)"
                  >|</span
                ></a
              >
            </div>
            <div class="more">
              <a @click="handleClick('全部')">更多</a>
              <i>-></i>
            </div>
            <div class="under-line"></div>
          </div>
          <div class="playlists">
            <playlists :playlists="playlists"> </playlists>
          </div>
        </div>
        <!-- 新碟上架 -->
        <div class="n-new"></div>
        <!-- 榜单 -->
        <div class="n-bill"></div>
      </div>
      <div class="contentAside"></div>
    </div>
  </div>
</template>

<script>
import Swiper from "@/components/Swiper/index.vue";
import playlists from "@/components/playlists/playlists.vue";
import { tags, getHotPlaylist } from "@/api/request.js";
export default {
  name: "proposal",
  data() {
    return {
      tags: [],
      playlists: [{}],
    };
  },
  components: {
    Swiper,
    playlists,
  },
  methods: {
    handleClick(cat) {
      this.$router.push({ name: "playlists", query: { cat } });
    },
  },
  created() {
    tags().then((res) => {
      this.tags = res.data.tags.slice(0, 5);
    });
    const params = {
      limit: 8,
    };
    getHotPlaylist(params).then((res) => {
      this.playlists = res.data.playlists;
    });
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
