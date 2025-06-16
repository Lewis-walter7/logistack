import React, { useState } from 'react'
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import Link from 'next/link';


interface ItemProps {
  href: string;
  icon: React.ComponentType<any>;
  label: string;
}

const Item:React.FC<ItemProps> = ({
    href,
    icon: Icon,
    label
}) => {

    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    
  return (
    <>
    <Link
      href={href}
      className={clsx(
        "flex items-center gap-3 px-4 py-2 rounded hover:bg-blue-50 text-sm",
        pathname === href
          ? "bg-blue-100 text-blue-700 font-semibold"
          : "text-gray-700"
      )}
      onClick={() => setOpen(false)}
    >
      <Icon className="w-5 h-5" />
      <span>{label}</span>
    </Link>
    </>
  )
}

export default Item