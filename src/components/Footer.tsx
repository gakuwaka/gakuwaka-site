import { EVENT } from '@/constants';

export default function Footer() {
  return (
    <footer className="bg-navy-950 py-12">
      <div className="container-content">
        <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <img
              src={`${import.meta.env.BASE_URL}grok_image_1783228874821 copy.jpg`}
              alt={EVENT.name}
              className="h-12 w-auto rounded-md bg-white object-contain p-1"
            />
            <p className="mt-2 text-sm text-navy-300">{EVENT.organizer}</p>
          </div>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-bold text-navy-300" aria-label="フッターナビゲーション">
            <a href="#concept" className="hover:text-white">コンセプト</a>
            <a href="#program" className="hover:text-white">プログラム</a>
            <a href="#overview" className="hover:text-white">開催概要</a>
          </nav>
        </div>

        <hr className="my-8 border-navy-800" />

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p className="text-xs text-navy-400">
            © 2026 {EVENT.name}運営. All rights reserved.
          </p>
          <div className="flex gap-5 text-xs text-navy-400">
            {/* [編集予定] プライバシーポリシー・お問い合わせ先のリンクを設定予定 */}
            <a href="#" className="hover:text-white">プライバシーポリシー</a>
            <a href="#" className="hover:text-white">お問い合わせ</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
