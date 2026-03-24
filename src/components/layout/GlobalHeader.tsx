import Link from "next/link";
import GNBMenu from "./GNBMenu";
import SearchBox from "./SearchBox";

export default function GlobalHeader() {
  return (
    // 전체 헤더의 바깥 영역: 하단 경계선과 배경색을 지정합니다.
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
      {/* 
        내부 컨테이너: 좌우 여백을 주고, 가운데 정렬을 맞춥니다.
        max-w-7xl 은 너무 넓어지지 않게 최대 너비를 제한합니다.
        flex, items-center, justify-between 을 사용하여 요소를 좌/중/우로 넓게 배치합니다.
      */}
      <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-7xl">
        
        {/* 1. 좌측 로고 영역 */}
        <Link href="/" className="flex items-center gap-2">
          {/* 로고 아이콘 자리 (뚜벅이 발자국 형태 컨셉) */}
          <div className="flex -space-x-1">
            <span className="w-2.5 h-4 bg-black rounded-full rotate-[-15deg]"></span>
            <span className="w-2.5 h-4 bg-black rounded-full rotate-[15deg]"></span>
          </div>
          {/* 로고 텍스트 */}
          <span className="font-bold text-xl tracking-tight">뚜벅</span>
        </Link>

        {/* 2. 중앙 검색창 영역 */}
        <div className="hidden md:flex flex-1 max-w-2xl px-8">
          {/* 
            검색바 그룹: 상대 위치(relative)를 사용하여 내부에 아이콘을 절대 위치(absolute)로 띄울 수 있게 합니다.
            원형(rounded-full) 모양의 배경색(bg-gray-100)을 적용했습니다.
          */}
          <SearchBox />
        </div>

        {/* 3. 우측 네비게이션 아이콘 영역 */}
        <GNBMenu />
      </div>
    </header>
  );
}
