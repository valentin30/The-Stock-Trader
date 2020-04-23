<template>
    <div class="nav-bar">
        <ul class="navigation">
            <router-link tag="li" class="home-route" to="/"
                >Stock Trader</router-link
            >
            <div class="routes">
                <router-link class="route" tag="li" to="/portfolio"
                    >Portfolio</router-link
                >
                <router-link class="route" tag="li" to="/stocks"
                    >Stocks</router-link
                >
            </div>
        </ul>
        <ul class="action-and-info">
            <li>
                <button @click="endDay">End Day</button>
            </li>
            <li @mouseenter="open" @mouseleave="close" class="dropdown">
                <button>Save & Load</button>
                <div v-if="showDropdown" class="dropdown-content">
                    <button>Save</button>
                    <button>Load</button>
                </div>
            </li>
            <li>
                <p>
                    <b>Funds: ${{ funds }}</b>
                </p>
            </li> 
        </ul>
        <div class="burger" @click="openSideMenu" v-if="!isOpen">
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    props:['isOpen'],
    computed: {
        ...mapGetters(['funds']),
    },
    data() {
        return {
            showDropdown: false,
        }
    },
    methods: {
        ...mapActions(['endDay']),
        close() {
            this.showDropdown = false
        },
        open() {
            this.showDropdown = true
        },
        openSideMenu(){
            this.$emit('change', true)
        }
    },
}
</script>

<style scoped>
.nav-bar {
    background-color: whitesmoke;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    border: 1px solid rgb(207, 207, 207);
}
.navigation {
    display: flex;
    border-radius: inherit;
}
.home-route {
    color: rgb(93, 174, 255);
    font-size: 1.8rem;
    padding: 1.1rem 1.5rem 1rem;
    font-weight: bold;
}
.routes{
    display: flex;
    flex-direction: row;
}
.route{
    padding: 1.5rem 1rem 1.2rem;
    font-size: 1.2rem;
    cursor: pointer;
    color: #999;
}
.route.router-link-active {
    background-color: rgb(93, 174, 255);
    color: white;
    border-radius: 8px;
}
.action-and-info {
    display: flex;
}
button {
    color: #999;
    padding: 1.65rem 1rem 1.4rem;
}
button:hover {
    background-color: rgb(223, 223, 223);
    border-radius: 10px;
}
.dropdown {
    position: relative;
}
.dropdown-content {
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: whitesmoke;
    border-radius: 10px;
    border: 1px solid rgb(207, 207, 207);
}
.dropdown-content button {
    text-align: left;
    border-radius: 10px;
    padding: 1.2rem 1rem 1rem;
}

p {
    color: #999;
    margin: 0;
    padding: 1.55rem 1rem 1.35rem;
}
.burger{
    padding: 1.32rem;
    display: none;
    flex-direction: column;
    justify-content: space-between;
    height: 20px;
    font-size: 2rem;
    cursor: pointer;
}
.burger div{
    background-color: rgb(93, 174, 255);
    width: 30px;
    height: 2px;
    
}
@media (max-width: 850px) {
    .routes{
        display: none;
    }
    .action-and-info{
        display: none;
    }
    .home-route{
        font-size: 1.5rem;
    }
    .burger{
        display: flex;
    }
}
</style>
