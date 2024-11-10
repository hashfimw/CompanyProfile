import React from "react";

const AboutUs = () => {
  return (
    <div className=" py-16 px-4">
      <div className="container mx-auto text-center">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold text-[#2F3546] mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-[#2F3546]">
              Our mission is to connect brands with influencers who align with
              their values and objectives. We aim to create authentic, engaging
              content that speaks to the modern consumer and fosters long-term
              brand loyalty.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold text-[#2F3546] mb-4">
              What We Do
            </h2>
            <ul className="text-lg text-[#2F3546] space-y-2">
              <li>Influencer Marketing Campaigns</li>
              <li>Social Media Strategy & Management</li>
              <li>Content Creation & Distribution</li>
              <li>Brand Awareness & Engagement</li>
              <li>Performance Analytics & Reporting</li>
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-semibold text-[#2F3546] mb-6">
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
      </div>
    </div>
  );
};

export default AboutUs;
