'use client'

import { FC } from 'react'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

import { ModalContainerProps } from '../model/interfaces'

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

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger>{openButton}</DialogTrigger>
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
