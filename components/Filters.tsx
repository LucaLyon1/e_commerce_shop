import styles from '@/styles/Filters.module.css'
import { useState } from 'react'

export default function Filters() {
    const [filters, setFilters] = useState(Array<String>)

    const addFilter = (value: String) => {
        let old_filters: Array<String> = filters
        if(old_filters.includes(value) === true) {
            old_filters.splice(old_filters.indexOf(value), 1)
            setFilters(old_filters)
        } else {
            setFilters([...old_filters, value])
        }
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Filters</h2>
            <div className={styles.break}></div>
            <div className={styles.left}>
                <ul className={styles.filterList}>
                    <li onClick={() => addFilter("sale")} className={styles.filterItem}>SALE</li>
                    <li onClick={() => addFilter("backpacks")} className={styles.filterItem}>Backpacks</li>
                    <li onClick={() => addFilter("messenger")} className={styles.filterItem}>Messenger bags</li>
                    <li onClick={() => addFilter("briefcase")} className={styles.filterItem}>Briefcases</li>
                    <li onClick={() => addFilter("shoulder")} className={styles.filterItem}>Shoulder bags</li>
                    <li onClick={() => addFilter("tote")} className={styles.filterItem}>Tote bags</li>
                </ul>
            </div>
            <div className={styles.right}>
                <select className={styles.filterSelect} name="color" id="color" defaultValue="Color">
                    <option value="" disabled>Color</option>
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                    <option value="black">Black</option>
                    <option value="brown">Brown</option>
                </select>
                <select className={styles.filterSelect} name="material" id="material" defaultValue="Material">
                    <option value="" disabled>Material</option>
                    <option value="red">Leather</option>
                    <option value="blue">Polyester</option>
                    <option value="green">Nylon</option>
                </select>
            </div>
        </div>
    )
}