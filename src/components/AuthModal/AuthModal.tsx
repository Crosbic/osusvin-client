'use client'

import { FC, useState } from 'react'

import { ModalContainer } from '@/components/ModalContainer/ModalContainer'
import { cn } from '@/lib/utils'

const openButton: string = 'Вход'
const title: string = 'Ты хочешь показать жопу?'
const submitButton: string = 'Да, войти'
const declineButton: string = 'Отменить'

export const AuthModal: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleSubmitClick = () => {
    setIsOpen(false)
  }

  return (
    <ModalContainer
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      openButton={openButton}
      title={title}
      onSubmitClick={handleSubmitClick}
      submitButton={submitButton}
      declineButton={declineButton}
    >
      <div className={cn('w-full h-48')}>
        Ты даешь согласие на вскртые своего очка перфаратором
      </div>
    </ModalContainer>
  )
}
