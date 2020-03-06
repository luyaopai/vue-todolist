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
      />
      <Footer />
    </div>
  </div>
</template>

<script>
import All from '@/components/All/All.vue';
import Footer from '@/components/Footer/footer.vue';
import { mapState, mapGetters } from 'vuex';
import './home.less';

export default {
  name: 'Home',
  components: {
    All,
    Footer,
  },
  data() {
    return {
      message: '',
      isCheckAll: false,
    };
  },
  computed: {
    ...mapState([
      'list',
      'type',
    ]),
    ...mapGetters([
      'completeList',
      'aliveList',
    ]),
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
    addNew() {
      this.list.push({
        content: this.message,
        isDone: false,
        id: new Date().getTime(),
      });
      this.message = '';
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
