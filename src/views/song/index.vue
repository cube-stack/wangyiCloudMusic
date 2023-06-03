<template>
  <div class="song article">
    <div class="mainContent">
      <div class="playlist clearfix">
        <!-- 封面 -->
        <div class="header">
          <!-- 左侧封面 -->
          <div class="header-cover">
            <img
              class="header-cover-img"
              :src="songDetail.coverDetail.picUrl"
              alt=""
            />
            <span class="msk"></span>
          </div>
          <!-- 右侧详情 -->
          <div class="cont">
            <div class="cont-info">
              <div class="cont-info-title">
                <i class="icon"></i>
                <h2 class="name">{{ songDetail.name }}</h2>
              </div>
              <!-- 歌手 -->
              <p class="cont-info-det">
                歌手：<a v-for="(item, index) in songDetail.ar" :key="index"
                  >{{ item.name
                  }}<span
                    style="padding: 0 5px"
                    v-if="index + 1 < songDetail.ar.length"
                    >|</span
                  ></a
                >
              </p>
              <!-- 专辑 -->
              <p class="cont-info-det">
                所属专辑：<a>{{ (songDetail.al || {}).name }}</a>
              </p>
              <lyric :id="id"></lyric>
            </div>
          </div>
        </div>
        <!-- 评论 -->
        <comment :id="id" :type="0"></comment>
      </div>
    </div>
    <div class="contentAside"></div>
  </div>
</template>

<script>
import comment from "@/components/comment/index.vue";
import lyric from "@/components/lyric/index.vue";
import { getSongDetail, getLyric } from "@/api/request.js";
export default {
  name: "song",
  components: {
    lyric,
    comment,
  },
  data() {
    return {
      songDetail: {
        coverDetail: {},
      },
    };
  },
  computed: {
    id() {
      return this.$route.query.id;
    },
  },
  methods: {
    getSongDetail() {
      const params = { ids: this.id };
      getSongDetail(params).then((res) => {
        const { al: coverDetail } = res.songs[0];
        this.songDetail = res.songs[0];
        this.songDetail.coverDetail = coverDetail;
      });
    },
    getLyric() {
      const params = {
        id: this.id,
      };
      getLyric(params);
    },
  },
  created() {
    this.getSongDetail();
    this.getLyric();
  },
};
</script>

<style lang="scss" scoped>
.song {
  .playlist {
    margin-bottom: 30px;
    padding: 0 25px;
    .header {
      margin-top: 30px;
      &-cover {
        float: left;
        position: relative;
        margin-right: 30px;
        width: 200px;
        height: 200px;
        text-align: center;
        &-img {
          margin-top: 34px;
          margin-left: -1px;
          width: 130px;
          height: 130px;
        }
        .msk {
          top: -4px;
          left: -4px;
          background-position: -140px -580px;
          width: 208px;
          height: 208px;
        }
      }
    }
    .cont {
      width: 100%;
      &-info {
        margin-left: 230px;
        &-title {
          margin-bottom: 10px;
          .icon {
            float: left;
            background-position: 0 -463px;
            width: 54px;
            height: 24px;
          }
          .name {
            margin-left: 70px;
            width: 100%;
            font-size: 20px;
            line-height: 24px;
            font-weight: normal;
            word-break: break-all;
          }
        }
        &-det {
          font-size: 12px;
          color: #999;
          margin: 15px 0;
          width: 100%;
          a {
            color: #0c73c2;
          }
        }
      }
    }
  }
}
</style>
