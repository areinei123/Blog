import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.scss'

export const Header = () => (
  <div>
    <h1>Fred Chapman</h1>
    <IndexLink to='/' activeClassName='route--active'>
      Home
    </IndexLink>
    {' | '}
    <Link to='/counter' activeClassName='route--active'>
      Counter
    </Link>
    {' | '}
    <Link to='/editor' activeClassName='route--active'>
      New Article
    </Link>
  </div>
)

export default Header
