<template>
    <div>
        <Stock v-for="stock of stocks" :key="stock.name" :stock="stock"></Stock>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import Stock from './Stock.vue'
export default {
    components:{
        Stock
    },
    computed:{
        ...mapGetters(['stocks','funds'])
    },
    methods: {
        ...mapActions(['pushStock']),
    }
}
</script>

<style scoped>
    div{
        display: flex;
        /* flex-direction: row; */
        flex-wrap: wrap;
        justify-content: space-between;
        /* max-width: 80%; */
        box-sizing: border-box;
        /* width: fit-content;  */
        /* margin: auto;  */
    }
    @media (min-width: 1000px){
        div{
            /* max-width: 900px; */
        }
    }
    @media (max-width: 680px) {
    div {
        /* max-width: 100%; */
        /* flex-direction: column; */
        /* flex-wrap: wrap; */
    }
}
</style>