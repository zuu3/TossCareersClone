import * as S from './style'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'
import { SiNaver } from 'react-icons/si'

const GroupListMenus = [
  { title: '서비스', menus: ['공지사항', '자주 묻는 질문', '공동인증서 관리', '계정 일시잠금', '고객센터', '개인(신용)정보 이용·제공 내역 조회', '브랜드 리소스센터', '토스의 개인정보 보호', '토스유스카드'] },
  { title: '회사', menus: ['회사 소개', '토스페이먼츠', '토스인슈어런스', '토스증권', '토스씨엑스', '토스뱅크', '토스플레이스', '토스모바일', '토스인컴', '채용', '기술 블로그', '블로그', '공고'] },
  { title: '문의', menus: ['사업 제휴', '토스쇼핑 입점문의', '광고 문의', '인증 사업 문의', '마케팅·PR', 'IR'] },
  { title: '고객센터', menus: ['전화: 1599-4905(24시간 연중무휴)', '이메일(고객전용): support@toss.im', '이메일(외부기관전용): safe@toss.im', '민원 접수(비즈니스 고객)'] }
]

export default function Footer() {
  return (
    <S.Wrapper>
      <S.Inner>
        <S.GroupList>
          {GroupListMenus.map((group, i) => (
            <S.Group key={i}>
              <S.GroupTitle>{group.title}</S.GroupTitle>
              <S.GroupMenuList>
                {group.menus.map((menu, j) => <S.GroupMenu key={j}>{menu}</S.GroupMenu>)}
              </S.GroupMenuList>
            </S.Group>
          ))}
        </S.GroupList>

        <S.Address>
          <S.CompanyName>
            (주)비바리퍼블리카<br/>
            Copyright ⓒ Toss. All Rights Reserved
          </S.CompanyName>
          <div>사업자 등록번호: 120-88-01280 | 대표: 이승건</div>
          <div>
            호스팅 서비스: 주식회사 비바리퍼블리카 | 통신판매업 신고번호: 2014-서울강남-03377{' '}
            <span>사업자정보확인</span>
          </div>
          <div>
            06236 서울특별시 강남구 테헤란로 142, 4층, 10층, 11층, 12층, 13층, 22층, 23층 (역삼동, 아크플레이스)
          </div>
          <div>
            고객센터: 서울특별시 강남구 테헤란로 133, 9층 (역삼동, 한국타이어빌딩)
          </div>
        </S.Address>

        <S.PolicyContainer>
          <S.PolicyList>
            <S.PolicyItem>이용약관</S.PolicyItem>
            <S.PolicyBoldItem>개인정보 처리방침</S.PolicyBoldItem>
            <S.PolicyBoldItem>위치기반서비스 이용약관</S.PolicyBoldItem>
            <S.PolicyItem>금융소비자보호</S.PolicyItem>
          </S.PolicyList>
          <S.PolicyList>
            <S.PolicyItem>통합 금융정보 서비스 약관</S.PolicyItem>
            <S.PolicyBoldItem>채용팀 개인정보 처리방침</S.PolicyBoldItem>
            <S.PolicyItem>가맹점 고지사항</S.PolicyItem>
            <S.PolicyBoldItem>토스비즈니스 개인정보 처리방침</S.PolicyBoldItem>
          </S.PolicyList>
          <S.PolicyList>
            <S.PolicyItem>마이데이터 서비스 이용약관</S.PolicyItem>
            <S.PolicyBoldItem>어드민 서비스 개인정보 처리방침</S.PolicyBoldItem>
            <S.PolicyItem>토스 전자서명인증업무준칙</S.PolicyItem>
          </S.PolicyList>
          <S.PolicyList>
            <S.PolicyItem>이용자의 권리 및 유의 사항</S.PolicyItem>
            <S.PolicyItem>고정형 영상정보처리기기 운영 관리 방침</S.PolicyItem>
            <S.PolicyItem>토스 전자인증서비스 약관</S.PolicyItem>
          </S.PolicyList>
        </S.PolicyContainer>

        <S.Links>
          <S.IconLink href="#" aria-label="Facebook"><FaFacebookF /></S.IconLink>
          <S.IconLink href="#" aria-label="Blogger" size={22}>B</S.IconLink>
          <S.IconLink href="#" aria-label="Naver" size={16}><SiNaver /></S.IconLink>
          <S.IconLink href="#" aria-label="Twitter" size={20}><FaTwitter /></S.IconLink>
          <S.IconLink href="#" aria-label="Instagram" size={22}><FaInstagram /></S.IconLink>
        </S.Links>
      </S.Inner>
    </S.Wrapper>
  )
}