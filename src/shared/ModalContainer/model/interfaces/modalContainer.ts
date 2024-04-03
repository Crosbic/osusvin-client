import React, { Dispatch, SetStateAction } from 'react'

import { ISubmitButton } from '@/shared/ModalContainer/model/interfaces/submitButton'

import { IOpenButton } from '.'

export interface ModalContainerProps {
  children: string | React.JSX.Element
  setIsOpen: Dispatch<SetStateAction<boolean>>
  isOpen: boolean
  title: string
  description?: string
  submitButton?: ISubmitButton
  declineButton?: string
  onSubmitClick?: () => void
  openButton: IOpenButton
}
