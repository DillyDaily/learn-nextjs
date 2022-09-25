import { useRef } from 'react';

import Button from '../ui/Button';
import classes from './ProductsSearch.module.css'; 

const ProductsSearch = (props) => {
    const categoryInputRef = useRef();
    const colorInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault();

        const selectedCategory = categoryInputRef.current.value;
        const selectedColor = colorInputRef.current.value;

        props.onSearch(selectedCategory, selectedColor);
    }

    return(
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.controls}>
                <div className={classes.control}>
                    <label htmlFor='category'>Category</label>
                    <select id='category' ref={categoryInputRef}>
                        <option value="necklace">necklace</option>
                        <option value="bracelet">bracelet</option>
                        <option value="single bead">single bead</option>
                    </select>
                </div>
                < div className = {classes.control}>
                    <label htmlFor='color'>Color</label>
                    <select id='color' ref={colorInputRef}>
                        <option value="black">black</option>
                        <option value="red">red</option>
                        <option value="rainbow">rainbow</option>
                        <option value="green">green</option>
                        <option value="blue">blue</option>
                        <option value="purple">purple</option>
                    </select>
                </div>
            </div>
            <Button>Filter</Button>
        </form>
    );
};

export default ProductsSearch;