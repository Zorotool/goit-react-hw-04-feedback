import React, { useState } from "react";
import Wrapper from "../Wrapper/Wrapper";
import Section from "../Section/Section";
import OptionsFeedBack from "../OptionsFeedback/OptionsFeedback";
import Statistics from "../Statistics/Statistics";
import Notification from "../Notification/Notification";

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const stateMap = {
    good: setGood,
    neutral: setNeutral,
    bad: setBad
  };

  const addFeedback = e => {
    const { name } = e.target;
    stateMap[name](prev => prev + 1);
    };
  
  const countTotalFeedback = () => {
    const total = Object.values({good, neutral, bad}).reduce((acc, el) => acc + el, 0);
    return total;
  };
  
 const countPositiveFeedback = () => {
    const total = countTotalFeedback();
    const persantage = Math.round((100 / total) * good);
    return persantage;
  };

  const total = countTotalFeedback();

    return (
      <Wrapper>
        <Section title="Please leave feedback">
          <OptionsFeedBack
            options={{good, neutral, bad}}
            clickFeedback={addFeedback}
          ></OptionsFeedBack>
        </Section>

        <Section title="Statistic">
          {total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={countPositiveFeedback()}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </Wrapper>
    );
          };


export default App;