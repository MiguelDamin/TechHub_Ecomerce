import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Banner Principal (Hero Section) */}
      <section className="relative w-full h-[70vh] bg-gray-100 flex items-center justify-center overflow-hidden">
        <div className="text-center z-10">
          {/* <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500 mb-4 block">
            Nova Coleção 2026
          </span> */}
          <h2 className="text-4xl md:text-6xl font-light tracking-tighter text-black mb-8">
            O Futuro da Tecnologia
          </h2>
          <button className="px-8 py-3 bg-black text-white text-[11px] uppercase tracking-widest hover:bg-gray-800 transition-colors">
            Explorar Produtos
          </button>
        </div>
        
        {/* Placeholder para uma imagem de fundo impactante */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070')] bg-cover bg-center" />
      </section>

      {/* Grade de Categorias ou Produtos em Destaque */}
      <section className="max-w-7xl mx-auto px-10 py-20">
        <div className="flex justify-between items-end mb-12">
          <h3 className="text-xl font-medium tracking-tight">Destaques da Semana</h3>
          <a href="#" className="text-[11px] uppercase tracking-widest border-b border-black pb-1 hover:opacity-50">
            Ver tudo
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card de Produto Exemplo 1 */}
          <div className="group cursor-pointer">
            <div className="aspect-[4/5] bg-gray-50 mb-4 overflow-hidden relative">
               <div className="absolute inset-0 bg-gray-200 animate-pulse group-hover:hidden" />
               {/* Futuramente você usará o componente <Image /> do Next aqui */}
            </div>
            <h4 className="text-[13px] font-medium uppercase tracking-wide">Smartphone Note 20 Ultra</h4>
            <p className="text-gray-500 text-[12px] mt-1">R$ 4.599,00</p>
          </div>

          {/* Card de Produto Exemplo 2 */}
          <div className="group cursor-pointer">
            <div className="aspect-[4/5] bg-gray-50 mb-4"></div>
            <h4 className="text-[13px] font-medium uppercase tracking-wide">Watch 5 Pro </h4>
            <p className="text-gray-500 text-[12px] mt-1">R$ 2.199,00</p>
          </div>

          {/* Card de Produto Exemplo 3 */}
          <div className="group cursor-pointer">
            <div className="aspect-[4/5] bg-gray-50 mb-4"></div>
            <h4 className="text-[13px] font-medium uppercase tracking-wide">Fones Noise Cancelling</h4>
            <p className="text-gray-500 text-[12px] mt-1">R$ 1.299,00</p>
          </div>
        </div>
      </section>
    </main>
  );
}