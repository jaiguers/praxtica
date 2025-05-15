'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import clarity from '@microsoft/clarity';

const CLARITY_PROJECT_ID = 'r1xvdk63by'; // 🔁 Reemplaza con tu ID real

export default function Clarity() {
  const pathname = usePathname();

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      clarity.init(CLARITY_PROJECT_ID);
    }
  }, []);

  useEffect(() => {
    // Si quieres usarlo para rastrear navegación (opcional)
    clarity.event('pageview');
  }, [pathname]);

  return null;
}
