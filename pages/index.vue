<template>
	<slice-zone
		type="page"
		uid="home"
		:theme="theme"
	/>
</template>
<script>
import SliceZone from 'vue-slicezone'
import { primaryColor, secondaryColor } from '@/assets/scss';
export default {
	data() {
		return {
			theme: {
				color: primaryColor,
				wrapper: {
					style: `background: ${secondaryColor}`
				},
				AlternateGrid: {
					color: "#FFF",
					align: "left",
					wrapper: {
						style: `background: ${primaryColor}`
					},
				},
				CallToAction: {
					color: secondaryColor,
					align: "left",
					wrapper: {
						style: `background: #FFF`
					},
				}
			}
		}
	},
	components: {
		SliceZone
	},
}
</script>
<style lang="scss">
	.ps__kicker-icon {
		max-width: 100% !important;
	}
</style>