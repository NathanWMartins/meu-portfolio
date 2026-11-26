type Props = {
  src: string;
  url: string;
  alt?: string;
  className?: string;
  lazy?: boolean;
};

/** Moldura de navegador para apresentar as capturas dos projetos. */
export default function BrowserFrame({ src, url, alt = "", className = "", lazy }: Props) {
  return (
    <span className={`frame ${className}`}>
      <span className="frame-bar">
        <i />
        <i />
        <i />
        <span>{url.replace(/^https?:\/\//, "").replace(/\/$/, "")}</span>
      </span>
      <img src={src} alt={alt} loading={lazy ? "lazy" : undefined} />
    </span>
  );
}
