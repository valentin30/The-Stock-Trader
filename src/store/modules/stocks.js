const state = {
    stocks: [],
}
const getters = {
    stocks(state) {
        return state.stocks
    },
}
const mutations = {
    endDay(state) {
        state.stocks = state.stocks.map(p => {
            p.price = Math.floor(Math.random() * 100) + 50
            return p
        })
    },
    initStocks(state) {
        state.stocks = [
            {
                name: 'Google',
                price: Math.floor(Math.random() * 100) + 50,
                imgUrl: 'https://image.flaticon.com/icons/svg/270/270014.svg',
            },
            {
                name: 'Twitter',
                price: Math.floor(Math.random() * 100) + 50,
                imgUrl: 'https://image.flaticon.com/icons/svg/185/185961.svg',
            },
            {
                name: 'Instagram',
                price: Math.floor(Math.random() * 100) + 50,
                imgUrl: 'https://image.flaticon.com/icons/svg/185/185985.svg',
            },
            {
                name: 'Spotify',
                price: Math.floor(Math.random() * 100) + 50,
                imgUrl: 'https://image.flaticon.com/icons/svg/185/185974.svg'
            },
            {
                name: 'Facebook',
                price: Math.floor(Math.random() * 100) + 50,
                imgUrl: 'https://image.flaticon.com/icons/svg/185/185981.svg'
            },
            {
                name: 'Swarm',
                price: Math.floor(Math.random() * 100) + 50,
                imgUrl: 'https://image.flaticon.com/icons/svg/185/185978.svg'
            },
            {
                name: 'Telegram',
                price: Math.floor(Math.random() * 100) + 50,
                imgUrl: 'https://image.flaticon.com/icons/svg/185/185977.svg'
            },
            {
                name: 'Whatsapp',
                price: Math.floor(Math.random() * 100) + 50,
                imgUrl: 'https://image.flaticon.com/icons/svg/185/185988.svg'
            },
            {
                name: 'Youtube',
                price: Math.floor(Math.random() * 100) + 50,
                imgUrl: 'https://image.flaticon.com/icons/svg/185/185983.svg'
            },
        ]
    },
}
const actions = {
    pushStock(context, payload) {
        context.commit('pushStock', payload)
    },
    endDay(context) {
        context.commit('endDay')
    },
    initStocks(context) {
        context.commit('initStocks')
    },
}

export default {
    state,
    getters,
    mutations,
    actions,
}
