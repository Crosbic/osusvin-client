import { Dispatch, SetStateAction } from 'react'

import { IOpenButton } from '.'

export interface ModalContainerProps {
  children: string | React.JSX.Element
  setIsOpen: Dispatch<SetStateAction<boolean>>
  isOpen: boolean
  title: string
  description?: string
  submitButton?: string
  declineButton?: string
  onSubmitClick?: () => void
  openButton: IOpenButton
}
