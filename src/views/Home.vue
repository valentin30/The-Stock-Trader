<template>
  <div class="home">
      <h1>Hey! Welcome to Stock Trader.</h1>
      <p>Here you can buy and sell stocks.</p>
      <p><b>Current Funds: ${{funds}}</b></p>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    computed:{
        ...mapGetters(['funds'])
    }
}
</script>

<style scoped>
    div{
        border: 1px solid rgb(207,207,207);
        background-color: whitesmoke;
        border-radius: 10px;
        margin-top: 1rem;
        padding: 2rem 2rem 0;
        color: #555;
    }
    h1{
        margin: 0;
    }
    p{
        font-size: 1.5rem;
        margin: 0.5rem 0;
        padding: 1rem 0;
    }
</style>