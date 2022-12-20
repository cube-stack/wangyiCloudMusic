<template>
  <div class="playlist clearfix">
    <!-- 封面 -->
    <div class="header">
      <!-- 左侧封面 -->
      <div class="header-cover">
        <img
          class="header-cover-img"
          :src="playlistDetail.coverImgUrl"
          alt=""
        />
        <span class="msk"></span>
      </div>
      <!-- 右侧详情 -->
      <div class="cont">
        <div class="cont-info">
          <div class="cont-info-title">
            <i class="icon"></i>
            <h2 class="name">{{ playlistDetail.name }}</h2>
          </div>
          <div class="cont-info-aut">
            <img class="cover" :src="creator.avatarUrl" alt="" />
            <span class="aut">
              <a href="">{{ creator.nickname }}</a>
              <span class="date" style="color: #999"> 2020-09-18 创建</span>
            </span>
          </div>
          <tags :tags="creator.expertTags"> </tags>
          <introduce :text="playlistDetail.description"></introduce>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {} from "@/api/request.js";
import tags from "@/components/tags/tags.vue";
import introduce from "@/components/introduce/index.vue";
import songsList from "@/components/songsList/index.vue";
export default {
  name: "playlistDetail",
  props: {
    playlistDetail: {
      typd: Object,
      default: () => {},
    },
  },
  components: {
    tags,
    introduce,
    songsList,
  },
  computed: {
    creator() {
      const { creator } = this.playlistDetail;
      return creator || {};
    },
  },
};
</script>

<style lang="scss" scoped>
.playlist {
  margin-bottom: 30px;
  .header {
    margin-top: 30px;
    &-cover {
      float: left;
      position: relative;
      margin-right: 30px;
      width: 200px;
      height: 200px;
      &-img {
        width: 100%;
        height: 100%;
      }
      .msk {
        top: -4px;
        left: -4px;
        display: block;
        background-position: 0 -2780px;
        width: 208px;
        height: 208px;
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
            background-position: 0 -243px;
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
        &-aut {
          margin-bottom: 10px;
          width: 100%;
          overflow: hidden;
          .cover {
            float: left;
            margin-right: 10px;
            width: 35px;
            height: 35px;
            cursor: pointer;
          }
          .aut {
            float: left;
            line-height: 35px;
            a {
              color: #0c73c2;
            }
          }
        }
      }
    }
  }
}
</style>
