<template>
	<header class="site-header">
		<router-link to="/" class="site-header__brand" @click="closeMobileMenu">
			<img src="../assets/ob-logo-wht.svg" alt="OutBound Properties" />
		</router-link>

		<nav class="site-header__nav" aria-label="Primary navigation">
			<router-link
				v-for="home in homes"
				:key="home.id"
				:to="home.path"
				class="site-header__link"
				active-class="isActive"
			>
				{{ home.name }}
			</router-link>
			<a
				class="site-header__link site-header__link--contact"
				href="mailto:don@bothsidesconstruction.com?subject=I'm interested in a MWG Home"
			>
				Contact
			</a>
		</nav>

		<button
			type="button"
			class="site-header__menu"
			:class="{ 'site-header__menu--open': mobileDrawerOpen }"
			aria-label="Toggle navigation"
			:aria-expanded="mobileDrawerOpen"
			@click="toggleMobileMenu"
		>
			<span></span>
			<span></span>
			<span></span>
		</button>

		<nav
			class="site-header__drawer"
			:class="{ 'site-header__drawer--open': mobileDrawerOpen }"
			aria-label="Mobile navigation"
		>
			<router-link
				v-for="home in homes"
				:key="home.id"
				:to="home.path"
				class="site-header__drawer-link"
				active-class="isActive"
				@click="closeMobileMenu"
			>
				{{ home.name }}
			</router-link>
			<a
				class="site-header__drawer-link"
				href="mailto:don@bothsidesconstruction.com?subject=I'm interested in a MWG Home"
				@click="closeMobileMenu"
			>
				Contact
			</a>
		</nav>
	</header>
</template>

<script>
	export default {
		data() {
			return {
				homes: [
					{ id: 1, name: 'Rowan', path: '/rowan' },
					{ id: 2, name: 'Keagan', path: '/keagan' },
					{ id: 3, name: 'Myles', path: '/myles' },
					{ id: 4, name: 'Nadia', path: '/nadia' },
				],
				mobileDrawerOpen: false,
			};
		},
		methods: {
			toggleMobileMenu() {
				this.mobileDrawerOpen = !this.mobileDrawerOpen;
			},
			closeMobileMenu() {
				this.mobileDrawerOpen = false;
			},
		},
	};
</script>

<style lang="scss" scoped>
	@import '@/scss/_variables.scss';
	@import '@/scss/_header.scss';
</style>
