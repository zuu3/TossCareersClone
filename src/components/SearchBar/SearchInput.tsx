import { InputHTMLAttributes } from 'react'
import * as S from './SearchInput.style'
import { FaSearch } from 'react-icons/fa'

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

export default function SearchInput({ placeholder, ...rest }: Props) {
  return (
    <S.InputWrapper>
      <FaSearch />
      <S.Input placeholder={placeholder} {...rest} />
    </S.InputWrapper>
  )
}