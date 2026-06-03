type Props = {
    theme: string;
    data: {
        parentPage: string;
        separator: string;
        page: string;
        eyebrow: string;
        title: string;
        enfasis: string;
        paragraph: string;
        image: string;
        alt: string;
    };
};

export default function Cover({ theme, data }: Props ) {
  const className = `cover ${theme}`;
  
  const showBreadcrumb = data.page !== "Inicio";

  return (
    <section className={className}>
        <div className="cover-left">
            {showBreadcrumb && (
            <div className="page-breadcrumb">
            <a href="/">{data.parentPage}</a>
            <span>{data.separator}</span>
            <span>{data.page}</span>
            </div>
        )}
            <div className="section-tag">{data.eyebrow}</div>
            <h1 className="page-title">{data.title} <em>{data.enfasis}</em></h1>
            <p className="page-lead">{data.paragraph}</p>
        </div>
            <div className="page-hero-right">
                <img
                src={data.image}
                alt={data.alt}
                />
            </div>
    </section>
  )
}