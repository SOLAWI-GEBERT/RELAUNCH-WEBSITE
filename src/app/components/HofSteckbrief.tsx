import { ImageWithFallback } from "./figma/ImageWithFallback";
import type { Hof } from "../data/hoefe";

const badgeColors = {
  green: "bg-solawi-green text-foreground",
  purple: "bg-solawi-mauve text-foreground",
  orange: "bg-solawi-orange text-foreground",
};

export function HofSteckbrief({
  name,
  badgeLabel,
  badgeColor,
  description,
  certLine,
  CertIcon,
  image,
  imageAlt,
}: Hof) {
  return (
    <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
      <div className="h-[400px] rounded-lg overflow-hidden shadow-xl">
        <ImageWithFallback src={image} alt={imageAlt} className="w-full h-full object-cover" />
      </div>
      <div>
        <div className="flex items-center gap-3 mb-4">
          <h2 className="text-3xl text-foreground">{name}</h2>
          <span className={`inline-block px-2 py-0.5 text-xs font-semibold ${badgeColors[badgeColor]}`}>
            {badgeLabel}
          </span>
        </div>
        <p className="text-lg text-gray-700 mb-4">{description}</p>
        <p className="text-gray-600 flex items-center gap-2">
          <CertIcon className="w-5 h-5 text-primary" />
          {certLine}
        </p>
      </div>
    </div>
  );
}
