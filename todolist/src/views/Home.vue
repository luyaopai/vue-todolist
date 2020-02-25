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
    <All v-if="type==='all'"
     :param="list"
     types="all"
     @change-done="changeDone"
    />
    <All v-if="type==='alive'"
     :param="aliveList" 
     types="alive"
    />
    <All v-if="type==='complete'" 
     :param="completeList" 
     types="complete"
    />
    <button @click="linkToAll('all')">All</button>
    <button @click="linkToAll('alive')">Alive</button>
    <button @click="linkToAll('complete')">Complete</button>
  </div>
</template>

<script>
import All from "@/components/All/All.vue"
export default {
  name: 'Home',
  components: {
    'All':All
  },
  data() {
    return {
      list:[
        {
          content:"change world",
          isDone:false
        },{
          content:"find work",
          isDone:false
        },{
          content:"go to trip",
          isDone:true
        },{
          content:"add new things",
          isDone:false
        }
      ],
      message:'',
      type: 'all'
    }
  },
  computed:{
    aliveList(){
      return this.list.filter(item=>
        !item.isDone
      )
    },
    completeList(){
      return this.list.filter(item=>
        item.isDone
      )
    },
  },
  methods:{
    addNew(){
      this.list.push({content:this.message,isDone:false})
      this.message=""
    },
    linkToAll(type){
      this.type=type
      this.params
    },
    changeDone(e){
      const i = e.index
      if(e.item.isDone){
        this.list[i].isDone = true
      } else {
        this.list[i].isDone = false
      }
      console.log(e)
    }
  }
}
</script>

<style scoped>
</style>
