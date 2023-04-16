import styles from '@/styles/Sidebar.module.css';
import BottomNavItem from './BottomNavItem';
import Logo from './Logo';
import { AiOutlineHome, AiOutlineNotification } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';

function Sidebar():JSX.Element {
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
    <div className={styles.wrapper}>
      <main className={styles.main}>
        <Logo />
        {items.map((item, index) => {
          return (
            <div key={index}>
              <BottomNavItem
                href={item.href}
                label={item.label}
                icon={item.icon} />
            </div>
          )
        })}
      </main>
    </div>
  )
}

export default Sidebar