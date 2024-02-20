"use client";
import Image from "next/image";
import Link from "next/link";
import { ChangeEvent, useState } from "react";
import MyDialog from "./ui/dialog";
import MyToast from "./ui/toast";
export default function Home() {
  const [val, setVal] = useState("");
  const [toast, setToast] = useState({
    state: false,
    isAnswer: false,
  });

  const handleToastOpenChange = (open: boolean) => {
    setToast((prevState) => ({
      ...prevState,
      state: open,
    }));
  };

  function handleInput(e: ChangeEvent<HTMLInputElement>) {
    setVal(e.target.value);
  }
  function handleSubmit() {
    console.log(process.env.NEXT_PUBLIC_ANSWER);

    if (val === process.env.NEXT_PUBLIC_ANSWER) {
      setToast({
        state: true,
        isAnswer: true,
      });
    } else {
      setToast({
        state: true,
        isAnswer: false,
      });
    }
  }
  return (
    <main className="min-h-fit">
      <section className="h-screen">
        <Image
          src={"https://static.toss.im/assets/homepage/newtossim/new_main.png"}
          fill
          className="object-cover w-full h-full"
          alt="메인 페이지"
        />
        <div className="main-gradient"></div>
        <div className="flex items-center justify-between absolute top-0 left-0 w-full h-full flex-col animate-fade-in">
          <div className="mt-[170px] items-center flex justify-start flex-col">
            <h1 className="w-full text-center mb-[50px] text-[60px] leading-tight after: font-bold text-black break-keep whitespace-pre-wrap">
              금융의 모든 것<br />
              소트에서 쉽고 간편하게
            </h1>
            <div className="flex flex-row justify-center items-start">
              <MyDialog
                val={val}
                onChange={handleInput}
                onSubmit={handleSubmit}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-52 w-full flex items-center justify-center break-keep h-screen bg-[#f9fafb]">
        <h1 className="text-3xl text-center mb-14 leading-relaxed font-bold">
          내 금융 내역을 모두 더하고 한 곳에서 관리하세요.
          <br />
          이제껏 경험 못 했던 쉽고 편리한 금융 서비스,
          <br />
          거울에 비춰보듯 섬세하게 살펴보세요.
        </h1>
      </section>
      <section className="relative w-full overflow-hidden">
        <div className="max-w-6xl w-full h-full m-auto pt-[250px]">
          <div className="w-[92%] max-w-[calc(100% - 48px)] h-full my-0 mx-auto">
            <div className="relative h-[1272px]">
              <div className="relative z-10">
                <h1 className="text-2xl font-bold text-[#3182f6] mb-8">
                  홈 · 소비
                </h1>
                <h2 className="text-5xl font-normal text-[#191f28] leading-normal">
                  내 돈 관리,
                  <br />
                  <span className="font-bold">대출</span>부터{" "}
                  <span className="font-bold">투자</span>까지
                  <br /> 똑똑하게
                </h2>
              </div>
              <div className="m-0 p-0 border-0">
                <div className="w-[600px] h-[936px] absolute top-0 right-[-104px]">
                  <img
                    src="https://static.toss.im/assets/homepage/newtossim/section1_1_home_01.png"
                    className="absolute top-[100px] left-[130px] w-[57%] h-auto"
                  />
                  <img
                    src="https://static.toss.im/screens/iPhone12_Clay_Shadow.png"
                    className="relative w-full h-full"
                  />
                </div>
                <div className="w-[600px] h-[936px] absolute bottom-0 left-[-104px]">
                  <img
                    src="https://static.toss.im/assets/homepage/newtossim/section1_1_home_02.png"
                    className="absolute top-[100px] left-[130px] w-[57%] h-auto"
                  />
                  <img
                    src="https://static.toss.im/screens/iPhone12_Clay_Shadow.png"
                    className="relative w-full h-full"
                  />
                </div>
              </div>
              <p className="text-2xl font-semibold absolute right-[30px] bottom-[166px]"></p>
            </div>
          </div>
        </div>
      </section>
      <MyToast
        open={toast.state}
        setOpen={handleToastOpenChange}
        isAnswer={toast.isAnswer}
      />
    </main>
  );
}

function StoreButton({ type }: { type: "App Store" | "Google Play" }) {
  return (
    <Link
      className="appearance-none pl-[14px] pr-[16px] mr-1 bg-[rgba(0,12,30,0.8)] text-white text-[17px] relative inline-flex justify-center items-center m-0 text-center align-middle whitespace-nowrap rounded-[7px] py-[11px] px-[22px]"
      href={`${
        type === "App Store"
          ? "https://apps.apple.com/kr/app/%ED%86%A0%EC%8A%A4/id839333328"
          : `https://play.google.com/store/apps/details?id=viva.republica.toss`
      }`}
    >
      <Image
        src={`${
          type === "App Store"
            ? "https://static.toss.im/png-icons/timeline/applekorea.png"
            : "https://static.toss.im/png-icons/timeline/googleplay.png"
        }`}
        width={24}
        height={24}
        className="mr-[6px]"
        alt={`${type}`}
      />
      {type}
    </Link>
  );
}
