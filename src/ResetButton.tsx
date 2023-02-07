import React from 'react';
import styled from 'styled-components';

const StyledResetButton = styled.button`
  margin-top: 20px;
  
  &:focus{
    outline: none;
    background: #ddd;
  }
`;

interface ResetProps {
  onClick: Function;
  'data-testid'?: string;
}

function ResetButton({
    onClick,
    'data-testid': dataTestId
}: ResetProps) {
    return (
      <StyledResetButton data-testid={dataTestId} name="Reset Game" onClick={() => onClick()}>
        {'Reset Game'}
      </StyledResetButton>
    );
  }

  export default ResetButton;