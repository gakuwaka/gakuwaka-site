import { EVENT } from '@/constants';
import { getFormUrlWithUtm, trackApplyClick } from '@/lib/analytics';
import { ArrowRight, Calendar, MapPin, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-navy-900"
    >
      <img
        src={EVENT.heroImage}
        alt="講演会の会場風景"
        className="absolute inset-0 h-full w-full object-cover opacity-20"
        loading="eager"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900/85 to-navy-800/70" />

      <div className="container-content relative z-10 py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* Left: text */}
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent-400/40 bg-accent-500/10 px-4 py-1.5 text-sm font-bold text-accent-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-accent-400" />
              参加受付中
            </div>

            <img
              src={`${import.meta.env.BASE_URL}grok_image_1783228874821 copy.jpg`}
              alt={EVENT.name}
              className="h-24 w-auto rounded-2xl bg-white object-contain p-2 sm:h-28 lg:h-32"
              loading="eager"
            />
            <h1 className="mt-5 text-2xl font-black leading-tight tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] sm:text-3xl lg:text-4xl">
              {EVENT.name}
            </h1>
            <p className="mt-4 border-l-4 border-accent-400 pl-4 text-xl font-bold leading-snug text-accent-300 sm:text-2xl lg:text-3xl">
              若手のためのキャリア論<br />〜私らしいキャリアのための次の一歩〜
            </p>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-navy-100 sm:text-lg">
              七大学出身の20代~30代が集い、キャリアの可能性を広げる講演・交流会です。
              特別講演の講師として、IBM社内のキャリア講演において登壇のたびに多くの参加者を集める
              IBM エグゼクティブ 大久保そのみ氏を迎えます。
            </p>

            <dl className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-6">
              <div className="flex items-center gap-2 text-sm font-bold text-white">
                <Calendar size={18} className="text-accent-400" />
                {EVENT.dateShort}
              </div>
              <div className="flex items-center gap-2 text-sm font-bold text-white">
                <MapPin size={18} className="text-accent-400" />
                {EVENT.venue}
              </div>
              <div className="flex items-center gap-2 text-sm font-bold text-white">
                <Users size={18} className="text-accent-400" />
                定員{EVENT.capacity}
              </div>
            </dl>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href={getFormUrlWithUtm()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackApplyClick('hero')}
                className="btn-primary text-lg"
              >
                参加を申し込む
                <ArrowRight size={20} />
              </a>
              <a
                href="#overview"
                className="text-sm font-bold text-navy-100 underline-offset-4 hover:text-white hover:underline"
              >
                開催概要を見る
              </a>
            </div>

            <p className="mt-6 text-sm text-navy-200">
              申込締切：{EVENT.deadline}
            </p>
          </div>

          {/* Right: venue image */}
          <div className="mt-8 lg:mt-0">
            <figure className="relative">
              <div className="absolute -inset-1 rounded-3xl bg-accent-400/20 blur-lg" />
              <img
                src={`${import.meta.env.BASE_URL}会場人あり copy.jpg`}
                alt="交流会の会場風景"
                className="relative w-full rounded-2xl object-cover shadow-2xl"
                style={{ aspectRatio: '4/3' }}
                loading="eager"
              />
              <figcaption className="mt-2 text-right text-xs text-navy-300">
                ※ 画像は会場イメージです
              </figcaption>
            </figure>
          </div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
