import styled from '@emotion/styled'

export const List = styled.ul`
  width: 720px;
  list-style: none;
  padding: 0;
  margin: 0;
`

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  cursor: pointer;
`

export const Details = styled.div``

export const Title = styled.h2`
  font-size: 1.125rem;
  margin: 0 0 4px;
`

export const Tags = styled.div`
  font-size: 0.875rem;
  color: #6b7684;
  margin-top: 4px;
`

export const Badge = styled.span`
  background: #e0e0e0;
  color: #6b7684;
  font-size: 0.65rem;
  padding: 1px 8px;
  border-radius: 12px;
  white-space: nowrap;
`