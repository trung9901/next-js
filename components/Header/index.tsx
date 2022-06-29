import Link from 'next/link'
import React from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
    <div>
        <ul>
        <li><Link href="/"><a >Home page</a></Link></li>
        <li><Link href="/about"><a >About</a></Link></li>
        <li><Link href="/products"><a >Product</a></Link></li>
        <li><Link href="/contact"><a >Contact</a></Link></li>
    
        </ul>
    </div>
  )
}

export default Header