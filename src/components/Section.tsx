import type { ReactNode } from "react";
import Reveal from "./Reveal";

type Props = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  alt?: boolean;
  children: ReactNode;
};

export default function Section({ id, eyebrow, title, description, alt, children }: Props) {
  return (
    <section id={id} className={alt ? "section section--alt" : "section"} aria-labelledby={`${id}-title`}>
      <div className="container">
        <Reveal>
          <header className="section-header">
            <span className="eyebrow">{eyebrow}</span>
            <h2 id={`${id}-title`}>{title}</h2>
            {description && <p>{description}</p>}
          </header>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
