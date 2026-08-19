import { EVENT } from '@/constants';
import { Calendar, MapPin } from 'lucide-react';

export default function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-20 lg:py-28">
      <div className="absolute inset-0 opacity-10">
        <img
          src={EVENT.heroImage}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-navy-950 to-navy-800/80" />

      <div className="container-content relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent-400">
            ENTRY
          </p>
          <h2 className="mt-3 text-3xl font-black leading-tight text-white sm:text-4xl">
            あなたの次の一歩を、<br />
            この一日で。
          </h2>
          <p className="mt-5 text-base leading-relaxed text-navy-100">
            本イベントの参加受付は終了いたしました。
            多数のお申込、誠にありがとうございました。
          </p>

          <dl className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
            <div className="flex items-center gap-2 text-sm font-bold text-white">
              <Calendar size={18} className="text-accent-400" />
              {EVENT.date}
            </div>
            <div className="flex items-center gap-2 text-sm font-bold text-white">
              <MapPin size={18} className="text-accent-400" />
              {EVENT.venue}
            </div>
          </dl>

          <div className="mt-10">
            <span className="btn-primary text-lg cursor-not-allowed opacity-60">
              参加受付は終了いたしました
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
