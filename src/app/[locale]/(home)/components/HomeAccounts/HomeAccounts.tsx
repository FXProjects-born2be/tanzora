'use client';
import { useState } from 'react';
import Image from 'next/image';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import type { Swiper as SwiperType } from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { fadeInUp } from '@/shared/lib/helpers/animations';
import { Button } from '@/shared/ui/kit/button/Button';

import styles from './HomeAccounts.module.scss';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const HomeAccounts = () => {
  const t = useTranslations('homeAccounts');
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  const items = [
    {
      title: t('item1.title', {
        fallback: 'Básica',
      }),
      minDeposit: t('item1.minDeposit', {
        fallback: '250€',
      }),
      negativeBalanceProtection: '/images/home/greenCheck.svg',
      maxLeverage: t('item1.maxLeverage', {
        fallback: '100',
      }),
      spreads: t('item1.spreads', {
        fallback: 'Spreads variables',
      }),
      instruments: t('item1.instruments', {
        fallback: '250+ Pares de divisas, Commodities, Índices',
      }),
      depositCurrency: t('item1.depositCurrency', {
        fallback: 'USD, EUR, GBP',
      }),
      maxTradeSize: t('item1.maxTradeSize', {
        fallback: '10 lotes',
      }),
      liveSupport: t('item1.liveSupport', {
        fallback: '24/5',
      }),
      accountManager: '/images/home/minus.svg',
      link: '#footer',
    },
    {
      title: t('item2.title', {
        fallback: 'Crecimiento',
      }),
      minDeposit: t('item2.minDeposit', {
        fallback: '250€',
      }),
      negativeBalanceProtection: '/images/home/greenCheck.svg',
      maxLeverage: t('item2.maxLeverage', {
        fallback: '100',
      }),
      spreads: t('item2.spreads', {
        fallback: 'Spreads variables',
      }),
      instruments: t('item2.instruments', {
        fallback: '250+ Pares de divisas, Commodities, Índices',
      }),
      depositCurrency: t('item2.depositCurrency', {
        fallback: 'USD, EUR, GBP',
      }),
      maxTradeSize: t('item2.maxTradeSize', {
        fallback: '10 lotes',
      }),
      liveSupport: t('item2.liveSupport', {
        fallback: '24/5',
      }),
      accountManager: '/images/home/minus.svg',
      link: '#footer',
    },
    {
      title: t('item3.title', {
        fallback: 'Empresarial ',
      }),
      minDeposit: t('item3.minDeposit', {
        fallback: '250€',
      }),
      negativeBalanceProtection: '/images/home/greenCheck.svg',
      maxLeverage: t('item3.maxLeverage', {
        fallback: '100',
      }),
      spreads: t('item3.spreads', {
        fallback: 'Spreads variables',
      }),
      instruments: t('item3.instruments', {
        fallback: '250+ Pares de divisas, Commodities, Índices',
      }),
      depositCurrency: t('item3.depositCurrency', {
        fallback: 'USD, EUR, GBP',
      }),
      maxTradeSize: t('item3.maxTradeSize', {
        fallback: '10 lotes',
      }),
      liveSupport: t('item3.liveSupport', {
        fallback: '24/5',
      }),
      accountManager: '/images/home/greenCheck.svg',
      link: '#footer',
    },
    {
      title: t('item4.title', {
        fallback: 'Diamante ',
      }),
      minDeposit: t('item4.minDeposit', {
        fallback: '250€',
      }),
      negativeBalanceProtection: '/images/home/greenCheck.svg',
      maxLeverage: t('item4.maxLeverage', {
        fallback: '100',
      }),
      spreads: t('item4.spreads', {
        fallback: 'Spreads variables',
      }),
      instruments: t('item4.instruments', {
        fallback: '250+ Pares de divisas, Commodities, Índices',
      }),
      depositCurrency: t('item4.depositCurrency', {
        fallback: 'USD, EUR, GBP',
      }),
      maxTradeSize: t('item4.maxTradeSize', {
        fallback: '10 lotes',
      }),
      liveSupport: t('item4.liveSupport', {
        fallback: '24/5',
      }),
      accountManager: '/images/home/greenCheck.svg',
      link: '#footer',
    },
    {
      title: t('item5.title', {
        fallback: 'VIP',
      }),
      minDeposit: t('item5.minDeposit', {
        fallback: '250€',
      }),
      negativeBalanceProtection: '/images/home/greenCheck.svg',
      maxLeverage: t('item5.maxLeverage', {
        fallback: '100',
      }),
      spreads: t('item5.spreads', {
        fallback: 'Spreads variables',
      }),
      instruments: t('item5.instruments', {
        fallback: '250+ Pares de divisas, Commodities, Índices',
      }),
      depositCurrency: t('item5.depositCurrency', {
        fallback: 'USD, EUR, GBP',
      }),
      maxTradeSize: t('item5.maxTradeSize', {
        fallback: '10 lotes',
      }),
      liveSupport: t('item5.liveSupport', {
        fallback: '24/5',
      }),
      accountManager: '/images/home/greenCheck.svg',
      link: '#footer',
    },
  ];

  return (
    <section className={styles.homeAccounts}>
      <div className={'_container'}>
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {t('title', {
            fallback: 'Elige tu cuenta',
          })}
        </motion.h2>
        <motion.h4
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {t('subtitle', {
            fallback:
              'Selecciona el paquete de cuenta que mejor se adapte a tu nivel de experiencia y objetivos de trading.',
          })}
        </motion.h4>
        <div className={styles.homeAccounts__content}>
          <motion.div
            className={styles.col1}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p>
              {t('label1', {
                fallback: 'Depósito mínimo',
              })}
            </p>
            <p>
              {t('label2', {
                fallback: 'Protección contra saldo negativo',
              })}
            </p>
            <p>
              {t('label3', {
                fallback: 'Apalancamiento máximo',
              })}
            </p>
            <p>
              {t('label4', {
                fallback: 'Spreads',
              })}
            </p>
            <p>
              {t('label5', {
                fallback: 'Instrumentos',
              })}
            </p>
            <p>
              {t('label6', {
                fallback: 'Moneda de depósito',
              })}
            </p>
            <p>
              {t('label7', {
                fallback: 'Tamaño máximo de operación',
              })}
            </p>
            <p>
              {t('label8', {
                fallback: 'Soporte en vivo',
              })}
            </p>
            <p>
              {t('label9', {
                fallback: 'Administrador personal de cuenta',
              })}
            </p>
          </motion.div>
          <div className={styles.accounts}>
            <div className={styles.accountsWrapper}>
              {items.map((item, index) => (
                <div key={index} className={styles.account}>
                  <div className={styles.top}>
                    <h3>{item.title}</h3>
                    <div className={styles.content}>
                      <p>{item.minDeposit}</p>
                      <p>
                        <Image
                          src={item.negativeBalanceProtection || ''}
                          alt="negativeBalanceProtection"
                          width={20}
                          height={20}
                        />
                      </p>
                      <p>{item.maxLeverage}</p>
                      <p>{item.spreads}</p>
                      <p>{item.instruments}</p>
                      <p>{item.depositCurrency}</p>
                      <p>{item.maxTradeSize}</p>
                      <p>{item.liveSupport}</p>
                      <p>
                        <Image
                          src={item.accountManager || ''}
                          alt="accountManager"
                          width={20}
                          height={20}
                        />
                      </p>
                    </div>
                  </div>
                  <Button />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.accountsMobile}>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            navigation={{
              nextEl: `.${styles.swiperButtonNext}`,
              prevEl: `.${styles.swiperButtonPrev}`,
            }}
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
                <div className={styles.account}>
                  <div className={styles.top}>
                    <h3>{item.title}</h3>
                    <div className={styles.content}>
                      <p>
                        <span>
                          {t('label1', {
                            fallback: 'Depósito mínimo',
                          })}
                        </span>
                        <span>{item.minDeposit}</span>
                      </p>
                      <p>
                        <span>
                          {t('label2', {
                            fallback: 'Protección contra saldo negativo',
                          })}
                        </span>
                        <Image
                          src={item.negativeBalanceProtection || ''}
                          alt="negativeBalanceProtection"
                          width={20}
                          height={20}
                        />
                      </p>
                      <p>
                        <span>
                          {t('label3', {
                            fallback: 'Apalancamiento máximo',
                          })}
                        </span>
                        <span>{item.maxLeverage}</span>
                      </p>
                      <p>
                        <span>
                          {t('label4', {
                            fallback: 'Spreads',
                          })}
                        </span>
                        <span>{item.spreads}</span>
                      </p>
                      <p>
                        <span>
                          {t('label5', {
                            fallback: 'Instrumentos',
                          })}
                        </span>
                        <span>{item.instruments}</span>
                      </p>
                      <p>
                        <span>
                          {t('label6', {
                            fallback: 'Moneda de depósito',
                          })}
                        </span>
                        <span>{item.depositCurrency}</span>
                      </p>
                      <p>
                        <span>
                          {t('label7', {
                            fallback: 'Tamaño máximo de operación',
                          })}
                        </span>
                        <span>{item.maxTradeSize}</span>
                      </p>
                      <p>
                        <span>
                          {t('label8', {
                            fallback: 'Soporte en vivo',
                          })}
                        </span>
                        <span>{item.liveSupport}</span>
                      </p>
                      <p>
                        <span>
                          {t('label9', {
                            fallback: 'Administrador personal de cuenta',
                          })}
                        </span>
                        <Image
                          src={item.accountManager || ''}
                          alt="accountManager"
                          width={20}
                          height={20}
                        />
                      </p>
                    </div>
                  </div>
                  <Button />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation */}
          <div className={styles.navigation}>
            <button className={`${styles.swiperButtonPrev} ${styles.swiperButton}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path d="M10.8 12L15.4 16.6L14 18L8 12L14 6L15.4 7.4L10.8 12Z" fill="#1D1B20" />
              </svg>
            </button>

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

            <button className={`${styles.swiperButtonNext} ${styles.swiperButton}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path d="M13.2 12L8.6 7.4L10 6L16 12L10 18L8.6 16.6L13.2 12Z" fill="#1D1B20" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
