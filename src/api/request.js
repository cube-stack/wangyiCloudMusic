import axios from "axios";
const Axios = axios.create({
  baseURL: "http://localhost:8080/api/",
  withCredentials: true,
});
Axios.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);
export const hot = (params) =>
  Axios({
    method: "get",
    url: "playlist/hot",
    params,
  });

/**
 * 获取列表
 */
export const tags = (params) =>
  Axios({
    method: "get",
    url: "playlist/highquality/tags",
    params,
  });

/**
 * 获取热门歌单
 */
export const getHotPlaylist = (params) =>
  Axios({
    method: "get",
    url: "top/playlist",
    params,
  });

/**
 * 获取歌单详情
 */
export const getPlaylistDetail = (params) =>
  Axios({
    method: "get",
    url: "playlist/detail",
    params,
  });

/**
 * 获取音乐URL
 */
export const getSongUrlV1 = (params) =>
  Axios({
    method: "get",
    url: "song/url/v1",
    params,
  });

/**
 * 获取精彩评论
 */
export const getCommentHot = (params) =>
  Axios({
    method: "get",
    url: "comment/hot",
    params,
  });

/**
 * 获取评论
 */
export const getCommentNew = (params) =>
  Axios({
    method: "get",
    url: "comment/new",
    params,
  });

/**
 * 获取歌曲详情
 */
export const getSongDetail = (params) =>
  Axios({
    method: "get",
    url: "song/detail",
    params,
  });

/**
 * 获取歌词
 */
export const getLyric = (params) =>
  Axios({
    method: "get",
    url: "/lyric",
    params,
  });

/**
 * 获取所有歌单
 */
export const getPlaylists = (params) =>
  Axios({
    method: "get",
    url: "top/playlist",
    params,
  });

/**
 * 获取歌单分类
 */
export const getCatlist = (params) =>
  Axios({
    method: "get",
    url: "playlist/catlist",
    params,
  });

/**
 * 获取二维码生成key
 */
export const getLoginKey = (params) =>
  Axios({
    method: "get",
    url: `login/qr/key?t=${new Date().getTime()}`,
    params,
  });

/**
 * 获取二维码生成接口
 */
export const getLoginQr = (params) =>
  Axios({
    method: "get",
    url: `login/qr/create?t=${new Date().getTime()}`,
    params,
  });

/**
 * 获取二维码检验
 */
export const getLoginCheck = (params) =>
  Axios({
    method: "get",
    url: `login/qr/check?t=${new Date().getTime()}`,
    params,
  });

/**
 * 游客登录cookie
 */
export const register = (params) =>
  Axios({
    method: "get",
    url: "/register/anonimous",
    params,
  });

/**
 * 游客登录状态
 */
export const getLoginStatus = (params) =>
  Axios({
    method: "get",
    url: "/login/status",
    params,
  });
