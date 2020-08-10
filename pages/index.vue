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
				CallToAction: {
					color: "#FFF",
					align: "left",
					wrapper: {
						style: `background: ${primaryColor}`
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
		max-width: 50% !important;
	}
</style>