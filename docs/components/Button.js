/* @flow */

import { styled } from 'linaria/react';

const Button = styled.button`
  display: inline-block;
  appearance: none;
  margin: 8px 0;
  min-width: 120px;
  white-space: nowrap;
  font-size: inherit;
  text-align: center;
  padding: 12px 24px;
  border-width: 0;
  border-radius: 32px;
  cursor: pointer;
  background-color: #f15f79;
  color: #fff;

  &:hover,
  &:focus,
  &:active {
    color: #fff;
  }
`;

export default Button;
