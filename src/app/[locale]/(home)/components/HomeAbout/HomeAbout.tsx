'use client';
import Image from 'next/image';
import Link from 'next/link';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';
import { ButtonArrow } from '@/shared/ui/icons';

import styles from './HomeAbout.module.scss';

export const HomeAbout = () => {
  const t = useTranslations('homeAbout');

  const scrollToFooter = (e: React.MouseEvent) => {
    e.preventDefault();
    const footer = document.getElementById('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.homeAbout}>
      <div className={'_container'}>
        <motion.div
          className={styles.homeAbout__content}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className={styles.details}>
            <h2>
              {t('title', {
                fallback: 'Acerca de Tanzora',
              })}
            </h2>

            <p>
              {t('description', {
                fallback:
                  'Estamos comprometidos a hacer el trading accesible y sencillo para todos. Nuestra plataforma combina a la perfección simplicidad con funcionalidades poderosas, asegurando una experiencia segura y eficiente. Evolucionamos continuamente para satisfacer las necesidades de los traders modernos, ayudándote a mantenerte a la vanguardia en un mercado que cambia rápidamente.',
              })}
            </p>
            <Link href={'#footer'} className={`button ${styles.tabButton}`} onClick={scrollToFooter}>
              {t('button', {
                fallback: 'Explora nuestros servicios',
              })}
              <ButtonArrow />
            </Link>
          </div>
          <Image src={'/images/home/about.png'} alt={'about'} width={702} height={423} />
        </motion.div>
      </div>
    </section>
  );
};
