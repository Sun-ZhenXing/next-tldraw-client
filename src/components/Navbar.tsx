'use client'
import { useRouter } from 'next/navigation'
import { enabledThemes } from '../../config/theme'

export function Navbar() {
  const router = useRouter()
  return (
    <>
      <div className="navbar bg-primary text-primary-content">
        <div className="flex-1">
          <button className="btn btn-ghost text-xl" onClick={() => { router.push('/') }}>Home</button>
          <button className="btn btn-ghost text-xl" onClick={() => { router.push('/room') }}>Demo</button>
        </div>
        <div className="flex-none">
          <details className="dropdown dropdown-end">
            <summary className="btn m-1">Theme</summary>
            <div className="menu dropdown-content bg-base-100 rounded-box z-[1] w-80 p-2 max-h-[50vh] shadow-lg">
              <div className="size-full overflow-y-auto">
                {enabledThemes.map((theme) => (
                  <div key={theme} className="form-control border-primary border-2 rounded-lg border-opacity-30 mt-1">
                    <label className="label cursor-pointer gap-4">
                      <span className="label-text">{theme}</span>
                      <input type="radio" name="theme-radios" className="radio theme-controller" value={theme} />
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </details>
        </div>
      </div>
    </>
  )
}
