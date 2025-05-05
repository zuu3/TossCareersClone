import * as S from './style'

interface Props { count: number }

export default function PositionCount({ count }: Props) {
  return <S.Count><span>{count}개</span>의 포지션이 열려있어요.</S.Count>
}