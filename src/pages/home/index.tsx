import * as S from './style'
import SearchBar from '../../components/SearchBar'

export default function Home() {
  return (
    <S.Wrapper>
      <S.Banner>
        <S.Title>금융을 넘어 삶을 바꾸는 여정,<br />이 유난한 도전에 함께할 동료를 찾습니다</S.Title>
        <SearchBar />
      </S.Banner>
    </S.Wrapper>
  )
}