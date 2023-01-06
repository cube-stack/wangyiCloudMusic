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

/**
 * 获取歌单详情
 */
export const getPlaylistDetail = (params) =>
  axios({
    method: "get",
    url: "http://localhost:8080/api/playlist/detail",
    params,
  });

/**
 * 获取音乐URL
 */
export const getSongUrlV1 = (params) =>
  axios({
    method: "get",
    url: "http://localhost:8080/api/song/url/v1",
    params,
  });

/**
 * 获取精彩评论
 */
export const getCommentHot = (params) =>
  axios({
    method: "get",
    url: "http://localhost:8080/api/comment/hot",
    params,
  });

/**
 * 获取评论
 */
export const getCommentNew = (params) =>
  axios({
    method: "get",
    url: "http://localhost:8080/api/comment/new",
    params,
  });

/**
 * 获取歌曲详情
 */
export const getSongDetail = (params) =>
  axios({
    method: "get",
    url: "http://localhost:8080/api/song/detail",
    params,
  });

/**
 * 获取歌词
 */
export const getLyric = (params) =>
  axios({
    method: "get",
    url: "http://localhost:8080/api//lyric",
    params,
  });

/**
 * 获取所有歌单
 */
export const getPlaylists = (params) =>
  axios({
    method: "get",
    url: "http://localhost:8080/api/top/playlist",
    params,
  });

/**
 * 获取歌单分类
 */
export const getCatlist = (params) =>
  axios({
    method: "get",
    url: "http://localhost:8080/api/playlist/catlist",
    params,
  });
