import Image from "next/image";
import { PhosphorStar } from "./Icon";

const avatars = [
  {
    src: "/exito/GCM.png",
    alt: "Foto de perfil de un ejecutivo",
  },
  {
    src: "/exito/Logo-nuevo-cienciaConciencia.webp",
    alt: "Foto de perfil de una profesional",
  },
  {
    src: "/exito/logotipo-ritec.svg",
    alt: "Foto de perfil de un fundador",
  },
];

export function SocialProof() {
  return (
    <div className="flex flex-col items-center gap-1.5 text-center">
      <div className="-space-x-1.5 flex items-center">
        {avatars.map((avatar) => (
          <Image
            key={avatar.alt}
            src={avatar.src}
            alt={avatar.alt}
            width={104}
            height={104}
            className="h-[30px] w-[30px] rounded-full object-cover bg-white"
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