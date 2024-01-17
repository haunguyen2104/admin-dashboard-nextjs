import Image from 'next/image'
import Link from 'next/link'
import Pagination from '~/ui/dashboard/pagination/pagination'
import styles from '~/ui/dashboard/products/products.module.scss'
import Search from '~/ui/dashboard/search/search'
import { fetchProducts } from '../../lib/data'
import { deleteProduct } from '~/lib/action'
const ProductsPage = async ({ searchParams }) => {
    const q = searchParams?.q || ''
    const page = searchParams?.page || 1
    const { products, count } = await fetchProducts(q, page)

    return (
        <div className={styles.container}>

            <div className={styles.top}>
                <Search placeholder="Search for a product..." />
                <Link href='/dashboard/products/add' className={styles.addButton}>
                    Add new
                </Link>
            </div>
            {products && products.length > 0 ?
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Color</th>
                            <th>Size</th>
                            <th>Price</th>
                            <th>Created At</th>
                            <th>Stock</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(product => (
                                <tr key={product._id}>
                                    <td>
                                        <div className={styles.product}>
                                            <Image src={product.img || '/noproduct.jpg'} alt='' width={40} height={40} className={styles.image} />
                                            {product.title}
                                        </div>
                                    </td>
                                    <td>
                                        <p className={styles.description}>
                                            {product.desc}
                                        </p>
                                    </td>
                                    <td>{product.color}</td>
                                    <td>{product.size}</td>
                                    <td>${product.price}</td>
                                    <td>13.02.2023</td>
                                    <td>{product.stock}</td>
                                    <td>
                                        <div className={styles.buttons}>
                                            <Link href={`/dashboard/products/${product._id}`} className={`${styles.button} ${styles.view}`}>
                                                View
                                            </Link>
                                            <form action={deleteProduct}>
                                                <input type="hidden" name="id" value={product._id} />
                                                <button className={`${styles.button} ${styles.delete}`}>
                                                    Delete
                                                </button>
                                            </form>
                                        </div>
                                    </td>
                                </tr>
                            ))

                        }
                    </tbody>
                </table>
                :
                <p className={styles.notFound}> No products found</p>
            }
            <Pagination count={count} />
        </div >
    )
}

export default ProductsPage