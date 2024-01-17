import Image from 'next/image'
import React from 'react'
import styles from '~/ui/dashboard/users/singleProduct/singleProduct.module.scss'
import { fetchProduct } from '../../../lib/data'
import { updateProduct } from '../../../lib/action'
const SingleProductPage = async ({ params }) => {
    const { id } = params
    const product = await fetchProduct(id)
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imageContainer}>
                    <Image src='/noproduct.jpg' alt='' fill />
                </div>
                IPhone 15 Pro Max Titan
            </div>
            <div className={styles.formContainer}>
                <form className={styles.form} action={updateProduct}>
                    <input type="hidden" name="id" value={id} />
                    <label htmlFor="">Title</label>
                    <input type="text" name='title' placeholder={product.title} />

                    <label htmlFor="">Price</label>
                    <input type="number" name='price' placeholder={product.price} />

                    <label htmlFor="">Stock</label>
                    <input type="number" name='stock' placeholder={product.stock} />

                    <label htmlFor="">Color</label>
                    <input type="text" name='color' placeholder={product.color} />

                    <label htmlFor="">Size</label>
                    <textarea type="text" name='size' placeholder={product.size} />

                    <label htmlFor="">Category</label>
                    <select name="category" id="category">
                        <option value="">Choose a category</option>
                        <option value="kitchen">Kitchen</option>
                        <option value="phone">Phone</option>
                        <option value="computer">Computer</option>
                    </select>

                    <label htmlFor="">Description</label>
                    <textarea name="" id="" cols="30" rows="16" placeholder='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui quibusdam labore reprehenderit a? Molestias repudiandae ipsa ex vel distinctio? Libero.'></textarea>
                    <button>Update</button>
                </form>
            </div>

        </div>
    )
}

export default SingleProductPage