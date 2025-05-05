import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Banner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 52px 140px;
  background: url('https://deus-static.toss.im/03eb38bd-b0e4-475d-9e23-1a9faa815cc8.png') no-repeat right center / cover;
`;

export const Title = styled.h1`
  text-align: left;
  font-size: 2rem;
  color: #333;
  margin: 0;
  padding: 0;
`;

export const Content = styled.div`
  display: flex;
  // max-width: 1200px;
  margin: 40px auto;
  padding: 0 140px;
  gap: 60px;
`

export const Left = styled.div`
  display: flex;
  flex-direction: column;
`

export const Right = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 32px;
` 