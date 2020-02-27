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
      :class="{checked:isChecked}"
      @click="changeChecked"
    />
    <div
      v-if="!isEdit"
      class="item-content"
      :class="{checked:isChecked}"
    >
      {{ content }}
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
      v-model="content"
      type="text"
      autofocus="autofocus"
      class="item-content item-input"
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
      this.isChecked = !this.isChecked;
      this.$emit('change-checked', { content: this.content, checked: this.isChecked });
    },
    deleteItem() {
      this.$emit('delete-item', this.content);
    },
  },
};
</script>

<style scoped>
</style>
