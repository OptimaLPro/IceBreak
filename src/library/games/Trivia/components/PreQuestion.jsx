import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import React, { useEffect, useState } from 'react';
import AnimatedPage from '../../../../theme/AnimatedPage';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: '#808080',
  },
}));

const PreQuestion = ({ question, toggleShowPreQuestion }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 5000;
    const intervalTime = 50;
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
