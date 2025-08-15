'use client';

import { useLocale } from 'next-intl';
import Button from '../buttton/Button';
import { useTransition } from 'react';
import { setUserLocale } from '@/i18n/locale';

// Props interface is empty as component doesn't accept any props
type LocaleSwitcherSelectProps = Record<string, never>

export default function LocaleSwitcherSelect({ }: LocaleSwitcherSelectProps) {
    const [, startTransition] = useTransition(); // isPending not used currently
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