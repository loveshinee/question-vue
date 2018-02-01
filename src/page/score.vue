<template>
	<div class="score">
		<div class="score_content">
			<div class="your_score">
				<span class="score_num">{{ score }}</span>
				<span class="fen">分</span>
			</div>
			<div class="result">{{ resultMessage }}</div>
		</div>
		<div class="share_button" @click="share"></div>
	</div>
</template>

<script>
	import { mapState } from 'vuex'
	export default{
		data(){
			return {
				score: 0,
				resultMessage: '',
				correctAnswerId: [3, 6, 11, 14, 17],
				scoreTipsArr: ['你说，是不是把知识都还给小学老师了？','还不错，但还需要继续加油哦！','不要嘚瑟还有进步的空间！','智商离爆表只差一步了！','满昏满昏，厉害了我的哥！'],
			}
		},
		computed: mapState(['answerId']),
		methods: {
			back(){
				this.$router.push('/')
			},
			share(){

			},
			computeScore(){
				this.answerId.forEach((item, index) => {
					if (item == this.correctAnswerId[index]) {
						this.score += 20
					}
				})
			},
			getResultMessage(){
				if(this.score <= 20) {
                	this.resultMessage = this.scoreTipsArr[0]
                	return
	            }
	            if(this.score <= 40) {
	                this.resultMessage = this.scoreTipsArr[1]
	                return
	            }
	            if(this.score <= 60) {
	                this.resultMessage = this.scoreTipsArr[2]
	                return
	            }
	            if(this.score <= 80) {
	                this.resultMessage = this.scoreTipsArr[3]
	                return
	            }
	            if(this.score <= 100) {
	                this.resultMessage = this.scoreTipsArr[4]
	            }
			}

		},
		mounted(){
			this.computeScore()
			this.getResultMessage()
		}
	}
</script>

<style lang="stylus">
	.score
		width 100%
		.score_content
			margin 0 auto
			width 3.92rem
			height 3.67rem
			background-image url('../assets/4-2.png')
			background-size 100% 100%
			.your_score
				padding-top 1.89rem
				text-align center
				font-size 0.5rem
				font-weight 900
				color #a51d31
				-webkit-text-stroke 0.02rem #412318
				.fen
					margin-top 0.2rem
			.result 
				margin-left 0.2rem
				text-align center
				color #3e2415
				font-size 0.25rem
		.share_button
			margin 1rem auto 0
			width 2.8rem
			height 1rem
			background-image url('../assets/4-3.png') 
			background-size 100% 100%
			
			
		
</style>