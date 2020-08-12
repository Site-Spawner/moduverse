<template>
	<nav class="bg-gray-800">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="flex items-center justify-between h-16">
				<div class="flex items-center">
					<div class="flex-shrink-0">
						<nuxt-link class="font-display text-lg font-bold pl-3 py-2 uppercase text-gray-300 hover:text-white" to="/">Moduverse</nuxt-link>
					</div>
				</div>
				<div class="hidden md:block">
					<div class="ml-10 flex flex-grow items-center justify-end">
						<nav class="text-gray-300 flex items-center">
							<nuxt-link
								v-for="page in pages" :key="page.id" :to="page.url"
								class="mr-4 px-3 py-2 rounded-md text-sm font-medium hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
								active-class="active text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700"
							>
								{{ page.data.meta_title }}
							</nuxt-link>
						</nav>
					</div>
				</div>
				<div class="hidden md:block" v-if="false">
					<div class="ml-4 flex items-center md:ml-6">
						

						<!-- Profile dropdown -->
						<div v-if="false" class="ml-3 relative">
							<div>
							<button
								class="max-w-xs flex items-center text-sm rounded-full text-white focus:outline-none focus:shadow-solid"
								id="user-menu"
								aria-label="User menu"
								aria-haspopup="true"
							>
								<img
								class="h-8 w-8 rounded-full"
								src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
								alt=""
								/>
							</button>
							</div>
							<!--
							Profile dropdown panel, show/hide based on dropdown state.

							Entering: "transition ease-out duration-100"
								From: "transform opacity-0 scale-95"
								To: "transform opacity-100 scale-100"
							Leaving: "transition ease-in duration-75"
								From: "transform opacity-100 scale-100"
								To: "transform opacity-0 scale-95"
							-->
							<div
							class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg"
							>
							<div
								class="py-1 rounded-md bg-white shadow-xs"
								role="menu"
								aria-orientation="vertical"
								aria-labelledby="user-menu"
							>
								<a
								href="#"
								class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
								role="menuitem"
								>Your Profile</a
								>
								<a
								href="#"
								class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
								role="menuitem"
								>Settings</a
								>
								<a
								href="#"
								class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
								role="menuitem"
								>Sign out</a
								>
							</div>
							</div>
						</div>
					</div>
				</div>
				<div class="mr-2 flex md:hidden">
					<button class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white" @click="navigationVisible = !navigationVisible">
						<svg v-if="navigationVisible" class="block h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
						</svg>
						<svg v-else class="block h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
						</svg>
					</button>
				</div>
			</div>
		</div>
		<div :class="{ 'block': navigationVisible, 'sm:hidden': !navigationVisible }">
			<div class="mx-2 px-2 pt-2 pb-3 sm:px-3  text-gray-300">
				<router-link
					class="mt-1 block px-3 py-2 rounded-md text-base font-medium hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
					v-for="page in pages" :key="page.id" :to="page.url"
				>{{ page.data.meta_title }}</router-link>
			</div>
			<div class="pt-4 pb-3 border-t border-gray-700" v-if="false">
				<div class="flex items-center px-5">
					<div class="flex-shrink-0">
						<img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
					</div>
					<div class="ml-3">
						<div class="text-base font-medium leading-none text-white">Tom Cook</div>
						<div class="mt-1 text-sm font-medium leading-none text-gray-400">tom@example.com</div>
					</div>
				</div>
				<div class="mt-3 px-2">
					<a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Your Profile</a>
					<a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Settings</a>
					<a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Sign out</a>
				</div>
			</div>
		</div>
	</nav>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
@Component({
})
export default class Header extends Vue {
	pages = [];

	pageBlacklist = [ 'home' ];
	navigationVisible = false;

	async fetch() {
		this.fetchPages();
	}

	async fetchPages() {
		const $prismic = Vue.prototype.$nuxt.$prismic;
		this.pages = (await $prismic.api.query(
        	$prismic.predicates.at("document.type", "page"),
		)).results.filter((page: { uid: string }) => !this.pageBlacklist.includes(page.uid));
	}
}
</script>
<style lang="scss" scoped>
	nav {
		a {
			&, &:visited {
				color: rgba(210, 214, 220, 1);
				text-decoration: none;
				&:hover {
					color: #fff;
				}
			}
			&.active {
				&, &:visited {
					color: #fff;
					text-decoration: none;
				}
			}
		}
	}
</style>