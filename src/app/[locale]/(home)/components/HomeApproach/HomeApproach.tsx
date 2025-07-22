'use client';
import Image from 'next/image';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';
import { Button } from '@/shared/ui/kit/button/Button';

import styles from './HomeApproach.module.scss';

export const HomeApproach = () => {
  const t = useTranslations('homeApproach');

  return (
    <section className={styles.homeApproach}>
      <Image src={'/images/home/approach.png'} alt={'approach'} width={1144} height={707} />
      <div className={'_container'}>
        <motion.div
          className={styles.homeApproach__content}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className={styles.details}>
            <h2>
              {t('title', {
                fallback: 'Nuestro enfoque',
              })}
            </h2>

            <p>
              {t('description', {
                fallback:
                  'Tanzora se basa en la transparencia, seguridad y tecnología de vanguardia. Ofrecemos una gama de herramientas sofisticadas diseñadas para mejorar tus estrategias de trading, minimizar riesgos y optimizar el rendimiento. Desde datos de mercado en tiempo real hasta gráficos avanzados, te empoderamos para tomar decisiones informadas que se alineen con tus objetivos financieros.',
              })}
            </p>
            <Button />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
