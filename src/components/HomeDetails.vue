<template>
	<div class="home-details">
		<div
			class="home-details__bg"
			:style="{ backgroundImage: 'url(' + home.background + ')' }"
		></div>
		<TheHeader />
		<div class="home-details__shade" @click="closeAll"></div>
		<div class="home-details__container">
			<div class="details" :class="{ 'panel-open': detailsPanelOpen }" id="details-top">
				<div class="details__header">
					<div>
						<p>Home details</p>
						<h1 class="details__title">The {{ home.name }} Home</h1>
					</div>
					<button type="button" class="details__close" @click="toggleDetails(true)">
						Close
					</button>
				</div>
				<div class="details__desc">
					<p v-for="detail in home.descriptionArray" :key="detail">
						{{ detail }}
					</p>
				</div>
			</div>
		</div>
		<div class="bottom">
			<div class="bottom__container">
				<div class="bottom__summary">
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
					<button class="home-button" @click="goPreviousHome">
						Prev
					</button>
					<button class="home-button" @click="goNextHome">Next</button>
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
			this.syncIndex();
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
				this.syncIndex();
				this.animateBackground();
			},
		},
		methods: {
			syncIndex() {
				const index = this.homeList.indexOf(this.home.name.toLowerCase());
				this.index = index === -1 ? 0 : index;
			},
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
				} else {
					this.detailsPanelOpen = !this.detailsPanelOpen;
					if (this.detailsPanelOpen) {
						this.scrollTop(); // Scroll to the top when opening
					}
				}
			},
			getFloorPlan(homeName) {
				window.open(`./PDF/${homeName.toLowerCase()}.pdf`, '_blank');
			},
			scrollTop() {
				this.$nextTick(() => {
					const scrolly = document.querySelector('.details__title');
					scrolly?.scrollIntoView({ block: 'start' });
				});
			},
		},
	};
</script>

<style lang="scss">
	@import '@/scss/_variables.scss';
	@import '@/scss/_typography.scss';
	@import '@/scss/_page.scss';
</style>
