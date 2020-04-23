<template>
    <div class="body">
        <p>Funds: ${{ funds }}</p>
        <button @click="closeSideMenu" class="close"></button>
        <div class="content">
            <router-link
                @click.native="closeSideMenu"
                tag="button"
                to="/"
                >Home</router-link
            >
            <router-link
                @click.native="closeSideMenu"
                tag="button"
                to="/portfolio"
                >Portfolio</router-link
            >
            <router-link @click.native="closeSideMenu" tag="button" to="/stocks"
                >Stocks</router-link
            >
            <button @click="endDayPlus">End Day</button>
            <button @click="closeSideMenu">Save</button>
            <button @click="closeSideMenu">Load</button>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    computed: {
        ...mapGetters(['funds']),
    },
    methods: {
        ...mapActions(['endDay']),
        endDayPlus() {
            this.endDay()
            this.closeSideMenu()
        },
        closeSideMenu() {
            this.$emit('change', false)
        },
    },
}
</script>

<style scoped>
.body {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    opacity: 0.9;
    background-color: rgb(126, 190, 255);
    z-index: 10;
}
.content {
    display: flex;
    flex-direction: column;
    height: 80%;
    justify-content: center;
    padding: 2rem;
}
.content button {
    font-size: 2rem;
    padding: 0.5rem 3rem;
    border-radius: 8px;
    color: white;
    width: fit-content;
    margin: 0 auto;
    /* font-weight: bold; */
}
.content button:hover {
    background-color: white;
    color: rgb(93, 174, 255);
    opacity: 1;
}
p {
    position: absolute;
    top: 2rem;
    left: 2rem;
    font-size: 1.9rem;
    color: white;
    /* font-weight: bold; */
    margin: 0;
}
.close {
    position: absolute;
    right: 2rem;
    top: 1.8rem;
    width: 2.5rem;
    height: 2.5rem;
}
.close:before,
.close:after {
    position: absolute;
    margin: -1rem 0.2rem;
    left: 1rem;
    content: ' ';
    height: 2rem;
    width: 2px;
    background-color: white;
}
.close:before {
    transform: rotate(45deg);
}
.close:after {
    transform: rotate(-45deg);
}
</style>
