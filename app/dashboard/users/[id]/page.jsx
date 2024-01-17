import Image from 'next/image'
import styles from '../../../ui/dashboard/users/singleUser/singleUser.module.scss'
import { fetchUser } from '../../../lib/data'
import { updateUser } from '../../../lib/action'
const SingleUserPage = async ({ params }) => {
    const { id } = params
    const user = await fetchUser(id)
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imageContainer}>
                    <Image src={user.img || '/noavatar.png'} alt='' fill />
                </div>
                {user.username}
            </div>
            <div className={styles.formContainer}>
                <form className={styles.form} action={updateUser}>
                    <input type="hidden" name="id" value={user._id} />

                    <label htmlFor="">Username</label>
                    <input type="text" name='username' placeholder={user.username} />

                    <label htmlFor="">Email</label>
                    <input type="email" name='email' placeholder={user.email} />

                    <label htmlFor="">Password</label>
                    <input type="password" name='password' placeholder={user.password} />

                    <label htmlFor="">Phone</label>
                    <input type="tel" name='phone' placeholder={user.phone} />

                    <label htmlFor="">Address</label>
                    <textarea type="text" name='address' placeholder={user.address} />

                    <label htmlFor="">Is Admin?</label>
                    <select name="isAdmin" id="isAdmin">
                        <option value={false}>Is Admin?</option>
                        <option value={true} selected={user.isAdmin}>Yes</option>
                        <option value={false} selected={!user.isAdmin}>No</option>
                    </select>

                    <label htmlFor="">Is Active?</label>
                    <select name="isActive" id="isActive">
                        <option value={false}>Is Active?</option>
                        <option value={true} selected={user.isActive}>Yes</option>
                        <option value={false} selected={!user.isActive}>No</option>
                    </select>
                    <button>Update</button>
                </form>
            </div>

        </div>
    )
}

export default SingleUserPage