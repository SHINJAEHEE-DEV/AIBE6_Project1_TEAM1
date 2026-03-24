import { Search } from "lucide-react";

export default function SearchBox() {
  return (
    <div className="relative w-full">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
      <input
        type="text"
        placeholder="어디로 떠나볼까요?"
        className="w-full bg-gray-100/80 rounded-full py-2.5 pl-11 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-gray-200"
      />
    </div>
  );
}
