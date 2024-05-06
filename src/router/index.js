import { createRouter, createWebHistory } from 'vue-router';
import TheWelcome from '@/components/TheWelcome.vue';
import HomeDetails from '@/components/HomeDetails.vue';
import {
	OswegoDetailsArray,
	ColumbiaDetailsArray,
} from '../../HomeDetailsArrays';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'welcome',
			component: TheWelcome,
		},
		{
			path: '/oswego',
			name: 'oswego',
			component: HomeDetails,
			props: {
				home: {
					id: 1,
					name: 'Oswego',
					price: '$200,000',
					squareFootage: '1500 sqft',
					background: '/src/assets/homes/home1/home-hero.jpg',
					descriptionArray: OswegoDetailsArray,
				},
			},
		},
		{
			path: '/columbia',
			component: HomeDetails,
			props: {
				home: {
					id: 2,
					name: 'Columbia',
					price: '$250,000',
					squareFootage: '1800 sqft',
          background: '/src/assets/homes/home2/home2-hero.jpg',
          descriptionArray: ColumbiaDetailsArray,
				},
			},
		},

		{
			path: '/laurelwood',
			component: HomeDetails,
			props: {
				home: {
					id: 3,
					name: 'Laurelwood',
					price: '$220,000',
					squareFootage: '1600 sqft',
          background: '/src/assets/homes/home3/home3-hero.jpg',
          descriptionArray: ColumbiaDetailsArray,
				},
			},
		},
		{
			path: '/willamette',
			component: HomeDetails,
			props: {
				home: {
					id: 4,
					name: 'Willamette',
					price: '$300,000',
					squareFootage: '2000 sqft',
          background: '/src/assets/homes/home4/home4-hero.jpg',
          descriptionArray: ColumbiaDetailsArray,
				},
			},
		}
	],
});

export default router;
