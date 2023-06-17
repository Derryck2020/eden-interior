import React from 'react';
import { GiCompass, GiDiamondHard, GiSteampunkGoggles } from 'react-icons/gi';

export const links = [
	{
		id: 1,
		text: 'home',
		url: '/',
	},
	{
		id: 2,
		text: 'about',
		url: '/about',
	},
	{
		id: 3,
		text: 'products',
		url: '/products',
	},
];

export const services = [
	{
		id: 1,
		icon: <GiCompass />,
		title: 'mission',
		text: 'We are dedicated to creating exceptional, inspiring spaces that reflect the unique tastes and lifestyles of our clients, making their dream homes a reality.',
	},
	{
		id: 2,
		icon: <GiSteampunkGoggles />,
		title: 'vision',
		text: 'Our vision is to be a trailblazer in the home interior industry, redefining the way people experience and interact with their living spaces. ',
	},
	{
		id: 3,
		icon: <GiDiamondHard />,
		title: 'value',
		text: 'We are committed to integrity, transparency, and exceptional customer service, fostering long-lasting relationships with our clients based on trust, respect, and a shared passion for creating beautiful living environments.',
	},
];

export const products_url = 'https://course-api.com/react-store-products';

export const single_product_url = `https://course-api.com/react-store-single-product?id=`;
