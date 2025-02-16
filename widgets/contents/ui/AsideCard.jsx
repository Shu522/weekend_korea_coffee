const AsideCard = ({ imageSrc, title, paragraph1, paragraph2, btnText }) => {
  return (
    <article className="flex flex-col items-center gap-2 text-center mb-16">
      <img src={imageSrc} alt="" />
      <h4 className="font-semibold">{title}</h4>
      <p className="text-sm">{paragraph1}</p>
      <p className="text-sm">{paragraph2}</p>
      <button className="text-white rounded-3xl py-2 px-6 bg-cyan-700 font-semibold text-xs">
        {btnText}
      </button>
    </article>
  );
};

export default AsideCard;
