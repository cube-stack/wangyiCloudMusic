<template>
  <div class="background" ref="bakground">
    <div class="content">
      <div class="cover" ref="cover"></div>
      <div class="download"></div>
      <i class="left" @click="prePage"></i>
      <i class="right"  @click="nextPage"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'swiper',
  data() {
    return {
      backgroundUrl: [
        'http://p1.music.126.net/FtBSXfOhXchYz_AnU975AQ==/109951168013898137.jpg',
        'http://p1.music.126.net/Asg-y1cZ7QNlX2SIYQJf6w==/109951168013927538.jpg',
        'http://p1.music.126.net/pFsw-3QoQStGVO7MOY2JVw==/109951168013942316.jpg',
        'http://p1.music.126.net/N8EXz4YPp2s64imMNCVSNA==/109951168013969500.jpg',
        'http://p1.music.126.net/pYCMqM4eI3cKmuEbcSBiAg==/109951168013961776.jpg',
      ],
      photoNo: 1
    }
  },
  methods: {
    nextPage(){
      clearInterval(this.timer)
      this.photoNo++
      this.change()
      this.changeBackground()
    },
    prePage(){
      clearInterval(this.timer)
      this.photoNo=this.photoNo-2
      this.change()
      this.changeBackground()
    },
    change(){
      this.$refs.cover.style.opacity = 1
      this.$refs.cover.style.backgroundImage = `url(${this.backgroundUrl[this.photoNo]}?imageView&quality=89)`
      this.$refs.bakground.style.backgroundImage = `url(${this.backgroundUrl[this.photoNo]}?imageView&blur=40x20)`
      this.photoNo++
    },
    changeBackground() {
      this.timer = setInterval(() => {
        if (this.photoNo > 3) {
          this.photoNo = 0
        }else if(this.photoNo<0){
          this.photoNo = this.backgroundUrl.length-1
        }
        this.$refs.cover.style.opacity = this.$refs.cover.style.opacity - 0.05
        if (!this.$refs.cover.style.opacity || this.$refs.cover.style.opacity < 0) {
          this.change()
        }
      }, 100);
    }
  },
  mounted() {
    this.changeBackground()
  }
}
</script>

<style lang="scss" scoped>
.background {

  height: 285px;

  .content {
    height: 285px;
    display: flex;
    justify-content: center;
    position: relative;
    .cover {
      background-size:720px;
      width: 720px;
      height: 285px;
      cursor: pointer;
    }

    .download {
      width: 262px;
      height: 285px;
      background: url('../../assets/imgs/download.png');
    }
    .left,.right{
      position: absolute;
      width: 37px;
      height: 63px;
      background: url('../../assets/imgs/banner.png') ;  
      cursor: pointer;
    }
    .left{
      top: 50%;
      left: 0;
      transform: translate(550%,-50%);
      background-position: 0 298px ;
      &:hover{
        background-position: 0 228px ;
      }
    }
    .right{
      top: 50%;
      right: 0;
      transform: translate(-550%,-50%);
      background-position: 0 147px ;
      &:hover{
        background-position: 0 77px ;
      }
    }
  }
}
</style>