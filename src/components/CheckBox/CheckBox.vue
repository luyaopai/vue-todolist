<template>
  <div
    class="check-container"
    @mouseover="showDelete"
    @mouseleave="hideDelete"
  >
    <div
      v-if="!isEdit"
      class="item-dot"
      :class="{checked:item.isDone}"
      @click="isChecked(item.id)"
    />
    <div
      v-if="!isEdit"
      class="item-content"
      :class="{checked:item.isDone}"
      @dblclick="changeInput"
    >
      {{ item.content }}
    </div>
    <div
      v-if="!isEdit"
      class="item-delete"
      :class="{delete:deleteshow}"
      @click="deleteItem(item.id)"
    >
      x
    </div>
    <input
      v-if="isEdit"
      ref="inputContent"
      :value="item.content"
      type="text"
      class="item-content item-input"
      @change="changeItem"
      @keyup.enter="hideInput"
      @blur="hideInput"
    >
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import './checkbox.less';

export default {
  name: '',
  components: {},
  props: {
    item: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      isEdit: false,
      deleteshow: false,
    };
  },
  methods: {
    showDelete() {
      this.deleteshow = true;

      this.$store.state.xx = 123;
    },
    hideDelete() {
      this.deleteshow = false;
    },
    changeInput() {
      this.isEdit = true;
      this.$nextTick(() => {
        this.$refs.inputContent.focus();
      });
    },
    hideInput() {
      this.isEdit = false;
    },
    ...mapMutations([
      'isChecked',
      'deleteItem',
    ]),
    changeItem(e) {
      this.$store.commit('changeItem', { id: this.item.id, val: e.target.value });
    },
  },
};
</script>

<style scoped>
</style>
