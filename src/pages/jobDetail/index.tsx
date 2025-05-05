import { useParams } from 'react-router-dom';
import { jobs } from '../../data/jobs';
import * as S from './style';

export default function JobDetail() {
  const { id } = useParams();
  const job = jobs.find((j) => j.id === id);

  if (!job) {
    return <S.Container>존재하지 않는 공고입니다.</S.Container>;
  }

  return (
    <>
      <S.Banner>
        <S.BannerContent>
          <S.BannerTitle>토스 {job.title} 집중 채용</S.BannerTitle>
          <S.BannerSubtitle>짧은 기간, 깊이 있는 경험 — 토스에서의 리서치 여정을 시작하세요. &gt;</S.BannerSubtitle>
        </S.BannerContent>
      </S.Banner>
      
      <S.Container>
        <S.Title>Commerce Operations Specialist</S.Title>
      
      <S.MetaContainer>
        <S.Meta>
          <span>{job.company} 소속</span> | <span>{job.type}</span>
        </S.Meta>
        <S.ApplyButtonContainer>
          <S.ApplyButton>지원하기</S.ApplyButton>
        </S.ApplyButtonContainer>
      </S.MetaContainer>
        
        <S.Section>
          <S.SubTitle>합류하게 될 팀에 대해 알려드려요</S.SubTitle>
          <S.List>
            {job.responsibilities.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </S.List>
        </S.Section>
        
        <S.Section>
          <S.SubTitle>합류하면 함께 할 업무예요</S.SubTitle>
          <S.List>
            {job.qualifications.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </S.List>
        </S.Section>
      </S.Container>
    </>
  );
}