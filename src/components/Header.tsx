import { EVENT } from '@/constants';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const NAV_LINKS = [
  { href: '#concept', label: 'コンセプト' },
  { href: '#benefits', label: '得られること' },
  { href: '#speaker', label: '登壇者' },
  { href: '#program', label: 'プログラム' },
  { href: '#overview', label: '開催概要' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 shadow-md backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="container-content flex h-16 items-center justify-between lg:h-20">
        <a href="#top" className="flex items-center">
          <img
            src={`${import.meta.env.BASE_URL}grok_image_1783228874821 copy.jpg`}
            alt={EVENT.name}
            className="h-10 w-auto rounded-md bg-white object-contain p-1"
          />
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="メインナビゲーション">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-bold transition-colors ${
                scrolled
                  ? 'text-navy-600 hover:text-navy-900'
                  : 'text-navy-100 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
          <span
            className="btn-primary cursor-not-allowed !px-5 !py-2.5 !text-sm opacity-60"
          >
            参加受付終了
          </span>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden ${scrolled ? 'text-navy-900' : 'text-white'}`}
          aria-label={open ? 'メニューを閉じる' : 'メニューを開く'}
          aria-expanded={open}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden">
          <nav
            className="container-content flex flex-col gap-1 bg-white pb-4 pt-2 shadow-lg"
            aria-label="モバイルナビゲーション"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-bold text-navy-700 hover:bg-navy-50"
              >
                {link.label}
              </a>
            ))}
            <span
              className="btn-primary mt-2 cursor-not-allowed opacity-60"
            >
              参加受付終了
            </span>
          </nav>
        </div>
      )}
    </header>
  );
}
