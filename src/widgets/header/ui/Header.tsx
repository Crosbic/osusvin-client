'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import { useResize } from '@/model/hooks/useResize'
import { ModeToggle } from '@/shared/ModeToggle/ui/ModeToggle'
import { AuthModal } from '@/widgets/header/features/AuthModal/ui/AuthModal'
import PagesMenubar from '@/widgets/header/features/PagesMenubar/ui/PagesMenubar'
import UserDropdownMenu from '@/widgets/header/features/UserDropdownMenu/ui/UserDropdownMenu'

import logo from '../../../../public/svin.png'

export const Header = () => {
  const { width } = useResize()
  const [token, setToken] = useState<string>()

  useEffect(() => {
    if (localStorage.getItem('jwt')) {
      setToken(localStorage.getItem('jwt') ?? '')
    }
  }, [])

  return (
    <div className="h-18 sticky flex items-center justify-between py-2 px-8 border-b-[2px]">
      <Link
        href="/"
        className="p-1 flex flex-row items-center justify-center gap-2 bg-primary rounded-full hover:bg-primary-foreground text-primary-foreground hover:text-primary ease-in-out duration-200"
      >
        <Image src={logo} alt="svin logo" className="h-9 w-auto" priority />
        <div className="pr-2 font-bold text-3xl">o!st 2</div>
      </Link>
      {width > 700 ? <PagesMenubar /> : null}
      <div className="flex items-center justify-between gap-4">
        <ModeToggle />
        {token ? <UserDropdownMenu /> : <AuthModal />}
      </div>
    </div>
  )
}
