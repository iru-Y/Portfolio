import ButtonComponent from "../shared/button";

export default function HeroSection() {
  const desc:string = "Fullstack com 3 anos de experiência em projetos end-to-end, especializado em APIs escaláveis ,aplicativos móveis cross-platform  e frontend"
  return (
    <>
      <section className="px-20 flex">
        <img className="pl-20" src="/assets/img/me1.png" alt="Eu" />

        <div className="flex flex-col gap-8 pl-30 pt-10 ">
          <span className="text-2xl">
            Olá, eu sou o <b className="text-secondary text-4xl italic font-playfair">YURI MATTHEWUS</b>
          </span>

          <h1 className="text-4xl font-montserrat ">
            <b>O MELHOR DESENVOLVEDOR JAVA, FLUTTER E JAVASCRIPT</b>
          </h1>

          <p className="text-1xl font-roboto font-bold">
            {desc.toUpperCase()}
          </p>
          <div className="flex justify-center"><ButtonComponent text="Download cv"/></div>
        </div>
      </section>
    </>
  );
}
