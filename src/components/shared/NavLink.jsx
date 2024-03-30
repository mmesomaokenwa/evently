'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavLink = ({ href, children }) => {
  const pathname = usePathname()
  const  isActive = (href) => {
    return pathname === href;
  };
  return (
    <Link
      href={href}
      className={`${
        isActive(href) && "text-primary-500"} p-medium-16 whitespace-nowrap`}
    >
      {children}
    </Link>
  );
}

export default NavLink