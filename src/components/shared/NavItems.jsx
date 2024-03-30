import { headerLinks } from "@/constants"
import NavLink from "./NavLink"

const NavItems = () => {
  return (
    <ul className='md:flex-between flex w-full flex-col items-start gap-5 md:flex-row'>
      {headerLinks.map(({ route, label }) => (
        <NavLink
          key={route}
          href={route}
        >
          {label}
        </NavLink>
      ))}
    </ul>
  )
}

export default NavItems