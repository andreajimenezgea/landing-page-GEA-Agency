import Image from "next/image";
import { PhosphorStar } from "./Icon";

const avatars = [
  {
    src: "/exito/Captura de pantalla 2026-08-14 a las 13.33.40.png",
    alt: "Foto de perfil de un ejecutivo",
  },
  {
    src: "/exito/Captura de pantalla 2026-08-14 a las 13.33.55.png",
    alt: "Foto de perfil de una profesional",
  },
  {
    src: "/exito/Captura de pantalla 2026-08-14 a las 13.34.23.png",
    alt: "Foto de perfil de un fundador",
  },
  {
    src: "/exito/Captura de pantalla 2026-08-14 a las 13.35.06.png",
    alt: "Foto de perfil de una emprendedora",
  },
  {
    src: "/exito/Captura de pantalla 2026-08-14 a las 13.35.15.png",
    alt: "Foto de perfil de un director",
  },
  {
    src: "/exito/Captura de pantalla 2026-08-14 a las 13.35.26.png",
    alt: "Foto de perfil de un gerente",
  },
  {
    src: "/exito/Captura de pantalla 2026-08-14 a las 13.35.35.png",
    alt: "Foto de perfil de una coordinadora",
  },
  {
    src: "/exito/Captura de pantalla 2026-08-14 a las 13.35.46.png",
    alt: "Foto de perfil de un estratega",
  },
  {
    src: "/exito/Captura de pantalla 2026-08-14 a las 13.37.34.png",
    alt: "Foto de perfil de una directora",
  },
  {
    src: "/exito/Logo Dani Martínez Asesor.jpg",
    alt: "Foto de perfil de un asesor",
  },
];

export function SocialProof() {
  return (
    <div className="flex flex-col items-center gap-1.5 text-center">
      <div className="-space-x-3 flex items-center">
        {avatars.map((avatar) => (
          <Image
            key={avatar.alt}
            src={avatar.src}
            alt={avatar.alt}
            width={104}
            height={104}
            className="h-[40px] w-[40px] rounded-full object-cover"
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