// hooks/useSmoothScroll.ts
"use client";

import { useEffect } from 'react';

export const useSmoothScroll = () => {
  useEffect(() => {
    const handleClick = () => {
      const target = e.target;
      if (target.hash && target.pathname === window.location.pathname) {
        e.preventDefault();
        const targetElement = document.getElementById(target.hash.substring(1));
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);
};