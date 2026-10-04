import { salon } from '../data/salon'

export function CallLink({ placement, className = 'button', showNumber = false }: {
  placement: string
  className?: string
  showNumber?: boolean
}) {
  return (
    <a href={salon.phoneHref} className={className} data-track-event="call_click" data-track-placement={placement}>
      {showNumber ? salon.phone : 'Call to Book'}
      <span aria-hidden="true">↗</span>
    </a>
  )
}
