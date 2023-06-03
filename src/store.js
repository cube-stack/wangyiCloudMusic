import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import { getSongUrlV1 } from "@/api/request.js";
export default new Vuex.Store({
  state: {
    name: "lzh",
  },
  modules: {
    currentSong: {
      namespaced: true,
      state: {
        url: "",
      },
      actions: {
        async palyMusic(context, id) {
          const url = await getSongUrlV1({ id, level: "exhigh" }).then(
            (res) => res.data[0].url
          );
          console.log(url);
          context.commit("NextSong", url);
        },
      },
      mutations: {
        NextSong(state, url) {
          state.url = url;
        },
        LashSong() {},
      },
    },
  },
});
