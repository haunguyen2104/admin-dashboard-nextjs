/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { MdSearch } from 'react-icons/md';
import styles from './search.module.scss';
import { useDebouncedCallback } from 'use-debounce'
const search = ({ placeholder }) => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const { replace } = useRouter()
    const handleSearch = useDebouncedCallback((e) => {
        const params = new URLSearchParams(searchParams)
        params.set('page', 1)
        const value = e.target.value;
        if (value) {
            value.length > 2 && params.set('q', value)
        } else {
            params.delete('q')
        }
        replace(`${pathname}?${params}`)

    }, 300)
    return (
        <div className={styles.container}>
            <MdSearch />
            <input type='text' placeholder={placeholder} className={styles.input} onChange={handleSearch} />
        </div>
    )
}

export default search