import style from "./chemistry.module.css";
import studying from "../../assets/studying_chemistry.webp";

export const Chemistry = () => {
  return (
    <section className={style.content}>
      <p>Recursos e ferramentas para melhorar suas habilidades em química.</p>

      <h2>Plataformas de Aprendizado</h2>
      <img
        src={studying}
        alt="Plataformas de Aprendizado"
        className={style.section_image}
      />
      <ul>
        <li>
          <a
            href="https://preply.com/pt/online/professores--quimica?campaignid=21153927807&network=x&adgroupid=&keyword=&matchtype=&creative=&targetid=&placement=&loc_physical_ms=9047805&device=c&utm_source=google&utm_medium=cpc&utm_term=&utm_campaign=stu_dis_pro_all_0_por_xx_multiplesub_pmax_0&hsa_acc=3694996243&hsa_cam=21153927807&hsa_grp=&hsa_ad=&hsa_src=x&hsa_tgt=&hsa_kw=&hsa_mt=&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=CjwKCAjwkJm0BhBxEiwAwT1AXH5sRY5z0tbmSXJmyxmgk1SNxPMTGauYksHZfI0F56WQuK3sHtU82hoCEcUQAvD_BwE"
            target="_blank"
          >
            Preply
          </a>
        </li>
        <li>
          <a
            href="https://descomplica.com.br/d/vs/quimica/?utm_term=&utm_campaign=gmax_ug_performance_gwt-paid-media_meio_conversao_always-on_lead&utm_source=google&utm_medium=cpc&hsa_acc=4300659645&hsa_cam=20337576239&hsa_grp=&hsa_ad=&hsa_src=x&hsa_tgt=&hsa_kw=&hsa_mt=&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=CjwKCAjwkJm0BhBxEiwAwT1AXED0mtjteh1K-5HDDEGl5UAuxFFk9kRA9N8H4PDsZOvkPBw8m75uCRoC6d4QAvD_BwE"
            target="_blank"
          >
            Descomplica
          </a>
        </li>
        <li>
          <a
            href="https://www.superprof.com.br/blog/paginas-estudar-ciencias-natureza/"
            target="_blank"
          >
            Superprof
          </a>
        </li>
        <li>
          <a href="https://cursoquimicaonline.com.br/" target="_blank">
            Química Online
          </a>
        </li>
      </ul>
      <h2>Conteúdos de Química</h2>
      <ul>
        <li>
          <a
            href="https://www.youtube.com/playlist?list=PL0LfmDSptaT098AnGV_EBcFTF_TPoHUa7"
            target="_blank"
          >
            Marcelão da Química (YouTube)
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/playlist?list=PLF2J-8QoLzYGj08pCRhjb_1hTl8R1LJjJ"
            target="_blank"
          >
            Aula De (YouTube)
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/playlist?list=PL8vXuI6zmpdj_YFEHTaBDccdSCC1LVNH0"
            target="_blank"
          >
            Kultivi
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/playlist?list=PLrsojwmNR8-E1VS-YMig8_diHIjpHHw5u"
            target="_blank"
          >
            Química do monstro
          </a>
        </li>
      </ul>
    </section>
  );
};
