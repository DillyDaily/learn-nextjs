import { useRouter } from 'next/router';

import ProductList from '../../../../components/products/ProductList';
import { getFilteredProducts } from '../../../dummy-data';

const FilteredEventsPage = () => {
    const router = useRouter();

    const filteredData = router.query.productslug;
    console.log('FILTERED DATA ', filteredData);
    console.log('QUERY ', router.query)

    if (!filteredData) {
        return <p className='center'>Loading...</p>
    }

    const filteredCategory = filteredData[0];
    const filteredColor = filteredData[1];

    const filteredProducts = getFilteredProducts({
        category: filteredCategory,
        color: filteredColor,
    }); 

    if (!filteredProducts || filteredProducts.length === 0) {
        return <p>No Products found for chosen filter</p>
    }
    
    return (
        <div>
            <ProductList products={filteredProducts} />
        </div>
    );
};

export default FilteredEventsPage;