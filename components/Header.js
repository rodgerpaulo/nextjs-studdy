import React from 'react'
import Link from 'next/Link'

const linkStyle = {
  marginRight: 15
}

export default () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
  </div>
)
