'use client';
import Image from 'next/image';
import Link from 'next/link';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';
import { ButtonArrow } from '@/shared/ui/icons';

import styles from './HomeInstruments.module.scss';

export const HomeInstruments = () => {
  const t = useTranslations('homeInstruments');

  const scrollToFooter = (e: React.MouseEvent) => {
    e.preventDefault();
    const footer = document.getElementById('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const items = [
    {
      title: t('item1.title', {
        fallback: 'Forex',
      }),
      description: t('item1.description', {
        fallback: 'Opera cientos de pares de divisas con spreads ajustados y disponibilidad 24/5.',
      }),
      icon: '/images/home/instruments/icon1.svg',
    },
    {
      title: t('item2.title', {
        fallback: 'CFDs',
      }),
      description: t('item2.description', {
        fallback:
          'Aprovecha los movimientos de precios en acciones, materias primas, índices y criptomonedas sin poseer los activos subyacentes.',
      }),
      icon: '/images/home/instruments/icon2.svg',
    },
    {
      title: t('item3.title', {
        fallback: 'Acciones',
      }),
      description: t('item3.description', {
        fallback: 'Invierte en acciones de bolsas globales como NYSE, NASDAQ y LSE.',
      }),
      icon: '/images/home/instruments/icon3.svg',
    },
    {
      title: t('item4.title', {
        fallback: 'Índices',
      }),
      description: t('item4.description', {
        fallback:
          'Obtén exposición a segmentos amplios del mercado como el S&P 500 y FTSE 100 con menor volatilidad.',
      }),
      icon: '/images/home/instruments/icon4.svg',
    },
    {
      title: t('item5.title', {
        fallback: 'Materias primas',
      }),
      description: t('item5.description', {
        fallback: 'Accede a recursos esenciales, incluyendo oro, petróleo y productos agrícolas.',
      }),
      icon: '/images/home/instruments/icon5.svg',
    },
    {
      title: t('item6.title', {
        fallback: 'Criptomonedas',
      }),
      description: t('item6.description', {
        fallback: 'Opera con monedas digitales populares con acceso al mercado 24/7.',
      }),
      icon: '/images/home/instruments/icon6.svg',
    },
  ];

  return (
    <section className={styles.homeInstruments}>
      <div className={'_container'}>
        <div className={styles.homeInstruments__content}>
          <motion.div className={styles.buttonMobile}>
            <Link href={'#footer'} className={`button-white ${styles.tabButton}`} onClick={scrollToFooter}>
              {t('button', {
                fallback: 'Abre una cuenta',
              })}
              <ButtonArrow />
            </Link>
          </motion.div>
          <div className={styles.col1}>
            {items.map((item, index) => (
              <motion.div
                key={index}
                className={styles.item}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Image src={item.icon} alt={item.title} width={60} height={60} />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            className={styles.col2}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2>
              {t('title', {
                fallback: 'Explora nuestros instrumentos de trading',
              })}
            </h2>
            <p>
              {t('description', {
                fallback:
                  'Descubre una amplia selección de mercados diseñados para adaptarse a todos los estilos y preferencias de trading.',
              })}
            </p>
            <Link href={'#footer'} className={`button-white ${styles.tabButton}`} onClick={scrollToFooter}>
              {t('button', {
                fallback: 'Abre una cuenta',
              })}
              <ButtonArrow />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
