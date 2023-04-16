import styles from '@/styles/BottomNav.module.css'
import { useRouter } from 'next/router'
import {SlSocialFoursqare} from 'react-icons/sl'
function Logo() {
  const router = useRouter()

  return (
    <div className={styles.logo} onClick={()=>router.push('/')}>
        <SlSocialFoursqare size={30} color='white'/>
    </div>
  )
}

export default Logo