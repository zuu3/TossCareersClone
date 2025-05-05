import styled from '@emotion/styled'

export const Dropdown = styled.div<{ open: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  background: #fff;
  padding: 8px 16px;
  border-radius: 8px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.1);
  cursor: pointer;
  gap: 8px;
  min-width: 160px;
  user-select: none;
`

export const Icon = styled.span`
  font-size: 16px;
`

export const Label = styled.span`
  font-size: 14px;
  color: #333;
  flex: 1;
`

export const OptionList = styled.ul`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  width: 100%;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  border-radius: 4px;
  list-style: none;
  padding: 8px 0;
  margin: 0;
  z-index: 100;
`

export const Option = styled.li`
  padding: 8px 16px;
  font-size: 14px;
  &:hover { background: #f1f3f5; }
`
