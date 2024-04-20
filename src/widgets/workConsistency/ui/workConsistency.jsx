import React from 'react';
import styles from 'widgets/workConsistency/ui/workConsistency.module.scss';
import { workConsistencyData } from 'widgets/workConsistency/lib/workConsistencyData';
import { WorkConsistencyType } from 'entities/workConsistencyType/ui/workConsistencyType';

export const WorkConsistency = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Порядок работ</h2>
      <div className={styles.gridContainer}>
        {workConsistencyData &&
          workConsistencyData.map(item => (
            <WorkConsistencyType
              key={item._id}
              img={item.img}
              alt={item.alt}
              text={item.text}
            />
          ))}
      </div>
    </section>
  );
};
