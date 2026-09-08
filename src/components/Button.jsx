import { Link } from 'react-router-dom'

export default function Button({ children, to, variant = 'primary', type = 'button', className = '', onClick, disabled = false }) {
  const classes = `button button-${variant} ${className}`
  if (to) return <Link className={classes} to={to}>{children}</Link>
  return <button className={classes} type={type} onClick={onClick} disabled={disabled}>{children}</button>
}
