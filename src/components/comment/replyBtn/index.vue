<template>
  <div class="reply-btn">
    <i class="icon1 emo"></i>
    <i class="icon1 at"></i>
    <button class="button reply">回复</button>
  </div>
</template>

<script>
export default {
  name: "replyBtn",
};
</script>

<style lang="scss" scoped>
.reply-btn {
  display: flex;
  margin-top: 3px;
  .emo {
    background-position: -40px -490px;
    margin-right: 10px;
    width: 18px;
    height: 18px;
  }
  .at {
    background-position: -60px -490px;
    width: 18px;
    height: 18px;
  }
  .reply {
    border: 0;
    margin-left: auto;
    width: 46px;
    height: 25px;
    color: #fff;
    background-position: -84px -64px;
    &:hover {
      background-position: -84px -94px;
    }
  }
}
</style>
