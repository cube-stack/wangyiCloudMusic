<template>
  <div>
    <el-table
      :data="showData"
      style="width: 100%"
      class="tables"
      :header-cell-class-name="tableHeaderClass"
      :row-class-name="tableRowClass"
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
          <a v-for="(it, idx) in row.ar" :key="idx" href="javascript:;">{{
            it.name
          }}</a>
        </template>
        <template #default="{ row }" v-else>
          <span v-if="item.code === 'duration'">{{ row[item.code] }}</span>
          <a href="javascript:;" v-else>{{ row[item.code] }}</a>
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
  },
  methods: {
    handlePlayMusic(row) {
      this.$store.dispatch("currentSong/palyMusic", row.id);
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
  padding: 0;
  border-top: 2px solid rgba($color: #c20c0c, $alpha: 1);
}

::v-deep .header-border {
  border-left: 1px solid rgba($color: #000000, $alpha: 0.2);
}
</style>
