const DUMMY_PRODUCTS = [{
        id: 'e1',
        title: 'Programming for everyone',
        description: 'Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.',
        location: 'Somestreet 25, 12345 San Somewhereo',
        date: '2021-05-12',
        image: 'images/quiche.jpg',
        isFeatured: false,
    },
    {
        id: 'e2',
        title: 'Networking for introverts',
        description: "We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
        location: 'New Wall Street 5, 98765 New Work',
        date: '2021-05-30',
        image: 'images/az-pillow.jpg',
        isFeatured: true,
    },
    {
        id: 'e3',
        title: 'Networking for extroverts',
        description: 'You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.',
        location: 'My Street 12, 10115 Broke City',
        date: '2022-04-10',
        image: 'images/coasters.jpg',
        isFeatured: true,
    },
];

export function getFeaturedProducts() {
    return DUMMY_PRODUCTS.filter((product) => product.isFeatured);
}

export function getAllProducts() {
    return DUMMY_PRODUCTS;
}

export function getFilteredProducts(dateFilter) {
    const {
        year,
        month
    } = dateFilter;

    let filteredProducts = DUMMY_PRODUCTS.filter((product) => {
        const productDate = new Date(product.date);
        return productDate.getFullYear() === year && productDate.getMonth() === month - 1;
    });

    return filteredProducts;
}

export function getProductById(id) {
    return DUMMY_PRODUCTS.find((product) => product.id === id);
}