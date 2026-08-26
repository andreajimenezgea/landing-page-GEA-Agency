import Image from "next/image";
import { PhosphorStar } from "./Icon";

const avatars = [
  {
    src: "/exito/perfil-ejecutivo.png",
    alt: "Foto de perfil de un ejecutivo",
  },
  {
    src: "/exito/perfil-profesional.png",
    alt: "Foto de perfil de una profesional",
  },
  {
    src: "/exito/perfil-fundador.png",
    alt: "Foto de perfil de un fundador",
  },
  {
    src: "/exito/perfil-emprendedora.png",
    alt: "Foto de perfil de una emprendedora",
  },
  {
    src: "/exito/perfil-director.png",
    alt: "Foto de perfil de un director",
  },
  {
    src: "/exito/perfil-gerente.png",
    alt: "Foto de perfil de un gerente",
  },
  {
    src: "/exito/perfil-coordinadora.png",
    alt: "Foto de perfil de una coordinadora",
  },
  {
    src: "/exito/perfil-estratega.png",
    alt: "Foto de perfil de un estratega",
  },
  {
    src: "/exito/perfil-directora.png",
    alt: "Foto de perfil de una directora",
  },
  {
    src: "/exito/perfil-asesor.jpg",
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