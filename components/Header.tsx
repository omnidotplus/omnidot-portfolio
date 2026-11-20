import Link from "next/link";
import Wordmark from "./Wordmark";
import FormLink from "./FormLink";

/**
 * "Book a Service" now goes to /work rather than opening a form picker.
 *
 * The reasoning: this is a showcase site. Sending someone straight into a
 * brief asks them to commit before they have seen anything, and the picker it
 * replaced made them choose a discipline before they knew which one they
 * wanted. The work page answers both — it shows what the studio does, and
 * every piece on it carries its own CTA into the right brief.
 *
 * The nav panel still links both briefs directly, for the visitor who already
 * knows what they want.
 */
export default function Header() {
  return (
    <>
      <section className={"header section-2"}><div className={"w-layout-blockcontainer header-container w-container"}><div className={"header-row"}><div className={"header-logo-wrap"}><div data-animation={"default"} data-collapse={"all"} data-duration={"400"} data-easing={"ease"} data-easing2={"ease"} role={"banner"} className={"header-wrapper w-nav"}><a href={"/"} aria-current={"page"} className={"header-logo-link w-nav-brand w--current"}><Wordmark /></a></div><div data-animation={"default"} data-collapse={"all"} data-duration={"400"} data-easing={"ease"} data-easing2={"ease"} role={"banner"} className={"header-wrapper w-nav"}><a href={"/"} aria-current={"page"} className={"header-logo-link w-nav-brand w--current"}><Wordmark /></a></div></div><div className={"heading-menu-wrap"}><div className={"heading-menu-box"}><a href={"#"} className={"header-menu-link w-inline-block"}><img loading={"lazy"} src="/assets/6a5e950d52478c467739fde1_Frame.png" alt={"Blue plus sign icon on transparent background."} className={"heading-menu-img"} /><div className={"heading-text"}>Menu</div></a></div><div className={"header-menu-wrap"}><div className={"header-menu-item-wrapper"}><div className={"header-menu-img-wrap"}><a href={"/"} aria-current={"page"} className={"header-logo-link w-nav-brand w--current"}><Wordmark /></a></div><div className={"header-menu-text-wrap"}><div className={"heading-menu-item-wrap"}><Link href={"/work"} className={"menu-link"}>Work</Link></div><div className={"heading-menu-item-wrap"}><a href={"#about"} className={"menu-link"}>About</a></div><div className={"heading-menu-item-wrap"}><a href={"#service"} className={"menu-link"}>Services</a></div><div className={"heading-menu-item-wrap"}><Link href={"/work"} className={"menu-link"}>Projects</Link></div><div className={"heading-menu-item-wrap"}><a href={"#team"} className={"menu-link"}>Team</a></div><div className={"heading-menu-item-wrap"}><a href={"#testimonial"} className={"menu-link"}>Testimonials</a></div><div className={"heading-menu-item-wrap"}><a href={"#contact"} className={"menu-link"}>Contact</a></div><div className={"heading-menu-item-wrap"}><FormLink target={"website"} variant={"general"} className={"menu-link"} /></div><div className={"heading-menu-item-wrap"}><FormLink target={"brand"} variant={"general"} className={"menu-link"} /></div></div></div></div></div><div className={"heading-right-content-wrap"}><Link href={"/work"} className={"od-cta"} aria-label={"Book a Service. See the studio's work."}><span className={"od-cta-roll"}><span>Book a Service</span><span aria-hidden={true}>See the work</span></span><span className={"od-cta-mark"} aria-hidden={true}>→</span></Link></div></div></div></section>
    </>
  );
}
