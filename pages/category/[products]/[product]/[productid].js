
import { Fragment } from 'react';
import { useRouter } from 'next/router';

import { getProductById } from '../../../dummy-data';
import ProductSummary from '../../../../components/product-detail/ProductSummary';
import ProjectLogistics from '../../../../components/product-detail/ProductLogistics';
import ProjectContent from '../../../../components/product-detail/ProductContent';

const ProductsSlug = () => {
  const router = useRouter();

  const productId = router.query.productId;
  const product = getProductById(productId);

  console.log("rout pathname", router.pathname)
  console.log("rout query", router.query) //concrete value encoded in URL

  // if ID of DB object: could send request to backend Server
  // to fetch piece of data w/ id of router.query.slug
  // can have nested dynamic paths
  // can define catch all routes
  
    if (!product) {
        return <p>No event found!</p>
    }

    return ( 
        <Fragment>
            <ProductSummary title={product.name} />
            <ProjectLogistics 
                date={product.date} 
                location={product.location} 
                image={product.image} 
                imageAlt={product.name} /> 
            <ProjectContent>
                <p>{product.description}</p>
            </ProjectContent>
        </Fragment>
    );
};

export default ProductsSlug;