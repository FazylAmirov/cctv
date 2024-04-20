import React, { useState } from 'react';
import styles from 'widgets/questionsList/ui/questionsList.module.scss';
import { questionData } from 'widgets/questionsList/lib/questionData';
import { Question } from 'entities/question/ui/question';

export const QuestionsList = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Часто задаваемые вопросы:</h2>
      {questionData &&
        questionData.map(item => (
          <Question
            key={item._id}
            question={item.question}
            answer={item.answer}
            _id={item._id}
            expanded={expanded}
            handleChange={handleChange}
          />
        ))}
    </div>
  );
};
