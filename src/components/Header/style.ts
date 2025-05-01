import styled from '@emotion/styled'

export const Header = styled.header`
  max-width: 1140px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  background: #ffffff;
`

export const Logo = styled.img`
  width: auto;
  height: 20px;
  margin: 0;
  cursor: pointer;
  user-select: none;
`

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 16px;
  list-style: none;
  margin: 0;
  padding: 0;
`

export const NavButton = styled.button`
  all: unset;
  cursor: pointer;
  font-size: 1rem;
  color: #333333;
  &:hover {
    color: #000000;
  }
`

export const NavBlueButton = styled.button`
  all: unset;
  cursor: pointer;
  font-size: 1rem;
  background: #3182f6;
  color: #ffffff;
  border-radius: 6px;
  padding: 7px 12px;
  text-align: center;
`