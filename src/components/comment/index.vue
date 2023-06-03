<template>
  <div class="comment">
    <div class="title clearfix" v-if="titleVisible">
      <h2 class="left">评论</h2>
      <span class="total left">{{ "共" + total + "条评论" }}</span>
    </div>
    <!-- 当前用户评论 -->
    <my-comment></my-comment>
    <comments
      title="精彩评论"
      :hotComments="hotComments"
      v-show="pageNo === 1 && hotComments.length"
    ></comments>
    <comments
      title="最新评论"
      :hotComments="comments"
      v-if="comments.length"
    ></comments>
    <el-pagination
      class="pagination"
      background
      layout="prev, pager, next"
      :page-count="100"
      :hide-on-single-page="true"
      @current-change="getCommentNew"
      :total="total"
      :page-size="pageSize"
      :current-page="pageNo"
    >
    </el-pagination>
  </div>
</template>

<script>
import { getCommentHot, getCommentNew } from "@/api/request.js";
import myComment from "@/components/comment/myComment/index.vue";
import comments from "@/components/comment/comments/index.vue";
export default {
  name: "comment",
  props: {
    titleVisible: {
      default: true,
      type: Boolean,
    },
    id: {
      default: "",
      required: true,
    },
    type: {
      default: 0,
      type: Number,
    },
  },
  components: {
    myComment,
    comments,
  },
  data() {
    return {
      hotComments: [],
      comments: [],
      pageNo: 1,
      total: 0,
      pageSize: 20,
      cursor: null,
    };
  },
  methods: {
    //获得热门评论
    getCommentHot() {
      const params = {
        id: this.id,
        type: this.type,
        limit: 10,
      };
      getCommentHot(params).then((res) => (this.hotComments = res.hotComments));
    },
    //获得最新评论
    getCommentNew(currentPage = 1) {
      this.pageNo = currentPage;
      const params = {
        id: this.id,
        type: this.type,
        pageNo: currentPage,
        pageSize: this.pageSize,
        sortType: 3,
        cursor: this.cursor,
      };
      getCommentNew(params).then((res) => {
        const { comments, totalCount, cursor } = res.data;
        this.comments = comments;
        this.total = totalCount;
        this.cursor = cursor;
      });
    },
  },
  created() {
    this.getCommentHot();
    this.getCommentNew();
  },
};
</script>

<style lang="scss" scoped>
.title {
  padding-bottom: 10px;
  border-bottom: 2px solid rgba($color: #c20c0c, $alpha: 1);
  h2 {
    font-size: 20px;
    font-weight: normal;
  }
  .total {
    margin: 9px 0 0 20px;
  }
}
.pagination {
  margin: 40px 0 0 108px;
}
</style>
