import Image from "next/image";
import { PhosphorStar } from "./Icon";

const avatars = [
  {
    src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=104&h=104&fit=crop&crop=faces",
    alt: "Foto de perfil de un ejecutivo",
    className: "opacity-70",
  },
  {
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=104&h=104&fit=crop&crop=faces",
    alt: "Foto de perfil de una profesional",
    className: "opacity-85",
  },
  {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=104&h=104&fit=crop&crop=faces",
    alt: "Foto de perfil de un fundador",
    className: "z-10 scale-105",
  },
  {
    src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=104&h=104&fit=crop&crop=faces",
    alt: "Foto de perfil de una emprendedora",
    className: "opacity-85",
  },
  {
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=104&h=104&fit=crop&crop=faces",
    alt: "Foto de perfil de un director",
    className: "opacity-70",
  },
];

export function SocialProof() {
  return (
    <div className="flex flex-col items-center gap-1.5 text-center">
      <div className="-space-x-1.5 flex items-center">
        {avatars.map((avatar) => (
          <Image
            key={avatar.src}
            src={avatar.src}
            alt={avatar.alt}
            width={104}
            height={104}
            className={`h-[30px] w-[30px] rounded-full object-cover ring-1 ring-[#0B0F19] ${avatar.className}`}
          />
        ))}
      </div>

      <p className="text-sm font-semibold tracking-tight text-white sm:text-base">
        +53 empresas escaladas
      </p>

      <div role="img" aria-label="Valoración: 5 de 5 estrellas" className="flex items-center gap-1">
        {Array.from({ length: 5 }, (_, i) => (
          <PhosphorStar key={i} className="h-3.5 w-3.5 text-white" />
        ))}
      </div>
    </div>
  );
}