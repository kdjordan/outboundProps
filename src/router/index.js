import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import HomeDetails from '@/components/HomeDetails.vue';
import {
	RowanDetailsArray,
	KeaganDetailsArray,
	MylesDetailsArray,
	NadiaDetailsArray
} from '../../HomeDetailsArrays';

const siteUrl = 'https://outboundprops.com';
const defaultDescription = 'Tour four new homes at MapleWood Grove, a quiet Northeast Portland enclave by OutBound Properties and Both Sides Construction.';
const defaultShareImage = `${siteUrl}/images/og-image.png`;

function setMetaTag(selector, attribute, value) {
	let tag = document.head.querySelector(selector);
	if (!tag) {
		tag = document.createElement('meta');
		const match = selector.match(/meta\[([^=]+)="([^"]+)"\]/);
		if (match) {
			tag.setAttribute(match[1], match[2]);
		}
		document.head.appendChild(tag);
	}
	tag.setAttribute(attribute, value);
}

function setCanonical(url) {
	let link = document.head.querySelector('link[rel="canonical"]');
	if (!link) {
		link = document.createElement('link');
		link.setAttribute('rel', 'canonical');
		document.head.appendChild(link);
	}
	link.setAttribute('href', url);
}

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'welcome',
			component: HomePage,
			meta: {
				title: 'MapleWood Grove Homes in Northeast Portland | OutBound Properties',
				description: defaultDescription,
				image: defaultShareImage,
			},
		},
		{
			path: '/rowan',
			name: 'rowan',
			component: HomeDetails,
			meta: {
				title: 'Rowan Home at MapleWood Grove | OutBound Properties',
				description: 'Tour the Rowan home at MapleWood Grove, a 4 bedroom, 3 bath Northeast Portland home with a vaulted great room.',
				image: `${siteUrl}/images/homes/rowan.png`,
			},
			props: {
				home: {
					id: 1,
					name: 'Rowan',
					price: 'TBD',
					footage: '2244 sqft',
					beds: 4,
					baths: 3,
					background: '/images/homes/rowan.png',
					descriptionArray: RowanDetailsArray,
				},
			},
		},
		{
			path: '/keagan',
			component: HomeDetails,
			meta: {
				title: 'Keagan Home at MapleWood Grove | OutBound Properties',
				description: 'Tour the Keagan home at MapleWood Grove, a 4 bedroom, 3 bath Northeast Portland home with an open concept plan.',
				image: `${siteUrl}/images/homes/keagan.png`,
			},
			props: {
				home: {
					id: 2,
					name: 'Keagan',
					price: 'TBD',
					footage: '1800 sqft',
					beds: 4,
					baths: 3,
          background: '/images/homes/keagan.png',
          descriptionArray: KeaganDetailsArray,
				},
			},
		},

		{
			path: '/myles',
			component: HomeDetails,
			meta: {
				title: 'Myles Home at MapleWood Grove | OutBound Properties',
				description: 'Tour the Myles home at MapleWood Grove, a 4 bedroom, 3 bath Northeast Portland home with a main level den.',
				image: `${siteUrl}/images/homes/myles.png`,
			},
			props: {
				home: {
					id: 3,
					name: 'Myles',
					price: 'TBD',
					footage: '2942 sqft',
					beds: 4,
					baths: 3,
          background: '/images/homes/myles.png',
          descriptionArray: MylesDetailsArray,
				},
			},
		},
		{
			path: '/nadia',
			component: HomeDetails,
			meta: {
				title: 'Nadia Home at MapleWood Grove | OutBound Properties',
				description: 'Tour the Nadia home at MapleWood Grove, a 3 bedroom, 2 bath Northeast Portland home with an office and shop.',
				image: `${siteUrl}/images/homes/nadia.png`,
			},
			props: {
				home: {
					id: 4,
					name: 'Nadia',
					price: 'TBD',
					footage: '2000 sqft',
					beds: 3,
					baths: 2,
          background: '/images/homes/nadia.png',
          descriptionArray: NadiaDetailsArray,
				},
			},
		}
	],
});

router.afterEach((to) => {
	const title = to.meta.title || 'MapleWood Grove Homes in Northeast Portland | OutBound Properties';
	const description = to.meta.description || defaultDescription;
	const url = `${siteUrl}${to.path}`;
	const image = to.meta.image || defaultShareImage;

	document.title = title;
	setMetaTag('meta[name="description"]', 'content', description);
	setMetaTag('meta[property="og:title"]', 'content', title);
	setMetaTag('meta[property="og:description"]', 'content', description);
	setMetaTag('meta[property="og:url"]', 'content', url);
	setMetaTag('meta[property="og:image"]', 'content', image);
	setMetaTag('meta[name="twitter:title"]', 'content', title);
	setMetaTag('meta[name="twitter:description"]', 'content', description);
	setMetaTag('meta[name="twitter:image"]', 'content', image);
	setCanonical(url);
});

export default router;
