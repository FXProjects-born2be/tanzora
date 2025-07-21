'use client';
import Image from 'next/image';
import Link from 'next/link';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';
import { ButtonArrow } from '@/shared/ui/icons';
import { ArrowRight } from '@/shared/ui/icons/arrow-right/ArrowRight';

import styles from './HomeSteps.module.scss';

export const HomeSteps = () => {
  const t = useTranslations('homeSteps');

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
        fallback: 'Registrar',
      }),
      text: t('item1.text', {
        fallback:
          'Crea tu cuenta rápida y seguramente para obtener acceso completo a nuestra plataforma de trading.',
      }),
      icon: '/images/home/step1.svg',
    },
    {
      title: t('item2.title', {
        fallback: 'Depositar',
      }),
      text: t('item2.text', {
        fallback:
          'Deposita fondos fácilmente usando varios métodos de pago para iniciar tu experiencia de trading.',
      }),
      icon: '/images/home/step2.svg',
    },
    {
      title: t('item3.title', {
        fallback: 'Operar',
      }),
      text: t('item3.text', {
        fallback:
          'Explora diversos mercados y ejecuta operaciones con confianza usando nuestras herramientas avanzadas.',
      }),
      icon: '/images/home/step3.svg',
    },
  ];

  return (
    <section className={styles.homeSteps}>
      <div className={'_container'}>
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {t('title', {
            fallback: 'Pasos para comenzar a operar',
          })}
        </motion.h2>
        <motion.div
          className={styles.homeSteps__content}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className={styles.homeSteps__items}>
            {items.map((item, index) => (
              <>
                <div key={index} className={styles.homeSteps__item}>
                  <Image src={item.icon} alt={item.title} width={78} height={78} />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
                {index !== items.length - 1 && <ArrowRight />}
              </>
            ))}
          </div>
          <motion.div
            className={styles.homeSteps__button}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Link href={'#footer'} className={`button`} onClick={scrollToFooter}>
              {t('button', {
                fallback: 'Vamos a hablar',
              })}
              <ButtonArrow />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
