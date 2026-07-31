"use client";

import { useEffect } from "react";

/**
 * Behaviour that operates across already-rendered markup: scroll reveals,
 * metric counters, the cursor-following project puck, the hero headline split,
 * the orb, and section magnetism.
 *
 * These read the DOM directly because they act on ported markup rather than on
 * component state. Everything is cleaned up on unmount, and the whole layer
 * no-ops under prefers-reduced-motion.
 */
export default function MotionLayer() {
  useEffect(() => {
    const D = document;
    const H = D.documentElement;

    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const FINE = matchMedia("(hover:hover) and (pointer:fine)").matches;

    const $ = (s: string, r: ParentNode = D) =>
      Array.from(r.querySelectorAll<HTMLElement>(s));

    H.classList.add("od-anim");
    const cleanups: Array<() => void> = [];

    /* ---------- nav panel: open/close ----------
       The old runtime owned this; without it the panel sat open on every load. */
    const navBtn = D.querySelector<HTMLElement>(".header-menu-link");
    const navPanel = D.querySelector<HTMLElement>(".header-menu-wrap");
    if (navBtn && navPanel) {
      // the panel shipped with no way out once the old runtime was removed
      let closeBtn = navPanel.querySelector<HTMLElement>(".od-nav-close");
      if (!closeBtn) {
        closeBtn = D.createElement("button");
        closeBtn.className = "od-nav-close";
        closeBtn.setAttribute("type", "button");   // .type needs HTMLButtonElement typing
        closeBtn.setAttribute("aria-label", "Close menu");
        closeBtn.textContent = "✕";
        navPanel.appendChild(closeBtn);
      }

      const setOpen = (open: boolean) => {
        navPanel.classList.toggle("od-nav-open", open);
        navBtn.setAttribute("aria-expanded", String(open));
        H.classList.toggle("od-nav-lock", open);
        if (open) closeBtn!.focus();
      };
      const onClose = (e: Event) => {
        e.stopPropagation();
        setOpen(false);
      };
      closeBtn.addEventListener("click", onClose);
      cleanups.push(() => closeBtn!.removeEventListener("click", onClose));
      navBtn.setAttribute("role", "button");
      navBtn.setAttribute("aria-expanded", "false");
      navBtn.setAttribute("aria-controls", "od-nav");
      navPanel.id = "od-nav";

      const toggle = (e: Event) => {
        e.preventDefault();
        setOpen(!navPanel.classList.contains("od-nav-open"));
      };
      const closeOnLink = (e: Event) => {
        if ((e.target as HTMLElement).closest(".menu-link")) setOpen(false);
      };
      const onKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") setOpen(false);
      };
      const onOutside = (e: MouseEvent) => {
        const t = e.target as Node;
        if (!navPanel.contains(t) && !navBtn.contains(t)) setOpen(false);
      };

      navBtn.addEventListener("click", toggle);
      navPanel.addEventListener("click", closeOnLink);
      D.addEventListener("keydown", onKey);
      D.addEventListener("click", onOutside);
      cleanups.push(() => {
        navBtn.removeEventListener("click", toggle);
        navPanel.removeEventListener("click", closeOnLink);
        D.removeEventListener("keydown", onKey);
        D.removeEventListener("click", onOutside);
        H.classList.remove("od-nav-lock");
      });
    }

    /* ---------- reveals: repeatable in AND out ---------- */
    const GROUPS = [
      // section eyebrows ("/ / / / OUR TEAM") and their headings — these were
      // never in the list, so they appeared once and then sat static
      ".about-t,.service-top-left-text,.project-t,.team-top-text,.testi-t,.contact-t",
      ".about-h2,.team-top-h2,.contact-h2,.project-top-h2,.testimonial-h2",
      ".hero-text-wrap,.hero-fast-text,.hero-bottom-text,.hero-right-img-content-wrap",
      ".about-left-content-wrap,.about-right-content-wrap",
      ".od-svc-row",
      ".project-left-bottom-content-wrap,.project-left-bottom-content-wrap-02," +
        ".project-right-bottom-content-wrap-02,.project-right-bottom-content-wrap-03",
      ".team-item-right",
      ".testimonial-item",
      ".contact-left-top-content-wrap,.contact-left-center-wrap," +
        ".contact-left-bottom-content-wrap,.contact-right-from-wrap",
      ".footer-top-left-content,.footer-top-right-content,.footer-bottom-content-wrap",
    ];

    const marked: HTMLElement[] = [];
    GROUPS.forEach((sel) =>
      $(sel).forEach((el, i) => {
        if (el.hasAttribute("data-od-r")) return;
        el.setAttribute("data-od-r", "");
        el.style.setProperty("--od-d", `${Math.min(i, 6) * 80}ms`);
        marked.push(el);
      })
    );
    // reveal what is already on screen in the same tick, so nothing flashes
    marked.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < innerHeight && r.bottom > 0) el.classList.add("od-in");
    });

    const revealIO = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          const el = e.target as HTMLElement;
          if (e.isIntersecting) {
            el.classList.remove("od-out");
            el.classList.add("od-in");
          } else {
            el.classList.remove("od-in");
            el.classList.toggle("od-out", e.boundingClientRect.top < 0);
          }
        }),
      // horizontal margin is deliberately huge: an element sitting outside the
      // viewport on the x-axis never intersects, so it would stay at opacity 0
      // forever. Vertical position is what should gate a reveal, not horizontal.
      { rootMargin: "0px 100% -10% 100%", threshold: 0.06 }
    );
    marked.forEach((el) => revealIO.observe(el)); // never unobserved: replays
    cleanups.push(() => revealIO.disconnect());

    // failsafe: nothing may remain invisible. If an element is still unrevealed
    // after 4s it is shown regardless — a missing animation beats missing content.
    const failsafe = setTimeout(() => {
      marked.forEach((el) => {
        if (!el.classList.contains("od-in") && !el.classList.contains("od-out")) {
          el.classList.add("od-in");
        }
      });
    }, 4000);
    cleanups.push(() => clearTimeout(failsafe));

    /* ---------- metric counters ---------- */
    const counterIOs: IntersectionObserver[] = [];
    $(".project-bottom-h2,.testi-top-t").forEach((el) => {
      const raw = el.textContent?.replace(/ /g, " ").trim() ?? "";
      const m = raw.match(/^(\D*?)([\d.,]+)(.*)$/);
      if (!m) return;
      const [, pre, numStr, post] = m;
      const target = parseFloat(numStr.replace(/,/g, ""));
      if (!isFinite(target)) return;
      const dp = (numStr.split(".")[1] || "").length;

      el.style.fontVariantNumeric = "tabular-nums"; // otherwise digits jitter
      let frame = 0;
      const render = (v: number) => {
        el.textContent = pre + v.toFixed(dp) + post;
      };
      const run = () => {
        cancelAnimationFrame(frame);
        const t0 = performance.now();
        const step = (t: number) => {
          const p = Math.min(1, (t - t0) / 1500);
          render(target * (1 - Math.pow(1 - p, 3))); // easeOutCubic
          if (p < 1) frame = requestAnimationFrame(step);
          else el.textContent = raw;
        };
        frame = requestAnimationFrame(step);
      };
      render(0);
      const io = new IntersectionObserver(
        (entries) =>
          entries.forEach((e) => {
            if (e.isIntersecting) run();
            else {
              cancelAnimationFrame(frame);
              render(0);
            }
          }),
        { threshold: 0.4 }
      );
      io.observe(el);
      counterIOs.push(io);
      cleanups.push(() => cancelAnimationFrame(frame));
    });
    cleanups.push(() => counterIOs.forEach((io) => io.disconnect()));

    /* ---------- hero headline: per-letter cursor response ---------- */
    const h1 = D.querySelector<HTMLElement>(".hero-bottom-h1");
    if (h1 && !h1.querySelector(".od-ch")) {
      const raw = (h1.textContent ?? "").replace(/\s+/g, " ").trim();
      h1.textContent = "";
      const shell = D.createElement("span");
      shell.className = "od-h1";
      raw.split("").forEach((c) => {
        const s = D.createElement("span");
        s.className = "od-ch" + (c === " " ? " od-sp" : "");
        s.textContent = c === " " ? " " : c;
        shell.appendChild(s);
      });
      h1.appendChild(shell);

      if (FINE) {
        const chars = $(".od-ch", shell);
        let pending = false;
        let cxp = 0;
        let cyp = 0;
        const move = (e: MouseEvent) => {
          cxp = e.clientX;
          cyp = e.clientY;
          if (pending) return;
          pending = true;
          requestAnimationFrame(() => {
            pending = false;
            chars.forEach((c) => {
              const r = c.getBoundingClientRect();
              const dx = cxp - (r.left + r.width / 2);
              const dy = cyp - (r.top + r.height / 2);
              const lift = Math.max(0, 1 - Math.hypot(dx, dy) / 190);
              if (lift > 0.02) {
                c.classList.add("od-near");
                c.style.setProperty("--od-lift", (lift * 26).toFixed(1));
              } else {
                c.classList.remove("od-near");
                c.style.removeProperty("--od-lift");
              }
            });
          });
        };
        const leave = () =>
          chars.forEach((c) => {
            c.classList.remove("od-near");
            c.style.removeProperty("--od-lift");
          });
        shell.addEventListener("mousemove", move, { passive: true });
        shell.addEventListener("mouseleave", leave);
        cleanups.push(() => {
          shell.removeEventListener("mousemove", move);
          shell.removeEventListener("mouseleave", leave);
        });
      }
    }

    /* ---------- project cards: circle rides the cursor, x-rays the card ---------- */
    const CARDS =
      ".project-left-bottom-content-wrap,.project-left-bottom-content-wrap-02," +
      ".project-right-bottom-content-wrap-02,.project-right-bottom-content-wrap-03";
    $(CARDS).forEach((card) => {
      let puck = card.querySelector<HTMLElement>(".od-puck");
      if (!puck) {
        puck = D.createElement("div");
        puck.className = "od-puck";
        puck.textContent = "Open project";
        card.appendChild(puck);
      }
      const p = puck;
      let want = false;
      let px = 0;
      let py = 0;

      const enter = (e: MouseEvent) => {
        const r = card.getBoundingClientRect();
        p.style.transform = `translate3d(${e.clientX - r.left}px,${e.clientY - r.top}px,0) scale(.4)`;
        card.classList.add("od-card-hot");
      };
      const move = (e: MouseEvent) => {
        const r = card.getBoundingClientRect();
        px = e.clientX - r.left;
        py = e.clientY - r.top;
        if (want) return;
        want = true;
        requestAnimationFrame(() => {
          want = false;
          p.style.transform = `translate3d(${px}px,${py}px,0) scale(1)`;
        });
      };
      const leave = () => card.classList.remove("od-card-hot");

      card.addEventListener("mouseenter", enter);
      card.addEventListener("mousemove", move, { passive: true });
      card.addEventListener("mouseleave", leave);
      cleanups.push(() => {
        card.removeEventListener("mouseenter", enter);
        card.removeEventListener("mousemove", move);
        card.removeEventListener("mouseleave", leave);
      });
    });

    /* ---------- cursor bus: orb + headline lean ---------- */
    if (FINE) {
      const orbs = $(".about-shap-img-2");
      const texts = $(".footer-header,.footer-text,.footer-bottom-text,.contact-h2");
      texts.forEach((t) => t.classList.add("od-cursor-text"));

      let mx = 0;
      let my = 0;
      let cx = 0;
      let cy = 0;
      let ticking = false;

      const pump = () => {
        ticking = false;
        cx += (mx - cx) * 0.12;
        cy += (my - cy) * 0.12;

        texts.forEach((t) => {
          const r = t.getBoundingClientRect();
          if (r.bottom < 0 || r.top > innerHeight) return;
          t.style.setProperty("--od-mx", (cx - (r.left + r.width / 2)).toFixed(1));
          t.style.setProperty("--od-my", (cy - (r.top + r.height / 2)).toFixed(1));
        });

        orbs.forEach((o) => {
          const r = o.getBoundingClientRect();
          if (!r.width) return;
          const dx = cx - (r.left + r.width / 2);
          const dy = cy - (r.top + r.height / 2);
          const near = Math.hypot(dx, dy) < Math.max(r.width, r.height) * 0.75 + 180;
          o.classList.toggle("od-orb-hot", near);
          if (near) {
            o.style.setProperty("--od-mx", `${dx.toFixed(1)}px`);
            o.style.setProperty("--od-my", `${dy.toFixed(1)}px`);
          }
        });

        if (Math.abs(mx - cx) > 0.4 || Math.abs(my - cy) > 0.4) {
          ticking = true;
          requestAnimationFrame(pump);
        }
      };
      const onMove = (e: MouseEvent) => {
        mx = e.clientX;
        my = e.clientY;
        if (!ticking) {
          ticking = true;
          requestAnimationFrame(pump);
        }
      };
      addEventListener("mousemove", onMove, { passive: true });
      cleanups.push(() => removeEventListener("mousemove", onMove));
    }

    /* ---------- section magnetism ---------- */
    const secs = $("section[id]");
    if (secs.length > 1) {
      let idle: ReturnType<typeof setTimeout>;
      let animating = false;
      let lastY = scrollY;
      const onScroll = () => {
        if (animating) return;
        clearTimeout(idle);
        idle = setTimeout(() => {
          const dir = scrollY - lastY;
          lastY = scrollY;
          if (Math.abs(dir) < 2) return;
          let best: HTMLElement | null = null;
          let bestD = Infinity;
          secs.forEach((s) => {
            const d = Math.abs(s.getBoundingClientRect().top);
            if (d < bestD) {
              bestD = d;
              best = s;
            }
          });
          // only pull when they have already committed most of the way
          if (!best || bestD < 8 || bestD > innerHeight * 0.28) return;
          animating = true;
          (best as HTMLElement).scrollIntoView({ behavior: "smooth", block: "start" });
          setTimeout(() => {
            animating = false;
            lastY = scrollY;
          }, 700);
        }, 160);
      };
      addEventListener("scroll", onScroll, { passive: true });
      cleanups.push(() => {
        removeEventListener("scroll", onScroll);
        clearTimeout(idle);
      });
    }

    /* ---------- hero parallax ---------- */
    const heroImg = D.querySelector<HTMLElement>(".hero-right-img-content-wrap");
    if (heroImg) {
      let pending = false;
      const onScroll = () => {
        if (pending) return;
        pending = true;
        requestAnimationFrame(() => {
          pending = false;
          heroImg.style.transform = `translate3d(0,${(Math.min(scrollY, 900) * -0.055).toFixed(1)}px,0)`;
        });
      };
      addEventListener("scroll", onScroll, { passive: true });
      cleanups.push(() => removeEventListener("scroll", onScroll));
    }

    return () => {
      cleanups.forEach((fn) => fn());
      H.classList.remove("od-anim");
    };
  }, []);

  return null;
}
