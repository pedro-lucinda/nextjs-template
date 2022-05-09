import React from 'react'
import * as S from './styles'

export interface ButtonProps {
  title: string
}

export const Button = ({ title }: ButtonProps) => {
  // -------------------------------------------------
  // Logic
  // -------------------------------------------------
  return (
    <S.Wrapper>
      <button />
    </S.Wrapper>
  )
}
