import { Fingerprint, Code2, Zap, ShieldCheck, Gauge, BadgeCheck } from "lucide-react";

const features = [
  {
    icon: Fingerprint,
    title: "Biometric first",
    desc: "Face/Touch ID with secure WebAuthn under the hood.",
  },
  { icon: Code2, title: "One line", desc: "Drop-in SDK that boots in seconds." },
  { icon: Zap, title: "Fast", desc: "Sub-300ms round trips in most regions." },
  { icon: ShieldCheck, title: "Private", desc: "Zero password storage. Encrypted assertions." },
  { icon: Gauge, title: "Scales", desc: "From weekend project to unicorn." },
  { icon: BadgeCheck, title: "Compliant", desc: "SOC2-ready patterns baked-in." },
];

export default function Features(){
  return (
    <section id="features" className="py-20 bg-[#06080d]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Built for modern teams</h2>
          <p className="text-white/60 mt-2">Secure, delightful, and drop-dead simple.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/[0.08] transition group">
              <div className="h-10 w-10 grid place-items-center rounded-lg bg-gradient-to-br from-sky-500 via-cyan-400 to-blue-600 shadow shadow-cyan-500/30">
                <Icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="mt-4 text-white font-semibold">{title}</h3>
              <p className="text-white/60 text-sm mt-1">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
