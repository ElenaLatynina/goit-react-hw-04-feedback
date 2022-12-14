import React from 'react';
import { useState } from 'react';
import { Section } from './Section/Section';
import {FeedBackOptions} from './FeedBackOptions/FeedBackOptions';
import {Notification} from './Notification/Notification';
import { Statistic } from './Statistic/Statistic';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
  const onLeaveFeedback = event => {
    const option = event.target.name;
    switch (option) {
      case 'good': setGood(prevState => prevState + 1);
        break;
      case 'neutral': setNeutral(prevState => prevState + 1);
        break;
      case 'bad': setBad(prevState => prevState + 1);
        break;
      default: return;

    }
  };
  const total = good + bad + neutral;
  const positiveFeedback = Math.floor((good / total) * 100);

  return (
    <div>
    <Section title="Please leave your feedback">
      <FeedBackOptions options={['bad', 'good', 'neutral']}
        onLeaveFeedback={onLeaveFeedback} />
    </Section>
    <Section title="Statistics">
      {total === 0 ? (
        <Notification message="There is no feedback"></Notification>
      ) : (
        <Statistic
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positiveFeedback={positiveFeedback}
        />
      )}
    </Section>
  </div>);

};


export default App;
