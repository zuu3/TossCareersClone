import styled from '@emotion/styled'

export const Wrapper = styled.footer`
  width: 100%;
  background: #f8f9fa;
  padding: 60px 20px;
  color: #6b7684;
`
export const Inner = styled.div`
  max-width: 950px;
  margin: 0 auto;
`
export const GroupList = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`
export const Group = styled.div``
export const GroupTitle = styled.div`
  font-weight: bold;
  margin-bottom: 12px;
  color: #333d4b;
`
export const GroupMenuList = styled.ul`
  list-style: none;
  padding: 0;
`
export const GroupMenu = styled.li`
  margin: 6px 0;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    color: #007bff;
  }
`
export const Address = styled.address`
  font-style: normal;
  line-height: 1.6;
  margin-bottom: 40px;
  color: #8b95a1;

  & div {
    font-size: 14px;
  }
`
export const CompanyName = styled.span`
  font-weight: bold;
  color: #333d4b;
  display: block;
  margin-bottom: 12px;
`
export const PolicyContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`
export const PolicyList = styled.ul`
  list-style: none;
  padding: 0;
`
export const PolicyItem = styled.li`
  margin: 6px 0;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    color: #007bff;
  }
`
export const PolicyBoldItem = styled(PolicyItem)`
  color: #333d4b;
  font-weight: bold;
`
export const Links = styled.div`
  display: flex;
  gap: 12px;
  justify-content: flex-start;
`

export const IconLink = styled.a<{ size?: number }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #b2b7bf;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  color: #fff;
  font-size: ${({ size }) => (size ? `${size}px` : '18px')};
  font-weight: bold;
  text-decoration: none;
  &:hover {
    background: #ced4da;
    color: #495057;
  }
`