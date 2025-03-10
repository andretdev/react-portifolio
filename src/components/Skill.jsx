function SkillCard(props) {
  return (
    <div className="h-30 animate-appear-bottom transtion-all w-25 flex flex-col items-center justify-center rounded-2xl bg-gray-900 duration-300 hover:scale-[1.04] hover:bg-gray-600">
      <img src={props.link} className="w-15 h-14" />
      <p className="text-white">{props.text}</p>
    </div>
  );
}

export default SkillCard;
