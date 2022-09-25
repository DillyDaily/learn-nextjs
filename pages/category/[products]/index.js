import { Fragment } from 'react';
import { useRouter } from 'next/router';

import { getAllProducts } from '../../dummy-data';
import ProductList from '../../../components/products/ProductList';
import ProductsSearch from '../../../components/products/ProductsSearch';

const Products = () => {
    const allProducts = getAllProducts();
    const router = useRouter();

    function findProductsHandler(category, color) {
        const fullPath = `/category/products/product/${category}/${color}`

        router.push(fullPath);
    }

    return ( 
        <Fragment>
            <ProductsSearch onSearch={findProductsHandler}/>
            <ProductList products={allProducts} />
        </Fragment>
    );
};

export default Products;