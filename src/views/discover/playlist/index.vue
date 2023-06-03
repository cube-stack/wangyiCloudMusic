<template>
  <div class="palylists" @click="handleClick">
    <div class="article">
      <!-- 分类搜索 -->
      <div class="header">
        <h1 class="type">{{ cat }}</h1>
        <button
          data-msk="false"
          class="button2 btn-right"
          @click="
            () => {
              dialogVisible = !dialogVisible;
            }
          "
        >
          <span class="button2 btn-left" data-msk="false"
            >选择分类<em class="icon1" data-msk="false"></em
          ></span>
        </button>
        <button class="button hot" @click.once="handleGetHot">
          <a class="hot-t">热门</a>
        </button>
        <!-- 分类弹窗 -->
        <allCats
          class="cats"
          data-msk="false"
          :catlist="catlist"
          v-if="dialogVisible"
        ></allCats>
      </div>
    </div>
    <!-- 歌单集合 -->
    <playlists :playlists="playlists" class="article playlist"></playlists>
    <div class="article">
      <el-pagination
        class="pagination"
        background
        layout="prev, pager, next"
        :page-count="100"
        :hide-on-single-page="true"
        @current-change="handleChangePage"
        :total="total"
        :page-size="pageSize"
        :current-page="pageNo"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import playlists from "@/components/playlists/playlists.vue";
import allCats from "@/views/discover/playlist/components/allCats.vue";
import { getPlaylists, getCatlist } from "@/api/request.js";
export default {
  name: "palylist",
  components: {
    playlists,
    allCats,
  },
  data() {
    return {
      playlists: [],
      total: 0,
      pageSize: 30,
      pageNo: 1,
      order: "",
      dialogVisible: false,
      catlist: [],
    };
  },
  computed: {
    cat() {
      return this.$route.query.cat || "全部";
    },
  },
  methods: {
    getPlaylists() {
      const params = {
        cat: this.cat,
        limit: this.pageSize,
        offset: (this.pageNo - 1) * 30,
        order: this.order,
      };
      getPlaylists(params).then((res) => {
        const { playlists, total } = res;
        this.playlists = playlists;
        this.total = total;
        this.dialogVisible = false;
      });
    },
    handleChangePage(value) {
      this.pageNo = value;
      this.getPlaylists();
    },
    handleGetHot() {
      this.order = "hot";
      this.pageNo = 1;
      this.total = 0;
      this.getPlaylists();
    },
    //点击其他部分，关闭弹窗
    handleClick(e) {
      if (e.target.getAttribute("data-msk") !== "false") {
        this.dialogVisible = false;
      }
    },
    getHotCats() {
      getCatlist().then((res) => {
        const result = [];
        const BKG_MAP = [
          { x: "-20px", y: "-735px" },
          { x: "0px", y: "-60px" },
          { x: "0px", y: "-88px" },
          { x: "0px", y: "-117px" },
          { x: "0px", y: "-141px" },
        ];
        const { categories, sub } = res;
        Object.keys(categories).forEach((key, index) => {
          result[index] = {
            name: categories[key],
            catlist: [],
            position: BKG_MAP[index],
          };
        });
        sub.forEach((item) => {
          result[item.category].catlist.push(item);
        });
        this.catlist = result;
      });
    },
  },
  created() {
    this.getPlaylists();
    this.getHotCats();
  },
};
</script>

<style lang="scss" scoped>
.palylists {
  .article {
    border-left: 1px solid #d3d3d3;
    border-right: 1px solid #d3d3d3;
    .header {
      position: relative;
      width: 200%;
      margin: 40px;
      margin-top: 40px;
      padding-bottom: 10px;
      border-bottom: 2px solid #c20c0c;
      box-sizing: border-box;
      .type {
        display: inline-block;
        margin: 0;
        font-size: 25px;
        font-weight: 400;
      }

      .btn-right {
        background-position: right -264px;
        padding: 0;
        padding-right: 4px;
        margin-left: 10px;
        border: none;
        color: #0c73c2;
        cursor: pointer;
        &:hover {
          background-position: right -182px;
          .btn-left {
            background-position: 0 -141px;
          }
        }
        .btn-left {
          display: block;
          background-position: 0 -223px;
          padding: 7px 5px 7px 10px;
          font-size: 12px;
          .icon1 {
            display: inline-block;
            background-position: -70px -543px;
            margin-left: 5px;
            width: 11px;
            height: 8px;
          }
        }
      }
      .hot {
        float: right;
        background-position: 0 9961px;
        background-origin: border-box;
        margin-top: 3px;
        padding: 0;
        border: 1px transparent;
        border-radius: 3px;
        &-t {
          display: block;
          width: 46px;
          height: 29px;
          line-height: 29px;
          color: #fff;
        }
      }
      .cats {
        position: absolute;
        top: 52px;
        left: -200px;
      }
    }
    .pagination {
      margin: 40px 0 0 108px;
    }
  }
  .playlist {
    padding-left: 30px;
    padding-right: 30px;
  }
}
</style>
