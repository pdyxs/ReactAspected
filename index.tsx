import React, { ReactNode } from 'react';

import classNames from 'classnames';

import './Aspected.scss';

interface AspectedProps {
  children: ReactNode,
  className?: string,
  ratio?: number,
  style?: React.CSSProperties
}

const Aspected: React.FC<AspectedProps> = ({children, ratio, className, style}) => {
  if (ratio !== undefined) {
    style = {
      ...style,
      '--aspect-ratio': `${ratio}`
    } as React.CSSProperties;
  }

  return (
    <div className={classNames('aspected-outer', className)} style={style}>
        <div className='aspected-inner'>
          {children}
        </div>
    </div>
  )
};

export default Aspected;
