import ProductItem from "./ProductItem";
import classes from './ProductList.module.css';

const ProductList = (props) => {
    const { products } = props;

    return (
        <ul className={classes.list}>
            {products.map((product) => (
            <ProductItem 
                key={product.id}
                id={product.id} 
                name={product.name} 
                description={product.description} 
                image={product.image}  
                date={product.date}
                location={product.location}
                category={product.category}
            />
            ))}
        </ul> 
    )
};

export default ProductList;