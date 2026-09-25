import usePageMeta from '../hooks/usePageMeta'
import Button from '../components/ui/Button'

export default function NotFound() {
  usePageMeta('Page not found')

  return (
    <section className="grid min-h-[80svh] place-items-center pt-24 text-center">
      <div className="container-x">
        <p className="font-display text-[clamp(6rem,20vw,14rem)] leading-none text-outline text-volt">404</p>
        <p className="mt-4 text-xl text-white/70">Looks like you took a wrong turn on the course.</p>
        <Button to="/" className="mt-10">
          Back to start line
        </Button>
      </div>
    </section>
  )
}
