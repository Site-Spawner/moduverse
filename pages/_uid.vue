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
				color: primaryColor,
				wrapper: {
					style: `background: ${secondaryColor}`
				},
				CallToAction: {
					color: secondaryColor,
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