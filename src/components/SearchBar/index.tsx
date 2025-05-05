import * as S from './style'
import SearchInput from './SearchInput'
import FilterDropdown from './FilterDropdown'

interface Props {
  searchValue: string
  onSearchChange: (v: string) => void
  roleValue: string
  onRoleChange: (v: string) => void
  companyValue: string
  onCompanyChange: (v: string) => void
  employmentValue: string
  onEmploymentChange: (v: string) => void
  onReset: () => void
}

export default function SearchBar({
  searchValue,
  onSearchChange,
  roleValue,
  onRoleChange,
  companyValue,
  onCompanyChange,
  employmentValue,
  onEmploymentChange,
  onReset,
}: Props) {
  return (
    <S.Container>
      <SearchInput
        value={searchValue}
        onChange={e => onSearchChange(e.target.value)}
        placeholder="직무명, 기술 스택, 주요 업무를 검색해보세요"
      />
      <FilterDropdown
        icon="briefcase"
        options={['모든 직군', '개발', '디자인', '마케팅', '기획']}
        selected={roleValue}
        onSelect={onRoleChange}
      />
      <FilterDropdown
        icon="building"
        options={['모든 계열사', '토스', '토스뱅크', '토스증권']}
        selected={companyValue}
        onSelect={onCompanyChange}
      />
      <FilterDropdown
        icon="user-friends"
        options={['모든 고용형태', '정규직', '계약직', '인턴']}
        selected={employmentValue}
        onSelect={onEmploymentChange}
      />
      <S.ResetButton onClick={onReset}>초기화</S.ResetButton>
    </S.Container>
  )
}