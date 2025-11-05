import { ReactNode } from "react";
import { Card } from "@/components/ui/card";

interface SectionProps {
  id?: string;
  title: string;
  children: ReactNode;
}

const Section = ({ id, title, children }: SectionProps) => {
  return (
    <Card id={id} className="my-8 p-10 rounded-2xl shadow-2xl animate-slide-up">
      <h2 className="text-primary text-4xl font-bold mb-6 pb-3 border-b-4 border-primary">
        {title}
      </h2>
      {children}
    </Card>
  );
};

export default Section;
