import Link from 'next/link'
import Image from 'next/image'
import Pagination from '~/ui/dashboard/pagination/pagination'
import styles from '~/ui/dashboard/users/users.module.scss'
import Search from '~/ui/dashboard/search/search'
import { fetchUsers } from '../../lib/data'
import { deleteUser } from '../../lib/action'
const UsersPage = async ({ searchParams }) => {
  // const [listUser, setListUser] = useState([])
  const q = searchParams?.q || ''
  const page = searchParams?.page || 1
  const { users, count } = await fetchUsers(q, page)

  return (
    <div className={styles.container}>

      <div className={styles.top}>
        <Search placeholder="Search for a user..." />
        <Link href='/dashboard/users/add' className={styles.addButton}>
          Add new
        </Link>
      </div>

      {users && users.length > 0 ?
        <>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Created At</th>
                <th>Role</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                users.map(user => {
                  return (
                    <tr key={user._id}>
                      <td>
                        <div className={styles.user}>
                          <Image src={user.img || '/noavatar.png'} alt='' width={40} height={40} className={styles.image} />
                          {user.username}
                        </div>
                      </td>
                      <td>
                        {user.email}
                      </td>
                      <td>{user.createdAt?.toString().slice(4, 16)}</td>
                      <td>{user.isAdmin ? 'Admin' : 'Client'}</td>
                      <td>{user.isActive ? 'Active' : 'Passive'}</td>
                      <td>
                        <div className={styles.buttons}>
                          <Link href={`/dashboard/users/${user._id}`} className={`${styles.button} ${styles.view}`}>
                            View
                          </Link>
                          <form action={deleteUser}>
                            <input type="hidden" name="id" value={user._id} />
                            <button className={`${styles.button} ${styles.delete}`}>
                              Delete
                            </button>
                          </form>
                        </div>
                      </td>
                    </tr>
                  )
                })
              }

            </tbody>
          </table>
          <Pagination count={count} />
        </>
        :
        <p className={styles.notFound}> No users found</p>
      }
    </div>
  )
}

export default UsersPage