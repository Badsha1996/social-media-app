import { CgProfile } from 'react-icons/cg'
import { AiOutlineHome, AiOutlineNotification } from 'react-icons/ai'
import Logo from './Logo'
import BottomNavItem from './BottomNavItem'

export default function BottomNav() {
  const items = [{
    label: 'Home', href: '/', icon: AiOutlineHome
  },
  {
    label: 'Notification', href: '/notification', icon: AiOutlineNotification
  },
  {
    label: 'Profile', href: '/users/012', icon: CgProfile
  }]

  return (
    <div className='col-span-1 h-full pr-4 md:pr-6'>
      <div className='flex flex-col items-end'>
        <main className='space-y-2 lg:w-[230px]'>
          <Logo />
          {items.map((item) => {
            return (
              <BottomNavItem
                key={item.href}
                href={item.href}
                label={item.label}
                icon={item.icon} />
            )
          })}
        </main>
      </div>
    </div>
  )
}
