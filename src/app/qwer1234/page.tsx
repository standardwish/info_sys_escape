import Image from "next/image";
export default function SuccessPage() {
  return (
    <div className="h-screen w-screen">
      <div className="h-full w-full flex justify-center items-center flex-col gap-6">
        <h1 className="text-5xl">202X년 행운의 날 알아보기</h1>
        <Image
          src={"/img/soft-drink.png"}
          width={350}
          height={350}
          alt="SOFT DRINK"
        />
        <h3 className="text-5xl">? x ? + ? - ? = ?</h3>
      </div>
    </div>
  );
}
