export const images = [
	{ name: 'imgone', url: require('./assets/one.png'), product: 'هودی Aroma' },
	{ name: 'imgtwo', url: require('./assets/two.png'), product: 'JootiJeans' },
	{ name: 'imgthree', url: require('./assets/three.png'), product: 'Asics' },
	{ name: 'imgfour', url: require('./assets/four.png'), product: 'Jeanswest' }
];

export const shopItems = [
	{ name: 'بچگانه', url: require('./assets/girl.png'), product: 'JootiJeans' },
	{ name: 'مردانه', url: require('./assets/men.png'), product: 'Asics' },
	{ name: 'زنانه', url: require('./assets/women.png'), product: 'Jeanswest' },
	{ name: 'مواد غذایی', url: require('./assets/food.png'), product: 'هودی Aroma' },
	{ name: 'لوازم خانگی', url: require('./assets/furniture.png'), product: 'Asics' },
	{ name: 'زیبایی و سلامت', url: require('./assets/beauty.png'), product: 'Misswake' }
];

export const offerItems = [
	{
		name: 'هودی Aroma',
		url: require('./assets/products/hoodie.png'),
		price: 548000,
		offprice: 685000,
		desc: `سویشرت یقه گرد مردانه آروما Aroma کد 12501024`,
		off: '۲۰%',
		key: '1',
		liked: false,
		inCart: false
	},
	{
		name: 'JootiJeans',
		url: require('./assets/products/shirt.png'),
		price: 249000,
		offprice: 325000,
		desc: 'تی شرت آستین بلند',
		off: '۱۰%',
		key: '2',
		liked: false,
		inCart: false
	},
	{
		name: 'Asics',
		url: require('./assets/products/shoes.png'),
		price: 4550000,
		offprice: 5120000,
		desc: 'کفش ورزشی مردانه اسیکس Asics مدل GEL-PULSE 11 LS',
		off: '۱۵%',
		key: '3',
		liked: false,
		inCart: false
	},
	{
		name: 'Jeanswest',
		url: require('./assets/products/coat.png'),
		price: 3149000,
		offprice: 4999999,
		desc: `کت زمستانی زنانه جین وست Jeanswest کد 94222556`,
		off: '۳۷%',
		key: '4',
		liked: false,
		inCart: false
	},
	{
		name: 'Misswake',
		url: require('./assets/products/toothpaste.png'),
		price: 127000,
		offprice: 225000,
		desc: `خمیر دندان سفیدکننده پمپی میسویک Misswake حجم 260 میلی لیتر`,
		off: '۱۲%',
		key: '5',
		liked: false,
		inCart: false
	}
];
