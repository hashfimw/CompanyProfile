import { getPulseMed } from "@/libs/pulsemedia"; // Pastikan path-nya benar
import {
  MotionVideo,
  MotionText,
  videoVariants,
  textVariants,
} from "@/components/motion";

const HomePage = async () => {
  const pulseData = await getPulseMed();

  const videoUrl = pulseData?.[0]?.fields?.video?.fields?.file?.url;

  if (!videoUrl) {
    return <div>Video tidak tersedia.</div>;
  }

  return (
    <div className="flex flex-col md:flex-row items-center justify-items-center lg:min-h-screen px-6 md:px-16 lg:px-24 space-y-6 md:space-y-0 lg:h-screen pt-12 lg:pt-0 lg:-mt-10 pb-10 lg:pb-0">
      <div className="relative w-full md:w-1/2 h-64 sm:h-80 md:h-[493px] overflow-hidden rounded-3xl">
        <MotionVideo
          className="w-full h-full object-cover"
          src={videoUrl}
          autoPlay
          loop
          muted
          initial="hidden"
          animate="visible"
          variants={videoVariants}
        >
          <div className="absolute inset-0 flex items-end justify-end p-4 space-x-2"></div>
        </MotionVideo>
      </div>

      <MotionText
        className="w-full md:w-1/2 text-center md:text-left md:pl-12 pt-10"
        initial="hidden"
        animate="visible"
        variants={textVariants}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#2F3546] leading-tight">
          Social Media.
          <br />
          <span className="font-bold text-[#2F3546]">But better.</span>
        </h1>
        <p className="mt-4 text-[#2F3546] font-bold text-sm sm:text-base md:text-lg">
          Global social & influencer marketing agency.
        </p>
        <button className="mt-6 px-6 py-3 border-2 border-black rounded-full text-black font-bold text-md hover:bg-[#88B8E0] hover:text-white transition duration-300">
          Get in touch
        </button>
      </MotionText>
    </div>
  );
};

export default HomePage;
