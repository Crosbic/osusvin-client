import Image from 'next/image'
import Link from 'next/link'

import { AuthModal } from '@/components/AuthModal/AuthModal'
import { ModeToggle } from '@/components/ModeToggle'

import logo from '../../../../public/header-logo.png'

export const Header = () => {
  return (
    <div className="h-20 sticky flex items-center justify-between py-2 px-8 border-b-[2px]">
      <Link href="/">
        <Image src={logo} alt="svin logo" className="h-14 w-auto" priority />
      </Link>
      <div className="flex items-center justify-between gap-4">
        <ModeToggle />
        <AuthModal />
      </div>
    </div>
  )
}
