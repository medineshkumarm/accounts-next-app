import React from "react";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import {
  Nav,
  NavLink,
  SideNav,
  SideNavLink,
} from "@/components/nav-bars/nav-bar";
import { Home, Menu, Package2 } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import UserIconMenu from "@/components/user-menu";

//top left in desktop and tablet then as Sheet in mobile view
export default function NavBar1() {
  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <Nav>
        <NavLink href="/admin">
          <Package2 className="h-6 w-6" />
          <span className="sr-only">Logo or Icon</span>
        </NavLink>
        <NavLink href="/admin/dashboard"> Dashboard</NavLink>
        <NavLink href="/admin/shops">Shops</NavLink>
        <NavLink href="/admin/analytics">Analytics</NavLink>
      </Nav>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="w-5 h-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="py-10">
          <SideNav>
            <SideNavLink href="/admin/dashboard"> Dashboard</SideNavLink>
            <SideNavLink href="/admin/shops">Shops</SideNavLink>
            <SideNavLink href="/admin/analytics">Analytics</SideNavLink>
          </SideNav>
        </SheetContent>
      </Sheet>
      <UserIconMenu />
    </header>
  );
}

// export function NavBar2() {
//   return (
//     <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
//       <LeftNav>
//         <TooltipProvider>
//           <Tooltip>
//             <TooltipTrigger asChild>
//               <LeftNavLink href="/admin">
//                 {" "}
//                 <Home className="h-5 w-5" />
//                 <span className="sr-only">Dashboard</span>
//               </LeftNavLink>
//             </TooltipTrigger>
//             <TooltipContent side="right">Dashboard</TooltipContent>
//           </Tooltip>
//         </TooltipProvider>
//         <TooltipProvider>
//           <Tooltip>
//             <TooltipTrigger asChild>
//               <sLeftNavLink href="/admin/shop"> Shops</LeftNavLink>
//             admin/</TooltipTrigger>
//             <TooltipContent side="right">Shops</TooltipContent>
//           </Tooltip>
//         </TooltipProvider>
//         <TooltipProvider>
//           <Tooltip>
//             <TooltipTrigger asChild>
//               <LeftNavLink href="/analytics">Analytics </LeftNavLink>
//             </TooltipTrigger>
//             <TooltipContent side="right">Analytics</TooltipContent>
//           </Tooltip>
//         </TooltipProvider>
//       </LeftNav>
//     </aside>
//   );
// }
