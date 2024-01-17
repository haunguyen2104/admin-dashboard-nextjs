import styles from "~/ui/dashboard/products/addProduct.module.scss"
import { addProduct } from '../../../lib/action'
const AddProductPage = () => {
    return (
        <div className={styles.container}>
            <form action={addProduct} className={styles.form}>
                <input type="text" placeholder="Title" name="title" required />
                <select name="cat" id="cat">
                    <option value="">Choose a category</option>
                    <option value="kitchen">Kitchen</option>
                    <option value="phone">Phone</option>
                    <option value="computer">Computer</option>
                </select>
                <input type="number" placeholder="Price" name="price" required />
                <input type="number" placeholder="Stock" name="stock" required />
                <input type="text" placeholder="Color" name="color" required />
                <input type="text" placeholder="Size" name="size" required />
                <textarea name="desc" id="desc" cols="30" rows="16" placeholder="Description "></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddProductPage