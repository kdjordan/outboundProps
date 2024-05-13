<template>
	<div class="welcome">
		<div class="welcome__container">
			<div class="welcome__content">
				<div class="welcome__content--title">OutBound Properties</div>
				<div class="welcome__content--subtitle">- Presents -</div>
				<div class="welcome__content--image">
					<img src="@/assets/mwg-2.png" />
				</div>
				<div>
					<p>
						Introducing Maple Wood Grove: an elite enclave nestled in Northeast Portland, Oregon. Years of relentless dedication by Valerie Nipper and Don Etter have brought this vision to life. With deep ties to the Portland community, they've crafted a masterpiece. Every home in this prestigious development will bear the hallmark of Both Sides Construction, spearheaded by Don for over three decades.
					</p>
					<hr />
					<div class="welcome__details">
						<div class="welcome__details--location">
							<div>
								LOCATION:
								<a
									href="https://goo.gl/maps/Wp3XGMfnXJQ2byUJ8"
									target="_blank"
								>
									169th St and Halsey</a
								>
							</div>
							<div>HOMES AVAILABLE: 4</div>
						</div>
						<div class="welcome__details--buttons">
							<div>
								<router-link to="/rowan">
									<button class="btn-both-sides">
										Begin Tour of Maple Wood Grove
									</button>
								</router-link>
							</div>
							<div>
								<a
									href="https://www.bothsidesconstruction.com/"
									target="_blank"
									class="details__buttons--link"
								>
									<button class="btn-both-sides">
										Learn About Both Sides Construction
									</button>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script></script>

<style lang="scss" scoped>
	@import '@/scss/_variables.scss';
	@import '@/scss/_typography.scss';

	.welcome {
		background-image: url('../assets/outbound-welcome.jpg');
		background-size: cover;
		background-repeat: no-repeat;
		height: auto;
		min-height: 100vh;
		width: 100vw;
		position: absolute;
		top: 0;
		left: 0;
		margin: 0;

		&__container {
			background: $colorWhite;
			width: 80%;
			border-radius: 10px;
			margin: 0 auto;
			padding: 1rem;
			margin-top: 5%;
			max-width: 1250px;

			// @media (max-width: 560px) {
			// 	width: 95%;
			// }
		}

		&__content {
			border: 1px solid grey;
			border-radius: 10px;
			padding: 1rem;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;

			& hr {
				margin: 1rem 0;
			}

			& div > p {
				text-align: center;
				font-size: 1.1rem;
				margin: 2rem;
			}

			&--title {
				font-size: 2rem;
				text-transform: uppercase;
				text-align: center;
			}

			&--subtitle {
				padding: 0.5rem 0;
			}

			&--image {
				margin-top: 1rem;
				width: 100%;
				max-width: 500px;
				object-fit: cover;
			}

			@media (max-width: 560) {
				padding: 10px;
			}
		}

		&__details {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			font-family: $fontRoboto;

			&--location {
				text-align: left;
				margin-bottom: 1rem;

				& a {
					color: #2c3e50;
					font-weight: bold;
					text-decoration: underline;
					transition: all 0.4s;
					&:hover {
						font-weight: 900;
					}
				}
			}

			&--buttons {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				gap: 20px;
				margin-bottom: 1rem;
			}
		}
	}

	.btn-both-sides {
		border-radius: 5px;
		cursor: pointer;
		margin-top: 0.5rem;
		padding: 0.5rem 1rem;
		text-transform: uppercase;
		background: transparent;
		outline: none;
		border: 1px solid $color1;
		color: $color1;
		transition: all 0.4s ease;

		&:hover {
			background: $color1;
			color: white;
		}
	}

	img {
		width: 100%;
	}

	@media (min-width: 750px) {
		.welcome__details--buttons {
			display: flex;
			width: 100%;
			flex-direction: row;
			justify-content: space-evenly;
			align-items: center;
		}
	}
</style>
