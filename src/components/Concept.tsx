import { EVENT } from '@/constants';

export default function Concept() {
  return (
    <section id="concept" className="py-20 lg:py-28">
      <div className="container-content">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="section-eyebrow">CONCEPT</p>
            <h2 className="section-title mt-3">
              学んだ場所の繋がりが、<br />
              キャリアの原動点になる
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-navy-600">
              <p>
                旧帝大出身という共通のバックグラウンドを持ちながら、
                様々な分野で活躍する20代～30代の若手。その多様な道が交差する場所が「ガクワカ！」です。
              </p>
              <p>
                講演から得る気づき、交流から生まれる繋がり。
                どちらも等しく、次の一歩を後押しする力になります。
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <img
                src={`${import.meta.env.BASE_URL}kyuutei.png`}
                alt="旧帝大8校のロゴ一覧"
                className="h-full w-full object-contain bg-white"
                loading="lazy"
                width="600"
                height="400"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 hidden rounded-xl bg-accent-500 px-6 py-4 text-navy-950 shadow-lg sm:block">
              <p className="text-3xl font-black leading-none">100</p>
              <p className="mt-1 text-xs font-bold">定員 / 名</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
