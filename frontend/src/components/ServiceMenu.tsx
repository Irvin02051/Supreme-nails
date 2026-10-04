import type { Service } from '../data/services'

export function ServiceMenu({ title, number, description, services }: {
  title: string
  number: string
  description: string
  services: Service[]
}) {
  return (
    <article className="service-menu" aria-labelledby={`menu-${number}`}>
      <div className="menu-heading">
        <h3 id={`menu-${number}`}>{title}</h3>
        <span className="menu-number" aria-hidden="true">{number}</span>
      </div>
      <p className="menu-description">{description}</p>
      <dl className="price-list">
        {services.map(({ name, price }) => (
          <div className="price-row" key={name}>
            <dt>{name}</dt><dd>{price}</dd>
          </div>
        ))}
      </dl>
    </article>
  )
}
