<template>
    <div>
        <ul>
            <li v-for="(x,index) in tdata" :key='index'>{{x}}</li>
        </ul>
        <h1>{{count}}</h1>
        <button @click="up">+</button><hr>
        <button @click="reduce">-</button>
    </div>
</template>

<script>
    export default{
        data(){
            return{
            tdata:['1','2','3','4'],
            count:0,
            }
        },
        methods:{
          up(){
            this.count++
          },
          reduce(){
            this.count--
          }
        }
    }
</script>
