'use client';
import Image from 'next/image';
import Link from 'next/link';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInRight, fadeInUp } from '@/shared/lib/helpers/animations';
import { ButtonArrow } from '@/shared/ui/icons';

import styles from './HomeHero.module.scss';

export const HomeHero = () => {
  const t = useTranslations('homeHero');

  const scrollToFooter = (e: React.MouseEvent) => {
    e.preventDefault();
    const footer = document.getElementById('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.hero}>
      <div className={styles.hero__container}>
        <div className={styles.hero__content}>
          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {t('title1', {
              fallback: 'Impulsa tu experiencia de trading con',
            })}{' '}
            <span>
              {t('title2', {
                fallback: 'soluciones innovadoras',
              })}
            </span>
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            dangerouslySetInnerHTML={{
              __html: t('description', {
                fallback:
                  'Tanzora ofrece una plataforma de trading segura e intuitiva, brindando acceso a mercados globales, incluyendo Forex, acciones, materias primas, índices y criptomonedas. Dedicados a la innovación y soporte, empoderamos a los traders para alcanzar sus metas financieras.',
              }),
            }}
          />
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Link href="#footer" className={`${styles.hero__button} button`} onClick={scrollToFooter}>
              {t('button', {
                fallback: 'Abre una cuenta',
              })}
              <ButtonArrow />
            </Link>
          </motion.div>
        </div>

        <motion.div
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Image src="/images/home/hero.png" alt="Hero" width={842} height={589} />
        </motion.div>
      </div>
    </section>
  );
};
