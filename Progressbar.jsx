import React, { useRef, useState } from 'react';
import '../../src/index.css';

const Progressbar = () => {
  const [currentProgress, setCurrentProgress] = useState(1);
  const progressBar = useRef();
  const circle = useRef();

  const progressArr = [1, 2, 3, 4];

  const prevSteps = () => {
    if (currentProgress > 1) {
      setCurrentProgress(currentProgress - 1);
    }
  };

  const nextSteps = () => {
    if (currentProgress < progressArr.length) {
      setCurrentProgress(currentProgress + 1);
    }
  };

  return (
    <>
      <div className="steps" ref={circle}>
        {progressArr.map((step) => (
          <span key={step} className={`circle ${step === currentProgress ? 'active' : ''}`}>
            {step}
          </span>
        ))}
        <div className="progress-bar">
          <span ref={progressBar} className="indicator"></span>
        </div>
      </div>
      <div className="buttons">
        <button id="prev" disabled={currentProgress === 1} onClick={prevSteps}>
          이전
        </button>
        <button id="next" disabled={currentProgress === progressArr.length} onClick={nextSteps}>
          다음
        </button>
      </div>
    </>
  );
};

export default Progressbar;
