import { Button } from '@mantine/core'
import { NavLink } from 'react-router'

export default function Header() {
  return (
    <div className='mt-6 text-center'>
      <div className='flex justify-center gap-4'>
        <NavLink to='/'>
          {({ isActive }) => <Button variant={isActive ? 'filled' : 'outline'}>Home</Button>}
        </NavLink>
        <NavLink to='/about'>
          {({ isActive }) => <Button variant={isActive ? 'filled' : 'outline'}>About</Button>}
        </NavLink>
      </div>
    </div>
  )
}
