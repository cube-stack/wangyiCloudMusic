<template>
  <div class="songs-list">
    <div class="title clearfix" v-if="titleVisible">
      <h2 class="left">歌曲列表</h2>
      <span class="total left">{{ songsTotal + "首歌" }}</span>
      <span class="play-count right" style="margin-top: 9px"
        >播放：<strong style="color: #c20c0c; font-weight: 600">{{
          playCount
        }}</strong
        >次</span
      >
    </div>
    <el-table
      :data="showData"
      style="width: 100%"
      class="tables"
      :header-cell-class-name="tableHeaderClass"
      :row-class-name="tableRowClass"
      :cell-style="{ padding: '3px 0' }"
    >
      <el-table-column type="index" width="50" align="center"></el-table-column>
      <el-table-column width="40">
        <template #default="{ row }">
          <i class="table play-icon" @click="handlePlayMusic(row)"></i>
        </template>
      </el-table-column>
      <el-table-column
        v-for="(item, index) in tableHeader"
        :key="index"
        :label="item.label"
        :prop="item.code"
        :width="item.width || 'auto'"
        show-overflow-tooltip
      >
        <template #default="{ row }" v-if="item.code === 'singer'">
          <a
            v-for="(it, idx) in row.ar"
            :key="idx"
            @click="handleClick(row, item)"
            >{{ it.name }}</a
          >
        </template>
        <template #default="{ row }" v-else>
          <span v-if="item.code === 'duration'">{{ row[item.code] }}</span>
          <a @click="handleClick(row, item)" v-else>{{ row[item.code] }}</a>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { timeFormat } from "@/utils/timeFormat.js";
export default {
  name: "songsList",
  props: {
    songList: {
      default: () => [],
      default: Array,
    },
    tableHeader: {
      default: () => [],
      default: Array,
    },
    titleVisible: {
      default: true,
      type: Boolean,
    },
    playCount: {
      default: 0,
      type: Number,
    },
  },
  data() {
    return {};
  },
  computed: {
    showData() {
      const showData = this.songList.map((item) => ({
        ...item,
        duration: timeFormat(item.dt || 0),
        album: item.al.name || "",
      }));
      return showData;
    },
    songsTotal() {
      return this.showData.length;
    },
  },
  methods: {
    handlePlayMusic(row) {
      this.$store.dispatch("currentSong/palyMusic", row.id);
    },
    handleClick(row, item) {
      const ROUTE_MAP = {
        name: "song",
      };
      this.$router.push({ name: ROUTE_MAP[item.code], query: { id: row.id } });
    },
    //奇数行置灰
    tableRowClass({ row, rowIndex }) {
      if (rowIndex % 2 === 0) {
        return "odd-row";
      } else {
        return "";
      }
    },
    tableHeaderClass({ row, columnIndex }) {
      const index = row.findIndex((item) => !!item.property);
      if (columnIndex >= index) {
        return "table table-header header-border";
      } else {
        return "table table-header";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
// >子元素选择器
::v-deep .tables tbody tr:hover > td {
  background-color: unset !important;
}
::v-deep .odd-row {
  background-color: #f7f7f7;
}
::v-deep .play-icon {
  display: block;
  background-position: 0 -103px;
  width: 17px;
  height: 17px;
  cursor: pointer;
}
::v-deep .play-icon:hover {
  background-position: 0 -128px;
}
::v-deep .table-header {
  background-position: 0 0;
  height: 36px;
  padding: 0 0 2px 0;
  border-top: 2px solid rgba($color: #c20c0c, $alpha: 1);
  border-bottom: 2px solid rgba($color: #999, $alpha: 0.3) !important;
}

::v-deep .header-border {
  border-left: 1px solid rgba($color: #999, $alpha: 0.2);
}

.title {
  margin-bottom: 10px;
  h2 {
    font-size: 20px;
    font-weight: normal;
  }
  .total {
    margin: 9px 0 0 20px;
  }
}
</style>
