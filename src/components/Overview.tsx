import { EVENT } from '@/constants';
import { getFormUrlWithUtm, trackApplyClick } from '@/lib/analytics';
import { ArrowRight, Calendar, Clock, MapPin, Users, Wallet, Building2, AlertCircle, type LucideIcon } from 'lucide-react';

export default function Overview() {
  return (
    <section id="overview" className="py-20 lg:py-28">
      <div className="container-content">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">OVERVIEW</p>
          <h2 className="section-title mt-3">開催概要</h2>
        </div>

        <div className="mx-auto mt-14 max-w-3xl overflow-hidden rounded-2xl shadow-lg ring-1 ring-navy-100">
          <dl className="divide-y divide-navy-100 bg-white">
            <Row icon={Calendar} label="開催日" value={EVENT.date} />
            <Row icon={Clock} label="時間" value={EVENT.time} />
            <Row icon={MapPin} label="会場" value={<><span>{EVENT.venue}</span><span className="mt-0.5 block text-sm text-navy-400">{EVENT.venueAddress}</span></>} />
            <Row icon={Users} label="定員" value={`${EVENT.capacity}（先着順）`} />
            <Row icon={Building2} label="主催" value={EVENT.organizer} />
            <Row
              icon={Wallet}
              label="参加費"
              value={
                <ul className="space-y-1.5">
                  {EVENT.fees.map((f) => (
                    <li key={f.target} className="flex justify-between gap-6">
                      <span>{f.target}</span>
                      <span className="font-bold text-navy-900">{f.price}</span>
                    </li>
                  ))}
                </ul>
              }
            />
            <Row
              icon={AlertCircle}
              label="申込締切"
              value={<span className="font-bold text-accent-700">{EVENT.deadline}</span>}
            />
          </dl>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl shadow-lg ring-1 ring-navy-100">
          <iframe
            title="会場アクセスマップ"
            src="https://www.google.com/maps?q=TIME+SHARING+新橋駅前5F（銀座口）&output=embed"
            className="h-80 w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <p className="mt-2 text-center text-xs text-navy-400">※地図は会場周辺の案内用です。住所詳細は申込後にご案内します。</p>

        <div className="mt-10 text-center">
          <a
            href={getFormUrlWithUtm()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackApplyClick('overview')}
            className="btn-primary text-lg"
          >
            参加を申し込む
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}

function Row({
  icon: Icon,
  label,
  value,
}: {
  icon: LucideIcon;
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1 px-6 py-5 sm:flex-row sm:gap-6 sm:px-8">
      <dt className="flex flex-shrink-0 items-center gap-2 text-sm font-bold text-navy-400 sm:w-40">
        <Icon size={18} className="text-accent-500" />
        {label}
      </dt>
      <dd className="text-base text-navy-700">{value}</dd>
    </div>
  );
}
