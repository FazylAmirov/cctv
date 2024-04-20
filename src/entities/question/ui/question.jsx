import React from 'react';
import styles from 'entities/question/ui/question.module.scss';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PropTypes from 'prop-types';

export const Question = ({ question, answer, _id, expanded, handleChange }) => {
  return (
    <>
      <Accordion
        expanded={expanded === _id}
        onChange={handleChange(_id)}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={_id}
          id={_id}
        >
          <Typography
            className={styles.question}
            sx={{ width: '88%', flexShrink: 0 }}
          >
            {question}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={styles.answer}>{answer}</Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

Question.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
  expanded: PropTypes.any.isRequired,
  handleChange: PropTypes.any.isRequired
};
