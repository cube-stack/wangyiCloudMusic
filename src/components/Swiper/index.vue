<template>
  <div class="coverBox" ref="box">
    <ul class="covers clearfix" ref="covers">
      <li class="cover" v-for="(item, index) in backgroundUrl" :key="index">
        <div
          class="o-cover"
          :style="{ backgroundImage: 'url(' + item + '?imageView&blur=40x20)' }"
        >
          <div class="content">
            <div
              class="i-cover"
              :style="{
                backgroundImage: 'url(' + item + '?imageView&quality=89)',
              }"
            >
              <i class="left" @click="prePage"></i>
              <i class="right" @click="nextPage"></i>
            </div>
            <div class="download"></div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "swiper",
  data() {
    return {
      backgroundUrl: [
        "http://p1.music.126.net/FtBSXfOhXchYz_AnU975AQ==/109951168013898137.jpg",
        "http://p1.music.126.net/Asg-y1cZ7QNlX2SIYQJf6w==/109951168013927538.jpg",
        "http://p1.music.126.net/pFsw-3QoQStGVO7MOY2JVw==/109951168013942316.jpg",
        "http://p1.music.126.net/N8EXz4YPp2s64imMNCVSNA==/109951168013969500.jpg",
        "http://p1.music.126.net/pYCMqM4eI3cKmuEbcSBiAg==/109951168013961776.jpg",
      ],
      currentCover: 0,
      timer: null,
    };
  },
  methods: {
    nextPage() {
      this.handleChange();
      clearInterval(this.timer);
      this.changeCover();
    },
    prePage() {
      this.currentCover = this.currentCover - 2;
      if (this.currentCover < -1) {
        this.currentCover = 3;
      }
      this.handleChange();
      clearInterval(this.timer);
      this.changeCover();
    },
    handleChange() {
      const covers = this.$refs.covers;
      this.currentCover++;
      if (this.currentCover > 4) this.currentCover = 0;
      if (covers && covers.style) {
        const width = this.$refs.box.offsetWidth;
        covers.style.left = `-${this.currentCover * width}px`;
      }
    },
    changeCover() {
      clearInterval(this.timer);
      this.timer = setInterval(this.handleChange, 5000);
    },
  },
  mounted() {
    this.changeCover();
  },
};
</script>

<style lang="scss" scoped>
.coverBox {
  position: relative;
  margin: 0 auto;
  width: 100%;
  height: 285px;
  overflow: hidden;
  .covers {
    position: absolute;
    transition: 0.5s;
    top: 0;
    left: 0;
    padding: 0;
    margin: 0;
    width: 500%;
    .cover {
      float: left;
      list-style: none;
      width: 20%;
    }
    .o-cover {
      width: 100%;
      height: 285px;
      .content {
        position: relative;
        margin: 0 auto;
        width: 982px;
        .i-cover {
          position: relative;
          background-size: 720px;
          width: 720px;
          height: 285px;
          cursor: pointer;
        }
        .download {
          position: absolute;
          top: 0;
          right: 0;
          width: 262px;
          height: 285px;
          background: url("../../assets/imgs/download.png");
        }
      }
    }
  }
  .left,
  .right {
    position: absolute;
    top: 50%;
    width: 37px;
    height: 63px;
    background: url("../../assets/imgs/banner.png");
    cursor: pointer;
  }
  .left {
    left: -375px;
    transform: translate(800%, -50%);
    background-position: 0 298px;
    &:hover {
      background-position: 0 228px;
    }
  }
  .right {
    right: -630px;
    transform: translate(-800%, -50%);
    background-position: 0 147px;
    z-index: 99;
    &:hover {
      background-position: 0 77px;
    }
  }
}
</style>
