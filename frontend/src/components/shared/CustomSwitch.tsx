'use client';
import { Switch } from '@/components/ui/switch';
import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function CustomSwitch() {
  const [isDark, setIsDark] = useState<boolean | null>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    }
  }, []);

  useEffect(() => {
    if (isDark !== null) {
      document.documentElement.classList.toggle('dark', isDark);
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }
  }, [isDark]);

  if (isDark === null) return null;

  return (
    <div className="flex items-center gap-3 p-4 border-2 rounded-2xl">
      <Sun className="w-5 h-5 text-yellow-500 dark:text-gray-500" />
      <Switch
        checked={isDark}
        onCheckedChange={() => setIsDark(!isDark)}
        className="hover:cursor-pointer"
      />
      <Moon className="w-5 h-5 text-gray-500 dark:text-blue-400" />
    </div>
  );
}
