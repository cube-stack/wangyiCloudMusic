<template>
  <div class="mask">
    <div class="dialog">
      <h2 class="header">
        登录
        <i class="close" @click="handleClose"></i>
      </h2>
      <div class="c">
        <div class="img">
          <img class="img-i" src="@/assets/imgs/qrcode.png" alt="" />
        </div>
        <div class="qr-code">
          <h3 class="qr-code-t">扫码登录</h3>
          <img :src="img" alt="" />
          <span style="display: inline-block">使用网易云音乐APP扫码登录</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getLoginKey, getLoginQr, getLoginCheck } from "@/api/request.js";
export default {
  props: {
    visible: {
      default: false,
      type: Boolean,
    },
  },
  data() {
    return {
      img: "",
      key: "",
      timer: null,
    };
  },
  methods: {
    getQRCode() {
      return new Promise((resolve, reject) => {
        getLoginKey().then((res) => {
          this.key = res.data.data.unikey;
          const params = { key: this.key, qrimg: true };
          getLoginQr(params).then((res) => {
            this.img = res.data.data.qrimg;
            resolve();
          });
        });
      });
    },
    getLoginCheck() {
      const params = {
        key: this.key,
      };
      getLoginCheck(params).then((res) => {
        if (res.data.code === 803) {
          clearInterval(this.timer);
        }
      });
    },
    handleClose() {
      this.$emit("update:visible", false);
    },
  },
  async created() {
    await this.getQRCode();
    this.timer = setInterval(() => {
      this.getLoginCheck();
    }, 1000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
};
</script>

<style lang="scss" scoped>
.mask {
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba($color: #000000, $alpha: 0.5);
  width: 100vw;
  height: 100vh;
  .dialog {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #fff;
    border: 1px solid #d3d3d3;
    margin: auto;
    width: 600px;
    height: 400px;
    border-radius: 3px;
    .header {
      position: relative;
      background: #d2d2d2;
      padding: 10px 20px;
      .close {
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto;
        right: 20px;
        display: inline-block;
        background-position: 0 -95px;
        width: 10px;
        height: 10px;
      }
    }
    .c {
      display: flex;
      margin-top: 30px;
      .img {
        width: 50%;
        text-align: center;
        &-i {
          width: 140px;
        }
      }
      .qr-code {
        margin-left: -50px;
        width: 50%;
        text-align: center;
        .qr-code-t {
          font-size: 18px;
        }
      }
    }
  }
}
</style>
