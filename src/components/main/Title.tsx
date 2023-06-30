const Title = ({ fa, en }: { fa: string; en: string }) => {
  return (
    <>
      <div className="flex justify-center relative text-center">
        <span className="md:text-[40px] text-[25px] text-three">{en}</span>
        <span className="absolute md:text-[60px] text-[35px] text-three opacity-50">{fa}</span>
      </div>
    </>
  );
};

export default Title;
