/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import React from 'react';
import { AboutMe, Mask, MaskColor } from '../../types/situation';
import Circle from '../circle/Circle';

export type Props = {
  situation: Mask[];
  size: number;
  place: number;
  aboutMe: AboutMe;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
};

const Square: React.FC<Props> = ({
  situation,
  onClick,
  size,
  place,
  aboutMe,
}) => {
  const renderCircle = (index: number) => {
    if (situation[index] !== null) {
      const color = situation[index] as MaskColor;
      return <Circle color={color} size={index} />;
    }
  };
  renderCircle(0);
  return (
    <div
      css={[sizeStyle[size], aboutMe === 'onBoard' ? onBoard : square]}
      onClick={onClick}
      data-place={String(place)}
      data-me={aboutMe}
    >
      {renderCircle(0)}
      {renderCircle(1)}
      {renderCircle(2)}
    </div>
  );
};

const sizeStyle = [
  css`
    height: 45px;
    width: 45px;
    margin: 30px 0;
  `,
  css`
    height: 75px;
    width: 75px;
    margin: 15px 0;
  `,
  css`
    height: 105px;
    width: 105px;
  `,
];

const square = css`
  background: #fff;
  float: left;
  font-size: 15px;
  font-weight: bold;
  line-height: 15px;
  padding: 0;
  position: relative;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;
const onBoard = css`
  border: 1px solid #999;
  background: #fff;
  float: left;
  font-size: 15px;
  font-weight: bold;
  line-height: 15px;
  margin-right: -1px;
  margin-top: -1px;
  padding: 0;
  position: relative;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;
export default Square;
