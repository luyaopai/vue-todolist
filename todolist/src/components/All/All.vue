<template>
  <div class="all_container">
    <ul class="all">
      <li
        v-for="(item) in param"
        :key="item.id"
      >
        <CheckBox
          :item="item"
          @change-checked="changeDone"
          @delete-item="deleteItem"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import CheckBox from '@/components/CheckBox/CheckBox.vue';
import './all.less';

export default {
  name: 'All',
  components: {
    CheckBox,
  },
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
    changeDone(e) {
      this.$emit('change-done', { id: e.id, checked: e.checked });
    },
    deleteItem(e) {
      this.$emit('delete-item', e);
    },
  },
};
</script>
