'use client'
import { useRouter } from 'next/navigation'

export function Navbar() {
  const router = useRouter()
  return (
    <>
      <div className="navbar bg-primary text-primary-content">
        <button className="btn btn-ghost text-xl" onClick={() => { router.push('/') }}>Home</button>
        <button className="btn btn-ghost text-xl" onClick={() => { router.push('/room') }}>Demo</button>
      </div>
    </>
  )
}
