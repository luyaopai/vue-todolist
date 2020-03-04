<template>
  <div class="foot_container">
    <div class="btn-class">
      <span class="num-left">
        {{ num }} item left
      </span>
      <button @click="changeType('all')">
        All
      </button>
      <button @click="changeType('alive')">
        Alive
      </button>
      <button @click="changeType('complete')">
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
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: '',
  components: {},
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters([
      'num',
      'numChecked',
    ]),
  },
  methods: {
    ...mapMutations([
      'deleteAll',
      'changeType',
    ]),
  },
};
</script>

<style scoped>
</style>
