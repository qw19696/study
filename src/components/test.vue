<template>
    <div>
      <h1>{{name}}</h1>
    </div>
</template>

<script>
    export default{
        data(){
          return{
            isUser: true,
            msg:false,
            msg1:''
          }
        },
        methods:{
          ceshi(){
            console.log('测试成功')
          }
        },
      props:{
        name
      }
    }
</script>
