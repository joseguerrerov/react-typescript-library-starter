import styled from 'styled-components';
import { colors, measures } from '../Utils/theme';

export const BaseButton = styled.button`
  min-width: 110px;
  border: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: ${measures.borderRadious};
  background-color: ${colors.primary.main};
  color: ${colors.white.main};
  font-size: 1rem;
  cursor: pointer;
  transition: 400ms ease-in-out;
  &:hover {
    background-color: ${colors.secondary.main};
  }
`;
