import logoAsset from "@/assets/amsterdam-jets-logo.svg.asset.json";

export function Logo({ className = "h-9 w-9" }: { className?: string }) {
  return <img src={logoAsset.url} alt="Amsterdam Jets" className={className} />;
}
