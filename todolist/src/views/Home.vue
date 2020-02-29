<template>
  <div class="home">
    <div class="title">
      TODO LIST
    </div>
    <div class="listContainer">
      <i
        :class="{
          checkAll: isCheckAll
        }"
        @click="handleCheckAll"
      />
      <input
        ref="addNew"
        v-model="message"
        type="text"
        class="inputNew"
        placeholder="add new list"
        @keyup.enter="addNew"
      >
      <All
        :param="paramList"
        :types="type"
        @change-done="changeDone"
        @delete-item="deleteItem"
        @change-content="onInputChange"
      />
      <div class="btn-class">
        <span class="num-left">
          {{ num }} item left
        </span>
        <button @click="linkToAll('all')">
          All
        </button>
        <button @click="linkToAll('alive')">
          Alive
        </button>
        <button @click="linkToAll('complete')">
          Complete
        </button>
        <button
          v-if="numChecked"
          class="delbtn"
          @click="deleteAll"
        >
          clear complete
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import All from '@/components/All/All.vue';
import './home.less';

export default {
  name: 'Home',
  components: {
    All,
  },
  data() {
    return {
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
      message: '',
      type: 'all',
      isCheckAll: false,
    };
  },
  computed: {
    aliveList() {
      return this.list.filter((item) => !item.isDone);
    },
    num() {
      return this.aliveList.length;
    },
    completeList() {
      return this.list.filter((item) => item.isDone);
    },
    numChecked() {
      return this.completeList.length;
    },
    paramList() {
      switch (this.type) {
        case 'alive':
          return this.aliveList;

        case 'complete':
          return this.completeList;

        default:
          return this.list;
      }
    },

  },
  watch: {
    list: {
      deep: true,
      handler(list) {
        this.isCheckAll = list.filter((i) => i.isDone).length === list.length;
      },
    },

  },
  mounted() {
    this.$nextTick(() => {
      this.$refs.addNew.focus();
    });
  },
  methods: {
    onInputChange(param) {
      const { id, value } = param;
      this.list.forEach((item) => {
        item.id === id && (
          item.content = value
        );
      });
    },
    addNew() {
      this.list.push({
        content: this.message,
        isDone: false,
        id: new Date().getTime(),
      });
      this.message = '';
    },
    linkToAll(type) {
      this.$nextTick(() => {
        this.type = type;
      });
    },
    changeDone(e) {
      const { id } = e;
      const isChecked = e.checked;
      this.list.forEach((val) => {
        (val.id === id ? val.isDone = isChecked : val.isDone);
      });
    },
    deleteItem(id) {
      this.list = this.list.filter((val) => val.id !== id);
    },
    deleteAll() {
      this.list = this.list.filter((val) => !val.isDone);
    },
    handleCheckAll() {
      this.isCheckAll = !this.isCheckAll;
      this.list.forEach((val) => {
        this.$set(val, 'isDone', this.isCheckAll);
      });
    },
  },
};
</script>

<style scoped>
</style>
