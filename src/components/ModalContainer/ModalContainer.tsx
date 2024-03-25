'use client'

import React, { Dispatch, FC, SetStateAction } from 'react'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

interface IOpenButton {
  text: string
  variant?:
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'link'
  size?: 'default' | 'sm' | 'lg' | 'icon'
}

interface ModalContainerProps {
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

export const ModalContainer: FC<ModalContainerProps> = (props) => {
  const {
    children,
    isOpen,
    setIsOpen,
    openButton,
    title,
    description,
    submitButton,
    onSubmitClick,
    declineButton,
  } = props

  const { text, variant = 'default', size = 'sm' } = openButton

  const handleClose = () => {
    setIsOpen(false)
  }

  const handleOpen = () => {
    setIsOpen(true)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <Button onClick={handleOpen} variant={variant} size={size}>
        {text}
      </Button>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>

          {!!description && (
            <DialogDescription>{description}</DialogDescription>
          )}
        </DialogHeader>
        {children}

        {!!submitButton && (
          <DialogFooter>
            {!!declineButton && (
              <Button type="submit" size={'sm'} onClick={handleClose}>
                {declineButton}
              </Button>
            )}
            <Button type="submit" size={'sm'} onClick={onSubmitClick}>
              {submitButton}
            </Button>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  )
}
