'use client';

import { useTranslations } from 'next-intl';

import { ButtonArrow } from '@/shared/ui/icons';

import styles from './Button.module.scss';

export const Button = ({ className }: { className?: string }) => {
  const t = useTranslations('button');

  const scrollToFooter = () => {
    const footer = document.getElementById('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button className={`${className ? styles[className] : styles.button}`} onClick={scrollToFooter}>
      {t('button', {
        fallback: 'Vamos a hablar',
      })}
      <ButtonArrow />
    </button>
  );
};
