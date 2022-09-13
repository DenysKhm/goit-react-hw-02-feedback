import React from 'react';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          />
        </Section>
        <Section title="Statistics">
          <Statistics></Statistics>
        </Section>
      </>
    );
  }
}

export default App;
