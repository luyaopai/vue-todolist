<template>
  <div class="home">
    <div class="title">
      TO DO LIST
    </div>
    <div class="listContainer">
      <div class="inputNew">
        <input
          v-model="message"
          type="text"
          placeholder="add new list"
          @keyup.enter="addNew"
        >
      </div>
      <All
        :param="paramList"
        :types="type"
      />
      <button @click="linkToAll('all')">
        All
      </button>
      <button @click="linkToAll('alive')">
        Alive
      </button>
      <button @click="linkToAll('complete')">
        Complete
      </button>
    </div>
  </div>
</template>

<script>
import All from '@/components/All/All.vue';

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
          content: 'add new things',
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
    completeList() {
      return this.list.filter((item) => item.isDone);
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
      this.type = type;
    },
    // changeDone(e) {
    //   const i = e.index;
    //   if (e.item.isDone) {
    //     this.list[i].isDone = true;
    //   } else {
    //     this.list[i].isDone = false;
    //   }
    //   console.log(e);
    // },
  },
};
</script>

<style scoped>
</style>
