import Image from "next/image";
import SajuTable from "@/features/fortune/components/SajuTable";

export default function HomePage() {
  return (
    <div className="bg-tablebg mx-auto h-auto max-w-md pb-10">
      {/* --- 이미지 영역 --- */}
      <main className="flex flex-col items-center">
        <section>
          <div className="relative">
            <Image
              src={"/illust01.svg"}
              alt="제 1장 나의 사주 팔자"
              width={448}
              height={924}
              priority
            />

            <div className="@container absolute top-[85%] left-[15%] h-[15%] w-[40%]">
              <p className="text-center text-[11cqi]">
                이제 본격적으로 OO님의 사주팔자를 분석해볼 차례네요.
              </p>
            </div>
          </div>
        </section>

        <section>
          <Image
            src={"/illust02.svg"}
            alt="붓 그림"
            width={448}
            height={364}
            priority
          />
        </section>

        <section>
          <div className="relative">
            <Image
              src={"/illust03.svg"}
              alt="표 정리 이미지"
              width={448}
              height={924}
              priority
            />

            <div className="@container absolute top-[13%] left-[14%] h-[15%] w-[50%]">
              <p className="text-center text-[8cqi]">
                제가 oo님의 사주를 <br />
                보기 쉽게 표로 정리했어요.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/*--- 표 ---*/}
      <div className="border-navy01 bg-tablebg @container relative mx-3 -mt-6 max-w-md border-3 px-2 text-xl">
        <div className="border-navy02 absolute inset-x-0 top-2 border-1" />
        <div className="border-navy02 absolute inset-x-0 bottom-2 border-1" />
        <div className="border-navy02 absolute left-2 h-full border-1" />
        <div className="border-navy02 absolute right-2 h-full border-1" />

        {/*--- 바람 이미지 ---*/}
        <div className="absolute inset-x-2 top-10 flex justify-between">
          <Image
            src="/table_left_logo.svg"
            alt="왼쪽 바람"
            width={56}
            height={38}
            className="h-auto w-[14cqi]"
          />
          <Image
            src="/table_right_logo.svg"
            alt="오른쪽 바람"
            width={56}
            height={38}
            className="h-auto w-[14cqi] pb-6"
          />
        </div>

        {/* --- 표 제목 ---*/}
        <div className="text-textgray mt-11 mb-7 flex flex-col text-center">
          <div className="text-[5cqi]">김로켓님의 사주</div>
          <div className="mt-1 text-[5.5cqi] font-bold">
            1980년 8월 27일 08:10
          </div>
        </div>

        {/* --- 표 데이터 ---*/}
        <SajuTable />
      </div>
    </div>
  );
}
