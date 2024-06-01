"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps, ReactNode } from "react";

export function Nav({ children }: { children: ReactNode }) {
  return (
    <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
      {children}
    </nav>
  );
}

export function NavLink(props: Omit<ComponentProps<typeof Link>, "className">) {
  const pathname = usePathname();
  return (
    <Link
      {...props}
      // className="flex items-center gap-2 text-lg font-semibold md:text-base"
      // "flex items-center gap-2 text-lg font-semibold md:text-base focus-visible:bg-purple-400 focus-visible:text-secondary",
      className={cn(
        "flex items-center gap-2 text-xl font-semibold md:text-base",
        pathname === props.href && "bg-slate-800 p-1 text-white rounded-md"
      )}
    />
  );
}

export function SideNav({ children }: { children: ReactNode }) {
  return <nav className="grid gap-6 text-lg font-medium">{children}</nav>;
}

export function SideNavLink(
  props: Omit<ComponentProps<typeof Link>, "className">
) {
  const pathname = usePathname();
  return (
    <Link
      {...props}
      className="flex items-center gap-2 text-lg font-semibold"
      //   className={cn(
      //     "flex items-center gap-2 text-lg font-semibold md:text-base focus-visible:bg-purple-400 focus-visible:text-secondary",
      //     pathname === props.href && "bg-background text-foreground"
      //   )}
    />
  );
}

// for left dashboard navbar:
// export function LeftNav({ children }: { children: ReactNode }) {
//   return (
//     <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
//       {children}
//     </nav>
//   );
// }

// export function LeftNavLink(
//   props: Omit<ComponentProps<typeof Link>, "className">
// ) {
//   const pathname = usePathname();
//   return (
//     <Link
//       {...props}
//       className={cn(
//         "flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8",
//         pathname === props.href && "bg-slate-900 text-white"
//       )}
//     />
//   );
// }
