"use client"

import styles from './filter.module.css'

export default function Filter({ name, filterForm }: { name: string, filterForm: React.ReactNode }) {
  return (
      <label className={styles.filter}>
        <div>
          <h2 className={styles.header}>{name}</h2>
        
          {filterForm}    
        </div>
      </label>
  );
}
