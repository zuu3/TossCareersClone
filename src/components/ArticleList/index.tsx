import * as S from './style'

interface Article { id: string; title: string; date: string }
interface Props { articles: Article[] }

export default function ArticleList({ articles }: Props) {
  return (
    <S.Container>
      <S.Header>새로운 아티클</S.Header>
      {articles.map((a) => (
        <S.Card key={a.id}>
          <S.ArticleTitle>{a.title}</S.ArticleTitle>
          <S.Date>{a.date}</S.Date>
        </S.Card>
      ))}
    </S.Container>
  )
}