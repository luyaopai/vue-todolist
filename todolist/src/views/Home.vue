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
    <div>
      <h3>未办事项</h3>
      <ul class="list_container">
        <li v-for="(item,index) in list"
         v-bind:key="item+index"
        >
          <input type="checkbox"
           :id="item"
           :value="item" 
           v-model="checkLists"
           @change="changeDone(index)"
          >
          <label :for="item">{{item}}</label>
        </li>
      </ul>
    </div>
    <div>
      <h3>已办事项</h3>
      <ul class="list_container">
        <li v-for="(item,index) in checkLists"
         v-bind:key="index+item"
        >
          <input type="checkbox"
           :id="item"
           :value="item" 
           v-model="checkLists"
           @change="changeDonot(item)"
          >
          <label :for="item">{{item}}</label>
        </li>
      </ul>
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
    },
    changeDone(index){
      this.list.splice(index,1)
    },
    changeDonot(item){
      this.list.push(item)
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
