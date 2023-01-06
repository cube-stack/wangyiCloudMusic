<template>
  <div class="lyric">
    <pre>{{ lyricvisible.showLyric }}</pre>
    <pre v-if="!ishiden">{{ lyricvisible.hideLyric }}</pre>
    <a
      v-if="lyricvisible.hideLyric.length"
      style="color: #0c73c2"
      @click="handleClick"
      >{{ ishiden ? "展开" : "收起" }}
      <i :class="['icon1', ishiden ? 'unfold' : 'Collapse']"></i
    ></a>
  </div>
</template>

<script>
import { getLyric } from "@/api/request.js";
export default {
  name: "lyric",
  props: {
    id: {
      default: "",
    },
  },
  data() {
    return {
      baseInfo: {
        lrc: "",
        tlyric: "",
      },
      ishiden: true,
    };
  },
  computed: {
    lyric() {
      let lyric = this.baseInfo.lrc;
      if (this.baseInfo.tlyric) {
        lyric = this.baseInfo.tlyric;
      }
      return lyric;
    },
    lyricvisible() {
      const lyric = this.lyric.match(/\[(.+?)\n/g) || [];
      let showLyric = lyric.join("").replace(/\[.*\]/g, "");
      let hideLyric = "";
      if (lyric.length > 14) {
        showLyric = lyric
          .slice(0, 14)
          .join("")
          .replace(/\[.*\]/g, "");
        hideLyric = lyric
          .slice(15, lyric.length)
          .join("")
          .replace(/\[.*\]/g, "");
      }
      return {
        showLyric,
        hideLyric,
      };
    },
  },
  methods: {
    getLyric() {
      const params = {
        id: this.id,
      };
      getLyric(params).then((res) => {
        const {
          lrc: { lyric },
          tlyric: { lyric: tlyric },
        } = res.data;
        this.baseInfo.lrc = lyric;
        this.baseInfo.tlyric = tlyric;
      });
    },
    handleClick() {
      this.ishiden = !this.ishiden;
    },
  },
  created() {
    this.getLyric();
  },
};
</script>

<style lang="scss" scoped>
.lyric {
  margin-bottom: 20px;
  min-height: 250px;
  line-height: 2;
}
.icon1 {
  display: inline-block;
  width: 11px;
  height: 8px;
}
.unfold {
  background-position: -65px -520px;
}
.Collapse {
  background-position: -45px -520px;
}
</style>
