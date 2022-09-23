import Button from '../ui/Button';
import DateIcon from '../icons/DateIcon';
import AddressIcon from '../icons/AddressIcon';
import ArrowRight from '../icons/ArrowRightIcon';
import classes from './ProductItem.module.css';

const ProductItem = (props) => {
    const { name, description, image, price, date, location, id, category } = props;

    const readableDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    const formattedAddress = location.replace(', ', '\n');
    const productLink = `category/products/product/${id}`

    return <li className={classes.product}>
        <img src={'/' + image} alt={name} />
        <div className={classes.content}>
            <div className={classes.summary}>
                <h2>{name}</h2>
                <h4>{price}</h4>
                <div>
                    <p>{description}</p>
                </div>
                <div className={classes.date}>
                    <DateIcon />
                    <time>{readableDate}</time>
                </div>
                <div className={classes.address}>
                    <AddressIcon />
                    <address>{formattedAddress}</address>
                </div>
            </div>
            <div className={classes.actions}>
                <Button link={productLink}>
                    <span> Quickshop </span>
                    <span className={classes.icon}> <ArrowRight /></span>
                </Button>
            </div>
        </div>
    </li>;
};

export default ProductItem;