'use client';


import { Locale, useLocale } from 'next-intl';
import Button from '../buttton/Button';
import { useTransition } from 'react';
import { setUserLocale } from '@/i18n/locale';

type LocaleSwitcherSelectProps = {}



export default function LocaleSwitcherSelect({ }: LocaleSwitcherSelectProps) {
    const [isPending, startTransition] = useTransition();
    const locale = useLocale()
    function onChange() {
        const value = locale === 'fr' ? 'en' : 'fr'
        startTransition(() => {
            setUserLocale(value);
        });
    }

    return <Button variant='secondary' onClick={onChange}>
        {locale === 'en' ? 'Français' : 'English'}
    </Button>


}   