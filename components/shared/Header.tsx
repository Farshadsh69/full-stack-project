import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import NavItems from './NavItems'

function Header() {
  return (
    <header className='w-full border-b' >
        <div className='wrapper flex items-center justify-between'>
<Link href='/' className='w-36'>
    <Image 
    src='/assets/images/logo.svg' 
    alt='logo' width={128} height={38}/>
</Link>
    <UserButton afterSignOutUrl='/'/>
    <NavItems />
<div className='flex w-32 justify-end gap-3'>
  <SignedIn>
  </SignedIn>
 <SignedOut   >
    <Button asChild className='rounded-full' size='lg'>
        <Link href='/sign-in'>
            Login
        </Link>
    </Button>
 </SignedOut>
</div>
        </div>
    </header>
  )
}

export default Header