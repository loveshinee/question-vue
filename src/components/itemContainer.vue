<template>
	<div>
		<section>
			<header class="header">
				<span class="tip" v-if="fromWhere == 'home'">{{ level }}</span>
				<span class="tip" v-if="fromWhere == 'item'">第{{itemNum}}题</span>
			</header>
			<div v-if="fromWhere == 'home'">
				<div class="home_logo item_container_style"></div>
				<router-link to="/item" class="start_button"></router-link>
			</div>
			<div v-if="fromWhere == 'item'">
				<div class="item_container_style">
					<div class="item_list_container">
						<header class="item_header">第{{itemNum}}题</header>
						<ul>
							<li v-for="(item, index) of itemDetail[itemNum - 1].topic_answer" class="itemList" @click="chooseAnswer(index, item.topic_answer_id)">
								<span class="option_style" :class="{'choosed': chooseNum == index }">
									{{ chooseType(index) }}
								</span>
								<span class="option_detail">{{item.answer_name}}</span>
							</li>
						</ul>
					</div>
				</div>
				<span class="nextButton" @click="next()" v-if="itemNum < itemDetail.length"></span>
				<span class="submitButton" @click="submit()" v-else></span>
				<span>{{this.allTime}}</span>
				<span class="alertMessage" v-if="showAlert">请选择一个答案</span>
			</div>
		</section>
	</div>
</template>

<script>
	import { mapState, mapActions } from 'vuex'
	export default {
		props: ['fromWhere'],
		data(){
			return{
				chooseNum: null,
				chooseId: null,
				showAlert: false
			}
		},
		computed: mapState([
			'level', 'itemNum', 'timer', 'itemDetail', 'allTime'
		]),
		methods: {
			...mapActions([
				'initializeData', 'addNum'
			]),
			next(){
				this.showAlert = false
				if (this.chooseNum !== null) {
					this.chooseNum = null
					this.addNum(this.chooseId)
				} else {
					this.showAlert = true
				}
			},
			submit(){
				this.showAlert = false
				if (this.chooseNum !== null) {
					this.chooseNum = null
					this.addNum(this.chooseId)
					clearInterval(this.timer)
					this.$router.push('score')

				} else {
					this.showAlert = true
				}

			},
			chooseAnswer(index, id){
				this.chooseNum = index
				this.chooseId = id
			},
			chooseType(type) {
				switch(type) {
					case 0:
						return 'A'
					case 1:
						return 'B'
					case 2:
						return 'C'
					case 3:
						return 'D'
				}
			}
		},
		created(){
			this.initializeData()
		}
	}
</script>

<style lang="stylus">
	body
		background url('../assets/1-1.jpg') no-repeat
		background-size cover
	.header
		position absolute
		background url('../assets/1-5.png') no-repeat 
		background-size 100% 100%
		width 1.31rem
		height 2.96rem
		z-index 10
		top -0.53rem
		right 0.5rem
		.tip
			position absolute
			width 1rem
			height 0.27rem
			bottom 0.5rem
			left 0.23rem
			color #a57c50
			text-align center
	.item_container_style
		position absolute
		top 1.65rem
		width 5.31rem
		height 4.69rem
	.nextButton
		display block
		width 1.75rem
		height 0.85rem
		position absolute
		top 6.67rem
		left 2.23rem
		background-image url('../assets/2-2.png')
		background-size 100% 100%
	.submitButton
		display block
		width 1.75rem
		height 0.85rem
		position absolute
		top 6.67rem
		left 2.23rem
		background-image url('../assets/3-1.png')
		background-size 100% 100%
	.item_list_container
		margin-top 0.8rem
		margin-left 1.5rem
		width 3.22rem
		height 2.83rem
		color #fff
		font-size 0.25rem		
		.itemList
			margin-top 0.1rem
			list-style none
			.option_style
				display inline-block
				width 0.29rem
				height 0.29rem
				line-height 0.29rem
				border 1px solid #fff
				border-radius 50%
				text-align center
			.choosed
				border 1px solid #ffd400
				background-color #ffd400
				color #575757
			
		
	.home_logo
		background-image url('../assets/1-2.png')
		background-size 100% 100%
	.start_button
		position absolute
		top 6.67rem
		left 2.23rem
		background-image url('../assets/1-4.png')
		background-size 100% 100%
		display block
		width 1.75rem
		height 0.84rem
	.alertMessage
		color #fff
		
</style>