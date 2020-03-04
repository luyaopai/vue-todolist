import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    list: [
      {
        content: 'change world',
        isDone: false,
        id: 0,
      }, {
        content: 'find work',
        isDone: false,
        id: 1,

      }, {
        content: 'go to trip',
        isDone: true,
        id: 3,

      }, {
        content: 'delete',
        id: 4,
        isDone: false,
      },
    ],
    type: 'all',
  },
  getters: {
    completeList: (state) => state.list.filter((val) => val.isDone),
    aliveList: (state) => state.list.filter((val) => !val.isDone),
    num: (state) => state.list.filter((val) => !val.isDone).length,
    numChecked: (state) => state.list.filter((val) => val.isDone).length,
  },
  mutations: {
    isChecked(state, id) {
      state.list.forEach((ele, idx, arr) => {
        id === ele.id
          && (arr[idx].isDone = !arr[idx].isDone);
      });
    },
    deleteItem(state, id) {
      state.list = state.list.filter((ele) => ele.id !== id);
    },
    changeItem(state, item) {
      const { id, val } = item;
      state.list.forEach((ele) => {
        ele.id === id
          && (ele.content = val);
      });
    },
    deleteAll(state) {
      state.list = state.list.filter((ele) => !ele.isDone);
    },
    changeType(state, type) {
      state.type = type;
    },
  },
  actions: {
  },
  modules: {
  },
});
