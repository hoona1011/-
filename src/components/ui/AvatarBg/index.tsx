import React from 'react'
import * as S from './style'
import { changeSelectedValue, useAvatar } from 'store/slices/avatarSlice'
import type { SelectedValue } from 'index'
export const AvatarBg = () => {
  const { backgroundList, selectedValue, dispatch } = useAvatar()

  const selectedValueHandler = (selectedValue: SelectedValue) => {
    dispatch(changeSelectedValue({ diff: selectedValue }))
  }

  return (
    <S.Container>
      <S.Title>배경을 선택해 주세요</S.Title>
      <S.BgContainer>
        {backgroundList &&
          backgroundList.map((background, index: string) => {
            return (
              <S.BgInner
                key={background.position}
                onClick={() => {
                  selectedValueHandler({ bgName: background.position })
                }}
              >
                <S.Bg
                  isSelected={selectedValue.bgName === background.position}
                />
                <S.BgName>배경 {index + 1}</S.BgName>
              </S.BgInner>
            )
          })}
      </S.BgContainer>
    </S.Container>
  )
}
