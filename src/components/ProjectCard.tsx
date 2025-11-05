import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
}

const ProjectCard = ({ title, description, tags }: ProjectCardProps) => {
  return (
    <div className="bg-muted p-6 my-5 rounded-xl border-l-4 border-primary hover:shadow-lg hover:translate-x-2 transition-all duration-300">
      <h3 className="text-accent text-2xl font-bold mb-3">{title}</h3>
      <p className="text-foreground/80 leading-relaxed mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <Badge key={index} className="bg-primary hover:bg-primary-dark text-white">
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
