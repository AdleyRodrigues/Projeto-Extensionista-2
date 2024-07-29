import style from "./history.module.css";
import studying_history from "../../assets/studdying_history.webp";

export const History = () => {
  return (
    <section className={style.content}>
      <p>Recursos e ferramentas para melhorar suas habilidades em história.</p>

      <h2>Plataformas de Aprendizado</h2>
      <img
        src={studying_history}
        alt="Plataformas de Aprendizado"
        className={style.section_image}
      />
      <ul>
        <li>
          <a
            href="https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwi2oe7Hxo6HAxXbZUgAHcgfC9cYABAEGgJjZQ&co=1&ase=2&gclid=CjwKCAjwkJm0BhBxEiwAwT1AXIHnAnOxMDTQTF3RWnKnvnwlAbP9aIb5yoL8rMAzK5t5DG4bZZYW2xoCfJkQAvD_BwE&ohost=www.google.com&cid=CAESVuD2x_3KVts1Cm1s3hfXJKzFQ9ckqNfrHO1-tsSqoHKweoWn-MvJ9pgHun-cQ6wli4PzMyDQ58aCAY4Ssbu6PXWI2sCWtnrrfTq47AYkRwJ2Ocv4-DAm&sig=AOD64_0i8ENN4Gvyfwrag43CViVPJBDrig&q&nis=4&adurl&ved=2ahUKEwj06-jHxo6HAxUNspUCHV_TCtEQ0Qx6BAgJEAE"
            target="_blank"
          >
            Klazz
          </a>
        </li>
        <li>
          <a
            href="https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwi2oe7Hxo6HAxXbZUgAHcgfC9cYABAAGgJjZQ&co=1&ase=2&gclid=CjwKCAjwkJm0BhBxEiwAwT1AXBviYz07ci-82rCsDCe9X_otoWbdzBpv5y0vT61U3w7V-ShLM6qj2xoCPkMQAvD_BwE&ohost=www.google.com&cid=CAESVuD2x_3KVts1Cm1s3hfXJKzFQ9ckqNfrHO1-tsSqoHKweoWn-MvJ9pgHun-cQ6wli4PzMyDQ58aCAY4Ssbu6PXWI2sCWtnrrfTq47AYkRwJ2Ocv4-DAm&sig=AOD64_3l586kIMGxCv3ueC9iLO9qUpy1zA&q&nis=4&adurl&ved=2ahUKEwj06-jHxo6HAxUNspUCHV_TCtEQ0Qx6BAgLEAE"
            target="_blank"
          >
            Descomplica
          </a>
        </li>
        <li>
          <a
            href="https://www.superprof.com.br/blog/plataformas-estudos-acontecimentos-historicos/"
            target="_blank"
          >
            Superprof
          </a>
        </li>
        <li>
          <a href="https://historiaonline.com.br/" target="_blank">
            História Online
          </a>
        </li>
      </ul>
      <h2>Conteúdos de História</h2>
      <ul>
        <li>
          <a
            href="https://www.youtube.com/playlist?list=PLMra4G0-Z7pMYLE-D-ptnHt1IW_Y1hn8H"
            target="_blank"
          >
            Parabólica (YouTube)
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/playlist?list=PLPNLvl90MqKS24q7THLAgaFVXDq1_T2Y3"
            target="_blank"
          >
            Se Liga (YouTube)
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/playlist?list=PLIdiUrsoqaXNoqBVWhZ-VpJP8rZHmaSys"
            target="_blank"
          >
            Débora Aladim
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/watch?v=XJ0kBLCCE7c&list=PL2EJlPZ0iJu7JMchSngqLHyzV_sU91N7Y"
            target="_blank"
          >
            Canal Nostalgia
          </a>
        </li>
      </ul>
    </section>
  );
};
