import { Title } from '@mantine/core'
import { NavLink } from 'react-router'

export default function Header() {
  return (
    <div className='text-center'>
      <Title>{import.meta.env.VITE_APP_NAME}</Title>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/about'>About</NavLink>
    </div>
  )
}
