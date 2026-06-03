type Props = {
  theme: string;
  footerNav: boolean;
};

export default function Footer({ theme, footerNav }: Props) {
  return (
    <footer className={theme}>
      {footerNav && (
        <div className="page-nav-footer section--dark-blue">
          <a href="/Nosotros" className="page-nav-back">
            ← Quiénes somos
          </a>
          <a href="/Actividades" className="page-nav-next">
            Otras Actividades →
          </a>
        </div>
      )}

      <div className="footer-top">
        <div className="footer-brand">
          <a href="#" className="footer-logo">
            <span className="cross">✝</span>
            Hospitalidad de Nuestra Señora de Lourdes · La Rioja
          </a>

          <p>
            Asociación católica cuya misión es acompañar a los enfermos en la peregrinación anual al Santuario de Nuestra Señora de Lourdes.
          </p>

          <div className="footer-socials">{/* icons */}</div>
        </div>

        <div className="footer-col">
          <h4>Navegación</h4>
          <ul>
            <li><a href="/Nosotros">Quiénes somos</a></li>
            <li><a href="/Peregrinacion">Peregrinación</a></li>
            <li><a href="/Actividades">Otras Actividades</a></li>
            <li><a href="#revista">Revista</a></li>
            <li><a href="/Noticias">Noticias</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Saber más</h4>
          <ul>
            <li><a href="/Historia/Apariciones">Las Apariciones</a></li>
            <li><a href="/Historia/Bernadette">Vida de Bernadette</a></li>
            <li><a href="/Historia/Milagros">Milagros</a></li>
            <li><a href="/Historia/Mensaje">El Mensaje</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Hospitalidad de Ntra. Sra. de Lourdes de La Rioja</span>
        <span className="footer-cross">✝</span>
        <span>Iglesia en La Rioja</span>
      </div>
    </footer>
  );
}