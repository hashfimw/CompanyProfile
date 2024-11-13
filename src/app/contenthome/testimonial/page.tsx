import React from "react";

type TestimonialProps = {
  text: string;
  author: string;
};

const Testimonial = ({ text, author }: TestimonialProps) => {
  return (
    <div className="bg-[#8391AA] text-[#fff9f6] p-6 rounded-xl shadow-md text-center max-w-md mx-auto">
      <p className="italic mb-4 justify-center">{text}</p>
      <p className="font-bold justify-center">{author}</p>
    </div>
  );
};

const TestimonialSection = () => {
  return (
    <div className="flex flex-col items-center py-10 justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl px-4">
        <Testimonial
          text="Expressiveness and individuality are key to MAC, so it &quot;s important for us to highlight it during key moments like the New York Fashion Week. Thanks to Pulse Advertising and the awesome creators, we were able to convey these values in a playful and approachable way which resonates with Gen Z."
          author="-MAC Cosmetics-"
        />

        <Testimonial
          text="Pulse Advertising is a highly flexible and reliable partner who helps us transport our messages to existing and new target groups."
          author="-MINI-"
        />
      </div>
    </div>
  );
};

export default TestimonialSection;
