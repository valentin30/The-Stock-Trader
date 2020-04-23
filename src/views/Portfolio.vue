<template>
    <div class="body">
        <transition mode="out-in" name="fade">
            <div class="messege" v-if="userStocks.length === 0">
                <h1>Right now you don't have any stocks.</h1>
                <p>You can go buy some by going to the stock page.</p>
            </div>
            <div class="items" v-else>
                <UserStock
                    v-for="stock of userStocks"
                    :key="stock.name"
                    :stock="stock.stock"
                    :quantity="stock.quantity"
                ></UserStock>
            </div>
        </transition>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import UserStock from '../components/Stocks/UserStock'
export default {
    components: {
        UserStock,
    },
    computed: {
        ...mapGetters(['userStocks']),
    },
}
</script>

<style scoped>
.body {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
.messege {
    border: 1px solid rgb(207, 207, 207);
    background-color: whitesmoke;
    border-radius: 10px;
    margin-top: 1rem;
    padding: 2rem 2rem 1rem;
    color: #555;
    width: 100%;
}
.items {
    width: 100%;
}
h1 {
    margin: 0;
}
p {
    font-size: 1.5rem;
    margin: 0.5rem 0;
    padding: 1rem 0;
}
</style>
