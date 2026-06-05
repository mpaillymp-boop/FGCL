import Image from "next/image";

/**
 * FGCL logo (real brand asset extracted from the official PDF).
 * `variant` picks the white silhouette for dark backgrounds (hero, footer)
 * or the full-color version for light surfaces (scrolled navbar).
 */
export function Wordmark({
  variant = "color",
  className = "",
}: {
  variant?: "color" | "white";
  className?: string;
}) {
  const src = variant === "white" ? "/logos/fgcl-white.png" : "/logos/fgcl.png";
  return (
    <Image
      src={src}
      alt="FGCL"
      width={720}
      height={211}
      priority
      className={`h-8 w-auto ${className}`}
    />
  );
}
