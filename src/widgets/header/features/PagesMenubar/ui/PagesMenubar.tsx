import Link from 'next/link'

import { Button } from '@/components/ui/button'

const PagesMenubar = () => {
  return (
    <div className="p-1.5 flex flex-row items-center justify-center gap-1.5 border rounded-md">
      {/*Варн в линках из версии некста с pages роутера, хз почему*/}
      <Link href="/participants">
        <Button className="h-8">Участники</Button>
      </Link>
      <Link href="/schedule">
        <Button className="h-8">Расписание</Button>
      </Link>
      <Link href="/mappools">
        <Button className="h-8">Маппулы</Button>
      </Link>
    </div>
  )
}

export default PagesMenubar
