"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/util/cn";
import Link from 'next/link'
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
function Navbar({ className }: { className?: string }){
    const [active, setActive] = useState<string | null>(null);
    return(
        <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
            
            
            <Menu setActive={setActive}>
            <Link href='/'>
            <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
      >
            <MenuItem setActive={setActive} active={active} item ='Home'>
            
            </MenuItem></HoverBorderGradient>
            </Link>
            
            <Link href='#'>
            


            <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
      >
            <MenuItem setActive={setActive} active={active} item ='Courses'>
            
            <div className="flex flex-col space-y-4 text-sm">
            
      
            <HoveredLink href="/courses">All courses</HoveredLink>
            <HoveredLink href="/#">Basic music theory</HoveredLink>
            <HoveredLink href="/#">Advanced Composition</HoveredLink>
            <HoveredLink href="/#">Music Production</HoveredLink></div>
            
            </MenuItem></HoverBorderGradient>
            
            </Link>
            <Link href='/contact'><HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 speed 1.2"
      >
            <MenuItem setActive={setActive} active={active} item ='Contact us'>
            
            </MenuItem></HoverBorderGradient>
            </Link>
            </Menu>
            </div>
    )
}
export default  Navbar