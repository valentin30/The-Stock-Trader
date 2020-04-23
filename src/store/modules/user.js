const state = {
    user: {
        funds: 100,
        userStocks: [],
    },
}
const getters = {
    funds(state) {
        return state.user.funds
    },
    userStocks(state) {
        return state.user.userStocks
    },
}
const mutations = {
    pushStock({ user }, payload) {
        user.userStocks.push(payload)
    },
    modifyStock({ user }, { index, stock }) {
        user.userStocks[index] = stock
    },
    removeStock({ user }, name) {
        user.userStocks = user.userStocks.filter(s => s.stock.name !== name)
    },
    setFunds({ user }, payload) {
        user.funds = payload
    },
}
const actions = {
    buyStocks({ commit, state }, payload) {
        const { funds, userStocks } = state.user
        const { stock, quantity } = payload

        const newFunds = funds - stock.price * quantity
        commit('setFunds', newFunds)

        const stockIndex = userStocks.findIndex(
            s => s.stock.name === stock.name,
        )
        if (stockIndex === -1) {
            commit('pushStock', payload)
        } else {
            const newQuantity = +userStocks[stockIndex].quantity + +quantity
            commit('modifyStock', {
                index: stockIndex,
                stock: { stock, quantity: newQuantity },
            })
        }
    },
    sellStocks({ commit, state }, { stock, quantity }) {
        const { funds } = state.user

        const newFunds = funds + quantity * stock.price
        commit('setFunds', newFunds)
        commit('removeStock', stock.name)
    },
}

export default {
    state,
    getters,
    mutations,
    actions,
}
