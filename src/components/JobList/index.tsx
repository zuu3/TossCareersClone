import * as S from './style'
import JobListItem from './JobListItem'
import { Job } from '../../data/jobs'

interface Props { jobs: Job[] }

export default function JobList({ jobs }: Props) {
  return (
    <S.List>
      {jobs.map((job) => (
        <JobListItem key={job.id} job={job} />
      ))}
    </S.List>
  )
}