import React from 'react';
import Link from "next/link"

const Navbar = () => {
    return (
        <nav class="navbar bg-base-100 px-24">
        <div class="flex-1">
          <a class="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div class="flex-none">
          <ul class="menu menu-horizontal p-0">
            <li>
              <Link href="/home"><a>Home</a></Link>
            </li>
            <li>
            <Link href="/about"><a>About</a></Link>
            </li>
            <li>
            <Link href="/contact"><a>Contact</a></Link>
            </li>
            <li>
            <Link href="/products"><a>Products</a></Link>
            </li>
          </ul>
        </div>
      </nav>
    );
};

export default Navbar;