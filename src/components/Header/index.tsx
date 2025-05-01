import { useNavigate } from 'react-router-dom'
import * as S from './style'
import Logo from '../../assets/logo.svg'

export default function Header() {
  const navigate = useNavigate()

  return (
    <S.Header>
      <S.Logo src={Logo} onClick={() => navigate('/')}></S.Logo>

      <nav>
        <S.NavList>
          <li>
            <S.NavButton onClick={() => navigate('/')}>채용 이벤트</S.NavButton>
          </li>
          <li>
            <S.NavButton>계열사 소개</S.NavButton>
          </li>
          <li>
            <S.NavButton>합류 여정</S.NavButton>
          </li>
          <li>
            <S.NavButton>팀 문화</S.NavButton>
          </li>
          <li>
            <S.NavButton>아티클</S.NavButton>
          </li>
          <li>
            <S.NavButton>자주 묻는 질문</S.NavButton>
          </li>
          <li>
            <S.NavBlueButton>전체 공고</S.NavBlueButton>
          </li>
        </S.NavList>
      </nav>
    </S.Header>
  )
}
