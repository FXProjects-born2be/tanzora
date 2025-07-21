'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';
import { ButtonArrow } from '@/shared/ui/icons';

import styles from './HomeTrading.module.scss';


export const HomeTrading = () => {
  const t = useTranslations('homeTrading');
  const [activeTab, setActiveTab] = useState(0);

  const scrollToFooter = (e: React.MouseEvent) => {
    e.preventDefault();
    const footer = document.getElementById('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const tabs = [
    {
      title: t('tab1.title', {
        fallback: 'Trading web',
      }),
      description: t('tab1.description', {
        fallback:
          'Opera inmediatamente desde tu navegador — sin descargas ni instalaciones. Experimenta una interfaz rápida e intuitiva con potentes gráficos y datos de mercado en vivo.',
      }),
      button: t('tab1.button', {
        fallback: 'Vamos a hablar',
      }),
    },
    {
      title: t('tab2.title', {
        fallback: 'Trading móvil',
      }),
      description: t('tab2.description', {
        fallback:
          'Mantente conectado dondequiera con nuestra aplicación móvil repleta de funciones. Monitorea tu portafolio, recibe alertas en tiempo real y ejecuta operaciones en movimiento.',
      }),
      button: t('tab2.button', {
        fallback: 'Vamos a hablar',
      }),
    },
    {
      title: t('tab3.title', {
        fallback: 'Vamos a hablar',
      }),
      description: t('tab3.description', {
        fallback:
          'Experimenta el entorno de trading definitivo con nuestra aplicación de escritorio, diseñada para precisión, velocidad y flujos de trabajo personalizables para traders profesionales.',
      }),
      button: t('tab3.button', {
        fallback: 'Vamos a hablar',
      }),
    },
  ];

  return (
    <section className={styles.homeTrading}>
      <div className={'_container'}>
        <motion.div
          className={styles.homeTrading__content}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Image src={'/images/home/trading.png'} alt={'trading'} width={702} height={423} />
          <div className={styles.details}>
            <h2>
              {t('title', {
                fallback: 'Nuestras plataformas de trading',
              })}
            </h2>
            <div className={styles.tabs}>
              <div className={styles.tabHeader}>
                {tabs.map((tab, index) => (
                  <div
                    key={index}
                    className={`${styles.tab} ${activeTab === index ? styles.active : ''}`}
                    onClick={() => setActiveTab(index)}
                  >
                    {tab.title}
                  </div>
                ))}
              </div>
              <div className={styles.tabContent}>
                <h5>{tabs[activeTab].title}</h5>
                <p>{tabs[activeTab].description}</p>
                <Link href="#footer" className={`button ${styles.tabButton}`} onClick={scrollToFooter}>
                  {tabs[activeTab].button}
                  <ButtonArrow />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
