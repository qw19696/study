<template>
    <div>
        <h2 @click="show">学校名称:{{name}}</h2>
        <h3>学校地址:{{address}}</h3>
    </div>
</template>

<script>
export default {
    name:'School',
    props:{
        name:{
            type:String,
        },
        address:{
            type:String,
        }
    },
    methods: {
        show(){
            alert(this.name)
        }
    },
    data() {
        return{
             
        }
    }
}


</script>
