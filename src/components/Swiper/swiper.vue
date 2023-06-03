<template>
  <swiper :options="swiperOption" ref="mySwiper">
    <swiper-slide v-for="(item, index) in backgroundUrl" :key="index">
      <div
        class="content"
        :style="{ backgroundImage: 'url(' + item + '?imageView&blur=40x20)' }"
      >
        <img class="img" :src="item + '?imageView&quality=89'" alt="" />
        <div class="download"></div>
      </div>
    </swiper-slide>
    <!-- 底部按钮 -->
    <div class="swiper-pagination" slot="pagination"></div>
    <!-- // 上一张按钮 -->
    <div class="swiper-button-prev" slot="button-prev"></div>
    <!-- // 下一张按钮 -->
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</template>

<script>
export default {
  name: "mswiper",
  data() {
    return {
      swiperOption: {
        spaceBetween: 15, // 图片之间的间距
        centeredSlides: true, // 居中还是从图1开始
        slidesPerView: "auto", // 一屏幕显示几个? 数字或者默认  auto 自动。
        notNextTick: true, // true:加载后允许触发事件 false:加载后不可以触发事件
        loop: true, // 循环吗
        initialSlide: 0, // 从第几个开始
        autoplay: {
          delay: 5000, // 等5秒下一个
          disableOnInteraction: false, // 中间滑动一下，取消自动吗？
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        }, // 下按钮
        speed: 800, // 滑动时候动画的速度
        paginationClickable: true, // 下面按钮让点吗
        navigation: {
          prevEl: ".swiper-button-prev", // 左侧按钮
          nextEl: ".swiper-button-next", // 右侧按钮
        },
        effect: "fade", // 渐入效果
        watchSlidesProgress: true, // 开启这个参数来计算每个slide的progress
        watchSlidesVisibility: true, // 先要开启watchSlidesProgress参数，如果开启watchSlidesVisibility，则会在每个slide增加一个指示该slide的progress值得classname
        // autoHeight: true  // 图片高度自适应
      },
      backgroundUrl: [
        "http://p1.music.126.net/FtBSXfOhXchYz_AnU975AQ==/109951168013898137.jpg",
        "http://p1.music.126.net/Asg-y1cZ7QNlX2SIYQJf6w==/109951168013927538.jpg",
        "http://p1.music.126.net/pFsw-3QoQStGVO7MOY2JVw==/109951168013942316.jpg",
        "http://p1.music.126.net/N8EXz4YPp2s64imMNCVSNA==/109951168013969500.jpg",
        "http://p1.music.126.net/pYCMqM4eI3cKmuEbcSBiAg==/109951168013961776.jpg",
      ],
    };
  },
  methods: { toSeeDetail() {} },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  justify-content: center;
  height: 285px;
  .img {
  }
  .download {
    width: 262px;
    height: 285px;
    background: url("../../assets/imgs/download.png");
  }
}
</style>
