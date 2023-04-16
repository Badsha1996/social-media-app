import { IconType } from "react-icons"
import styles from '@/styles/BottomNav.module.css'

interface BottomNavItemProps {
    label: string,
    href: string,
    icon: IconType,
    onClick?: () => void
}
export default function BottomNavItem({ label, href, icon: Icon, onClick }: BottomNavItemProps): JSX.Element {
    return (
        <div className={styles.icons}>
            <Icon size={30} color="white" />
        </div>
    )
}
