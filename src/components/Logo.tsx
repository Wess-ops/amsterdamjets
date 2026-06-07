import logoAsset from "@/assets/amsterdam-jets-logo.png.asset.json";

export function Logo({ className = "h-9 w-auto" }: { className?: string }) {
  return (
    <img
      src={logoAsset.url}
      alt="Amsterdam Jets"
      className={`${className} object-contain`}
    />
  );
}
