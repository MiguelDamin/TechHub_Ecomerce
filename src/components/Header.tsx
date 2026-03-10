import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex justify-between items-center px-10 py-6 bg-white border-b border-gray-100 uppercase tracking-widest text-[11px] font-medium text-black">
      
      {/* Esquerda: Menu e Busca */}
      <div className="flex flex-1 items-center gap-8">
        <button className="flex items-center gap-2 hover:opacity-50 transition-opacity">
          <span className="text-lg">☰</span>
          <span className="hidden md:inline">Menu</span>
        </button>
        <button className="flex items-center gap-2 hover:opacity-50 transition-opacity">
          <span className="text-lg">🔍</span>
          <span className="hidden md:inline">Buscar</span>
        </button>
      </div>

      {/* Centro: Nome da Loja */}
      <div className="flex-[2] text-center">
        <Link href="/">
          <h1 className="text-2xl font-bold tracking-[0.4em] cursor-pointer">
            TECHHUB
          </h1>
        </Link>
      </div>

      {/* Direita: Links e Ícones */}
      <div className="flex flex-1 items-center justify-end gap-8">
        <Link href="#" className="hidden lg:inline hover:opacity-50 transition-opacity">
          Fale Conosco
        </Link>
        <button className="text-lg hover:opacity-50">♡</button>
        <button className="text-lg hover:opacity-50">👤</button>
      </div>
    </header>
  );
}