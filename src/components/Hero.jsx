import Spline from '@splinetool/react-spline'
import { ArrowRight } from 'lucide-react'
import { useState } from 'react'

export default function Hero() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [message, setMessage] = useState('')

  const backendEnv = import.meta.env.VITE_BACKEND_URL || ''
  const backendFallback = 'https://ta-01k9p7g2b2fs79h991dv6ggfzk-8000.wo-m5dk06607bt6ah7uy7ine64hv.w.modal.host'
  const backend = backendEnv || backendFallback

  const joinWaitlist = async (e) => {
    e.preventDefault()
    if (!email) return
    setStatus('loading')
    setMessage('')
    try {
      const res = await fetch(`${backend}/api/waitlist`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'hero' })
      })
      if (!res.ok) throw new Error(await res.text())
      setStatus('success')
      setMessage('You are on the list. We\'ll be in touch soon!')
      setEmail('')
    } catch (err) {
      setStatus('error')
      setMessage('Something went wrong. Please try again.')
    }
  }

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#06080d]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_20%,rgba(56,189,248,0.25),rgba(0,0,0,0)_70%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-40 pb-28">
        <div className="max-w-2xl">
          <p className="text-cyan-300/90 text-sm font-semibold tracking-widest uppercase">Passwordless for builders</p>
          <h1 className="mt-4 text-4xl sm:text-6xl font-extrabold leading-tight bg-gradient-to-b from-white via-white to-white/70 bg-clip-text text-transparent">
            Auth that disappears.
          </h1>
          <p className="mt-5 text-white/70 text-lg">
            Ship biometric logins with a single line. Modern, secure, and invisible to your users.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#code" className="pointer-events-auto inline-flex items-center justify-center gap-2 text-sm font-medium text-white bg-gradient-to-r from-indigo-500 via-sky-500 to-cyan-400 hover:from-indigo-400 hover:to-cyan-300 px-5 py-3 rounded-md shadow-lg shadow-cyan-500/20 transition">
              Get started in 60s <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#trust" className="pointer-events-auto inline-flex items-center justify-center gap-2 text-sm font-medium text-white/90 bg-white/10 hover:bg-white/20 border border-white/10 px-5 py-3 rounded-md transition">
              See how we secure
            </a>
          </div>

          <form onSubmit={joinWaitlist} className="mt-8 flex flex-col sm:flex-row gap-3 bg-white/5 border border-white/10 p-2.5 rounded-xl backdrop-blur">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              className="flex-1 bg-transparent outline-none text-white placeholder-white/40 px-3 py-3 rounded-md border border-transparent focus:border-white/20"
            />
            <button disabled={status==='loading'} className="inline-flex items-center justify-center gap-2 text-sm font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 px-5 py-3 rounded-md disabled:opacity-60">
              {status==='loading' ? 'Joining...' : 'Join waitlist'}
            </button>
          </form>
          {message && (
            <p className={`mt-3 text-sm ${status==='success' ? 'text-emerald-400' : 'text-rose-400'}`}>{message}</p>
          )}
        </div>
      </div>
    </section>
  )
}
