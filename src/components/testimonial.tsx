type TestimonialProps = {
  text: string;
  author: string;
};

const Testimonial = ({ text, author }: TestimonialProps) => {
  return (
    <div className="bg-[#8391AA] text-zinc-800 p-6 rounded-3xl shadow-md text-center max-w-xl mx-auto lg:hover:scale-105">
      <h1 className="font-medium text-md mb-4 justify-center">{text}</h1>
      <h1 className="font-bold justify-center text-xl">{author}</h1>
    </div>
  );
};

const TestimonialSection = () => {
  return (
    <div className="flex flex-col items-center py-10 justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 w-full max-w-6xl px-4">
        <Testimonial
          text="Expressiveness and individuality are key to MAC, so it's important for us to highlight it during key moments like the New York Fashion Week. Thanks to Pulse Advertising and the awesome creators, we were able to convey these values in a playful and approachable way which resonates with Gen Z."
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
