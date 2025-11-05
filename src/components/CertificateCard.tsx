import { Card } from "@/components/ui/card";

interface CertificateCardProps {
  title: string;
  issuer: string;
  date: string;
  image: string;
}

const CertificateCard = ({ title, issuer, date, image }: CertificateCardProps) => {
  return (
    <Card className="overflow-hidden rounded-xl shadow-lg hover:-translate-y-3 hover:shadow-2xl transition-all duration-300 cursor-pointer">
      <div className="h-64 overflow-hidden border-b-4 border-primary">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-5">
        <h3 className="text-accent text-lg font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-2">
          <strong>Issuer:</strong> {issuer}
        </p>
        <p className="text-muted-foreground">
          <strong>Date:</strong> {date}
        </p>
      </div>
    </Card>
  );
};

export default CertificateCard;
