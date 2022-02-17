<template>
  <div>
    <router-view></router-view>
    <tabbar>
      <tab-bar-item ></tab-bar-item>
    </tabbar>
  </div>
</template>

<script>
import tabBar from "@/components/TabBar";
import tabBarItem from "@/components/TabBarItem";
export default {
  name: "Main",
  components:{
    tabbar:tabBar,
    tabBarItem:tabBarItem
  }
}
</script>

<style scoped>

</style>