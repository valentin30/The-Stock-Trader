<template>
    <div id="app">
        <Nav :isOpen="isOpen" @change="isOpen = $event"></Nav>
        <transition :enter-active-class="'animated slideIn'+ direction" :leave-active-class="'animated slideOut' + direction">
            <SideMenu @change="isOpen = $event" v-if="isOpen"></SideMenu>
        </transition>
        <transition mode="out-in" name="fade">
            <router-view />
        </transition>
    </div>
</template>

<script>
import Nav from './components/layout/Nav'
import SideMenu from './components/layout/SideMenu'
export default {
    components: {
        Nav,
        SideMenu,
    },
    data() {
        return {
            isOpen: false,
            direction: 'Down',
        }
    },
    created() {
        this.$store.dispatch('initStocks')
        console.log('created')
    },
    watch:{
        isOpen(){
            let num = Math.floor(Math.random() * 4 + 1) 
            switch(num){
                case 1:
                    this.direction = 'Left'
                    break
                case 2:
                    this.direction = 'Down'
                    break
                case 3:
                    this.direction = 'Right'
                    break
                case 4:
                    this.direction = 'Up'
                    break
            }
        }
    }
}
</script>

<style>
body {
    margin: 0;
    padding: 0;
}
#app {
    font-family: sans-serif;
    color: #333;
    padding: 1rem;
}
ul {
    list-style: none;
    padding: 0;
    margin: 0;
}
button {
    border: none;
    background-color: inherit;
    color: inherit;
    cursor: pointer;
    font-size: 1rem;
}
button:disabled {
    opacity: 0.5;
}
input {
    padding: 1rem;
    border-radius: 4px;
    border: 1px solid #999;
    font-size: 1rem;
}
input:focus,
button:focus {
    outline: none;
}
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
