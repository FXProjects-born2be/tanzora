'use client';

import Image from 'next/image';
import Link from 'next/link';

import { useTranslations } from 'next-intl';

import styles from './Footer.module.scss';

//import { RequestForm } from '@/featured/contact-popup/ui/RequestForm/RequestForm';
//import { ThankyouModal } from '@/featured/contact-popup/ui/ThankyouModal/ThankyouModal';

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
            <div className={styles.details}>
              <div>
                <Image src={'/images/company.svg'} alt="Company" width={24} height={24} />
                <p>
                  Nombre de la empresa <span>Brandnova Studios LLC</span>
                </p>
              </div>
              <div>
                <Image src={'/images/address.svg'} alt="Address" width={24} height={24} />
                <p>
                  Dirección de la empresa{' '}
                  <span>
                    Desarrollo Hamilton, Unidad B, Charlestown, Nevis, Indias Occidentales
                  </span>
                </p>
              </div>
              <div>
                <Image src={'/images/number.svg'} alt="Number" width={24} height={24} />
                <p>
                  Número de empresa <span>L 23777</span>
                </p>
              </div>
              <div>
                <Image src={'/images/email.svg'} alt="Email" width={24} height={24} />
                <p>
                  Correo electrónico <Link href="mailto:info@tanzora.io">info@tanzora.io</Link>
                </p>
              </div>
              <div>
                <Image src={'/images/phone.svg'} alt="Phone" width={24} height={24} />
                <p>
                  Teléfono <Link href="tel:+442036756517">+442036756517</Link>
                </p>
              </div>
            </div>
          </div>
          {/**<div className={styles.footer__col}>
            <RequestForm />
            <ThankyouModal />
          </div> */}
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
