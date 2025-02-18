import { Link, LinkProps, useLocation } from 'react-router'

export function NavLink(props: LinkProps) {
  const { pathname } = useLocation()

  return (
    <Link
      data-active={pathname === props.to}
      className="text-muted-foreground hover:text-foreground data-[active=true]:text-foreground flex items-center gap-1.5 text-sm font-medium"
      {...props}
    ></Link>
  )
}
