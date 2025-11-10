import { Copy, Check } from "lucide-react";
import { useState } from "react";

const snippets = {
  javascript: `// 1) Install SDK
// npm i @vanishauth/js

// 2) Initialize
import { Vanish } from '@vanishauth/js'
const auth = new Vanish({ apiKey: process.env.VANISH_KEY })

// 3) One line login
await auth.login({ method: 'biometric' })
`,
  react: `// App.jsx
import { useEffect } from 'react'
import { Vanish } from '@vanishauth/js'

export default function App(){
  useEffect(() => {
    new Vanish({ apiKey: import.meta.env.VITE_VANISH_KEY })
      .login({ method: 'biometric' })
  }, [])
  return null
}
`,
  node: `// server.mjs
import express from 'express'
import { verify } from '@vanishauth/server'

const app = express()
app.post('/webhook/vanish', verify())
app.listen(3000)
`,
};

function CodeBlock({ code }){
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 1200)
  }
  return (
    <div className="relative">
      <pre className="overflow-auto rounded-lg bg-[#0a0f17] text-[13px] leading-relaxed text-white/90 p-5 border border-white/10">
        <code>{code}</code>
      </pre>
      <button onClick={copy} className="absolute top-3 right-3 inline-flex items-center gap-2 text-xs text-white/80 bg-white/10 hover:bg-white/20 border border-white/10 px-2.5 py-1.5 rounded">
        {copied ? (<><Check className="h-3.5 w-3.5"/> Copied</>) : (<><Copy className="h-3.5 w-3.5"/> Copy</>)}
      </button>
    </div>
  )
}

export default function CodeEmbed(){
  const [active, setActive] = useState('javascript')
  return (
    <section id="code" className="relative py-20 bg-[#05070B] border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Integrate in one line</h2>
            <p className="text-white/60 mt-2">Drop-in biometric auth that feels invisible.</p>
          </div>
        </div>

        <div className="w-full">
          <div className="flex w-full max-w-[520px] overflow-hidden rounded-lg border border-white/10 bg-white/5">
            {['javascript','react','node'].map((key) => (
              <button
                key={key}
                onClick={() => setActive(key)}
                className={`flex-1 px-4 py-2 text-sm transition ${active===key ? 'bg-white/10 text-white' : 'text-white/80 hover:bg-white/10'}`}
              >
                {key === 'javascript' ? 'JavaScript' : key === 'react' ? 'React' : 'Node'}
              </button>
            ))}
          </div>
          <div className="mt-6">
            <CodeBlock code={snippets[active]} />
          </div>
        </div>
      </div>
    </section>
  )
}
