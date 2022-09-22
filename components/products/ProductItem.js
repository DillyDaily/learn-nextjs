import Link from 'next/link';

const ProductItem = (props) => {
    const { name, description, image, price, date, location, id, category } = props;

    const readableDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    const formattedAddress = location.replace(', ', '\n');
    const productLink = `/products/${id}`

    return <li>
        <img src={'/' + image} alt={name} />
        <div>
            <div>
                <h2>{name}</h2>
                <h4>{price}</h4>
                <div>
                    <p>{description}</p>
                </div>
                <div>
                    <time>{readableDate}</time>
                </div>
                <div>
                    <address>{formattedAddress}</address>
                </div>
            </div>
            <div>
                <Link href = {productLink}>Go to Product</Link>
            </div>
        </div>
    </li>;
};

export default ProductItem;