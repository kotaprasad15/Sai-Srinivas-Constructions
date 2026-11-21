import { company } from '../config/company'

export function Logo({ onClick }: { onClick?: () => void }) {
  const wordmark = company.name.toLowerCase()

  return (
    <a className="brand" href="#home" onClick={onClick} aria-label={`${company.name} home`}>
      {wordmark}
    </a>
  )
}
