'use client';

import Image from 'next/image';
import Link from 'next/link';

import { useTranslations } from 'next-intl';

import styles from './Footer.module.scss';

import { RequestForm } from '@/featured/contact-popup/ui/RequestForm/RequestForm';
import { ThankyouModal } from '@/featured/contact-popup/ui/ThankyouModal/ThankyouModal';

export const Footer = () => {
  const t = useTranslations('footer');
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer} id="footer">
      <div className={'_container'}>
        <div className={styles.footer__top}>
          <div className={styles.footer__col}>
            <Link href="/" className={styles.footer__logo}>
              <Image src="/images/logo.svg" alt="Tanzora" width={212} height={49} />
            </Link>
            <h4>Brandnova Studios LLC</h4>
            <div className={styles.address}>
              <div>
                <Link href="mailto:info@tanzora.io">info@tanzora.io</Link>
              </div>
              <div>
                <Link href="tel:+442036756517">+442036756517</Link>
              </div>
              <div>
                <p>
                  Desarrollo Hamilton, Unidad B, <br />
                  Charlestown, Nevis, Indias Occidentales
                </p>
              </div>
            </div>
          </div>
          <div className={styles.footer__col}>
            <RequestForm />
            <ThankyouModal />
          </div>
        </div>
        <div className={styles.footer__bottom}>
          <p>
            {year} © {t('copyright', { fallback: 'Tanzora. All Rights Reserved.' })}
          </p>
        </div>
      </div>
    </footer>
  );
};
