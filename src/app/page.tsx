"use client";
import Close from "@/components/Close";
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Modal from "react-modal";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
export default function Home() {
  const router = useRouter();
  const [modalIsOpen, setIsOpen] = useState(false);
  Modal.setAppElement("#app");
  const [count, setCount] = useState(0);
  const [inputs, setInputs] = useState({
    id: "",
    pwd: "",
  });

  const { id, pwd } = inputs;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const resetInput = () => {
    setInputs({
      id: "",
      pwd: "",
    });
  };
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function getInfo() {
    if (id === "success") {
      router.push("/qwer1234", { scroll: false });
    } else {
      alert("잘못된 접근입니다.");
      setCount(count + 1);
      if (count === 5) {
        alert("힌트 : 요즘 투자에, 저축에, 대출받느라 바빠... 총 얼마지 그럼?");
      }
      if (count === 10) {
        alert("힌트 : MIRROR");
      }
      if (count === 15) {
        alert("더 이상의 힌트는 없습니다.");
        setCount(0);
      }
      resetInput();
    }
  }
  return (
    <main className="min-h-screen">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="">
          <h2 className="text-center text-2xl font-bold mb-6">Authorization</h2>
          <button className="absolute top-3 right-3" onClick={closeModal}>
            <Close />
          </button>
          <form className="flex flex-col gap-3">
            <input
              type="text"
              name="id"
              value={id}
              onChange={onChange}
              className="border-gray-300 bg-white border-2 rounded-md transition-all duration-200 text-gray-900 text-sm focus:ring-lightGreen focus:border-lightGreen block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-darkGreen dark:focus:border-darkGreen"
              placeholder="아이디를 입력해주세요."
              required
            />
            <button type="button" className="w-full" onClick={getInfo}>
              Submit
            </button>
          </form>
        </div>
      </Modal>
      <section className="h-screen relative">
        <Image src={"/img/toss_bg.png"} fill alt="BG-IMAGE" objectFit="cover" />
        <div className="absolute top-4 right-5">
          <button
            onClick={openModal}
            className="rounded-md px-3 py-1 text-white hover:border hover:text-black"
          >
            LOGIN
          </button>
        </div>
      </section>
      <section className="py-52 w-full flex items-center justify-center break-keep">
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
    </main>
  );
}
