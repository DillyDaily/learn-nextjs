const DUMMY_PRODUCTS = [{
        id: 'e1',
        category: 'necklace',
        name: 'Programming for everyone',
        description: 'Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.',
        location: 'Somestreet 25, 12345 San Somewhereo',
        date: '2021-05-12',
        image: 'images/quiche.jpg',
        color: 'black',
        price: 243.67,
        isFeatured: false,
    },
    {
        id: 'e2',
        category: 'bracelet',
        name: 'Disks and things',
        description: "We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
        location: 'New Wall Street 5, 98765 New Work',
        date: '2021-05-30',
        image: 'images/az-pillow.jpg',
        color: 'red',
        price: 523.16,
        isFeatured: true,
    },
    {
        id: 'e3',
        category: 'single bead',
        name: 'Hearts for Days',
        description: 'You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.',
        location: 'My Street 12, 10115 Broke City',
        date: '2022-04-10',
        image: 'images/coasters.jpg',
        color: 'purple',
        price: 123.87,
        isFeatured: true,
    },
    {
        id: 'e4',
        category: 'bracelet',
        name: 'Evil Purple ',
        description: "We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
        location: 'New Wall Street 5, 98765 New Work',
        date: '2021-05-30',
        image: 'images/az-pillow.jpg',
        color: 'green',
        price: 523.16,
        isFeatured: true,
    },
    {
        id: 'e5',
        category: 'single bead',
        name: 'Angry Flowers',
        description: 'You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.',
        location: 'My Street 12, 10115 Broke City',
        date: '2022-04-10',
        image: 'images/coasters.jpg',
        color: 'black',
        price: 123.87,
        isFeatured: true,
    },
    {
        id: 'e6',
        category: 'bracelet',
        name: 'Perfection',
        description: "We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
        location: 'New Wall Street 5, 98765 New Work',
        date: '2021-05-30',
        image: 'images/az-pillow.jpg',
        color: 'rainbow',
        price: 723.16,
        isFeatured: true,
    },
    {
        id: 'e7',
        category: 'single bead',
        name: 'Pupperoos',
        description: 'You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.',
        location: 'My Street 12, 10115 Broke City',
        date: '2022-04-10',
        image: 'images/coasters.jpg',
        color: 'blue',
        price: 183.87,
        isFeatured: true,
    },
];

export function getFeaturedProducts() {
    return DUMMY_PRODUCTS.filter((product) => product.isFeatured);
}

export function getAllProducts() {
    return DUMMY_PRODUCTS;
}

export function getFilteredProducts(productFilter) {
    const { category, color } = productFilter;

    let filteredProducts = DUMMY_PRODUCTS.filter((product) => {
        const productCategory = product.category;
        const productColor = product.color;
        return productCategory === category && productColor === color;
    });

    return filteredProducts;
}

export function getProductById(id) {
    return DUMMY_PRODUCTS.find((product) => product.id === id);
}