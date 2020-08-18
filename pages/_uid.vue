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
					color: secondaryColor,
					align: "left",
					wrapper: {
						style: `background: #FFF`
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
		.ps__desc a {
			&, &:visited {
				color: var(--color--primary);
			}
		}

		.ps__kicker-icon {
			max-width: 100% !important;
			order: 2;
		}

		.ps-cta .ps__header {
			display: flex;
			flex-direction: column;
			.ps__title {
				order: 1;
			}
		}
	}
</style>