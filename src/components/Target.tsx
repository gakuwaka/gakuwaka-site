import { CheckCircle2 } from 'lucide-react';

const ELIGIBLE = [
  '旧帝国大学（北海道・東北・東京・名古屋・京都・大阪・九州）の出身である方',
  '30代以下（1986年以降生まれ）の方',
  '学部生・大学院生・社会人を問いません',
];

export default function Target() {
  return (
    <section id="target" className="bg-navy-50 py-20 lg:py-28">
      <div className="container-content">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">ELIGIBILITY</p>
          <h2 className="section-title mt-3">参加対象・参加条件</h2>
          <p className="mt-4 text-base leading-relaxed text-navy-600">
            本イベントは、旧帝大出身の30代以下若手を対象としています。
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-2xl rounded-2xl bg-white p-8 shadow-sm ring-1 ring-navy-100 sm:p-10">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-600">
              <CheckCircle2 size={20} />
            </span>
            <h3 className="text-lg font-bold text-navy-900">参加対象</h3>
          </div>
          <ul className="mt-5 space-y-3">
            {ELIGIBLE.map((item) => (
              <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-navy-600">
                <CheckCircle2 size={18} className="mt-0.5 flex-shrink-0 text-green-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
