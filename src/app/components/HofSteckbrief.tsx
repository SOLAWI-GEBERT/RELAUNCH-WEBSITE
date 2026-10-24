import { ImageWithFallback } from "./figma/ImageWithFallback";
import { HofLogo } from "./HofLogo";
import type { Hof } from "../data/hoefe";

const badgeColors = {
  green: "bg-solawi-green text-foreground",
  purple: "bg-solawi-mauve text-foreground",
  orange: "bg-solawi-orange text-foreground",
};

/**
 * Hof-Steckbrief: Foto (einheitlich gerahmt) mit Logo als Kistenetikett am Bildrand und
 * Hofbeschreibung. Die Rahmenfarbe kommt über `--hof-rahmen` vom Seitencontainer.
 */
export function HofSteckbrief({
  name,
  badgeLabel,
  badgeColor,
  description,
  certLine,
  CertIcon,
  image,
  imageAlt,
  logo,
}: Hof) {
  return (
    <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
      <div className="relative">
        <div className="hof-foto h-[400px]">
          {image ? (
            <ImageWithFallback src={image} alt={imageAlt ?? name} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-secondary/20">
              <CertIcon className="w-16 h-16 text-primary/40" />
            </div>
          )}
        </div>
        {logo && (
          <div className="hof-etikett absolute -bottom-4 right-4 sm:-right-3">
            <HofLogo logo={logo} className="h-10 w-28" />
          </div>
        )}
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
