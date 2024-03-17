import { Dispatch, SetStateAction } from 'react'

export interface ModalContainerProps {
  children: string | JSX.Element
  setIsOpen: Dispatch<SetStateAction<boolean>>
  isOpen: boolean
  openButton: string
  title: string
  description?: string
  submitButton?: string
  declineButton?: string
  onSubmitClick?: () => void
}
