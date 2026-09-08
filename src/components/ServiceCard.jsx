export default function ServiceCard({ service }) {
  const Icon = service.icon
  return <article className="service-card"><div className="service-icon"><Icon size={24} /></div><h3>{service.title}</h3><p>{service.description}</p></article>
}
