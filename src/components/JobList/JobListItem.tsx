import * as S from './style'
import { Job } from '../../data/jobs'
import { useNavigate } from 'react-router-dom'

interface Props { job: Job }

export default function JobListItem({ job }: Props) {
  const navigate = useNavigate()
  return (
    <S.Item onClick={() => navigate(`/jobs/${job.id}`)}>
      <S.Details>
        <S.Title>{job.title}</S.Title>
        <S.Tags>{job.tags?.join(' · ')}</S.Tags>
      </S.Details>
      <S.Badge>{job.company}</S.Badge>
    </S.Item>
  )
}