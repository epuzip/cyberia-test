'use client'

import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'

export default function Page() {
    const router = useRouter()
    const paths = usePathname()
    const pathNames = paths.split('/').filter( path => path )
    return (

        <ul>
            <li onClick={() => router.push(`/${pathNames.slice(0, index + 1).join('/')}`)}> </li>
            
        </ul>
    )
}