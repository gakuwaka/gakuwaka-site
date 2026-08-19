import { EVENT } from '@/constants';
import { Clock } from 'lucide-react';

const PROGRAM = [
  { time: '12:45', title: '開場・受付', type: 'open' },
  { time: '13:00', title: 'オープニング', type: 'open' },
  { time: '13:15〜13:45', title: 'キャリア特別講演会', type: 'talk' },
  { time: '14:00', title: 'キャリア交流会', type: 'social' },
  { time: '15:45', title: 'クロージング', type: 'open' },
  { time: '16:00', title: '閉会', type: 'open' },
];

const TYPE_LABEL: Record<string, string> = {
  open: '進行',
  talk: '講演',
  social: '交流',
};

export default function Program() {
  return (
    <section id="program" className="bg-navy-50 py-20 lg:py-28">
      <div className="container-content">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="section-eyebrow">PROGRAM</p>
            <h2 className="section-title mt-3">当日のプログラム</h2>
            <p className="mt-4 text-base leading-relaxed text-navy-600">
              講演と交流をバランス良く実施し、約3時間で
              学びと出会いの両方を体験できる構成です。
            </p>

            <div className="mt-8 overflow-hidden rounded-2xl shadow-lg">
              <img
                src={`${import.meta.env.BASE_URL}入口.jpg`}
                alt="会場エントランスの様子"
                className="h-full w-full object-cover"
                loading="lazy"
                width="600"
                height="400"
              />
            </div>
            <p className="mt-2 text-xs text-navy-400">※画像は会場イメージです</p>

            <dl className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs font-bold text-navy-500">
              {Object.entries(TYPE_LABEL).map(([key, label]) => (
                <div key={key} className="flex items-center gap-1.5">
                  <span className={`h-2.5 w-2.5 rounded-full ${TYPE_DOT[key]}`} />
                  {label}
                </div>
              ))}
            </dl>
          </div>

          <ol className="relative space-y-0">
            <span className="absolute bottom-2 left-[7px] top-2 w-px bg-navy-200" aria-hidden="true" />
            {PROGRAM.map((item) => (
              <li
                key={item.time}
                className="relative flex gap-5 pb-8 last:pb-0"
              >
                <span
                  className={`relative z-10 mt-1.5 h-3.5 w-3.5 flex-shrink-0 rounded-full ring-4 ring-navy-50 ${TYPE_DOT[item.type]}`}
                  aria-hidden="true"
                />
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-1 text-sm font-bold text-navy-400">
                      <Clock size={14} />
                      {item.time}
                    </span>
                    <span className={`rounded-full px-2.5 py-0.5 text-xs font-bold ${TYPE_BADGE[item.type]}`}>
                      {TYPE_LABEL[item.type]}
                    </span>
                  </div>
                  <h3 className="mt-2 text-lg font-bold text-navy-900">{item.title}</h3>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

const TYPE_DOT: Record<string, string> = {
  open: 'bg-navy-400',
  talk: 'bg-accent-500',
  social: 'bg-accent-400',
};

const TYPE_BADGE: Record<string, string> = {
  open: 'bg-navy-100 text-navy-600',
  talk: 'bg-accent-100 text-accent-700',
  social: 'bg-accent-50 text-accent-600',
};
