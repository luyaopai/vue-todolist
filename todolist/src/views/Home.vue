<template>
  <div class="home">
    <div class="title">
      TODO LIST
    </div>
    <div class="listContainer">
      <!-- <i
        class="checkAll"
        @click="checkAll"
      /> -->
      <input
        v-model="message"
        type="text"
        class="inputNew"
        placeholder="add new list"
        autofocus="autofocus"
        @keyup.enter="addNew"
      >
      <All
        :param="paramList"
        :types="type"
        @change-done="changeDone"
        @delete-item="deleteItem"
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
        }, {
          content: 'find work',
          isDone: false,
        }, {
          content: 'go to trip',
          isDone: true,
        }, {
          content: 'delete',
          isDone: false,
        },
      ],
      message: '',
      type: 'all',
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
  methods: {
    addNew() {
      this.list.push({ content: this.message, isDone: false });
      this.message = '';
    },
    linkToAll(type) {
      this.$nextTick(() => {
        this.type = type;
      });
    },
    changeDone(e) {
      const { content } = e;
      const isChecked = e.checked;
      this.list.forEach((val) => {
        (val.content === content ? val.isDone = isChecked : val.isDone);
      });
    },
    deleteItem(e) {
      const content = e;
      this.list = this.list.filter((val) => val.content !== content);
    },
    deleteAll() {
      this.list = this.list.filter((val) => !val.isDone);
    }
  },
};
</script>

<style scoped>
</style>
