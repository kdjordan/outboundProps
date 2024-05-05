<template>
	<div>
		<div class="welcome">
			<div class="welcome__container">
				<div class="welcome__content">
					<div class="welcome__content--title">
						OutBound Properties
					</div>
					<div class="welcome__content--subtitle">- Presents -</div>
					<div class="welcome__content--image">
						<img
							src="@/assets/mwgLogos/SVG/logo1-1.svg"
							:key="index"
						/>
					</div>
					<div>
						<p>
							Maple Wood Grove is an exclusive development in
							Northeast Portland Oregon. This project is the
							culmination of years work by Valerie Nipper and Don
							Etter. Both are long time Portland residents, and have
							deep roots in the community. All homes will be built by
							Both Sides Construction, a business owned and operated
							by Don for 30+ years.
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
									<router-link to="/home1">
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
	</div>
</template>

<script></script>

<style lang="scss" scoped>
	@import '@/scss/_variables.scss';
	@import '@/scss/_typography.scss';
	@import '@/scss/_animations.scss';

	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 0.5s ease-in-out;
	}
	.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
		opacity: 0;
	}

	.welcome {
		background-image: url('../assets/homes/home1/home-hero.jpg');
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		height: 100vh;
        width: 100vw;
		position: absolute;
		top: 0;
		left: 0;
        

		&__container {
			background: $colorWhite;
			width: 80%;
			margin: 0 auto;
			padding: 1rem;
			margin-top: 5%;
			min-height: 0% !important;
            max-width: 1250px;

			@media (max-width: 560px) {
				width: 95%;
			}
		}

		&__content {
			border: 1px solid grey;
			padding: 1rem;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;

			&  hr {
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
				max-width: 200px;
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
				height: 100%;
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
