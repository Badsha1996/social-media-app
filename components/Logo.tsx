import { useRouter } from 'next/router'
import {SlSocialFoursqare} from 'react-icons/sl'

function Logo() {
  const router = useRouter()

  return (
    <div className='
    rounded-full
    h-fit
    w-fit
    p-4
    flex
    items-center
    justify-center
    hover:bg-blue-300
    hover:bg-opacity-10
    cursor-pointer
    transition' onClick={()=>router.push('/')}>
        <SlSocialFoursqare size={30} color='white'/>
    </div>
  )
}

export default Logo