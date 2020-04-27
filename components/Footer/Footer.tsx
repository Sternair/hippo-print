import React from 'react'
import Link from 'next/link'

export const Footer: React.FC = () => {
  return (
    <div className="container">
      <div className="mt-4 mb-4">
        <Link href="/disclaimer">
          <a>Disclaimer</a>
        </Link>
        <Link href="/legal">
          <a className="ml-4">Legal</a>
        </Link>
      </div>
    </div>
  )
}
