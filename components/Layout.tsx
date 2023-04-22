import BottomNav from '@/components/BottomNav'

type LayoutProps = {
    children: React.ReactNode
}

function Layout({ children }: LayoutProps): JSX.Element {
    return (
        <>
            <main className='h-screen bg-black'>
                <div className='container h-full mx-auto max-w-full'>
                    <div className='grid grid-cols-4 h-full'>
                        <BottomNav />
                        <div className='col-span-3 
                        lg:col-span-1
                        border-x-[1px]
                        border-neutral-800'>
                            {children}
                        </div>
                    </div>

                </div>
            </main>
        </>
    )
}

export default Layout