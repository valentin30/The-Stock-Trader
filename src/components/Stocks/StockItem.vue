<template>
    <div class="item">
        <div class="header">
            <div class="text">
                <h1>{{ stock.name }}</h1>
                <p>Price: ${{ stock.price }}</p>
            </div>
            <img :src="stock.imgUrl" :alt="stock.name" />
        </div>
        <input type="number" placeholder="Quantity" v-model="quantity" />
        <button @click="buy()">Buy</button>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    data() {
        return {
            quantity: '',
        }
    },
    computed: {
        ...mapGetters(['stocks', 'funds']),
        stock() {
            const stock = this.stocks.find(
                p => p.name === this.$route.params.name,
            )
            return stock
        },
    },
    methods: {
        ...mapActions(['buyStocks']),
        buy() {
            if (this.quantity === 0) {
                return
            }
            if (this.funds - this.quantity * this.stock.price < 0) {
                alert('not enough money')
                return
            }
            this.buyStocks({ stock: this.stock, quantity: this.quantity })
            this.$router.push({ name: 'Portfolio' })
        },
    },
}
</script>

<style scoped>
.item {
    max-width: 500px;
    margin: 1rem auto;
    /* width: fit-content; */
    display: flex;
    flex-direction: column;
    padding: 2rem;
    background-color: whitesmoke;
    border: 1px solid rgb(207, 207, 207);
    border-radius: 10px;
    color: #555;
}
.header {
    margin-bottom: 2rem;
}
.text{
    display: flex;
    flex-direction: column;
    width: fit-content;
    display: inline-block;
}
h1 {
    margin: 0;
}
p {
    margin: 0;
    padding: 1rem 0;
    color: #999;
}
img {
    width: 200px;
    border-radius: 50%;
    float: right;
}
button {
    margin-top: 1rem;
    padding: 0;
    width: fit-content;
    font-size: 1.5rem;
    font-weight: bold;
    color: rgb(35, 145, 255);
}
</style>
