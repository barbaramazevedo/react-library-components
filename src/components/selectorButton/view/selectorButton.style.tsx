import styled from 'styled-components';

const ButtonWrapper = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  background: ${({ theme }) => theme.background};
  border: 2px solid ${({ theme }) => theme.text};
  border-radius: 8px;
  padding: 8px 12px;
  z-index: 2;
  user-select: none;
`;

const Select = styled.select`
  background: transparent;
  border: none;
  font-size: 16px;
  cursor: pointer;
  outline: none;

  &.dark {
    color: var(--white-color);
  }

  &.light {
    color: var(--black-color);
  }

  &.purple {
    color: var(--purple-color);
  }
`;

const Option = styled.option`
  &.dark {
    background-color: var(--black-color);
  }

  &.light {
    background-color: var(--white-color);
  }

  &.purple {
    background-color: var(--white-color);
  }
`;
export { ButtonWrapper, Select, Option };
