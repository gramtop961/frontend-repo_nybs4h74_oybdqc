export default function Footer(){
  return (
    <footer className="bg-[#05070B] border-t border-white/10 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-white/50 text-sm">© {new Date().getFullYear()} VanishAuth — All rights reserved.</p>
        <nav className="flex items-center gap-6 text-sm">
          <a className="text-white/60 hover:text-white" href="#">Privacy</a>
          <a className="text-white/60 hover:text-white" href="#">Terms</a>
          <a className="text-white/60 hover:text-white" href="#">Status</a>
        </nav>
      </div>
    </footer>
  )
}
