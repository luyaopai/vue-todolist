<template>
  <div class="home">
    <div class="title">
      TO DO LIST
    </div>
    <div>
      <input type="text" 
        v-model="message" 
        placeholder="add new list"
        @keyup.enter="addNew"
      >
    </div>
    <ul class="list_container">
      <li v-for="(item,index) in list"
       v-bind:key="index"
      >
        <input type="checkbox"
         :id="item"
         :value="item" 
         v-model="checkLists"
        >
        <label :for="item">{{item}}</label>
      </li>
    </ul>
    <div>
      <button value="willDo">未办</button>
      <button value="haveDo">已办</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data(){
    return{
      list:["change world","find work","go to trip"],
      message:'',
      checkLists:[]
    }
  },
  methods:{
    addNew(){
      this.list.push(this.message)
      this.message=""
    }
  }

}
</script>

<style scoped lang="less">
.home {
  .title {
    padding: 10px;
    font-weight: 600;
  }
  .list_container {
    width: 200px;
    height: 100px;
    margin: auto;
    padding: 0;
    li {
      list-style: none;
      text-align: left;
      padding-top: 10px;
    }
}

}
</style>
