import React from 'react'
import * as S from './style'
import { NavIcon01, NavIcon02, NavIcon03, NavIcon04 } from '../../Icons'

export const ProjectNav = () => {
  return (
    <S.ProjectNavContainer>
      <S.ProjectNavStepContainer>
        <S.ProjectNavStepIcon>
          <NavIcon01 width='31' height='30' />
        </S.ProjectNavStepIcon>
        <S.ProjectNavText>01.텍스트 입력</S.ProjectNavText>
      </S.ProjectNavStepContainer>
      <S.ProjectNavHr />
      <S.ProjectNavStepContainer>
        <S.ProjectNavStepIcon>
          <NavIcon02 width='31' height='30' />
        </S.ProjectNavStepIcon>
        <S.ProjectNavText>02.텍스트 수정</S.ProjectNavText>
      </S.ProjectNavStepContainer>
      <S.ProjectNavHr />
      <S.ProjectNavStepContainer>
        <S.ProjectNavStepIcon>
          <NavIcon03 width='31' height='30' />
        </S.ProjectNavStepIcon>
        <S.ProjectNavText>03.아바타 선택</S.ProjectNavText>
      </S.ProjectNavStepContainer>
      <S.ProjectNavHr />
      <S.ProjectNavStepContainer>
        <S.ProjectNavStepIcon>
          <NavIcon04 width='31' height='30' />
        </S.ProjectNavStepIcon>
        <S.ProjectNavText>04.제작 완료</S.ProjectNavText>
      </S.ProjectNavStepContainer>
    </S.ProjectNavContainer>
  )
}
