import React from 'react';
import classNames from 'classnames/bind';
import ReactLoading from "react-loading";

// scss style import
import styles from './Spinner.module.scss';
const cx = classNames.bind(styles);

export enum SpinnerSize {
  small = 20,
  medium = 60,
  large = 100,
}

export enum SpinnerType {
  blank = 'blank',
  balls = 'balls',
  bars = 'bars',
  bubbles = 'bubbles',
  cubes = 'cubes',
  cylon = 'cylon',
  spin = 'spin',
  spinningBubbles = 'spinningBubbles',
  spokes = 'spokes',
}

type SpinnerProps = {
  loading?: boolean;
  size?: SpinnerSize;
  type?: SpinnerType;
  color?: string;
  height?: number | string;
  width?: number | string;
};

function getSize(size: SpinnerSize) {
  return {
    width: size,
    height: size,
  };
}

function Spinner({
  type = SpinnerType.bars,
  loading = true,
  color = '#000',
  width = 0,
  height = 0,
  size = SpinnerSize.large,
}: SpinnerProps): JSX.Element {
  const defaultProps = {
    type,
    color,
  };

  const props =
    width && height
      ? {
          ...defaultProps,
          width,
          height,
        }
      : {
          ...defaultProps,
          ...getSize(size),
        };

  return loading ? (
    <div className={cx('wrap')}>
      <ReactLoading {...props} className={cx('spinner')} />
    </div>
  ) : (
    <></>
  );
}

export default Spinner;
