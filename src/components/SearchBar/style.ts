import styled from '@emotion/styled'

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  max-width: 1024px;
  margin-top: 32px;
`

export const ResetButton = styled.button`
  all: unset;
  color: #007bff;
  cursor: pointer;
  font-size: 14px;
  &:hover { text-decoration: underline; }
`