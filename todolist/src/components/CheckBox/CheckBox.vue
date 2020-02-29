<template>
  <div
    class="check-container"
    @mouseover="showDelete"
    @mouseleave="hideDelete"
    @dblclick="changeInput"
  >
    <div
      v-if="!isEdit"
      class="item-dot"
      :class="{checked:item.isDone}"
      @click="changeChecked"
    />
    <div
      v-if="!isEdit"
      class="item-content"
      :class="{checked:item.isDone}"
    >
      {{ item.content }}
    </div>
    <div
      v-if="!isEdit"
      class="item-delete"
      :class="{delete:deleteshow}"
      @click="deleteItem"
    >
      x
    </div>
    <input
      v-if="isEdit"
      ref="inputContent"
      :value="item.content"
      type="text"
      class="item-content item-input"
      @change="onInputChange"
      @blur="hideInput"
    >
  </div>
</template>

<script>
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
    content: {
      type: String,
      default() {
        return '';
      },
    },
    propChecked: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
  data() {
    return {
      isEdit: false,
      deleteshow: false,
      isChecked: this.propChecked,
    };
  },
  methods: {
    onInputChange(e) {
      console.log(e);
    },
    showDelete() {
      this.deleteshow = true;
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
    changeChecked() {
      this.$emit('change-checked', { id: this.item.id, checked: !this.item.isDone });
    },
    deleteItem() {
      this.$emit('delete-item', this.content);
    },
  },
};
</script>

<style scoped>
</style>
