<template>
  <div class="all_container">
    <ul class="all">
      <li
        v-for="(item,index) in param"
        :key="index"
      >
        <input
          id="item"
          v-model="item.isDone"
          type="checkbox"
          name="item"
        >
        <label for="item">
          {{ item.content }}
        </label>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'All',
  props: {
    param: {
      type: Array,
      default() {
        return [];
      },
    },
    types: {
      type: String,
      default() {
        return 'all';
      },
    },
  },
  methods: {
    // changeDone(item, index) {
    //   this.$emit('change-done', { item, index });
    // },
  },
};
</script>

<style scoped lang="less">
.all{
  list-style: none;
}
</style>
