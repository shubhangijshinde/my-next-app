import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="p-14 mb-5 text-1xl font-bold">
      <h1>Hello world!!</h1>
      <Link href={'user'} className='underline pt-3'>User Info</Link>
    </main>
  )
}
