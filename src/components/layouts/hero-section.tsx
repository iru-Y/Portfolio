import ButtonComponent from "../shared/button";

export default function HeroSection() {
  return (
    <>
      <section className="px-20 flex">
        <img src="/assets/img/me1.png" alt="Eu" />

        <div className="flex flex-col gap-8 pl-30 pt-10 ">
          <span className="text-2xl">
            Olá, eu sou o <b className="text-secondary text-5xl italic font-playfair">YURI MATTHEWUS</b>
          </span>

          <h1 className="text-3xl font-montserrat text-bo">
            <b>Desenvolvedor Spring Boot, Flutter, React</b>
          </h1>

          <p className="text-1xl font-roboto">
            Fullstack com 3 anos de experiência em projetos
            end-to-end, especializado em APIs escaláveis ,
            aplicativos móveis cross-platform  e frontend 
          </p>
          <div className="flex justify-center"><ButtonComponent text="Download cv"/></div>
        </div>
      </section>
    </>
  );
}
