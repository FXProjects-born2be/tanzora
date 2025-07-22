'use client';

import { useTranslations } from 'next-intl';

import { ButtonArrow } from '@/shared/ui/icons';

import styles from './Button.module.scss';

import { useRequestStore } from '@/featured/contact-popup/store/requestStore';

export const Button = ({ className }: { className?: string }) => {
  const t = useTranslations('button');
  const { open } = useRequestStore();

  return (
    <button className={`${className ? styles[className] : styles.button}`} onClick={open}>
      {t('button', {
        fallback: 'Vamos a hablar',
      })}
      <ButtonArrow />
    </button>
  );
};
