import React from 'react';
import styled from 'styled-components';

const ResetButton = styled.button`
  
  &:focus{
    outline: none;
    background: #ddd;
  }
`;

interface ResetProps {
  onClick: Function;
  id?: string;
}

function Reset({
    onClick,
    id
}: ResetProps) {
    return (
      <ResetButton data-testId={id} name="Reset Game" onClick={() => onClick()}>
        Reset Game
      </ResetButton>
    );
  }

  export default ResetButton;