<template>
	<main class="home-page">
		<section class="home-hero">
			<nav class="home-hero__nav">
				<img :src="logoWhite" alt="OutBound Properties" />
				<a href="mailto:don@bothsidesconstruction.com?subject=I'm interested in a MWG Home">Contact</a>
			</nav>
			<div class="home-hero__content">
				<p>MapleWood Grove / Northeast Portland</p>
				<h1>Four crafted homes in the MapleWood Grove enclave.</h1>
				<div class="home-hero__actions">
					<router-link to="/rowan">Begin tour</router-link>
					<a href="https://goo.gl/maps/Wp3XGMfnXJQ2byUJ8" target="_blank" rel="noopener">View location</a>
				</div>
			</div>
		</section>

		<section class="home-inventory" aria-label="Available homes">
			<router-link
				v-for="home in homes"
				:key="home.name"
				:to="home.path"
				class="home-card"
			>
				<img :src="home.image" :alt="home.name + ' home exterior'" />
				<div class="home-card__body">
					<span>{{ home.name }}</span>
					<strong>{{ home.feature }}</strong>
					<small>{{ home.footage }} / {{ home.beds }} bed / {{ home.baths }} bath</small>
				</div>
			</router-link>
		</section>

		<footer class="builder-footer">
			<div>
				<p>Built by Both Sides Construction</p>
				<h2>Three decades of Portland-area residential craft behind MapleWood Grove.</h2>
			</div>
			<div class="builder-footer__actions">
				<a href="https://www.bothsidesconstruction.com/" target="_blank" rel="noopener">bothsidesconstruction.com</a>
				<a href="mailto:don@bothsidesconstruction.com?subject=I'm interested in a MWG Home">Contact the builder</a>
			</div>
		</footer>
	</main>
</template>

<script>
	import logoWhite from '@/assets/ob-logo-wht.svg';

	const homes = [
		{
			name: 'Rowan',
			path: '/rowan',
			image: '/images/homes/rowan.png',
			footage: '2244 sqft',
			beds: 4,
			baths: 3,
			feature: 'Vaulted great room',
		},
		{
			name: 'Keagan',
			path: '/keagan',
			image: '/images/homes/keagan.png',
			footage: '1800 sqft',
			beds: 4,
			baths: 3,
			feature: 'Open concept plan',
		},
		{
			name: 'Myles',
			path: '/myles',
			image: '/images/homes/myles.png',
			footage: '2942 sqft',
			beds: 4,
			baths: 3,
			feature: 'Main level den',
		},
		{
			name: 'Nadia',
			path: '/nadia',
			image: '/images/homes/nadia.png',
			footage: '2000 sqft',
			beds: 3,
			baths: 2,
			feature: 'Office and shop',
		},
	];

	export default {
		data() {
			return {
				homes,
				logoWhite,
			};
		},
	};
</script>

<style lang="scss" scoped>
	.home-page {
		min-height: 100vh;
		width: 100%;
		overflow-x: hidden;
		background: #f7f4ec;
		color: #1c211f;
		letter-spacing: 0;
	}

	.home-page a {
		color: inherit;
	}

	.home-hero {
		min-height: 58vh;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 1.25rem clamp(1rem, 4vw, 4rem) 2rem;
		background:
			linear-gradient(90deg, rgba(14, 18, 16, 0.82), rgba(14, 18, 16, 0.22)),
			url('@/assets/outbound-welcome.jpg') center / cover;
		color: #ffffff;
	}

	.home-hero__nav,
	.builder-footer {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
	}

	.home-hero__nav img {
		width: min(10rem, 42vw);
	}

	.home-hero__nav a,
	.home-hero__actions a,
	.builder-footer__actions a {
		border: 1px solid currentColor;
		border-radius: 999px;
		padding: 0.65rem 1rem;
		font-size: 0.8rem;
		text-transform: uppercase;
	}

	.home-hero__content {
		width: min(48rem, 100%);
	}

	.home-hero__content p,
	.builder-footer p {
		margin: 0;
		text-transform: uppercase;
		font-size: 0.82rem;
		font-weight: 800;
	}

	.home-hero h1 {
		margin: 0.75rem 0;
		font-size: clamp(2.2rem, 6vw, 4.7rem);
		line-height: 0.98;
	}

	.home-hero__actions {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
		margin-top: 1.25rem;
	}

	.home-hero__actions a:first-child {
		background: #ffffff;
		color: #1c211f;
	}

	.home-inventory {
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		gap: 1px;
		background: #d6d2c8;
	}

	.home-card {
		min-height: 19rem;
		display: grid;
		grid-template-rows: 12rem 1fr;
		background: #ffffff;
		color: #1c211f;
	}

	.home-card img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.home-card__body {
		display: grid;
		gap: 0.25rem;
		padding: 1rem;
	}

	.home-card__body span,
	.home-card__body strong {
		font-size: 1.35rem;
		line-height: 1.1;
	}

	.home-card__body small {
		color: #59615d;
	}

	.builder-footer {
		padding: clamp(1.5rem, 4vw, 3rem) clamp(1rem, 4vw, 4rem);
		background: #22342d;
		color: #ffffff;
	}

	.builder-footer h2 {
		max-width: 48rem;
		margin: 0.5rem 0 0;
		font-size: clamp(1.5rem, 3vw, 2.8rem);
		line-height: 1.08;
	}

	.builder-footer__actions {
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-end;
		gap: 0.75rem;
	}

	.builder-footer__actions a:first-child {
		background: #ffffff;
		color: #22342d;
	}

	@media (max-width: 900px) {
		.home-inventory {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}

		.builder-footer {
			align-items: flex-start;
			flex-direction: column;
		}

		.builder-footer__actions {
			justify-content: flex-start;
		}
	}

	@media (max-width: 560px) {
		.home-hero {
			min-height: 54vh;
		}

		.home-hero__nav,
		.home-hero__actions {
			align-items: flex-start;
			flex-direction: column;
		}

		.home-inventory {
			grid-template-columns: 1fr;
		}
	}
</style>
