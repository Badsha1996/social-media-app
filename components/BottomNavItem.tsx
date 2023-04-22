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
        <div className='flex flex-row items-center'>
            <div className='relative rounded-full
            w-fit
            h-fit
            flex
            items-center
            justify-center
            p-4
            hover:bg-slate-300
            hover:bg-opacity-10
            lg:hidden
            '>

            </div>
            <Icon size={30} color="white" />
        </div>
    )
}
