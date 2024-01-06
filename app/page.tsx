import Image from 'next/image'
import Link from './components/link'

export default function Home() {
  return (
    <main className="ml-10 flex min-h-screen flex-col justify-items-start justify-center gap-y-4">
      <h1 className='font-extrabold text-6xl'>Hi, I'm Frank!</h1>
      <h2 className='text-gray-500 text-2xl'>I'm a Computer Engineering student at the University of Waterloo.</h2>
      <div className='flex flex-col gap-y-1'>
        <Link text='My Projects' href='/projects'/>
        <Link text='My GitHub' href='https://github.com/frank731'/>
        <Link text='My LinkedIn' href='https://www.linkedin.com/in/frank-li-b28b331b1/'/>
        <Link text='My Resume' href='https://drive.google.com/file/d/1cAOtam-ld4Zfa04Ch-pDYxbjjbRHwFOe/view?usp=sharing'/>
      </div>
    </main>
  )
}
