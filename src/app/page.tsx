import { ModeToggle } from '@/components/mode-toggle'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main>
      <div style={{ margin: '2rem', display: 'flex', gap: '1rem' }}>
        <div>Съешь ещё этих мягких французских булок, да выпей чаю.</div>
        <ModeToggle />
        <Button style={{ fontWeight: 'bold', textTransform: 'uppercase' }}>
          kakashka
        </Button>
      </div>
    </main>
  )
}
