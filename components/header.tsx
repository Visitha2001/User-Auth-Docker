import Link from 'next/link'
import React from 'react'

const Header: React.FC = () => {
  return (
    <div className="navbar bg-gray-900 shadow-sm px-3">
        <div className="navbar-start">
            <div className="dropdown">
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    <li><a>Item 1</a></li>
                    <li>
                        <a>Parent</a>
                        <ul className="p-2">
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                        </ul>
                    </li>
                    <li><a>Item 3</a></li>
                </ul>
            </div>
            <Link href="/" className='text-lg font-bold px-3'>
                Next.js
            </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
            <li><a>Item 1</a></li>
            <li>
                <details>
                <summary>Parent</summary>
                <ul className="p-2">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                </ul>
                </details>
            </li>
            <li><a>Item 3</a></li>
            </ul>
        </div>
        <div className="navbar-end">
            <Link href="/login" className="btn btn-primary">Login</Link>
        </div>
    </div>
  )
}

export default Header
