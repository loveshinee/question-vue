export default {
	INITIALIZE_DATA: (state) => {
		state.itemNum = 1
		state.allTime = 0
		state.answerId = []
	},

	ADD_ITEMNUM: (state) => {
		state.itemNum += 1
	},

	REMEMBER_ANSWER: (state, {id}) => {
		state.answerId.push(id)
	},

	REMEMBER_TIME: (state) => {
		state.timer = setInterval(()=> {
			state.allTime ++
		}, 1000)
	}
}