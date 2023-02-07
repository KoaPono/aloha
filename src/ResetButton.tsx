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
  id?: string;
}

function ResetButton({
    onClick,
    id
}: ResetProps) {
    return (
      <StyledResetButton data-testId={id} name="Reset Game" onClick={() => onClick()}>
        {'Reset Game'}
      </StyledResetButton>
    );
  }

  export default ResetButton;