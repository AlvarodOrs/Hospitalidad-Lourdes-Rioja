import Slider from "@/hooks/Slider";
import slidesData from "@/lib/content/slides.json";

import Testimonials from "@/hooks/Testimonials";
import testimonialData from "@/lib/content/quotes.json";

import Cover from "@/components/sections/Cover";
import Intro from "@/components/sections/Intro";
import Overview from "@/components/sections/Overview";
import HighlightsDates from "@/components/sections/HighlightsDates";
import Testimonial from "@/components/sections/Testimonial";
import Contact from "@/components/sections/Contact";

import themes from "@/lib/content/themes.json";
  // import { getPageContent } from "@/lib/content/loadPage";

  // const content = getPageContent("inicio");
  // content.hero.h1...
export default function ActividadesPage() {
  const slides = slidesData.slides;
  const theme = themes.themes.actividades
  return (
    <>
    <Cover theme={theme.cover} />
    <Intro theme={theme.intro} />
    <Overview theme={theme.overview} />
    <HighlightsDates theme={theme.highlightsDates} />
    <Testimonial theme={theme.testimonial} />
    <Contact theme={theme.contact} />
    </>
  );
}
/*
      <section className="hero" id="inicio">
        <div className="hero-left">
          <span className="hero-eyebrow">
            Asociación Católica de Laicos · La Rioja
          </span>

          <h1>
            Hospitalidad<br />
            <em>Nuestra Señora<br />de Lourdes</em>
          </h1>

          <p className="hero-subtitle">de La Rioja</p>

          <p className="hero-desc">
            Una comunidad unida por la fe, la fraternidad y el espíritu de servicio.
            Más de treinta años acompañando a enfermos y peregrinos en su camino hacia el Santuario de Lourdes.
          </p>

          <div className="hero-ctas">
            <a href="/Peregrinacion" className="btn-primary">
              Próxima peregrinación →
            </a>
            <a href="/Nosotros" className="btn-ghost">
              Conócenos
            </a>
          </div>
        </div>

        <div className="hero-right">
          <Slider slides={slides}/>
        </div>

        <div className="hero-ornament">
          <svg viewBox="0 0 80 80" fill="none">
            <circle cx="40" cy="40" r="38" stroke="#b8975a" strokeWidth="0.5" />
            <circle cx="40" cy="40" r="30" stroke="#b8975a" strokeWidth="0.5" strokeDasharray="2 4" />
            <line x1="40" y1="2" x2="40" y2="78" stroke="#b8975a" strokeWidth="0.5" />
            <line x1="2" y1="40" x2="78" y2="40" stroke="#b8975a" strokeWidth="0.5" />
            <circle cx="40" cy="40" r="4" stroke="#b8975a" strokeWidth="0.5" />
          </svg>
        </div>

        <div className="scroll-hint">
          <div className="scroll-line" />
          <span>Scroll</span>
        </div>
      </section>

      <div className="stats-strip">
        <div className="stats-inner">
          <div className="stat-item reveal">
            <span className="stat-number">+30</span>
            <span className="stat-label">Años de peregrinaciones</span>
          </div>

          <div className="stat-item reveal reveal-delay-1">
            <span className="stat-number">3</span>
            <span className="stat-label">Formas de participar</span>
          </div>

          <div className="stat-item reveal reveal-delay-2">
            <span className="stat-number">1</span>
            <span className="stat-label">Peregrinación anual</span>
          </div>

          <div className="stat-item reveal reveal-delay-3">
            <span className="stat-number">∞</span>
            <span className="stat-label">Experiencias de fe</span>
          </div>
        </div>
      </div>

      <section id="quienes-somos">
        <div className="about">
          <div className="about-text">
            <div className="section-tag reveal">La Hospitalidad</div>

            <h2 className="section-title reveal reveal-delay-1">
              Una vocación<br />de <em>fe y servicio</em>
            </h2>

            <p className="about-body reveal reveal-delay-2">
  						La Hospitalidad de Nuestra Señora de Lourdes de La Rioja es una asociación católica cuya labor principal es acompañar a los enfermos en su peregrinación al Santuario de Lourdes.
            </p>

            <p className="about-body reveal reveal-delay-2">
  						Llevamos más de treinta años de peregrinaciones. En ellas, peregrinos y hospitalarios convivimos en un ambiente de fraternidad y festividad que nos ayuda a aceptar nuestras propias limitaciones y a crecer en la fe.
            </p>

            <p className="about-body reveal reveal-delay-3">
  						Nuestro compromiso es claro: ayudar a peregrinar y vivir la fe a los que más lo necesitan, en particular al enfermo, que es siempre el protagonista de nuestra peregrinación.
            </p>
          </div>

          <div className="about-visual reveal">
            <div className="about-image-frame">
              <img
                src="/assets/images/Lourdes/Peregrinacion/CarrosDesdeSantuario(recta).jpg"
                alt="Peregrinos en Lourdes"
              />

              <div className="grotto-placeholder">
                <div style={{ textAlign: "center", position: "relative", padding: "2rem" }}>
                  <div style={{ fontSize: "5rem", color: "rgba(184,151,90,0.5)" }}>🕊</div>

                  <div
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "1.1rem",
                      fontStyle: "italic",
                      color: "rgba(184,151,90,0.7)",
                      marginTop: "1rem",
                      lineHeight: "1.5"
                    }}
                  >
                    "Yo soy la<br />Inmaculada Concepción"
                  </div>

                  <div
                    style={{
                      fontSize: "0.65rem",
                      letterSpacing: "0.15em",
                      color: "rgba(255,255,255,0.25)",
                      textTransform: "uppercase",
                      marginTop: "1rem"
                    }}
                  >
                    Nuestra Señora a Bernadette
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pilgrimage" id="peregrinacion">
        <div className="pilgrimage-inner">
          <div className="pilgrimage-header">
            <div>
              <div className="section-tag reveal">Cómo peregrinar</div>
              <h2 className="section-title light reveal reveal-delay-1">Tres maneras de<br /><em>vivir Lourdes</em></h2>
            </div>
          </div>
          <div className="cards">
            <a href="/Peregrinacion#como-participar" className="card reveal">
              <span className="card-number">01</span>
              
              <h3>Enfermo o persona<br />con discapacidad</h3>
              <p>Son los protagonistas de la peregrinación. Todo nuestro esfuerzo y cuidado están orientados a que puedan vivir esta experiencia espiritual con plenitud, sintiéndose acompañados en todo momento.</p>
            </a>
            <a href="/Peregrinacion#como-participar" className="card reveal reveal-delay-1">
              <span className="card-number">02</span>
              
              <h3>Peregrino</h3>
              <p>Viaja como parte del grupo y participa en todas las celebraciones, procesiones y momentos espirituales del Santuario. Una experiencia transformadora que marca para siempre a quien la vive.</p>
            </a>
            <a href="/Peregrinacion#como-participar" className="card reveal reveal-delay-2">
              <span className="card-number">03</span>
              
              <h3>Hospitalario</h3>
              <p>Dedica su tiempo y corazón al servicio de los demás. Son el alma de la Hospitalidad: su entrega, alegría y generosidad hacen posible que la peregrinación sea una realidad cada año.</p>
            </a>
          </div>
        </div>
      </section>

      <div className="next-pilgrimage">
        <div className="next-info">
          <div className="section-tag">Próxima peregrinación</div>

          <h2>
            Lourdes 2026<br />Junio 25 – 28
          </h2>

          <p>
            Aquí tienes toda la información sobre el programa, formas de participación e inscripción.
          </p>
        </div>

        <div className="next-date">
          <div className="date-display">
            <div className="date-block">
              <span className="date-num">25</span>
              <span className="date-unit">Jun</span>
            </div>

            <div className="date-separator">
              —
            </div>

            <div className="date-block">
              <span className="date-num">28</span>
              <span className="date-unit">Jun</span>
            </div>
          </div>

          <div className="next-date">
            <a href="/Peregrinacion#programa" className="btn-primary">
              Más información →
            </a>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeEpiyGVBPMFfygvvSdujNUY2rAPf3O7yf0UaAUMc-JrtaZ4w/viewform?usp=sharing"
              className="btn-primary reveal"
              style={{ flexShrink: 0 }}
            >
              Inscríbete en la peregrinación →
            </a>
          </div>
        </div>
      </div>

      <section>
        <div className="testimonial-section">
          <div className="testimonial-label">
            <div className="section-tag reveal">Testimonios</div>
            <h2 className="reveal reveal-delay-1">
              Lo que dicen<br />quienes han<br />vivido Lourdes
            </h2>
          </div>
          <Testimonials quotes={testimonialData}/>
        </div>
      </section>

      <section className="know-more" id="saber-mas">
        <div className="know-more-inner">
          <div className="know-more-header reveal">
            <div className="section-tag" style={{ justifyContent: "center" }}>
              Profundiza
            </div>

            <h2 className="section-title" style={{ textAlign: "center" }}>
              Saber más sobre <em>Lourdes</em>
            </h2>
          </div>

    <div className="links-grid">
      <a href="/Historia/Apariciones" className="link-card reveal">
        
        <h3>Las Apariciones</h3>
        <p>Dieciocho apariciones de la Virgen a Bernadette Soubirous en 1858, que cambiaron para siempre el pequeño pueblo de los Pirineos.</p>
        <div className="link-card-arrow">Leer más →</div>
      </a>
      <a href="/Historia/Bernadette" className="link-card reveal reveal-delay-1">
        
        <h3>Vida de Bernadette</h3>
        <p>La Historia de la joven pastora que recibió los mensajes de la Inmaculada, su vida sencilla y su camino hacia la santidad.</p>
        <div className="link-card-arrow">Leer más →</div>
      </a>
      <a href="/Historia/Milagros" className="link-card reveal reveal-delay-2">
        
        <h3>Milagros</h3>
        <p>La Iglesia ha reconocido numerosos milagros en Lourdes: Historias de fe, curación y transformación.</p>
        <div className="link-card-arrow">Leer más →</div>
      </a>
      <a href="/Historia/Mensaje" className="link-card reveal reveal-delay-3">
        
        <h3>El Mensaje</h3>
        <p>Penitencia, oración y amor a los más pobres: el mensaje de Nuestra Señora en Lourdes sigue siendo profundamente actual.</p>
        <div className="link-card-arrow">Leer más →</div>
      </a>
    </div>
  </div>
</section>

      <section className="magazine" id="revista">
        <div className="magazine-inner">
          <div className="magazine-text">
            <div className="section-tag reveal">Publicación</div>
            <h2 className="section-title light reveal reveal-delay-1">Revista de la<br /><em>Hospitalidad</em></h2>
            <p className="reveal reveal-delay-2">
              Cada año publicamos nuestra revista, preparada con cariño para toda la familia de la Hospitalidad de La Rioja: artículos, testimonios, reflexiones y noticias de nuestra comunidad.
            </p>
            <a href="" download="/assets/docs/revistas/2026.pdf" className="btn-primary reveal reveal-delay-3" id="magazine-download">Descargar la última revista →</a>
          </div>
          <div className="magazine-cover reveal">
            <div className="mag-frame">
              <div className="mag-frame-inner">
                <a href="/assets/docs/revistas/2026.pdf" target="_blank">
                  <img src="/assets/images/cover/2026.jpg" alt="Portada revista" />
                </a>
              </div>
              <div className="mag-badge">Primavera 2026</div>
            </div>
          </div>
        </div>
      </section>

      <section id="contacto">
        <div className="contact">
          <div className="contact-info">
            <div className="section-tag reveal">Contacto</div>
            <h2 className="section-title reveal reveal-delay-1">¿Tienes<br /><em>alguna duda?</em></h2>
            <p className="reveal reveal-delay-2">¿Quieres saber algo sobre la peregrinación, cómo participar o simplemente conocernos mejor? Escríbenos, estaremos encantados de responderte.</p>
            <div className="contact-links reveal reveal-delay-2">

              <a href="https://www.lourdes-france.com/es/" className="contact-link">
                <img className="contact-link-icon" src="https://www.lourdes-france.org/wp-content/uploads/2020/01/cropped-logo-ok-192x192.jpg" alt="" />
                Santuario de Lourdes
              </a>

              <a href="https://www.iglesiaenlarioja.org/" className="contact-link" target="_blank">
                <img className="contact-link-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Escudo_de_la_Diócesis_de_Calahorra_y_La_Calzada-Logroño.svg/120px-Escudo_de_la_Diócesis_de_Calahorra_y_La_Calzada-Logroño.svg.png" />
                Iglesia en La Rioja
              </a>

              <a href="/Noticias" className="contact-link" target="_blank">
                <img className="contact-link-icon" src="https://img.icons8.com/?size=256&id=9981&format=png" alt="" />
                Noticias de la Hospitalidad
              </a>

            </div>
          </div>
          <div className="contact-form-wrapper reveal reveal-delay-2">
            <div className="contact-form">
              <div className="form-row">
                <div className="form-field">
                  <label>Nombre</label>
                  <input type="text" placeholder="Tu nombre" />
                </div>
                <div className="form-field">
                  <label>Email</label>
                  <input type="email" placeholder="tu@email.com" />
                </div>
              </div>
              <div className="form-field">
                <label>Asunto</label>
                <input type="text" placeholder="¿En qué podemos ayudarte?" />
              </div>
              <div className="form-field">
                <label>Mensaje</label>
                <textarea placeholder="Escribe tu mensaje aquí…"></textarea>
              </div>
              <button className="btn-submit">Enviar mensaje</button>
            </div>
          </div>
        </div>
      </section>
*/