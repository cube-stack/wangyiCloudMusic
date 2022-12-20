<template>
  <li class="playlist">
    <div class="cover">
      <img class="cover-img" :src="playListDetail.coverImgUrl" alt="" />
      <a :href="`/playlist?id=${playListDetail.id}`" class="cover-msk"></a>
      <div class="cover-bottom">
        <a href="javascript:;" class="cover-bottom-play play"
          ><i class="el-icon-video-play"></i
        ></a>
        <span class="el-icon-headset"></span>
        <span>{{ playListDetail.trackCount }}</span>
      </div>
    </div>
    <p>
      <a class="cover-dec" :href="`/playlist?id=${playListDetail.id}`">{{
        playListDetail.name
      }}</a>
    </p>
  </li>
</template>

<script>
export default {
  name: "playlistItem",
  props: {
    playListDetail: {
      type: Object,
      defaule: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>
.playlist {
  position: relative;
  margin: 10px;
  width: 140px;
  height: 204px;
  .cover {
    width: 140px;
    height: 140px;
    &-img {
      width: 100%;
      height: 100%;
    }
    &-msk {
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      width: 100%;
      height: 140px;
    }
    &-bottom {
      position: absolute;
      top: 113px;
      background-color: rgba(00, 00, 00, 0.5);
      padding-left: 5px;
      width: 100%;
      height: 27px;
      color: #fff;
      font-size: 14px;
      line-height: 27px;
      box-sizing: border-box;
      .play {
        position: absolute;
        top: 0;
        right: 0px;
        color: #ffffff;
        font-size: 20px;
      }
    }
    &-dec {
      font-size: 13px;
    }
  }
}
</style>
