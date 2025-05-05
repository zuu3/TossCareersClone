import { useState, useMemo } from 'react'
import * as S from './style'
import SearchBar from '../../components/SearchBar'
import PositionCount from '../../components/PositionCount'
import JobList from '../../components/JobList'
import SpecialEvents from '../../components/SpecialEvents'
import ArticleList from '../../components/ArticleList'
import { jobs } from '../../data/jobs'

const mockEvents = [
  {
    id: 'e1',
    title: '서버 개발자, ML 엔지니어라면 면접만 봐도 100만원',
    period: '4.25(목) - 5.11(일)',
  },
]

const mockArticles = [
  {
    id: 'a1',
    title: '토스 Android & iOS 밋업 <One App, Infinite Possibilities>',
    date: '2025.05.02',
  },
  {
    id: 'a2',
    title: '리스크 너머의 전략가들: 토스 Risk Management & Fraud Risk Strategy Team',
    date: '2025.04.29',
  },
]


export default function Home() {
  const [searchTerm, setSearchTerm] = useState('')
  const [roleFilter, setRoleFilter] = useState('모든 직군')
  const [companyFilter, setCompanyFilter] = useState('모든 계열사')
  const [employmentFilter, setEmploymentFilter] = useState('모든 고용형태')

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const q = searchTerm.trim().toLowerCase()
      if (q) {
        const inTitle = job.title.toLowerCase().includes(q)
        const inTeam  = job.team.toLowerCase().includes(q)
        const inTags  = job.tags?.some(t => t.toLowerCase().includes(q))
        if (! (inTitle || inTeam || inTags) ) return false
      }
      if (roleFilter !== '모든 직군' && !job.tags?.includes(roleFilter)) {
        return false
      }
      if (companyFilter !== '모든 계열사' && job.company !== companyFilter) {
        return false
      }
      if (employmentFilter !== '모든 고용형태' && job.type !== employmentFilter) {
        return false
      }
      return true
    })
  }, [searchTerm, roleFilter, companyFilter, employmentFilter])

  const handleReset = () => {
    setSearchTerm('')
    setRoleFilter('모든 직군')
    setCompanyFilter('모든 계열사')
    setEmploymentFilter('모든 고용형태')
  }

  return (
    <S.Wrapper>
      <S.Banner>
        <S.Title>
          금융을 넘어 삶을 바꾸는 여정,<br/>
          이 유난한 도전에 함께할 동료를 찾습니다
        </S.Title>
        <SearchBar
          searchValue={searchTerm}
          onSearchChange={setSearchTerm}
          roleValue={roleFilter}
          onRoleChange={setRoleFilter}
          companyValue={companyFilter}
          onCompanyChange={setCompanyFilter}
          employmentValue={employmentFilter}
          onEmploymentChange={setEmploymentFilter}
          onReset={handleReset}
        />
      </S.Banner>

      <S.Content>
        <S.Left>
          <PositionCount count={filteredJobs.length} />
          <JobList jobs={filteredJobs} />
        </S.Left>
        <S.Right>
          <SpecialEvents events={mockEvents} />
          <ArticleList articles={mockArticles} />
        </S.Right>
      </S.Content>
    </S.Wrapper>
  )
}