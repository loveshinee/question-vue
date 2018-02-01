export default {
	initializeData({commit}) {
		commit('INITIALIZE_DATA')
	},

	addNum({commit, state}, id) {
		commit('REMEMBER_ANSWER', {id})
		if (state.itemNum < state.itemDetail.length) {
			commit('ADD_ITEMNUM')
		}
	}

}