<template>
	<div class="mask" v-show="show" @click="hideOnBlur && (show = false)" :transition="maskTransition">
	</div>
</template>

<script>
export default {
	name: 'v-mask',
	props: {
		maskTransition: {
			type: String,
			default: 'vux-fade'
		},
		show: {
			type: Boolean,
			default: true
		}
	},
	method:{
		hideOnBlur(){
			this.show = false;
		}
	}
}
</script>
<style>
@import "./_mask.scss"
</style>