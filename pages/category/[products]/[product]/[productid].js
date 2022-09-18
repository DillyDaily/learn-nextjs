
import { useRouter } from 'next/router';

const ProductsSlug = () => {
  const router = useRouter();

  console.log("rout pathname", router.pathname)
  console.log("rout query", router.query) //concrete value encoded in URL

  // if ID of DB object: could send request to backend Server
  // to fetch piece of data w/ id of router.query.slug
  // can have nested dynamic paths
  // can define catch all routes

  
    return ( 
        <div>
            <h2> This will show the individ products - SLUG </h2> 
        </div>
    );
};

export default ProductsSlug;