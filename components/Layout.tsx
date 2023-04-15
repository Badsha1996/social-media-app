import styles from '@/styles/Layout.module.css'
import Sidebar from '@/components/Sidebar'

type LayoutProps = {
    children: React.ReactNode
}

function Layout({ children }: LayoutProps): JSX.Element {
    return (
        <>
            <main className={styles.main}>
                <div className={styles.gridlayout}>
                    <Sidebar />
                    <section className={styles.gridSection}>
                        {children}
                    </section>
                </div>
            </main>
        </>
    )
}

export default Layout