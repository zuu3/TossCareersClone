import * as S from './style'

interface Event { id: string; title: string; period: string }
interface Props { events: Event[] }

export default function SpecialEvents({ events }: Props) {
  return (
    <S.Container>
      <S.Header>특별 채용 이벤트</S.Header>
      {events.map((e) => (
        <S.Card key={e.id}>
          <S.EventTitle>{e.title}</S.EventTitle>
          <S.Period>{e.period}</S.Period>
        </S.Card>
      ))}
    </S.Container>
  )
}