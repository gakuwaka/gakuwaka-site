import { EVENT } from '@/constants';

export default function Speaker() {
  return (
    <section id="speaker" className="py-20 lg:py-28">
      <div className="container-content">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">SPEAKER</p>
          <h2 className="section-title mt-3">登壇者紹介</h2>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl items-center gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
          <div className="mx-auto max-w-sm overflow-hidden rounded-2xl bg-navy-100 shadow-xl">
            <img
              src={EVENT.speaker.photo}
              alt={`${EVENT.speaker.name}の講演風景`}
              className="aspect-[4/5] w-full object-cover"
              loading="lazy"
              width="400"
              height="500"
            />
          </div>

          <div>
            <h3 className="mt-4 text-2xl font-black text-navy-900 lg:text-3xl">
              {EVENT.speaker.name}<span className="text-lg lg:text-xl">氏</span>
            </h3>
            <p className="mt-2 text-sm font-bold text-navy-500">
              {EVENT.speaker.title}
            </p>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-navy-600">
              <div>
                <h4 className="mb-2 text-sm font-bold text-navy-900">プロフィール</h4>
                <p className="text-sm leading-relaxed text-navy-500">
                  {/* [編集予定] 登壇者の経歴・実績が入ります。3〜5行程度を想定。 */}
                  1989年 日本アイ・ビー・エム株式会社に入社。テクノロジー事業本部テクニカル・リーダーシップ事業統括部長を歴任し、IBM社内女性技術者コミュニティ「コスモス」の運営として次世代の育成やネットワーキングに注力。国家資格キャリアコンサルタントの知見を活かしてキャリアに関する講演を多数開催。
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
