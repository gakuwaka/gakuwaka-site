import { EVENT } from '@/constants';
import { getFormUrlWithUtm, trackApplyClick } from '@/lib/analytics';
import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 lg:hidden ${
        visible ? 'translate-y-0' : 'translate-y-full'
      } transition-transform duration-300`}
    >
      <div className="border-t border-navy-100 bg-white/95 px-4 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] backdrop-blur-sm">
        <a
          href={getFormUrlWithUtm()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackApplyClick('sticky_cta')}
          className="btn-primary w-full !py-3"
        >
          参加を申し込む
          <ArrowRight size={18} />
        </a>
      </div>
    </div>
  );
}
