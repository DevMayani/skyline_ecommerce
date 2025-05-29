'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Loader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 1000); // adjust delay
    return () => clearTimeout(timeout);
  }, [pathname]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/80 backdrop-blur-sm">
      <div className="w-10 h-10 border-4 border-purple-500 border-dashed rounded-full animate-spin"></div>
    </div>
  );
}
