'use client';

import Image from 'next/image';
import Link from 'next/link';

import { useTranslations } from 'next-intl';

import styles from './Footer.module.scss';

export const Footer = () => {
  const t = useTranslations('footer');
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={'_container'}>
        <Link href="/" className={styles.footer__logo}>
          <Image src="/images/logo.svg" alt="Tanzora" width={212} height={49} />
        </Link>
        <div className={styles.footer__top}>
          <div className={styles.footer__col}>
            <p>
              {t('description', {
                fallback:
                  'Tanzora ofrece una plataforma de trading segura e intuitiva, brindando acceso a mercados globales, incluyendo Forex, acciones, materias primas, índices y criptomonedas. Dedicados a la innovación y soporte, empoderamos a los traders para alcanzar sus metas financieras.',
              })}
            </p>
            <p>
              {year} © {t('copyright', { fallback: 'Tanzora. Todos los derechos reservados.' })}
            </p>
          </div>
          <div className={styles.footer__col}>
            <h5>{t('links', { fallback: 'Síganos' })}</h5>
            <div className={styles.footer__socials}>
              <Link href="#">
                <Image src="/images/socials/facebook.svg" alt="Facebook" width={16} height={16} />
              </Link>
              <Link href="#">
                <Image src="/images/socials/instagram.svg" alt="Instagram" width={16} height={16} />
              </Link>
              <Link href="#">
                <Image src="/images/socials/x.svg" alt="X" width={16} height={16} />
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.footer__disclaimer}>
          <h4>{t('disclaimerTitle', { fallback: 'DESCARGO DE RESPONSABILIDAD SOBRE EL RIESGO' })}</h4>
          <p>
            {t('disclaimer1', {
              fallback:
                'El trading conlleva un riesgo considerable, especialmente cuando se utiliza apalancamiento, lo que puede resultar en pérdidas financieras rápidas y significativas. Muchos traders minoristas sufren pérdidas en esta plataforma. Es fundamental comprender completamente los riesgos y reconocer la posibilidad de perder el capital invertido. Los valores de las inversiones pueden fluctuar, y el rendimiento pasado no garantiza resultados futuros. Todos los materiales en este sitio web — incluyendo análisis, información, opiniones, estrategias y técnicas — no constituyen asesoramiento de inversión personalizado ni recomendaciones para comprar o vender instrumentos financieros. Las inversiones iniciales pueden incluir comisiones y costos que afectan el monto total invertido y los retornos. El rendimiento histórico no debe considerarse indicativo de resultados futuros. Además, las variaciones en los tipos de cambio pueden afectar los resultados en Forex.',
            })}
          </p>
          <p>
            {t('disclaimer2', {
              fallback:
                'Para más detalles, por favor revise nuestras Advertencias de Riesgo y Términos y Condiciones. Este sitio utiliza cookies para mejorar la experiencia del usuario, como habilitar la función de inicio de sesión y permitir que socios mediáticos confiables analicen datos agregados de uso. Al aceptar las cookies, usted consiente su uso. Para más información, consulte nuestra Política de Cookies. El sitio es operado por NOMBRE DE LA EMPRESA, número de empresa: NÚMERO REGISTRADO, registrado en DIRECCIÓN REGISTRADA. La empresa procesadora y compensadora es NOMBRE DE LA EMPRESA, registrada en DIRECCIÓN REGISTRADA.',
            })}
          </p>
          <p>
            {t('disclaimer3', {
              fallback:
                'La información en este sitio no está dirigida a residentes de los Estados Unidos. No está destinada para distribución o uso en jurisdicciones donde dichas actividades sean ilegales o violen leyes o regulaciones locales.',
            })}
          </p>
        </div>
      </div>
    </footer>
  );
};
