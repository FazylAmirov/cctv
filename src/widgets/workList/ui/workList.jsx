import React from 'react';
import styles from 'widgets/workList/ui/workList.module.scss';
import { WorkType } from 'entities/workType';
import { workData } from 'widgets/workList/lib/workData';

export const WorkList = () => {
  return (
    <section className={styles.container}>
      {workData &&
        workData.map(item => (
          <WorkType
            key={item._id}
            title={item.title}
            img={item.img}
            price={item.price}
          />
        ))}
    </section>
  );
};
