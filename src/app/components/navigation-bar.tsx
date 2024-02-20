"use client";
import Image from "next/image";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import GetScrollY from "../api/getScrollY";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "../ui/sheet";

export default function NavigationBar() {
  const scrollY = GetScrollY();

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-10 bg-white ${
        scrollY !== 0 && "border-b border-gray-200"
      }`}
    >
      <nav className="flex items-center justify-between m-auto w-full h-[60px] md:px-8 px-4 max-w-[1140px] relative">
        <Image src={"ssot.svg"} width={70} height={20} alt="로고" />
        <ul className="flex items-center space-x-6 max-md:hidden">
          <NavTab href="/studies">회사 소개</NavTab>
          <NavTab href="/profile">고객센터</NavTab>
          <NavTab href="/profile">자주 묻는 질문</NavTab>
          <NavTab href="/profile">토스인증서</NavTab>
          <NavTab href="/profile">채용</NavTab>
          <div className="flex flex-row items-center pl-2">
            <NavTab href="/profile">KOR</NavTab>
            <span className="text-gray-300">||</span>
            <NavTab href="/profile" disabled>
              ENG
            </NavTab>
          </div>
        </ul>
        <ul className="hidden max-md:flex items-center space-x-6">
          <Sheet>
            <SheetTrigger asChild>
              <button className="hover:bg-accent hover:text-accent-foreground h-10 w-10 flex items-center justify-center">
                <FiMenu size={24} />
              </button>
            </SheetTrigger>
            <SheetContent className="w-64">
              <SheetFooter>
                <SheetClose asChild>
                  <>
                    <NavTab href="/profile">프로필</NavTab>
                    <NavTab href="/studies">스터디 목록</NavTab>
                    <NavTab href="/apply">지원하기!</NavTab>
                  </>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </ul>
      </nav>
    </header>
  );
}

function NavTab({
  href,
  disabled,
  children,
}: {
  href: string;
  disabled?: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`px-3 py-2 text-sm font-medium rounded-md hover:text-gray-900 hover:bg-gray-100 ${
        disabled
          ? "text-gray-300 cursor-not-allowed hover:text-gray-300 font-normal"
          : "text-gray-500"
      }`}
    >
      {children}
    </Link>
  );
}
