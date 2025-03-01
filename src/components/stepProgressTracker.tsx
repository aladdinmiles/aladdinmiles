import classNames from '@/utils/classNames';
import React from 'react';
import { FiCheck } from 'react-icons/fi';

type Props = {
  className?: string;
  activeStepTitle: string;
  content: React.ReactElement;
  steps: string[];
};

export const HorizontalStepProgressTracker: React.FC<Props> = ({
  className = '',
  activeStepTitle,
  content,
  steps = []
}) => {
  const activeStepIndex = steps.findIndex((step) => step === activeStepTitle);
  return (
    <div className={classNames(className, 'w-full')}>
      <div className="py-8 flex flex-row items-center w-full">
        {steps.map((step, index) => {
          const isCurrentStep = index === activeStepIndex;
          const isCompleted = !isCurrentStep && index <= activeStepIndex;

          return (
            <React.Fragment key={index}>
              <ProgressTitle
                isCurrentStep={isCurrentStep}
                isCompleted={isCompleted}
                step={index + 1}
                title={step}
              />
              {index < steps.length - 1 && (
                <ProgressDivider
                  direction="horizontal"
                  isCompleted={isCompleted}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>

      <div className="p-4 sm:p-6 w-full">
        <h2 className="text-xl pb-3 text-black">{activeStepTitle}</h2>
        {content}
      </div>
    </div>
  );
};

export const VerticalStepProgressTracker: React.FC<Props> = ({
  className = '',
  content,
  activeStepTitle,
  steps = []
}) => {
  const activeStepIndex = steps.findIndex((step) => step === activeStepTitle);
  return (
    <div className={classNames(className, 'py-8 flex flex-col w-full')}>
      {steps.map((step, index) => {
        const isCurrentStep = index === activeStepIndex;
        const isCompleted = !isCurrentStep && index <= activeStepIndex;

        return (
          <React.Fragment key={index}>
            <ProgressTitle
              isCurrentStep={isCurrentStep}
              isCompleted={isCompleted}
              step={index + 1}
              title={step}
            />

            <div className="h-full flex">
              {index < steps.length - 1 && (
                <ProgressDivider
                  direction="vertical"
                  isCompleted={isCompleted}
                />
              )}
              {isCurrentStep && (
                <div className="p-4 pr-0 sm:p-6 w-full">
                  <h2 className="text-xl pb-3 text-black">{activeStepTitle}</h2>
                  {content}
                </div>
              )}
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

const ProgressTitle: React.FC<{
  isCurrentStep: boolean;
  isCompleted: boolean;
  title: string;
  step: number;
}> = ({ isCurrentStep, isCompleted, step, title }) => {
  return (
    <div
      className={classNames(
        isCompleted
          ? 'bg-success-500 text-white'
          : isCurrentStep
          ? 'border border-azureBlue text-black'
          : 'border border-gray-200 text-gray-700',
        'w-min rounded-full p-2 sm:p-3 flex items-center gap-2'
      )}
    >
      <div
        className={classNames(
          isCompleted
            ? 'bg-white text-success-500'
            : isCurrentStep
            ? 'border border-azureBlue text-black'
            : 'bg-gray-25 text-gray-700',
          'w-6 h-6 flex items-center justify-center rounded-full'
        )}
      >
        {isCompleted ? (
          <FiCheck className="w-4 h-4" />
        ) : (
          <p className="text-xs sm:text-sm">{step}</p>
        )}
      </div>
      <p className="w-max text-sm sm:text-base">{title}</p>
    </div>
  );
};

const ProgressDivider: React.FC<{
  direction: 'horizontal' | 'vertical';
  isCompleted: boolean;
}> = ({ isCompleted, direction }) => {
  return (
    <div
      className={classNames(
        isCompleted ? 'bg-success-500' : 'bg-gray-200',
        direction === 'horizontal'
          ? 'w-full h-[1px]'
          : 'w-[1px] min-h-[20px] h-[full]'
      )}
    />
  );
};
