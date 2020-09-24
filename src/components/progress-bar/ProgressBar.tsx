import React, { FunctionComponent, memo } from 'react';
import '../../scss/components/_progress-bar.scss';

type ProgressBarProps = {
  currentValue: number;
  label?: string;
  radius: number;
  stroke: number;
  total: number;
};

const ProgressBar: FunctionComponent<ProgressBarProps> = ({
  currentValue,
  label,
  radius,
  stroke,
  total,
}) => {
  const progress = (currentValue * 100) / total;
  const result =
    currentValue === total ? 'Done' : label ? label : `${~~progress}%`;
  const normalizedRadius = radius * 0.9;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress * circumference) / 100;
  const style = {
    width: radius * 2,
    height: radius * 2,
  };

  if (total < 2) {
    return null;
  }

  return (
    <div
      className="progress--wrapper"
      data-res={result}
      role="progressbar"
      style={style}
      aria-valuemax={total}
      aria-valuemin={1}
      aria-valuenow={currentValue}
      aria-valuetext={result}
      aria-label={result}
    >
      <svg className="progress--svg" width={radius * 2} height={radius * 2}>
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
          data-testid="progress-bar"
          className={`progress--bar${
            result === 'Done' ? ' progress--bar__done' : ''
          }`}
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
