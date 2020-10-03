import React from "react";
import styled from "styled-components";

export const SaleIndicator = ({is_for_sale = false}) => (
  <>
    <Circle color="green" selected={is_for_sale === true} />
    <Circle color="red" selected={is_for_sale === false} />
  </>
);

export const Circle = styled.div`
  border-radius: 50%;
  background-color: ${({ color, selected }) =>
    selected ? color : "transparent"};
  border: solid 2px ${({ color }) => color};
  border-width: ${({ selected }) => (selected ? "0" : "2")};
  width: 20px;
  height: 20px;
  cursor: pointer;
  float: left;
  margin: 0 4px;
`;