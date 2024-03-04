const TitleText = ({ title }: { title: string }) => {
  return (
    <h1 className="bg-gradient-to-r from-white/80 to-gray-900 inline-block text-transparent bg-clip-text  text-xl md:text-5xl">
      {title}
    </h1>
  );
};

export default TitleText;
