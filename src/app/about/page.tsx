import { MotionText, textVariants, textVariants2, textVariants3} from "@/components/motion";
import StatsSection from "@/components/statsSection";
import React from "react";

const AboutUs = () => {
  return (
    <div className="container py-16 px-5 mx-auto ">
      
      <MotionText 
      className="container mx-auto text-center"
      
        initial="hidden"
        animate="visible"
        variants={textVariants2}
      >
        <h1 className="text-4xl font-bold text-[#2F3546] mb-6">
          About Pulse Advertising
        </h1>
        <p className="text-lg text-[#2F3546] mb-8">
          Pulse Advertising is a leading digital marketing agency that
          specializes in influencer marketing, content creation, and social
          media strategy. We work with top brands and creators to bring fresh,
          innovative campaigns that drive results and resonate with target
          audiences.
        </p>
        </MotionText>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <MotionText className="bg-[#88B8E0] p-6 rounded-xl shadow-lg" 
          initial="hidden"
          animate="visible"
          variants={textVariants3}>
            <h2 className="text-3xl font-semibold text-[#2F3546] mb-4 text-center">
              Our Mission
            </h2>
            <p className="text-xl text-[#2F3546]">
              Our mission is to connect brands with influencers who align with
              their values and objectives. We aim to create authentic, engaging
              content that speaks to the modern consumer and fosters long-term
              brand loyalty.
            </p>
          </MotionText>

          <MotionText className="bg-[#88B8E0] p-6 rounded-xl shadow-lg"
          initial="hidden"
          animate="visible"
          variants={textVariants}>
          
            <h2 className="text-3xl font-semibold text-[#2F3546] text-center mb-4">
              What We Do
            </h2>
            <ul className="text-xl text-[#2F3546] text-center space-y-2">
              <li>Influencer Marketing Campaigns</li>
              <li>Social Media Strategy & Management</li>
              <li>Content Creation & Distribution</li>
              <li>Brand Awareness & Engagement</li>
              <li>Performance Analytics & Reporting</li>
            </ul>
          </MotionText>
        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-semibold text-[#2F3546] mb-6 text-center">
            Why Choose Us?
          </h2>
          <p className="text-lg text-[#2F3546]">
            At Pulse Advertising, we combine creativity with data-driven
            insights to deliver campaigns that exceed expectations. Our team of
            experts works closely with you to tailor strategies that are both
            innovative and effective. With a passion for building lasting
            relationships and delivering measurable results, Pulse Advertising
            is your trusted partner in the digital space.
          </p>
        </div>
      <StatsSection/>
    </div>
  );
};

export default AboutUs;
