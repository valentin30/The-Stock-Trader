<template>
    <div class="body">
        <div class="header">
            <div class="img">
                <img :src="stock.imgUrl" />
            </div>
            <div class="info">
                <div>
                    <h1>{{ stock.name }}</h1>
                    <p>Quantity: {{ quantity }}</p>
                    <p>Price: ${{ stock.price }}</p>
                </div>
                <div>
                    <button @click="sellStocks({ stock, quantity })">
                        Sell
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    props: ['stock', 'quantity'],
    methods: {
        ...mapActions(['sellStocks']),
    },
}
</script>

<style scoped>
.body {
    width: fit-content;
    display: flex;
    flex-direction: row;
    padding: 1rem;
    background-color: whitesmoke;
    border: 1px solid rgb(207, 207, 207);
    border-radius: 10px;
    color: #555;
    margin:  1% 0 0;
    box-sizing: border-box;
}
img {
    height: 150px;
}
.header {
    display: flex;
    flex-direction: row;
    width: 100%;
}
.info {
    padding: 1rem 0rem 0 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    box-sizing: border-box;
}
h1 {
    margin: 0;
}
p:first-of-type{
    padding-top: 0.4rem;
}
p:last-of-type{
    padding-bottom: 0.3rem;
}
p {
    margin: 0;
    padding: 0.1rem 0.5rem;
    color: #999;
}
button {
    float: right;
    width: fit-content;
    font-size: 1.5rem;
    font-weight: bold;
    color: rgb(35, 145, 255);
}
@media(min-width: 750px) {
    .body{
        width:49.5%;
    }
}
@media(min-width: 1110px) {
    .body{
        width: 32.75%;
    }
}
@media (max-width: 750px) {
    .body {
        margin: 1rem auto 0 auto;
        width: 70%;
    }
}
@media (max-width: 600px) {
    .body {
        margin: 1rem auto 0 auto;
        width: 80%;
    }
}
@media (max-width: 500px) {
    .body {
        margin: 1rem 0 0 0;
        width: 100%;
    }
}
@media (max-width: 395px) {
    .header{
        flex-direction: column;
    }
    .img{
        margin: auto;
    }
    .info{
        padding-left: 0;
    }
    .info div{
        margin: auto;
    }
    h1{
        text-align: center;
    }
    p{
        text-align: center;
    }
}
</style>