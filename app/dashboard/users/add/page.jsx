import styles from "~/ui/dashboard/users/addUser.module.scss"
import { addUser } from '~/lib/action'
const AddUserPage = () => {
    return (
        <div className={styles.container}>
            <form action={addUser} className={styles.form}>
                <input type="text" placeholder="Username" name="username" required />
                <input type="email" placeholder="Email" name="email" required />
                <input type="password" placeholder="Password" name="password" required />
                <input type="tel" placeholder=" Phone" name="phone" required />
                <select name="isAdmin" id="isAdmin">
                    <option value={false}>Is Admin?</option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
                <select name="isActive" id="isActive">
                    <option value={false}>Is Active?</option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
                <textarea name="address" id="address" cols="30" rows="16" placeholder="Address "></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddUserPage