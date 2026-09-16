'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function ActiveLink2({
  href,
  className,
  exact = true,
  children,
  ...rest
}) {
  const pathname = usePathname();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  const resolvedClassName =
    typeof className === 'function' ? className({ isActive }) : className;

  return (
    <Link href={href} className={resolvedClassName} {...rest}>
      {children}
    </Link>
  );
}
