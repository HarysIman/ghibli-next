import Link from 'next/link';
import LogoutButton from './LogoutButton';

export default function Nav({ links, showLogout }) {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link href="/" className="logo">
          <span className="logo-leaf">
            <svg viewBox="0 0 18 22" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 1 Q14 7 12 14 Q14 18 9 21 Q4 18 6 14 Q4 7 9 1 Z" fill="#4A6741" />
              <path d="M9 3 L9 19" stroke="#3A2F26" strokeWidth="0.5" opacity="0.5" />
            </svg>
          </span>
          Harys.id
        </Link>
        <div className="nav-links">
          {links?.map(({ href, label }) => (
            <Link key={href} href={href}>{label}</Link>
          ))}
          {showLogout && <LogoutButton />}
        </div>
      </div>
    </nav>
  );
}
