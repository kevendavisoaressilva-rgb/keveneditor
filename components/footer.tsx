export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container-site flex flex-col items-start justify-between gap-6 py-10 md:flex-row md:items-center">
        <span className="text-lg font-extrabold uppercase tracking-[-0.03em] text-foreground">
          KEVEN<span className="text-accent">®</span>
        </span>

        <p className="font-mono text-[10px] uppercase tracking-widest text-soft">
          © 2026 — TIMON, MARANHÃO, BRASIL
          <span className="mx-3 text-accent">·</span>
          FEITO EM 24FPS, COM CAFÉ, ENTRE UM CORTE E OUTRO
        </p>

        <div className="flex items-center gap-6 font-mono text-[10px] uppercase tracking-widest">
          <a
            href="https://w.app/keveneditor"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground transition-colors hover:text-accent"
          >
            WHATSAPP ↗
          </a>
          <a
            href="https://linktr.ee/keveneditor"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground transition-colors hover:text-accent"
          >
            LINKTREE ↗
          </a>
          <a href="#top" className="text-soft transition-colors hover:text-foreground">
            TOPO ↑
          </a>
        </div>
      </div>
    </footer>
  )
}
