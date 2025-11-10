import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/themes";
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
  return (
    <section id="code" className="relative py-20 bg-[#05070B] border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Integrate in one line</h2>
            <p className="text-white/60 mt-2">Drop-in biometric auth that feels invisible.</p>
          </div>
        </div>

        <Tabs defaultValue="javascript" className="w-full">
          <TabsList className="flex w-full max-w-[520px] overflow-hidden rounded-lg border border-white/10 bg-white/5">
            <TabsTrigger value="javascript" className="flex-1 px-4 py-2 text-sm text-white/80 data-[state=active]:bg-white/10">JavaScript</TabsTrigger>
            <TabsTrigger value="react" className="flex-1 px-4 py-2 text-sm text-white/80 data-[state=active]:bg-white/10">React</TabsTrigger>
            <TabsTrigger value="node" className="flex-1 px-4 py-2 text-sm text-white/80 data-[state=active]:bg-white/10">Node</TabsTrigger>
          </TabsList>
          <div className="mt-6">
            <TabsContent value="javascript">
              <CodeBlock code={snippets.javascript} />
            </TabsContent>
            <TabsContent value="react">
              <CodeBlock code={snippets.react} />
            </TabsContent>
            <TabsContent value="node">
              <CodeBlock code={snippets.node} />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </section>
  )
}
