import styled from 'styled-components';

export const HeaderStyle = styled.header`
  .bar {
    border-bottom: 10px solid var(--black, #000000);
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: center;
  }

  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid var(--black, #000000);
  }
`;
