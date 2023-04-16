import styles from '@/styles/Layout.module.css'
import Sidebar from '@/components/Sidebar'
import BottomNav from '@/components/BottomNav'

type LayoutProps = {
    children: React.ReactNode
}

function Layout({ children }: LayoutProps): JSX.Element {
    return (
        <>
            <main className={styles.main}>
                <div className={styles.wrapper}>
                    {/* <Sidebar /> */}
                    <section className={styles.content}>
                        {children}
                    </section>
                    <BottomNav />
                </div>
            </main>
        </>
    )
}

export default Layout