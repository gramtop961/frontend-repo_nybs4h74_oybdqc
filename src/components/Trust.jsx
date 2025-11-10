import { Shield, Lock, Globe, Server, Key, CheckCircle2 } from "lucide-react";

export default function Trust(){
  return (
    <section id="trust" className="py-20 bg-[#05070B] border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Security you can feel</h2>
            <p className="text-white/60 mt-3">Under the hood: WebAuthn + FIDO2, rotating device keys, and signed assertions. We keep secrets out of reach, so your users keep moving.</p>
            <ul className="mt-6 space-y-4">
              {[
                [Shield, 'End-to-end device attestation'],
                [Lock, 'Hardware-bound private keys'],
                [Server, 'Region-aware edge verification'],
                [Globe, 'GDPR and SOC2-ready controls'],
                [Key, 'Key rotation and revoke APIs'],
              ].map(([Icon, label]) => (
                <li key={label} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-cyan-400 mt-0.5" />
                  <div>
                    <p className="text-white font-medium">{label}</p>
                    <p className="text-white/60 text-sm">{Icon === Shield && 'We verify device integrity to prevent spoofing.'}
                      {Icon === Lock && ' Keys never leave the Secure Enclave/TPM.'}
                      {Icon === Server && ' Verifications run close to your users for speed.'}
                      {Icon === Globe && ' Data boundaries and controls for peace of mind.'}
                      {Icon === Key && ' Rotate, revoke, and audit with clear APIs.'}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-6">
            <div className="rounded-xl bg-[#0a0f17] border border-white/10 p-6">
              <div className="flex items-center gap-2 text-white/70 text-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-400"/>
                <span>systems.vanishauth.com</span>
              </div>
              <div className="mt-4 space-y-2 text-white/80 text-sm">
                <div className="flex items-center justify-between"><span>Device Attestation</span><span>Passed</span></div>
                <div className="flex items-center justify-between"><span>Assertion Signature</span><span>Verified</span></div>
                <div className="flex items-center justify-between"><span>Risk Score</span><span className="text-emerald-400">Low</span></div>
                <div className="flex items-center justify-between"><span>Latency (P95)</span><span>278ms</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
