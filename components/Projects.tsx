import Link from "next/link";
import { getProject } from "../lib/content";
import { FORM_ROUTES, FORM_SHOWCASE_CTA_LABEL } from "../lib/forms";

const card = (slug: string) => {
  const project = getProject(slug);
  if (!project) throw new Error(`Projects.tsx: no project found for slug "${slug}"`);
  return {
    href: `/work/${slug}`,
    formHref: FORM_ROUTES[project.formTarget],
    formLabel: FORM_SHOWCASE_CTA_LABEL[project.formTarget],
  };
};

export default function Projects() {
  const hash = card("hash-designs-brand-identity");
  const fascanvas = card("fascanvas-brand-identity");
  const valgee = card("valgee-transport-services");
  const storied = card("storied-and-illustrious-brand-identity");

  return (
    <>
      <section id={"project"} className={"projects"}><div className={"w-layout-blockcontainer project-container w-container"}><div className={"project-row"}><div className={"project-top-box"}><div className={"project-left-content-wrap"}><div className={"project-left-top-content-wrap"}><div className={"project-left-text"}>/ / / Featured Projects</div><h2 className={"project-left-title"}>Showcasing Omnidot&#x27;s Recent Brand &amp; Design Projects.</h2><Link href={"/work"} className={"od-cta"} aria-label={"View all work"}><span className={"od-cta-roll"}><span>View all work</span><span aria-hidden={true}>View all work</span></span><span className={"od-cta-mark"} aria-hidden={true}>→</span></Link></div><div className={"project-bottom-item-wrap"}>
        <div className={"project-left-bottom-content-wrap"}>
          <Link href={hash.href} className={"od-card-link"}>
            <img src="/assets/work/hash-designs/cover.jpg" loading={"lazy"} alt={""} className={"project-img-two"} />
            <div className={"project-left-bottom-content"}><h3 className={"product-bottom-h3"}>Hash Designs: Brand Identity</h3><p className={"project-paragraph"}>Identity for an interior design &amp; styling studio</p></div>
          </Link>
          <Link href={hash.formHref} className={"od-cta-mini"}>{hash.formLabel}</Link>
        </div>
        <div className={"project-left-bottom-content-wrap-02"}>
          <Link href={fascanvas.href} className={"od-card-link"}>
            <img src="/assets/work/fascanvas/cover.jpg" loading={"lazy"} alt={""} className={"project-img-four"} />
            <div className={"project-left-bottom-content"}><h3 className={"product-bottom-h3"}>FasCanvas: Brand Identity</h3><p className={"project-paragraph"}>Identity for a photography studio &amp; set design brand</p></div>
          </Link>
          <Link href={fascanvas.formHref} className={"od-cta-mini"}>{fascanvas.formLabel}</Link>
        </div>
      </div></div><div className={"project-right-content-wrap"}>
        <div className={"project-right-bottom-content-wrap-02"}>
          <Link href={valgee.href} className={"od-card-link"}>
            <img src="/assets/work/valgee/cover.jpg" loading={"lazy"} alt={""} className={"image-2"} />
            <div className={"project-left-bottom-content"}><h3 className={"product-bottom-h3"}>Valgee: Transport Services</h3><p className={"project-paragraph"}>Premium identity &amp; fleet branding for a private transport service</p></div>
          </Link>
          <Link href={valgee.formHref} className={"od-cta-mini"}>{valgee.formLabel}</Link>
        </div>
        <div className={"project-right-bottom-content-wrap-03"}>
          <Link href={storied.href} className={"od-card-link"}>
            <img src="/assets/work/storied-and-illustrious/cover.jpg" loading={"lazy"} alt={""} className={"project-img-three"} />
            <div className={"project-left-bottom-content"}><h3 className={"product-bottom-h3"}>Storied &amp; Illustrious</h3><p className={"project-paragraph"}>Identity for a strategy &amp; storytelling consultancy</p></div>
          </Link>
          <Link href={storied.formHref} className={"od-cta-mini"}>{storied.formLabel}</Link>
        </div>
      </div></div><div className={"project-border-wrap"}></div><div className={"project-bottom-box"}><div className={"w-layout-blockcontainer project-container-2 w-container"}><div className={"project-row-2"}><div className={"project-content-wrap"}><div className={"project-item"}><h2 className={"project-bottom-h2"}>10+</h2><div className={"project-bottom-t"}>Years of Experience</div></div><div className={"project-item"}><h2 className={"project-bottom-h2"}>100%</h2><div className={"project-bottom-t"}>Happy Customers</div></div><div className={"project-item"}><h2 className={"project-bottom-h2"}>240+</h2><div className={"project-bottom-t"}>Successful projects</div></div><div className={"project-item"}><h2 className={"project-bottom-h2"}>50+</h2><div className={"project-bottom-t"}>Industries served</div></div></div></div></div></div></div></div><div className={"project-line-wrap"}><div className={"project-line-one"}></div><div className={"project-line-one"}></div></div></section>
    </>
  );
}
