import Status from "../shared/status";
import TitleComponent from "../shared/title";

export default function About() {
  return (
    <>
      <section className="px-20 py-20">
        <div className="w-150">
          <TitleComponent
            title="SOBRE MIM"
            subTitle="MELHOR DESENVOLVEDOR "
            highlight="FULLSTACK E MOBILE"
            description=" Atualmente, estou em busca de integrar um time dinâmico e colaborativo onde eu possa aplicar meus conhecimentos em desenvolvimento de software, contribuir para projetos desafiadores e, ao mesmo tempo, continuar evoluindo tecnicamente por meio da troca de experiências e do aprendizado contínuo. "
          />
        </div>

      <Status width="300px" height="200px" title="12k" subTitle="todos projeos"/>

      </section>
    </>
  );
}
