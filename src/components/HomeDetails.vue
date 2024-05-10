<template>
	<div
		class="home-details"
		:style="{ 'background-image': 'url(' + home.background + ')' }"
	>
		<TheHeader />
		<div class="home-details__container" @click="closeAll">
			<div class="details">
				<div class="details__title">The {{ home.name }} Home</div>
				<div class="details__desc">
					<p v-for="detail in home.descriptionArray">
						{{ detail }}
					</p>
				</div>
			</div>
		</div>
		<div>
			<!-- <transition name="raise">
				<div v-if="floorPlanOpen" class="details">
					<div class="details__img">
						<img
							src="../../assets/homes/home1/floorplan-1.jpg"
							alt=""
						/>
						<img
							src="../../assets/homes/home1/floorplan-2.jpg"
							alt=""
						/>
						<img
							src="../../assets/homes/home1/floorplan-3.jpg"
							alt=""
						/>
						<img
							src="../../assets/homes/home1/floorplan-4.jpg"
							alt=""
						/>
					</div>
				</div>
			</transition> -->
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
						@click.stop="toggleDetails"
						:class="{ buttonActive: detailsOpen }"
					>
						DETAILS
					</button>
					<button
						class="home-button"
						@click.stop="getFloorPlan(`${home.name}`)"
						:class="{ buttonActive: floorPlanOpen }"
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
			console.log(this.detailsPanel);
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
		methods: {
			goNextHome() {
				this.index < this.homeList.length - 1
					? this.index++
					: (this.index = 0);
				this.$router.push(`/${this.homeList[this.index]}`);
			},
			goPreviousHome() {
				this.index > 0
					? this.index--
					: (this.index = this.homeList.length - 1);
				this.$router.push(`/${this.homeList[this.index]}`);
			},
			closeAll() {
				this.detailsPanelOpen = false;
				this.floorPlanOpen = false;
			},
			toggleDetails() {
				console.log('clickin')
				this.detailsPanelOpen = !this.detailsPanelOpen
				this.detailsPanelOpen
					? this.detailsPanel.classList.add('panel-open')
					: this.detailsPanel.classList.remove('panel-open')
				// this.floorPlanOpen = false;
				// setTimeout(() => {
				// 	this.detailsOpen = !this.detailsOpen;
				// }, 300);
			},
			getFloorPlan(homeName) {
				window.open(
					`/src/assets/PDF/${homeName.toLowerCase()}.pdf`,
					'_blank'
				);
			},
		},
	};
</script>

<style lang="scss">
	@import '@/scss/_variables.scss';
	@import '@/scss/_typography.scss';
	@import '@/scss/_page.scss';
</style>
