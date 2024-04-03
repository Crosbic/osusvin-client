'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import { ModeToggle } from '@/shared/ModeToggle/ui/ModeToggle'
import { IUser } from '@/widgets/header/features/AuthModal/interfaces'
import { AuthModal } from '@/widgets/header/features/AuthModal/ui/AuthModal'

import logo from '../../../../public/header-logo.png'

export const Header = () => {
  const [user, setUser] = useState<IUser>()
  const [token, setToken] = useState<string>()

  const { username, avatarUrl = '' } = user ?? {}

  useEffect(() => {
    if (localStorage.getItem('jwt')) {
      setToken(localStorage.getItem('jwt') ?? '')
      setUser(JSON.parse(localStorage.getItem('user') ?? '{}'))
    }
  }, [])

  return (
    <div className="h-20 sticky flex items-center justify-between py-2 px-8 border-b-[2px]">
      <Link href="/">
        <Image src={logo} alt="svin logo" className="h-14 w-auto" priority />
      </Link>
      <div className="flex items-center justify-between gap-4">
        <ModeToggle />
        {token ? (
          <div className="flex flex-row gap-2 items-center">
            <div>{username}</div>
            <Image
              src={avatarUrl}
              alt="avatar"
              width="48"
              height="48"
              className="rounded-lg"
            />
          </div>
        ) : (
          <AuthModal />
        )}
      </div>
    </div>
  )
}
