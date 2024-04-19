'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { IUser } from '@/widgets/header/features/AuthModal/interfaces'

const UserDropdownMenu = () => {
  const [user, setUser] = useState<IUser>()

  const { username, avatarUrl = '', pp, rank, accuracy } = user ?? {}

  useEffect(() => {
    if (localStorage.getItem('jwt')) {
      setUser(JSON.parse(localStorage.getItem('user') ?? '{}'))
    }
  }, [])

  const handleLogOut = () => {
    localStorage.removeItem('jwt')
    localStorage.removeItem('user')
    window.location.reload()
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex flex-row gap-2 items-center cursor-pointer">
          <div>{username}</div>
          {avatarUrl && (
            <Image
              src={avatarUrl}
              alt="avatar"
              width="36"
              height="36"
              className="rounded-lg"
            />
          )}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" sideOffset={10} className="p-2">
        <DropdownMenuLabel>Игровая статистика</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>pp: {pp}</DropdownMenuLabel>
        <DropdownMenuLabel>acc: {accuracy?.toFixed(2)}</DropdownMenuLabel>
        <DropdownMenuLabel>
          rank: {rank?.toLocaleString('RU-ru')}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogOut}>
          Выйти из аккаунта
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserDropdownMenu
