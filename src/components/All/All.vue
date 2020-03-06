<template>
  <div class="all_container">
    <ul class="all">
      <li
        v-for="(item) in param"
        :key="item.id"
      >
        <CheckBox
          :item="item"
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
  },
  methods: {
  },
};
</script>
