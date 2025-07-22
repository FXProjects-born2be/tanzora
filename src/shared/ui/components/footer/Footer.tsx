'use client';

import Image from 'next/image';
import Link from 'next/link';

import { useTranslations } from 'next-intl';

import styles from './Footer.module.scss';

export const Footer = () => {
  const t = useTranslations('footer');
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer} id="footer">
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
              {year} © {t('copyright', { fallback: 'Tanzora. All Rights Reserved.' })}
            </p>
          </div>
          <div className={styles.footer__col}>
            <div>
              <h5>{t('address', { fallback: 'Address' })}</h5>
              <p>
                Hamilton Development, Unit B, <br />
                Charlestown, Nevis, West Indies
              </p>
            </div>
            <div>
              <h5>{t('number', { fallback: 'Number' })}</h5>
              <p>No. L 23777</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
