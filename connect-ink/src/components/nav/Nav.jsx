"use client"
import Link from "next/link"

export default function Nav (){
 
  return (
    <nav style={{ background: '#333', padding: '10px', color: '#fff' }}>
      <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'center', gap: '20px' }}>
        <li>
          <Link href="/about">
           <button> About</button>
          </Link>
        </li>
        <li>
          <Link href="/explore">
          <button> Explore </button>
          </Link>
        </li>
        <li>
          <Link href="/account">
          <button> Account </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};