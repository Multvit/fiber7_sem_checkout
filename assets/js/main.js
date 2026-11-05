/* =========================================================
   Fiber SE7E · Multvit — interações e motion
   ========================================================= */

/* ===================== CONFIGURAÇÃO ===================== */
const CONFIG = {
  checkout: {
    1: "https://www.multvit.com.br/produtos/fiberse7e/",
    2: "https://www.multvit.com.br/produtos/combo-2-multvit-fiber-se7e-400g/",
    4: "https://www.multvit.com.br/produtos/combo-4-multvit-fiber-se7e-400g/",
  },
  whatsapp: "https://wa.me/554498400223?text=" + encodeURIComponent("Olá! Tenho interesse no Fiber SE7E e gostaria de tirar algumas dúvidas."),
  metaPixelId: "1365038310604549",
  clarityId: "u1ojh44jk2",
  // Efeito de fundo do hero e do CTA final: "folhas" (folhas do logo caindo) ou "po" (pó se dissolvendo)
  particulas: "folhas",
};
/* ======================================================== */

(function () {
  "use strict";

  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = matchMedia("(hover: hover) and (pointer: fine)").matches;
  const M = window.Motion;
  const animated = document.documentElement.classList.contains("m") && !!M;
  const ease = [0.2, 0.8, 0.2, 1];

  /* ---------- Tracking ---------- */
  function loadTracking() {
    if (CONFIG.metaPixelId) {
      !function (f, b, e, v, n, t, s) { if (f.fbq) return; n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments); };
        if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = "2.0"; n.queue = []; t = b.createElement(e); t.async = !0;
        t.src = v; s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s); }(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
      fbq("init", CONFIG.metaPixelId); fbq("track", "PageView");
    }
    if (CONFIG.clarityId) {
      (function (c, l, a, r, i, t, y) { c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments); };
        t = l.createElement(r); t.async = 1; t.src = "https://www.clarity.ms/tag/" + i;
        y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y); })(window, document, "clarity", "script", CONFIG.clarityId);
    }
  }
  const track = (ev, data) => { try { if (typeof fbq === "function") fbq("track", ev, data); } catch (e) {} };
  loadTracking();

  /* ---------- Links ---------- */
  $$(".js-wa").forEach(a => {
    a.href = CONFIG.whatsapp; a.target = "_blank"; a.rel = "noopener";
    a.addEventListener("click", () => track("Contact", { content_name: "WhatsApp Fiber SE7E" }));
  });
  $$(".js-buy").forEach(a => {
    const kit = a.dataset.kit;
    a.href = CONFIG.checkout[kit];
    a.addEventListener("click", () => track("ViewContent", { content_name: `Fiber SE7E - ${kit} pote(s)`, content_type: "product", value: parseFloat(a.dataset.value), currency: "BRL" }));
  });
  const year = $("#year"); if (year) year.textContent = new Date().getFullYear();

  /* ---------- Header: sólido ao rolar, esconde ao descer ---------- */
  const nav = $("#nav"), burger = $("#burger"), menu = $("#menu");
  const hero = $(".hero");
  let lastY = scrollY, ticking = false;
  function onScrollNav() {
    const y = scrollY;
    const overHero = y < (hero ? hero.offsetHeight - 80 : 200);
    nav.classList.toggle("is-solid", !overHero || !menu.hidden);
    if (menu.hidden) nav.classList.toggle("is-hidden", y > lastY && y > 400);
    lastY = y;
  }
  burger.addEventListener("click", () => {
    const open = menu.hidden;
    menu.hidden = !open; burger.setAttribute("aria-expanded", String(open));
    burger.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    nav.classList.remove("is-hidden"); onScrollNav();
  });
  $$("a", menu).forEach(a => a.addEventListener("click", () => { menu.hidden = true; burger.setAttribute("aria-expanded", "false"); onScrollNav(); }));

  /* ---------- Flutuantes (WhatsApp + barra de compra) ---------- */
  const waFloat = $(".wa-float"), buybar = $("#buybar"), kits = $(".final"), footer = $(".footer");
  function onScrollFloat() {
    const past = scrollY > (hero ? hero.offsetHeight * 0.7 : 400);
    const kr = kits.getBoundingClientRect(), fr = footer.getBoundingClientRect();
    const inKits = kr.top < innerHeight * 0.8 && kr.bottom > innerHeight * 0.2;
    const atFooter = fr.top < innerHeight;
    waFloat.classList.toggle("is-on", past);
    buybar.classList.toggle("is-on", past && !inKits && !atFooter);
  }

  /* ---------- Trilha do produto (desenho pelo scroll) + etapas ---------- */
  const steps = $("#detailSteps"), trail = $("#trail");
  const dsKicker = $("#dsKicker"), dsValue = $("#dsValue"), dsLabel = $("#dsLabel"), dsBadge = $(".ds-badge");
  // Caminho sinuoso gerado na altura real da coluna (referência ao intestino ilustrado na embalagem)
  const trailSvg = $("#trailSvg"), trailBg = $("#trailBg");
  let trailLen = 0;
  function buildTrail() {
    if (!steps) return;
    const H = Math.max(200, steps.offsetHeight), W = 40, seg = 170, amp = 14;
    let d = `M${W / 2} 0`, y = 0, dir = 1;
    while (y < H) {
      const ny = Math.min(H, y + seg);
      d += ` C ${W / 2 + amp * dir} ${y + (ny - y) * 0.35}, ${W / 2 + amp * dir} ${y + (ny - y) * 0.65}, ${W / 2} ${ny}`;
      y = ny; dir *= -1;
    }
    trailSvg.setAttribute("viewBox", `0 0 ${W} ${H}`);
    trailSvg.setAttribute("width", W); trailSvg.setAttribute("height", H);
    trailBg.setAttribute("d", d); trail.setAttribute("d", d);
    trailLen = trail.getTotalLength();
    trail.style.strokeDasharray = `${trailLen} ${trailLen}`;
    trail.style.strokeDashoffset = reduce ? "0" : String(trailLen);
  }
  buildTrail();
  addEventListener("load", buildTrail);
  let trailT; addEventListener("resize", () => { clearTimeout(trailT); trailT = setTimeout(() => { buildTrail(); onScrollTrail(); }, 150); });
  function onScrollTrail() {
    if (!steps || reduce || !trailLen) return;
    const r = steps.getBoundingClientRect();
    const p = Math.min(1, Math.max(0, (innerHeight * 0.55 - r.top) / r.height));
    trail.style.strokeDashoffset = String(trailLen * (1 - p));
  }
  let activeStep = -1;
  const dsteps = $$(".dstep");
  function setStep(i) {
    if (i === activeStep) return; activeStep = i;
    dsteps.forEach((s, j) => s.classList.toggle("is-active", j === i));
    const s = dsteps[i];
    dsKicker.textContent = s.dataset.k; dsValue.textContent = s.dataset.v; dsLabel.textContent = s.dataset.l;
    if (!reduce) { dsBadge.classList.remove("swap"); void dsBadge.offsetWidth; dsBadge.classList.add("swap"); }
  }
  function onScrollSteps() {
    const mid = innerHeight * (innerWidth <= 900 ? 0.62 : 0.5);
    let idx = 0;
    dsteps.forEach((s, i) => { if (s.getBoundingClientRect().top < mid) idx = i; });
    setStep(idx);
  }
  setStep(0);

  /* ---------- Parallax leve ---------- */
  const parallax = $$(".parallax");
  function onScrollParallax() {
    if (reduce) return;
    parallax.forEach(el => {
      const r = el.getBoundingClientRect();
      if (r.bottom < 0 || r.top > innerHeight) return;
      const c = r.top + r.height / 2 - innerHeight / 2;
      el.style.transform = `translate3d(0, ${(c * parseFloat(el.dataset.speed)).toFixed(1)}px, 0)`;
    });
  }

  function onScroll() {
    if (ticking) return; ticking = true;
    requestAnimationFrame(() => { onScrollNav(); onScrollFloat(); onScrollTrail(); onScrollSteps(); onScrollParallax(); ticking = false; });
  }
  addEventListener("scroll", onScroll, { passive: true });
  addEventListener("resize", onScroll, { passive: true });
  onScroll();

  /* ---------- Seletor de dose (adulto / criança) ---------- */
  function setProfile(profile) {
    $$(".dose-switch").forEach(sw => {
      sw.dataset.profile = profile;
      $$(".dose-btn", sw).forEach(b => { const on = b.dataset.profile === profile; b.classList.toggle("is-on", on); b.setAttribute("aria-pressed", String(on)); });
    });
    $$(".dose-swap").forEach(el => {
      const v = el.dataset[profile]; if (v == null || el.textContent === v) return;
      el.textContent = v;
      if (!reduce) { el.classList.remove("flip"); void el.offsetWidth; el.classList.add("flip"); }
    });
    $$(".vd-bar").forEach(el => el.style.setProperty("--v", el.dataset[profile]));
  }
  $$(".dose-btn").forEach(b => b.addEventListener("click", () => setProfile(b.dataset.profile)));

  /* ---------- Accordion animado ---------- */
  $$(".acc-item").forEach(d => {
    const sum = $("summary", d), body = $(".acc-body", d);
    sum.addEventListener("click", e => {
      if (reduce || !M) return;
      e.preventDefault();
      if (d.open) {
        M.animate(body, { height: [body.offsetHeight + "px", "0px"], opacity: [1, 0] }, { duration: 0.35, ease }).then(() => { d.open = false; body.style.height = ""; body.style.opacity = ""; });
        d.classList.remove("is-open");
      } else {
        $$(".acc-item[open]").forEach(o => { if (o !== d) o.open = false; });
        d.open = true;
        const h = body.scrollHeight;
        M.animate(body, { height: ["0px", h + "px"], opacity: [0, 1] }, { duration: 0.45, ease }).then(() => { body.style.height = ""; });
      }
    });
  });

  /* ---------- Split de títulos em palavras ---------- */
  function splitWords(el) {
    const walk = node => {
      [...node.childNodes].forEach(n => {
        if (n.nodeType === 3) {
          const frag = document.createDocumentFragment();
          n.textContent.split(/(\s+)/).forEach(part => {
            if (!part) return;
            if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(" ")); return; }
            const o = document.createElement("span"); o.className = "sw";
            const i = document.createElement("span"); i.textContent = part; o.appendChild(i); frag.appendChild(o);
          });
          node.replaceChild(frag, n);
        } else if (n.nodeType === 1) walk(n);
      });
    };
    el.setAttribute("aria-label", el.textContent.replace(/\s+/g, " ").trim());
    walk(el);
    $$(".sw", el).forEach(s => s.setAttribute("aria-hidden", "true"));
  }
  $$(".split").forEach(splitWords);

  /* ---------- Contadores ---------- */
  function countUp(el) {
    const to = parseFloat(el.dataset.to), dec = parseInt(el.dataset.dec || "0", 10);
    const fmt = v => v.toLocaleString("pt-BR", { minimumFractionDigits: dec, maximumFractionDigits: dec });
    if (reduce || !M) { el.textContent = fmt(to); return; }
    M.animate(0, to, { duration: 1.6, ease: [0.16, 1, 0.3, 1], onUpdate: v => { el.textContent = fmt(v); } });
  }

  /* ---------- Coreografia (Motion) ---------- */
  if (animated) {
    const { animate, stagger, inView } = M;
    const mobile = innerWidth <= 900;

    // Hero: entrada
    animate(".hero-title .w", { transform: ["translateY(110%)", "translateY(0%)"] }, { duration: 1.1, delay: stagger(0.09, { startDelay: mobile ? 0.35 : 0.15 }), ease });
    animate(".hero-copy .rv", { opacity: [0, 1], transform: ["translateY(22px)", "translateY(0px)"] }, { duration: 0.9, delay: stagger(0.1, { startDelay: mobile ? 0.7 : 0.55 }), ease });
    animate(".hv-halo", { opacity: [0, 1] }, { duration: 1.6, delay: 0.1 });
    animate(".hv-product", { transform: ["translateZ(60px) scale(.82) rotate(-6deg)", "translateZ(60px) scale(1) rotate(0deg)"] }, { type: "spring", stiffness: 70, damping: 14, delay: 0.2 });
    animate(".hv-product", { opacity: [0, 1], filter: ["blur(16px)", "blur(0px)"] }, { duration: 0.9, delay: 0.2, ease });
    animate(".hv-ring", { opacity: [0, 1] }, { duration: 1.4, delay: 0.7 });
    animate(".hv-orbit", { opacity: [0, 1] }, { duration: 1.2, delay: 0.9 });

    // Títulos de seção: palavra por palavra ao entrar
    $$(".split").forEach(t => {
      inView(t, () => { animate($$(".sw > span", t), { transform: ["translateY(105%)", "translateY(0%)"] }, { duration: 0.95, delay: stagger(0.05), ease }); }, { amount: 0.4 });
    });

    // Reveal em cascata por grupo (fora do hero)
    const groups = new Map();
    $$(".rv").filter(el => !el.closest(".hero")).forEach(el => {
      const g = el.closest(".problem-grid, .ben-grid, .compo-grid, .steps, .kit-grid, .testi-track, .acc, .proof-grid") || el;
      if (!groups.has(g)) groups.set(g, []);
      groups.get(g).push(el);
    });
    groups.forEach((els, g) => {
      inView(g, () => { animate(els, { opacity: [0, 1], transform: ["translateY(28px)", "translateY(0px)"] }, { duration: 0.85, delay: stagger(0.08), ease }); }, { amount: 0.15, margin: "0px 0px -8% 0px" });
    });

    // CTA principal: pulso de atenção após a entrada
    setTimeout(() => animate(".hero-ctas .btn-sun", { scale: [1, 1.04, 1] }, { duration: 0.7, ease: "easeInOut" }), 2600);
  }

  // Contadores (com ou sem Motion)
  const counters = $$(".count");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { countUp(e.target); io.unobserve(e.target); } }), { threshold: 0.6 });
    counters.forEach(c => io.observe(c));
  }

  /* ---------- Tilt 3D + reflexo no pote ---------- */
  const hv = $("#heroVisual"), stage = $("#heroStage"), glare = $(".hv-glare");
  if (!reduce && hv && finePointer) {
    let raf = 0, tx = 0, ty = 0;
    hv.addEventListener("pointermove", e => {
      const r = hv.getBoundingClientRect();
      tx = (e.clientX - r.left) / r.width - 0.5; ty = (e.clientY - r.top) / r.height - 0.5;
      if (raf) return;
      raf = requestAnimationFrame(() => {
        stage.style.transform = `rotateY(${tx * 16}deg) rotateX(${-ty * 12}deg)`;
        glare.style.setProperty("--gx", (tx + 0.5) * 100 + "%"); glare.style.setProperty("--gy", (ty + 0.5) * 100 + "%");
        raf = 0;
      });
    });
    hv.addEventListener("pointerleave", () => { stage.style.transform = ""; });
  }

  /* ---------- Pó se dissolvendo (canvas) ----------
     Grãos finos sobem devagar e, no meio do caminho, se desfazem em um
     anel de luz que se abre e some: o pó dissolvendo na bebida. */
  const css = getComputedStyle(document.documentElement);
  const SUN = css.getPropertyValue("--sun-rgb").trim() || "245,196,0";
  const LEAF = css.getPropertyValue("--leaf-rgb").trim() || "116,217,154";
  const CREAM = css.getPropertyValue("--cream-rgb").trim() || "246,243,234";
  function powder(canvas, opts) {
    if (!canvas || reduce) return;
    const ctx = canvas.getContext("2d");
    let w = 0, h = 0, dpr = 1, running = false, ps = [];
    const host = canvas.parentElement;
    const mobile = () => innerWidth < 900;
    const pickColor = () => { const r = Math.random(); return r < 0.5 ? CREAM : r < 0.78 ? SUN : LEAF; };
    // Concentra parte dos grãos ao redor do produto (lado direito no desktop)
    const pickX = () => (!mobile() && Math.random() < opts.bias) ? w * (0.52 + Math.random() * 0.46) : Math.random() * w;
    const make = init => {
      const max = 320 + Math.random() * 380;
      return {
        x: pickX(), y: init ? Math.random() * h : h * (0.35 + Math.random() * 0.7),
        r: (Math.random() * 1.9 + 1.4) * dpr, vy: (Math.random() * 0.3 + 0.14) * dpr,
        sw: Math.random() * 0.6 + 0.2, ph: Math.random() * 6.28,
        life: init ? Math.random() * max : 0, max, dis: 0.5 + Math.random() * 0.25,
        c: pickColor(), o: Math.random() * 0.35 + 0.5, rings: Math.random() < 0.6 ? 1 : 2,
      };
    };
    function resize() {
      dpr = Math.min(devicePixelRatio || 1, 2);
      w = canvas.width = host.clientWidth * dpr; h = canvas.height = host.clientHeight * dpr;
      ps = Array.from({ length: mobile() ? opts.mobile : opts.desktop }, () => make(true));
    }
    let t = 0;
    function frame() {
      if (!running) return;
      t += 0.016; ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < ps.length; i++) {
        const p = ps[i];
        p.life++; p.y -= p.vy;
        const k = p.life / p.max;
        if (k >= 1 || p.y < -20 * dpr) { ps[i] = make(false); continue; }
        const x = p.x + Math.sin(t * p.sw + p.ph) * 10 * dpr;
        const edge = Math.min(1, p.y / (h * 0.12));
        if (k < p.dis) {
          // grão: ponto sólido com leve brilho
          const a = p.o * Math.min(1, k / 0.12) * edge;
          const g = ctx.createRadialGradient(x, p.y, 0, x, p.y, p.r * 3.2);
          g.addColorStop(0, `rgba(${p.c},${a})`); g.addColorStop(0.35, `rgba(${p.c},${a * 0.55})`); g.addColorStop(1, `rgba(${p.c},0)`);
          ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, p.y, p.r * 3.2, 0, 6.283); ctx.fill();
        } else {
          // dissolução: o grão encolhe e abre um anel que se desfaz
          const q = (k - p.dis) / (1 - p.dis), ease = 1 - Math.pow(1 - q, 3);
          const a = p.o * Math.pow(1 - q, 1.6) * edge;
          const core = p.r * (1 - q);
          if (core > 0.2) { ctx.fillStyle = `rgba(${p.c},${a})`; ctx.beginPath(); ctx.arc(x, p.y, core, 0, 6.283); ctx.fill(); }
          for (let j = 0; j < p.rings; j++) {
            const qq = Math.max(0, ease - j * 0.22);
            if (!qq) continue;
            ctx.strokeStyle = `rgba(${p.c},${a * (1 - j * 0.35)})`;
            ctx.lineWidth = Math.max(0.6 * dpr, p.r * 0.8 * (1 - q * 0.7));
            ctx.beginPath(); ctx.arc(x, p.y, p.r + qq * p.r * 7, 0, 6.283); ctx.stroke();
          }
        }
      }
      requestAnimationFrame(frame);
    }
    resize();
    let rt; addEventListener("resize", () => { clearTimeout(rt); rt = setTimeout(resize, 200); });
    const io = new IntersectionObserver(([e]) => {
      const vis = e.isIntersecting && !document.hidden;
      if (vis && !running) { running = true; requestAnimationFrame(frame); } else if (!vis) running = false;
    });
    io.observe(host);
    document.addEventListener("visibilitychange", () => { if (document.hidden) running = false; else { io.unobserve(host); io.observe(host); } });
  }

  /* ---------- Folhas do logo caindo (canvas) ----------
     Silhuetas da folha da Multvit descem devagar, balançando e girando
     em 3D (o giro achata a folha, como uma folha de verdade virando). */
  function leaves(canvas, opts) {
    if (!canvas || reduce) return;
    const ctx = canvas.getContext("2d");
    let w = 0, h = 0, dpr = 1, running = false, ps = [];
    const host = canvas.parentElement;
    const mobile = () => innerWidth < 900;
    const pickColor = () => { const r = Math.random(); return r < 0.6 ? LEAF : r < 0.85 ? CREAM : SUN; };
    const make = init => ({
      x: Math.random() * w, y: init ? Math.random() * h : -30 * dpr,
      s: (Math.random() * 9 + 7) * dpr, vy: (Math.random() * 0.35 + 0.22) * dpr,
      sw: Math.random() * 0.5 + 0.25, amp: (Math.random() * 30 + 18) * dpr, ph: Math.random() * 6.28,
      rot: Math.random() * 6.28, vr: (Math.random() - 0.5) * 0.012,
      flip: Math.random() * 6.28, vf: Math.random() * 0.02 + 0.008,
      c: pickColor(), o: Math.random() * 0.22 + 0.14, outline: Math.random() < 0.45,
    });
    // folha: ponta afilada, base arredondada e nervura central (como no logo)
    function leaf(p, x, y) {
      const k = p.s, sx = Math.cos(p.flip);
      ctx.save(); ctx.translate(x, y); ctx.rotate(p.rot); ctx.scale(Math.max(0.15, Math.abs(sx)), 1);
      ctx.beginPath();
      ctx.moveTo(0, -k);
      ctx.bezierCurveTo(k * 0.9, -k * 0.55, k * 0.75, k * 0.6, 0, k);
      ctx.bezierCurveTo(-k * 0.75, k * 0.6, -k * 0.9, -k * 0.55, 0, -k);
      const a = p.o * Math.min(1, (h - y) / (h * 0.12) + 0.1);
      if (p.outline) { ctx.strokeStyle = `rgba(${p.c},${a * 1.6})`; ctx.lineWidth = 1.1 * dpr; ctx.stroke(); }
      else { ctx.fillStyle = `rgba(${p.c},${a})`; ctx.fill(); }
      ctx.beginPath(); ctx.moveTo(0, -k * 0.7); ctx.quadraticCurveTo(k * 0.12, 0, 0, k * 1.25);
      ctx.strokeStyle = `rgba(${p.c},${a * 1.4})`; ctx.lineWidth = 0.9 * dpr; ctx.stroke();
      ctx.restore();
    }
    function resize() {
      dpr = Math.min(devicePixelRatio || 1, 2);
      w = canvas.width = host.clientWidth * dpr; h = canvas.height = host.clientHeight * dpr;
      ps = Array.from({ length: mobile() ? opts.mobile : opts.desktop }, () => make(true));
    }
    let t = 0;
    function frame() {
      if (!running) return;
      t += 0.016; ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < ps.length; i++) {
        const p = ps[i];
        p.y += p.vy; p.rot += p.vr + Math.sin(t * p.sw + p.ph) * 0.004; p.flip += p.vf;
        if (p.y > h + 30 * dpr) { ps[i] = make(false); continue; }
        leaf(p, p.x + Math.sin(t * p.sw + p.ph) * p.amp, p.y);
      }
      requestAnimationFrame(frame);
    }
    resize();
    let rt; addEventListener("resize", () => { clearTimeout(rt); rt = setTimeout(resize, 200); });
    const io = new IntersectionObserver(([e]) => {
      const vis = e.isIntersecting && !document.hidden;
      if (vis && !running) { running = true; requestAnimationFrame(frame); } else if (!vis) running = false;
    });
    io.observe(host);
    document.addEventListener("visibilitychange", () => { if (document.hidden) running = false; else { io.unobserve(host); io.observe(host); } });
  }

  if (CONFIG.particulas === "po") {
    powder($("#fibers"), { desktop: 62, mobile: 28, bias: 0.55 });
    powder($("#fibers2"), { desktop: 44, mobile: 20, bias: 0.5 });
  } else {
    leaves($("#fibers"), { desktop: 26, mobile: 12 });
    leaves($("#fibers2"), { desktop: 18, mobile: 9 });
  }
})();
