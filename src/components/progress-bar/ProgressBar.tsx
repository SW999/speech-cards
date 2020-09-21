import React, { FunctionComponent, memo } from 'react';
import '../../scss/components/_progress-bar2.scss';

type ProgressBarProps = {
  progress: number;
  radius: number;
  stroke?: number;
};

const ProgressBar: FunctionComponent<ProgressBarProps> = ({
  progress,
  radius,
  stroke = 16,
}) => {
  const normalizedRadius = radius * 0.9;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress * circumference) / 100;
  const style = {
    width: radius * 2,
    height: radius * 2,
  };
  return (
    <div id="cont" data-pct={~~progress} style={style}>
      <svg id="svg" width={radius * 2} height={radius * 2}>
        <circle
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference}
          strokeDashoffset={0}
        />
        <circle
          id="bar"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={`${circumference} ${circumference}`}
          style={{ strokeDashoffset }}
        />
      </svg>
    </div>
  );
};

export default memo(ProgressBar);
