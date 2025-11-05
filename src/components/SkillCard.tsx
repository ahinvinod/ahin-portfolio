interface SkillCardProps {
  title: string;
  skills: string;
}

const SkillCard = ({ title, skills }: SkillCardProps) => {
  return (
    <div className="bg-gradient-to-br from-primary to-accent p-6 rounded-xl text-white shadow-lg hover:-translate-y-2 transition-transform duration-300">
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="opacity-95">{skills}</p>
    </div>
  );
};

export default SkillCard;
