<template>
	<div
		class="home-details"
		:style="{ 'background-image': 'url(' + home.background + ')' }"
	>
		<TheHeader />
		<div class="home-details__container" @click="closeAll">
			<transition name="raise">
				<div v-show="detailsOpen" class="details">
					<div class="details__title">The {{ home.name }} Home</div>
					<div class="details__desc">
						<p v-for="detail in home.descriptionArray">
              {{ detail }}
						</p>
					</div>
				</div>
			</transition>
		</div>
		<div>
			<transition name="raise">
				<div v-if="floorPlanOpen" class="details">
					<!-- <div class="details__title">Plan1</div> -->
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
			</transition>
		</div>
		<div class="info">
			<div class="info__container">
				<div>
					<div class="info-title">The {{ home.name }} Home</div>
					<div class="info__desc">
						{{ home.footage }} / {{ home.beds }} BED / {{ home.baths }} BATH 
					</div>
				</div>
				<div class="info__controls">
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
				<div class="info__next">
					<button class="home-button" @click="goPreviousHome">
						PREVIOUS
					</button>
					<button class="home-button" @click="goNextHome">
						NEXT
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import TheHeader from '@/components/TheHeader.vue';
	import pdf from '@/assets/PDF/nadia.pdf'
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
		data() {
			return {
				detailsOpen: false,
				optionsOpen: false,
				floorPlanOpen: false,
			};
		},
		methods: {
			goNextHome() {
				this.$router.push('/home2');
			},
			goPreviousHome() {
				this.$router.push('/home4');
			},
			closeAll() {
				this.detailsOpen = false;
				this.optionsOpen = false;
				this.floorPlanOpen = false;
			},
			toggleDetails() {
				this.optionsOpen = false;
				this.floorPlanOpen = false;
				setTimeout(() => {
					this.detailsOpen = !this.detailsOpen;
				}, 300);
			},
			toggleOptions() {
				this.detailsOpen = false;
				this.floorPlanOpen = false;
				setTimeout(() => {
					this.optionsOpen = !this.optionsOpen;
				}, 300);
			},
			getFloorPlan(homeName) {
				console.log(homeName.toLowerCase(), pdf)
				window.open(`/src/assets/PDF/${homeName.toLowerCase()}.pdf`, '_blank')

			},
			optionSelected(option) {
				this.optionsOpen = false;
				this.$store.commit('setHomeSelection', {
					home: 'Oswego',
					option: option,
				});
				this.$store.commit('toggleModal');
				this.$store.commit('setModalContact', false);
				console.log(option);
			},
		},
	};
</script>

<style lang="scss">
	@import '@/scss/_variables.scss';
	@import '@/scss/_typography.scss';
	@import '@/scss/_page.scss';

	.home-details {
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		flex: 1 0 auto;

		&__container {
			flex: 1 0 auto;
			min-height: 100%;
		}
	}

	img {
		width: 100%;
		object-fit: cover;
	}

	.raise-enter-active {
		animation: raiseLower 0.3s linear;
	}
	.raise-leave-leave {
		animation: raiseLower 0.3s linear reverse;
	}
	@keyframes raiseLower {
		0% {
			max-height: 0vh;
			opacity: 0;
		}
		100% {
			max-height: 80vh;
			opacity: 1;
		}
	}
</style>
