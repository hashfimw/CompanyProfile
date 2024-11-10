import { MotionText, textVariants } from "@/components/motion";
import Link from "next/link";

import TestimonialSection from "./testimonial/page";
import { getPulseMed } from "@/libs/pulsemedia";

export default async function ContentHome() {
  const pulseMedia = await getPulseMed();

  const videoUrl = pulseMedia?.[0]?.fields?.video2?.fields?.file?.url;
  const videoUrltwo = pulseMedia?.[0]?.fields?.video3?.fields?.file?.url;

  if (!videoUrl) {
    return <div>Video Not Found.</div>;
  }

  return (
    <div className="py-20 sm:py-28">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <MotionText initial="hidden" animate="visible" variants={textVariants}>
          <h2 className="text-start text-6xl font-semibold text-[#2F3546] flex flex-col ">
            We Make Brands <span>First Choice Through </span> Social Media,
            <span className="font-light flex flex-col text-5xl text-[#2F3546]">
              enabling them to win on sales and market share.
            </span>
          </h2>
        </MotionText>
        <p className="mx-auto mt-2 max-w-lg text-balance text-center text-5xl font-semibold tracking-tight text-[#2F3546]sm:text-5xl pt-14">
          What We <span className="text-[#88B8E0]">Do?!</span>
        </p>
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-[#88B8E0] lg:rounded-l-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                <p className="mt-2 text-xl font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Social Media Consulting
                </p>
                <p className="mt-2 max-w-lg text-md font-light text-gray-600 max-lg:text-center">
                  We bring 10+ year of experience, and help brands navigate
                  social media through workshops and strategic consulting.
                </p>
              </div>
              <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                  <video
                    className="size-full object-cover object-top"
                    src={videoUrl}
                    autoPlay
                    loop
                    muted
                  />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
          </div>
          <div className="relative max-lg:row-start-1">
            <div className="absolute inset-px rounded-lg bg-[#8391AA] max-lg:rounded-t-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-xl font-medium tracking-tight text-[#edded6] max-lg:text-center">
                  Influencer Marketing
                </p>
                <p className="mt-2 max-w-lg text-md font-light text-[#edded6] max-lg:text-center">
                  We create influencer marketing campaigns which tell brand
                  stories through native content, authentically connecting with
                  audiences.
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                <img
                  className="w-full max-lg:max-w-xs"
                  src="/soslike.png"
                  alt="likelogo"
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
          </div>
          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className="absolute inset-px rounded-lg bg-[#8391AA]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10  ">
                <p className="mt-2 text-xl font-medium tracking-tight text-[#edded6]  max-lg:text-center justify-center">
                  Paid Social Advertising
                </p>
                <p className="mt-2 max-w-lg text-md font-light text-[#edded6]  max-lg:text-center">
                  We use paid social advertising to amplify and boost native
                  influencer content amongst targeted audiences to drive
                  campaigns.
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                <img
                  className="w-full max-lg:max-w-xs"
                  src="/likeslogo3d.png"
                  alt="likelogo"
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
          </div>
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-[#88B8E0] lg:rounded-r-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                <p className="mt-2 text-xl font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Social Media Management
                </p>
                <p className="mt-2 max-w-lg text-md font-light text-gray-600 max-lg:text-center">
                  We manage social media accounts for brands, creating content
                  and turning their audience into loyal communities.
                </p>
              </div>
              <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                  <video
                    className="size-full object-cover object-top"
                    src={videoUrltwo}
                    autoPlay
                    loop
                    muted
                  />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-r-[2rem]"></div>
          </div>
        </div>
      </div>
      <div className="flex flex-row text-center py-6 justify-center">
        <Link
          href={"/service"}
          className="text-md  text-gray-900 bg-[#88B8E0] p-6 py-2 rounded-3xl hover:bg-[#8391AA] hover:text-white"
        >
          Our Service
        </Link>
      </div>
      <div className="flex items-center justify-center pt-24 text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold">
        What <span className="italic text-[#88B8E0]">Our</span> Partners Say
      </div>

      <TestimonialSection />
    </div>
  );
}
