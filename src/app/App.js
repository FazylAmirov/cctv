import React from 'react';
import styles from 'app/app.module.scss';
import { Header } from 'widgets/header';
import { ImageInfo } from 'widgets/imageInfo';
import { WorkList } from 'widgets/workList';
import { WhyMe } from 'widgets/whyMe';
import { Feedback } from 'widgets/feedback';
import { AboutWork } from 'widgets/aboutWork';
import { WorkConsistency } from 'widgets/workConsistency';
import { CustomerReviews } from 'widgets/customerReviews';
import { QuestionsList } from '../widgets/questionsList';
import { Footer } from 'widgets/footer';

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <ImageInfo />
      <WorkList />
      <WhyMe />
      <Feedback />
      <AboutWork />
      <WorkConsistency />
      <CustomerReviews />
      <QuestionsList />
      <Footer />
    </div>
  );
}

export default App;
