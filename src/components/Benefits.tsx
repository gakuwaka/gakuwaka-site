import { BookOpen, Network, Lightbulb, Compass } from 'lucide-react';

const BENEFITS = [
  {
    icon: BookOpen,
    title: '実践的なキャリアの知見',
    desc: '第一線で活躍する先輩からの講演を通じて、実践的なキャリア形成のヒントを得ることができます。',
  },
  {
    icon: Network,
    title: '同バックグラウンドの仲間',
    desc: '旧帝大出身の30代以下若手という共通点を持つ仲間と出会い、横の繋がりを築けます。',
  },
  {
    icon: Lightbulb,
    title: '自分の可能性の再発見',
    desc: '多様な分野で活躍する参加者との対話から、自分自身のキャリアの新しい可能性に気づけます。',
  },
  {
    icon: Compass,
    title: '次の一歩の後押し',
    desc: '講演と交流の両輪で得た気づきが、あなたの次のキャリアの一歩を力強く後押しします。',
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="bg-navy-50 py-20 lg:py-28">
      <div className="container-content">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">BENEFITS</p>
          <h2 className="section-title mt-3">このイベントで得られること</h2>
          <p className="mt-4 text-base leading-relaxed text-navy-600">
            講演と交流、二つの体験を通じて、参加者それぞれのキャリアに残る収穫があります。
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((b) => (
            <article
              key={b.title}
              className="group rounded-2xl bg-white p-7 shadow-sm ring-1 ring-navy-100 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-accent-400 transition-colors group-hover:bg-accent-500 group-hover:text-navy-950">
                <b.icon size={24} />
              </div>
              <h3 className="mt-5 text-lg font-bold text-navy-900">{b.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-navy-500">{b.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
