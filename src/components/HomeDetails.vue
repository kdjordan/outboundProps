<template>
	<div class="home-details">
		<div
			class="home-details__bg"
			:style="{ backgroundImage: 'url(' + home.background + ')' }"
		></div>
		<TheHeader />
		<div class="home-details__container" @click="closeAll">
			<div class="details" id="details-top">
				<div class="details__title">The {{ home.name }} Home</div>
				<div class="details__desc">
					<p v-for="detail in home.descriptionArray">
						{{ detail }}
					</p>
				</div>
			</div>
		</div>
		<div class="bottom">
			<div class="bottom__container">
				<div>
					<div class="bottom__container--title">
						The {{ home.name }} Home
					</div>
					<div>
						{{ home.footage }} / {{ home.beds }} BED /
						{{ home.baths }} BATH
					</div>
				</div>
				<div class="button-container">
					<button
						class="home-button"
						@click.stop="toggleDetails(false)"
					>
						DETAILS
					</button>
					<button
						class="home-button"
						@click.stop="getFloorPlan(`${home.name}`)"
					>
						FLOORPLAN
					</button>
				</div>
				<div class="button-container controls">
					<button class="home-button" @click="goNextHome">>></button>
					<button class="home-button" @click="goPreviousHome">
						<<
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import TheHeader from '@/components/TheHeader.vue';
	import { gsap, Power2 } from 'gsap';

	export default {
		components: {
			TheHeader,
		},
		props: {
			home: {
				type: Object,
				required: true,
			},
		},
		mounted() {
			this.detailsPanel = document.querySelector('.details');
		},
		data() {
			return {
				detailsPanel: null,
				detailsPanelOpen: false,
				floorPlanOpen: false,
				homeList: ['rowan', 'keagan', 'myles', 'nadia'],
				index: 0,
			};
		},
		watch: {
			home() {
				this.animateBackground();
			},
		},
		methods: {
			goNextHome() {
				this.index < this.homeList.length - 1
					? this.index++
					: (this.index = 0);
				this.$router.push(`/${this.homeList[this.index]}`);
				this.toggleDetails(true);
			},
			goPreviousHome() {
				this.index > 0
					? this.index--
					: (this.index = this.homeList.length - 1);
				this.$router.push(`/${this.homeList[this.index]}`);
				this.toggleDetails(true);
			},
			animateBackground() {
				const tl = gsap.timeline();
				tl.set('.home-details__bg', {
					opacity: 0,
					duration: .5,
					ease: Power2.easeOut,
				});
				tl.to(
					'.home-details__bg',
					{
						opacity: 1,
						duration: .5,
						ease: Power2.easeIn,
					},
					'+=0.1'
				);
			},
			closeAll() {
				this.detailsPanelOpen = false;
			},
			toggleDetails(flag) {
				if (flag) {
					this.detailsPanelOpen = false;
					this.detailsPanel.classList.remove('panel-open');
				} else {
					this.detailsPanelOpen = !this.detailsPanelOpen;
					if (this.detailsPanelOpen) {
						this.detailsPanel.classList.add('panel-open');
						this.scrollTop(); // Scroll to the top when opening
					} else {
						this.detailsPanel.classList.remove('panel-open');
					}
				}
			},
			getFloorPlan(homeName) {
				window.open(`./PDF/${homeName.toLowerCase()}.pdf`, '_blank');
			},
			scrollTop() {
				const scrolly = document.querySelector('.details__title');
				scrolly.scrollIntoView({ block: 'start' });
			},
		},
	};
</script>

<style lang="scss">
	@import '@/scss/_variables.scss';
	@import '@/scss/_typography.scss';
	@import '@/scss/_page.scss';
</style>
