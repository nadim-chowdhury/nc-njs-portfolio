import Image from "next/image";

export default function Logo({
  className,
  width,
  height,
}: {
  className: string;
  width: number;
  height: number;
}) {
  return (
    <Image
      src="/assets/logo_no_bg_svg.svg"
      width={width}
      height={height}
      alt="NadimChowdhuryLogo"
      className={className}
    />
  );
}
