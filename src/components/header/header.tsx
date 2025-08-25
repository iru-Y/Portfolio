export default function Header() {
  return (
    <header>
      <div className="pt-32 pr-48 pb-24 pl-48 flex justify-between items-center">
        <a href="/" className="font-bold text-xl">
          Yuri Matthewus
        </a>

        <nav>
          <ul className="flex gap-8">
            <li><a href="#sobre">SOBRE</a></li>
            <li><a href="#habilidades">HABILIDADES</a></li>
            <li><a href="#projetos">PROJETOS</a></li>
            <li><a href="#contato">CONTATO</a></li>
          </ul>
        </nav>
      </div>

      <section className="flex">
          <img src="img/me1.png" alt="" />
      </section>

    </header>
  );
}
