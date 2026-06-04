import Image from "next/image";
import { Icon } from "./site-icon";

export function Footer({ whatsappUrl }: { whatsappUrl: string }) {
  return <footer className="site-footer">
    <div className="footer-wordmark">
      <Image src="/images/logo-transportes-fink.png" alt="Transportes Fink" width={1400} height={585} />
    </div>
    <div className="footer-contact">
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">+55 51 99515-1674</a>
      <a href="https://www.instagram.com/transportesfink/" target="_blank" rel="noopener noreferrer" className="footer-instagram"><Icon name="instagram" /> Instagram</a>
      <a href="mailto:transportadorafink@gmail.com">transportadorafink@gmail.com</a>
    </div>
    <div className="footer-meta"><span>Rio Grande do Sul · Brasil</span><span>© {new Date().getFullYear()} Transportes Fink</span></div>
  </footer>;
}
