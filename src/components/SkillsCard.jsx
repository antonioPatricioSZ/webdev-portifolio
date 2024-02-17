// eslint-disable-next-line react/prop-types
const SkillsCard = ({ icon, title, text }) => {
  return (
    <article className="border border-slate-300 flex flex-col items-center py-2 px-0.5" >
      <span>{icon}</span>
      <h4 className="mt-2 font-bold">{title}{title === "Sql" ? <span className="text-slate-600 font-semibold text-sm" >: Mysql, sqlServer, Postgresql</span> : ""}</h4>
      <p className="mt-2 text-slate-500">{text}</p>
    </article>
  );
};

export default SkillsCard;
