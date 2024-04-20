import React from 'react';
import styles from 'widgets/whyMe/ui/whyMe.module.scss';
import { whyMeData } from 'widgets/whyMe/lib/whyMeData';
import { WhyMeType } from 'entities/whyMeType';

export const WhyMe = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {whyMeData &&
          whyMeData.map(item => (
            <WhyMeType
              key={item._id}
              img={item.img}
              title={item.title}
              alt={item.alt}
            />
          ))}
      </div>
    </div>
  );
};
