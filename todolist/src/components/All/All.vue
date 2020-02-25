<template>
  <div class="all_container">
    <ul class="all">
      <li v-for="(item,index) in param"
      :key="index">
      <input type="checkbox"
      name="item"
      id="item"
      v-model="item.isDone"
      @change="changeDone(item,index)"
      >
      <label for="item">{{item.content}}</label>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'All',
  props:{
    param:{
      type:Array,
      default:function(){
        return []
      }
    },
    types:""
  },
  methods:{
    changeDone(item,index){
      this.$emit('change-done',{'item':item,'index':index})
    }
  }
}
</script>

<style scoped lang="less">
.all{
  list-style: none;
}
</style>
