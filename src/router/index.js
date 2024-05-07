import { createRouter, createWebHistory } from 'vue-router';
import TheWelcome from '@/components/TheWelcome.vue';
import HomeDetails from '@/components/HomeDetails.vue';
import {
	RowanDetailsArray,
	KeaganDetailsArray,
	MylesDetailsArray,
	NadiaDetailsArray
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
			path: '/rowan',
			name: 'rowan',
			component: HomeDetails,
			props: {
				home: {
					id: 1,
					name: 'Rowan',
					price: 'TBD',
					footage: '2244 sqft',
					beds: 4,
					baths: 3,
					background: '/src/assets/homes/rowan.png',
					descriptionArray: RowanDetailsArray,
				},
			},
		},
		{
			path: '/keagan',
			component: HomeDetails,
			props: {
				home: {
					id: 2,
					name: 'Keagan',
					price: 'TBD',
					footage: '1800 sqft',
					beds: 4,
					baths: 3,
          background: '/src/assets/homes/keagan.png',
          descriptionArray: KeaganDetailsArray,
				},
			},
		},

		{
			path: '/myles',
			component: HomeDetails,
			props: {
				home: {
					id: 3,
					name: 'Myles',
					price: 'TBD',
					footage: '2942 sqft',
					beds: 4,
					baths: 3,
          background: '/src/assets/homes/myles.png',
          descriptionArray: MylesDetailsArray,
				},
			},
		},
		{
			path: '/nadia',
			component: HomeDetails,
			props: {
				home: {
					id: 4,
					name: 'Nadia',
					price: 'TBD',
					footage: '2000 sqft',
					beds: 3,
					baths: 2,
          background: '/src/assets/homes/nadia.png',
          descriptionArray: NadiaDetailsArray,
				},
			},
		}
	],
});

export default router;
