<template>
	<slice-zone
		type="page"
		:uid="$route.params.uid"
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
				color: "#FFF",
				align: "left",
				wrapper: {
					style: `background: ${primaryColor}`
				},
				CallToAction: {
					color: "#FFF",
					align: "left",
					wrapper: {
						style: `background: ${primaryColor}`
					},
				},
				TextContent: {
					wrapper: {
						style: `background: ${primaryColor}`
					},
				},
				FaqSection: {
					color: '#FFF',
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
	#__layout {
		.c-accordion .c-accordion__heading > button {
			background-color: #fff;
		}
		.accordion-js .c-accordion__panel {
			background-color: #eee;
		}
	}
</style>