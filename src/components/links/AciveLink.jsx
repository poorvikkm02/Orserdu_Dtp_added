'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function ActiveLink({ href, children, exact = true, ...rest }) {
  const pathname = usePathname();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  // If children is a function (render prop), call it with `isActive`
  const content = typeof children === 'function'
    ? children({ isActive })
    : children;

  return (
    <Link href={href} {...rest}>
      {content}
    </Link>
  );
}
