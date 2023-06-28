const Title = ({ fa, en }: { fa: string; en: string }) => {
  return (
    <>
      <div className="flex justify-center relative">
        <span className="text-[40px] text-three">{en}</span>
        <span className="absolute text-[60px] text-three opacity-50">{fa}</span>
      </div>
    </>
  );
};

export default Title;
