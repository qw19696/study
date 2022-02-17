<template>

    <div id="tab-bar">

      <div :class="{tabBarItem:true,active:flag==index}" v-for="(x,index) in list" :key="index" @click="qiehuan(index,x.path)" >
        <i :class="x.img"/><br>
        <div class="font">{{x.msg}}</div>
      </div>

    </div>

</template>

<script>
export default {
  name: "TabBarItem",
  data(){
    return{
      list:[{
        img:"el-icon-house",
        msg:"首页",
        path:'/home',
      },{
        img:"el-icon-menu",
        msg:"分类",
        path:'/fenlei'
      },{
        img:"el-icon-goods",
        msg:"购物车",
        path:'/paycar'
      },{
        img:"el-icon-user",
        msg:"我的",
        path:'/user'
      }
      ],
      flag:0,
      obj:''
    }
  },
  props:{
   path:String
  },
  mounted() {
  this.getIndex();
  },
  methods:{
    qiehuan(index,path){
      this.flag=index;
      this.$router.push(path);
    },
    getIndex(){
      this.flag=this.$route.meta.index
    }
  }
}
</script>

<style scoped>
.tabBarItem{
  flex:1;
  text-align: center;
  height: 49px;
  font-size: 20px;
}
.active{
  color: pink;
}
.font{
  font-size: 12px;
}
</style>