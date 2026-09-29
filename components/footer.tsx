export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border px-5 pb-8 pt-16 md:px-8">
      {/* giant cropped brand */}
      <div className="pointer-events-none relative z-10 select-none overflow-hidden">
        <span
          className="glitch rgb-split-lg block font-display text-[28vw] leading-[0.7] text-foreground"
          data-text="KEVEN"
        >
          KEVEN
        </span>
      </div>

      <div className="relative z-10 mt-6 flex flex-wrap items-end justify-between gap-6 border-t border-border pt-6">
        <div className="font-mono text-[11px] uppercase leading-relaxed tracking-widest text-concrete">
          <span className="spray-red">MOTION / EDIÇÃO / FOTO</span>
          <br />
          <span className="text-foreground">TIMON — MARANHÃO, BRASIL</span>
          <br />© 2026 — TODOS OS DIREITOS RESERVADOS
        </div>

        <div className="flex flex-col items-start gap-1 font-mono text-[11px] uppercase tracking-widest md:items-end">
          <a
            href="https://w.app/keveneditor"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground transition-colors hover:text-rgb-green"
          >
            WHATSAPP ↗
          </a>
          <a
            href="https://linktr.ee/keveneditor"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground transition-colors hover:text-rgb-blue"
          >
            LINKTREE ↗
          </a>
          <a
            href="#top"
            className="text-concrete transition-colors hover:text-foreground"
          >
            VOLTAR AO TOPO ↑
          </a>
          <span className="mt-2 flex items-center gap-1 text-concrete">
            <span className="h-2 w-2 bg-rgb-red" />
            <span className="h-2 w-2 bg-rgb-green" />
            <span className="h-2 w-2 bg-rgb-blue" />
            V2.0 / 2026
          </span>
        </div>
      </div>
    </footer>
  )
}
