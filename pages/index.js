import { getFeaturedProducts } from "./dummy-data";
import ProductList from "../components/products/ProductList";

const HomePage = () => {
    const featuredProducts = getFeaturedProducts();
    return (
        <div>
            <h1>The Home Page</h1>
            <ProductList products={featuredProducts} />
            
        </div>
    )
};

export default HomePage;