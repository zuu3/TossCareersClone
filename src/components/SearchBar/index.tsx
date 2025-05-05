import * as S from './style'
import SearchInput from './SearchInput'
import FilterDropdown from './FilterDropdown'

export default function SearchBar() {
  return (
    <S.Container>
      <SearchInput placeholder="직무명, 기술 스택, 주요 업무를 검색해보세요" />
      <FilterDropdown
        icon="briefcase"
        label="모든 직군"
        options={['모든 직군', '개발', '디자인', '마케팅', '기획']}
      />
      <FilterDropdown
        icon="building"
        label="모든 계열사"
        options={['모든 계열사', '토스페이먼츠', '토스뱅크', '토스증권']}
      />
      <FilterDropdown
        icon="user-friends"
        label="모든 고용형태"
        options={['모든 고용형태', '정규직', '계약직', '인턴']}
      />
      <S.ResetButton onClick={() => window.location.reload()}>초기화</S.ResetButton>
    </S.Container>
  )
}