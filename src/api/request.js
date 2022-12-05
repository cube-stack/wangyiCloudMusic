import axios from "axios";

export const hot = (params) =>
  axios({
    method: "get",
    url: "http://localhost:8080/api/playlist/hot",
    params,
  });

/**
 * 获取列表
 */
export const tags = (params) =>
  axios({
    method: "get",
    url: "http://localhost:8080/api/playlist/highquality/tags",
    params,
  });

/**
 * 获取热门歌单
 */
export const getHotPlaylist = (params) =>
  axios({
    method: "get",
    url: "http://localhost:8080/api/top/playlist",
    params,
  });
