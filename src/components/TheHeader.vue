<template>
	<div class="header">
		<div class="header__left">
			<router-link to="/">
				<img src="../assets/ob-logo-wht.svg" alt="" class="logo" />
			</router-link>
		</div>
		<nav class="header__right">
			<ul>
				<router-link
					v-for="home in homes"
					:key="home.id"
					:to="`${home.name}`"
					class="header__right--link"
					active-class="isActive"
				>
					{{ home.name }}
				</router-link>
				<li class="header__right--link">
					<a
						href="mailto:don@bothsidesconstruction.com?subject=I'm intereseted in a MWG Home !"
						target="_blank"
						>CONTACT</a
					>
				</li>
			</ul>
		</nav>
	</div>

	<div class="mobile-header">
		<div>
			<router-link to="/">
				<img src="../assets/ob-logo-wht.svg" alt="" class="logo" /> 
			</router-link>
		</div>
		<div>
			<div class="mobile-header--menu" @click.native="toggleMobileMenu">
				<span id="one"></span>
				<span id="two"></span>
				<span id="three"></span>
			</div>
			<ul class="mobile-header__drawer">
				<router-link
					v-for="home in homes"
					:key="home.id"
					:to="`${home.name}`"
					class="mobile-header__drawer--link"
					active-class="isActive"
					@click="toggleMobileMenu()"
				>
					{{ home.name }}
				</router-link>
				<li class="mobile-header__drawer--link">
					<a
						href="mailto:don@bothsidesconstruction.com?subject=I'm intereseted in a MWG Home !"
						target="_blank"
						>contact</a
					>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				homes: [
					{ id: 1, name: 'rowan' },
					{ id: 2, name: 'keagan' },
					{ id: 3, name: 'myles' },
					{ id: 4, name: 'nadia' },
				],
				mobileDrawerOpen: false,
				theDrawer: '',
				spans: []
			};
		},
		methods: {
			toggleMobileMenu() {
				this.mobileDrawerOpen = !this.mobileDrawerOpen;

				if(this.mobileDrawerOpen) {
					this.theDrawer.classList.add('open')
					this.spans.forEach(s => s.classList.add('open'))
				} else {
					this.theDrawer.classList.remove('open')
					this.spans.forEach(s => s.classList.remove('open'))
				}
				
			},
		},
		mounted() {
			this.theDrawer = document.querySelector(
				'.mobile-header__drawer'
			);
			this.spans = document.querySelectorAll('span')
		},
	};
</script>

<style lang="scss" scoped>
	@import '@/scss/_variables.scss';
	@import '@/scss/_header.scss';
</style>
