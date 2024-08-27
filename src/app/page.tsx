'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Page() {
  const [room, setRoom] = useState('')
  const router = useRouter()

  return (
    <>
      <div className="h-full pt-12 flex-center overflow-hidden space-y-4 flex-col">
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Input your room:</span>
          </div>
          <input type="text" placeholder="Room ID"
            value={room} onChange={e => setRoom(e.target.value)}
            className="input input-bordered w-full max-w-xs" />
        </label>
        <button className="btn btn-primary" onClick={() => {
          if (room) {
            router.push(`/room/${room}`)
          }
        }}>Go!</button>
      </div>
    </>
  )
}
