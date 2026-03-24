import { Bookmark, CalendarDays, Compass, Home, User } from "lucide-react";
import Link from "next/link";

export default function GNBMenu() {
  // flex와 gap-6을 주어 아이콘들 사이의 간격을 일정하게 띄웁니다.
  return (
    <nav className="flex items-center gap-6 text-gray-700">
      <Link href="/" className="flex flex-col items-center gap-1 hover:text-black hover:font-medium transition-colors">
        <Home className="w-5 h-5" />
        <span className="text-[11px]">홈</span>
      </Link>
      <Link href="/explore" className="flex flex-col items-center gap-1 hover:text-black hover:font-medium transition-colors">
        {/* 탐색 아이콘은 약간 굵게 (strokeWidth) 처리하여 강조할 수 있습니다. 이미지는 컴퍼스 모양입니다. */}
        <Compass className="w-5 h-5 stroke-[2.5]" />
        <span className="text-[11px] font-bold text-black text-center">탐색</span>
      </Link>
      <Link href="/plan" className="flex flex-col items-center gap-1 hover:text-black hover:font-medium transition-colors">
        <CalendarDays className="w-5 h-5" />
        <span className="text-[11px]">일정</span>
      </Link>
      <Link href="/saved" className="flex flex-col items-center gap-1 hover:text-black hover:font-medium transition-colors">
        <Bookmark className="w-5 h-5" />
        <span className="text-[11px]">저장</span>
      </Link>
      <Link href="/mypage" className="flex flex-col items-center gap-1 hover:text-black hover:font-medium transition-colors">
        <User className="w-5 h-5" />
        <span className="text-[11px]">마이</span>
      </Link>
    </nav>
  );
}
