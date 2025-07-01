import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors['bg-surface-critical']};
`;

const Button = () => {
  return <StyledButton>Button</StyledButton>;
};

export default Button;
