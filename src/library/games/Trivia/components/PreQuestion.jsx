import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import AnimatedPage from '../../../../theme/AnimatedPage';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)', // Add shadow to the progress bar
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: '#808080', // Change the complete bar color to grey
  },
}));

const PreQuestion = ({ question, toggleShowPreQuestion }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 1000; // Total animation duration in milliseconds
    const intervalTime = 50; // Interval time in milliseconds
    const steps = duration / intervalTime;
    const increment = 100 / steps;

    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + increment;
        return newProgress >= 100 ? 100 : newProgress;
      });
    }, intervalTime);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      // Fire toggleShowPreQuestion when progress reaches 100%
      toggleShowPreQuestion();
    }
  }, [progress, toggleShowPreQuestion]);

  return (
    <>
      <AnimatedPage>
        <div className="progress-wrapper">
          <div className="question">{question}</div>
          <BorderLinearProgress variant="determinate" value={progress} />
        </div>
      </AnimatedPage>
    </>
  );
};

export default PreQuestion;
