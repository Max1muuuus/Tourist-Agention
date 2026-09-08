import { Camera, BriefcaseBusiness } from 'lucide-react'

export default function TeamCard({ member }) {
  return <article className="team-card"><img src={member.image} alt={member.name} loading="lazy" /><div className="team-card-body"><span className="eyebrow">{member.role}</span><h3>{member.name}</h3><p>{member.bio}</p><div className="team-socials"><a href="https://instagram.com" aria-label={`Instagram ${member.name}`}><Camera size={16} /></a><a href="https://linkedin.com" aria-label={`LinkedIn ${member.name}`}><BriefcaseBusiness size={16} /></a></div></div></article>
}
