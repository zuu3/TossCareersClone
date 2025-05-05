import { useState, useRef, useEffect } from 'react'
import * as S from './FilterDropdown.style'
import { FaChevronDown } from 'react-icons/fa'

interface Props {
  icon: 'briefcase' | 'building' | 'user-friends'
  label: string
  options: string[]
}

const iconMap: Record<Props['icon'], string> = {
  briefcase: '💼',
  building: '🏢',
  'user-friends': '👥',
}

export default function FilterDropdown({ icon, label, options }: Props) {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState(label)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  return (
    <S.Dropdown ref={ref} open={open} onClick={() => setOpen(!open)}>
      <S.Icon>{iconMap[icon]}</S.Icon>
      <S.Label>{selected}</S.Label>
      <FaChevronDown />
      {open && (
        <S.OptionList>
          {options.map((opt, i) => (
            <S.Option
              key={i}
              onClick={() => { setSelected(opt); setOpen(false) }}
            >
              {opt}
            </S.Option>
          ))}
        </S.OptionList>
      )}
    </S.Dropdown>
  )
}