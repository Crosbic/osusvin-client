'use client'

import Link from 'next/link'
import React, { FC } from 'react'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
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
            {submitButton.link ? (
              <Link href={submitButton.link}>
                <Button type="submit" size={'sm'} onClick={onSubmitClick}>
                  {submitButton.text}
                </Button>
              </Link>
            ) : (
              <Button type="submit" size={'sm'} onClick={onSubmitClick}>
                {submitButton.text}
              </Button>
            )}
            {!!declineButton && (
              <Button type="submit" size={'sm'} onClick={handleClose}>
                {declineButton}
              </Button>
            )}
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  )
}
