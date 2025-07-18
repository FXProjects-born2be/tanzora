'use client';

import { useState } from 'react';
import Image from 'next/image';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import type { Swiper as SwiperType } from 'swiper';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { fadeInUp } from '@/shared/lib/helpers/animations';
import { Check } from '@/shared/ui/icons/check/Check';

import styles from './HomeSecond.module.scss';

import 'swiper/css';
import 'swiper/css/pagination';

export const HomeSecond = () => {
  const t = useTranslations('homeSecond');
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  const items = [
    {
      title: t('item1.title', {
        fallback: 'Tecnología avanzada',
      }),
      subtitle1: t('item1.subtitle1', {
        fallback: 'Ejecución de órdenes a alta velocidad:',
      }),
      subtitle2: t('item1.subtitle2', {
        fallback: 'Datos de mercado en tiempo real:',
      }),
      text1: t('item1.text1', {
        fallback:
          'Nuestra plataforma procesa órdenes en milisegundos, asegurando que nunca pierdas un movimiento del mercado.',
      }),
      text2: t('item1.text2', {
        fallback:
          'Mantente informado con cotizaciones en vivo y gráficos dinámicos para tomar decisiones de trading oportunas.',
      }),
      icon: '/images/home/AdvancedTechnology.svg',
    },
    {
      title: t('item2.title', {
        fallback: 'Acceso integral al mercado',
      }),
      subtitle1: t('item2.subtitle1', {
        fallback: 'Amplia selección de activos:',
      }),
      subtitle2: t('item2.subtitle2', {
        fallback: 'Trading de criptomonedas 24/7:',
      }),
      text1: t('item2.text1', {
        fallback:
          'Accede a Forex, acciones, materias primas, índices y criptomonedas, todo en un solo lugar.',
      }),
      text2: t('item2.text2', {
        fallback:
          'Aprovecha la negociación continua de monedas digitales populares para máxima flexibilidad.',
      }),
      icon: '/images/home/ComprehensiveMarketAccess.svg',
    },
    {
      title: t('item3.title', {
        fallback: 'Soporte dedicado y seguridad',
      }),
      subtitle1: t('item3.subtitle1', {
        fallback: 'Atención al cliente 24/7:',
      }),
      subtitle2: t('item3.subtitle2', {
        fallback: 'Medidas estrictas de seguridad:',
      }),
      text1: t('item3.text1', {
        fallback:
          'Nuestro equipo de expertos está siempre disponible para resolver tus dudas y apoyar tu experiencia de trading.',
      }),
      text2: t('item3.text2', {
        fallback:
          'Empleamos cifrado de primer nivel y protocolos de cumplimiento para proteger tus fondos y datos.',
      }),
      icon: '/images/home/DedicatedSupport.svg',
    },
  ];

  return (
    <section className={styles.homeSecond}>
      <div className={'_container'}>
        <motion.div
          className={styles.homeSecond__content}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Desktop view - show all items without slider */}
          <div className={styles.homeSecond__desktop}>
            {items.map((item, index) => (
              <div key={index} className={styles.homeSecond__item}>
                <h3>
                  <Image src={item.icon} alt={item.title} width={80} height={80} />
                  <span>{item.title}</span>
                </h3>
                <div className={styles.content}>
                  <div>
                    <Check />
                    <p>
                      <span>{item.subtitle1}</span> {item.text1}
                    </p>
                  </div>
                  <div>
                    <Check />
                    <p>
                      <span>{item.subtitle2}</span> {item.text2}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile view - Swiper slider */}
          <div className={styles.homeSecond__mobile}>
            <Swiper
              modules={[Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              pagination={{
                clickable: true,
                el: `.${styles.customPagination}`,
                bulletClass: styles.paginationBullet,
                bulletActiveClass: styles.paginationBulletActive,
              }}
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
              onSwiper={setSwiperInstance}
              className={styles.swiper}
            >
              {items.map((item, index) => (
                <SwiperSlide key={index} className={styles.swiperSlide}>
                  <div className={styles.homeSecond__item}>
                    <h3>
                      <Image src={item.icon} alt={item.title} width={80} height={80} />
                      <span>{item.title}</span>
                    </h3>
                    <div className={styles.content}>
                      <div>
                        <Check />
                        <p>
                          <span>{item.subtitle1}</span> {item.text1}
                        </p>
                      </div>
                      <div>
                        <Check />
                        <p>
                          <span>{item.subtitle2}</span> {item.text2}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            
            {/* Custom pagination dots */}
            <div className={styles.customPagination}>
              {items.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.paginationBullet} ${
                    index === activeIndex ? styles.paginationBulletActive : ''
                  }`}
                  onClick={() => {
                    if (swiperInstance) {
                      swiperInstance.slideTo(index);
                    }
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
