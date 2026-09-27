const IG_URL = "https://www.instagram.com/divinecollectionn/";
const CART_KEY = "dc_cart_v1";
const LANG_KEY = "dc_lang";

const products = [
  {
    id: 1,
    tags: ["mini", "corset"],
    category: "mini",
    name: { sq: "Fustan korset me dantellë", en: "Lace Corset Mini Dress" },
    color: { sq: "I zi", en: "Black" },
    badge: { sq: "I ri", en: "New" },
    images: [
      "images/Screenshot 2026-09-27 161221.png",
      "images/Screenshot 2026-09-27 161203.png"
    ],
    description: {
      sq: "Mini me mëngë dantelle, dekolte të çelur dhe korset të strukturuar. Siluetë e ngushtë për darka dhe dalje.",
      en: "Mini dress with lace sleeves, an open neckline, and a structured corset waist. A close fit for nights out."
    },
    sizes: ["XS", "S", "M", "L"]
  },
  {
    id: 2,
    tags: ["mini"],
    category: "mini",
    name: { sq: "Fustan mini me thellim V", en: "Plunge V Mini Dress" },
    color: { sq: "I zi", en: "Black" },
    badge: { sq: "Editorial", en: "Editorial" },
    images: ["images/Screenshot 2026-09-27 161228.png"],
    description: {
      sq: "Fustan i zi me mëngë të gjata, thellim V dhe fund të shkurtër të hapur. I pastër, i lehtë dhe gati për udhëtim.",
      en: "Black long-sleeve mini with a deep V and a flared hem. Clean, light, and ready for travel."
    },
    sizes: ["XS", "S", "M", "L"]
  },
  {
    id: 3,
    tags: ["evening"],
    category: "evening",
    name: { sq: "Fustan maxi me choker", en: "Choker Cutout Gown" },
    color: { sq: "I zi", en: "Black" },
    badge: { sq: "Mbrëmje", en: "Evening" },
    images: ["images/Screenshot 2026-09-27 161237.png"],
    description: {
      sq: "Fustan i gjatë me jakë choker, prerje në gjoks, bel të strukturuar dhe të çarë të lartë. Për dasma dhe mbrëmje.",
      en: "Floor-length gown with a choker neckline, chest cutout, structured waist, and high slit. For weddings and evenings."
    },
    sizes: ["XS", "S", "M", "L"]
  },
  {
    id: 4,
    tags: ["evening"],
    category: "evening",
    name: { sq: "Fustan maxi çokollatë", en: "Cocoa Choker Gown" },
    color: { sq: "Çokollatë", en: "Cocoa" },
    badge: { sq: "I ri", en: "New" },
    images: ["images/Screenshot 2026-09-27 161249.png"],
    description: {
      sq: "I njëjti prerje dramatike në ngjyrë çokollatë: jakë e mbështjellë, bel i theksuar dhe fund i gjatë me të çarë.",
      en: "The same dramatic cut in cocoa: draped neckline, defined waist, and a flowing skirt with a high slit."
    },
    sizes: ["XS", "S", "M", "L"]
  },
  {
    id: 5,
    tags: ["evening", "corset"],
    category: "evening",
    name: { sq: "Fustan korset i bardhë", en: "White Corset Gown" },
    color: { sq: "I bardhë", en: "White" },
    badge: { sq: "Statement", en: "Statement" },
    images: ["images/Screenshot 2026-09-27 161328.png"],
    description: {
      sq: "Fustan sirenë me jakë halter, korset të tejdukshëm dhe bel të mbledhur. E bardha që mban vëmendjen.",
      en: "Mermaid gown with a halter neck, sheer corset panel, and ruched waist. White that holds the room."
    },
    sizes: ["XS", "S", "M", "L"]
  },
  {
    id: 6,
    tags: ["mini"],
    category: "mini",
    name: { sq: "Fustan kadife me dantellë", en: "Velvet Lace Mini" },
    color: { sq: "I zi", en: "Black" },
    badge: { sq: "I ri", en: "New" },
    images: ["images/Screenshot 2026-09-27 161338.png"],
    description: {
      sq: "Kadife e zezë me thellim në gjoks, mëngë me dantellë dhe fund të shkurtër me shtresa. Mini për mbrëmje.",
      en: "Black velvet with a deep neckline, lace cuffs, and a tiered lace skirt. An evening mini."
    },
    sizes: ["XS", "S", "M", "L"]
  }
];

const i18n = {
  sq: {
    "meta.desc": "Divine Collection — elegancë e përzgjedhur për femra. Vetëm online. Porosi në DM. Dërgesa në Kosovë, Shqipëri dhe Maqedoni të Veriut. Shumicë dhe pakicë.",
    "nav.collection": "Koleksioni",
    "nav.categories": "Kategoritë",
    "nav.story": "Rreth nesh",
    "nav.visit": "Kontakt",
    "hero.tagline": "Elegancë e përzgjedhur për femra",
    "hero.sub": "Vetëm online · Kosovë, Shqipëri dhe Maqedoni e Veriut",
    "hero.ctaShop": "Shiko koleksionin",
    "hero.ctaIg": "Ndiq në Instagram",
    "cat.all": "Të gjitha",
    "cat.mini": "Mini",
    "cat.evening": "Mbrëmje",
    "cat.corset": "Korset",
    "categories.label": "Kategoritë",
    "categories.title": "Zgjidh siluetën",
    "categories.desc": "Mini, fustane mbrëmjeje dhe korset — të zgjedhura për Divine Collection.",
    "collection.label": "Koleksioni",
    "collection.title": "Pjesë të zgjedhura",
    "collection.desc": "Porosit në DM për madhësinë, shumicën ose pakicën.",
    "editorial.label": "Editorial",
    "editorial.title": "Elegancë.<br>Prani.<br>Divine.",
    "editorial.body": "Fustane që mbajnë hapësirën — për dasma, darka dhe çdo moment që do më shumë.",
    "editorial.cta": "Eksploro",
    "story.label": "Rreth nesh",
    "story.body": "Divine Collection është elegancë e përzgjedhur për femra. Vetëm online — porosit në DM, për vete ose për shumicë.",
    "story.p1": "Elegancë e përzgjedhur për femra",
    "story.p2": "Vetëm online",
    "story.p3": "Dërgesa: Kosovë, Shqipëri, Maqedoni e Veriut",
    "story.p4": "Shumicë dhe pakicë",
    "story.p5": "Porosi përmes Instagram DM",
    "visit.label": "Kontakt & porosi",
    "visit.title": "Porosit në DM",
    "visit.desc": "Na shkruaj për madhësinë, disponueshmërinë, shumicën ose pakicën.",
    "visit.online": "Vetëm online",
    "visit.ship": "Dërgesa",
    "visit.shipPlaces": "Kosovë · Shqipëri · Maqedoni e Veriut",
    "visit.igLink": "Hap Instagram",
    "visit.dm": "Dërgo DM",
    "visit.ig": "Mesazh @divinecollectionn",
    "visit.shop": "Shiko pjesët",
    "footer.tag": "Elegancë e përzgjedhur",
    "price.dm": "Çmimi në DM",
    "modal.add": "Shto në çantë",
    "modal.ig": "Porosit në Instagram",
    "cart.title": "Çanta jote",
    "cart.total": "Pjesë",
    "cart.checkout": "Porosit në Instagram",
    "cart.hint": "Dërgo pjesët në DM — madhësia, çmimi dhe pagesa rregullohen privatisht. Shumicë dhe pakicë.",
    "cart.empty": "Çanta është bosh.",
    "cart.size": "Madhësia",
    "cart.aria": "Çanta",
    "toast.added": "U shtua në çantë",
    "product.view": "Shiko",
    "marquee": ["Elegancë", "Vetëm online", "Kosovë", "Shqipëri", "Maqedoni e Veriut", "Shumicë & pakicë", "Porosit në DM"]
  },
  en: {
    "meta.desc": "Divine Collection — selected elegance for women. Online only. Order via DM. Shipping to Kosovo, Albania and North Macedonia. Wholesale and retail.",
    "nav.collection": "Collection",
    "nav.categories": "Categories",
    "nav.story": "About",
    "nav.visit": "Contact",
    "hero.tagline": "Selected elegance for women",
    "hero.sub": "Online only · Kosovo, Albania and North Macedonia",
    "hero.ctaShop": "Shop the collection",
    "hero.ctaIg": "Follow on Instagram",
    "cat.all": "All",
    "cat.mini": "Mini",
    "cat.evening": "Evening",
    "cat.corset": "Corset",
    "categories.label": "Categories",
    "categories.title": "Choose a silhouette",
    "categories.desc": "Minis, evening gowns, and corsets — selected for Divine Collection.",
    "collection.label": "Collection",
    "collection.title": "Selected pieces",
    "collection.desc": "Order via DM for size, wholesale, or retail.",
    "editorial.label": "Editorial",
    "editorial.title": "Elegance.<br>Presence.<br>Divine.",
    "editorial.body": "Dresses that hold the room — for weddings, nights out, and moments that ask for more.",
    "editorial.cta": "Explore",
    "story.label": "About",
    "story.body": "Divine Collection is selected elegance for women. Online only — order by DM, for yourself or wholesale.",
    "story.p1": "Selected elegance for women",
    "story.p2": "Online only",
    "story.p3": "Shipping: Kosovo, Albania, North Macedonia",
    "story.p4": "Wholesale and retail",
    "story.p5": "Order via Instagram DM",
    "visit.label": "Contact & order",
    "visit.title": "Order via DM",
    "visit.desc": "Message us for size, availability, wholesale, or retail.",
    "visit.online": "Online only",
    "visit.ship": "Shipping",
    "visit.shipPlaces": "Kosovo · Albania · North Macedonia",
    "visit.igLink": "Open Instagram",
    "visit.dm": "Send DM",
    "visit.ig": "Message @divinecollectionn",
    "visit.shop": "Browse pieces",
    "footer.tag": "Selected elegance",
    "price.dm": "Price via DM",
    "modal.add": "Add to bag",
    "modal.ig": "Order on Instagram",
    "cart.title": "Your bag",
    "cart.total": "Pieces",
    "cart.checkout": "Order via Instagram",
    "cart.hint": "Send the pieces in DM — size, price, and payment are arranged privately. Wholesale and retail.",
    "cart.empty": "Your bag is empty.",
    "cart.size": "Size",
    "cart.aria": "Bag",
    "toast.added": "Added to bag",
    "product.view": "View",
    "marquee": ["Elegance", "Online only", "Kosovo", "Albania", "North Macedonia", "Wholesale & retail", "Order via DM"]
  }
};

const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

let lang = localStorage.getItem(LANG_KEY) || "sq";
let activeProduct = null;
let selectedSize = "M";
let activeCategory = "";

function t(key) {
  const value = i18n[lang][key] ?? i18n.en[key] ?? key;
  return value;
}

function loc(obj) {
  if (!obj || typeof obj === "string") return obj;
  return obj[lang] || obj.en || obj.sq || "";
}

function categoryLabel(key) {
  return t(`cat.${key}`);
}

function getCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY) || "[]");
  } catch {
    return [];
  }
}

function saveCart(items) {
  localStorage.setItem(CART_KEY, JSON.stringify(items));
  updateCartUI();
}

function cartCount(items = getCart()) {
  return items.reduce((sum, i) => sum + i.qty, 0);
}

function showToast(msg) {
  const el = $("#toast");
  if (!el) return;
  el.textContent = msg;
  el.classList.add("is-on");
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => el.classList.remove("is-on"), 2200);
}

function applyI18n() {
  document.documentElement.lang = lang;

  $$("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = t(key);
    if (typeof value === "string" && value.includes("<br>")) el.innerHTML = value;
    else if (typeof value === "string") el.textContent = value;
  });

  $$("[data-i18n-aria]").forEach((el) => {
    el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria")));
  });

  $$(".lang-btn").forEach((btn) => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle("is-active", active);
    btn.setAttribute("aria-pressed", String(active));
  });

  const track = $("#marqueeTrack");
  if (track) {
    const items = t("marquee");
    const doubled = [...items, ...items];
    track.innerHTML = doubled
      .map((word, i) => {
        const sep = i < doubled.length - 1 ? "<span>·</span>" : "";
        return `<span>${word}</span>${sep}`;
      })
      .join("");
  }

  document.title =
    lang === "sq"
      ? "Divine Collection — Elegancë e përzgjedhur"
      : "Divine Collection — Selected Elegance";

  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute("content", t("meta.desc"));

  renderProducts();
  updateCartUI();
  if (activeProduct) openProduct(activeProduct.id, true);
}

function setLang(next) {
  lang = next;
  localStorage.setItem(LANG_KEY, lang);
  applyI18n();
}

function filteredProducts() {
  if (!activeCategory) return products;
  return products.filter((p) => p.tags.includes(activeCategory));
}

function renderProducts() {
  const grid = $("#productGrid");
  if (!grid) return;

  const list = filteredProducts();

  grid.innerHTML = list
    .map(
      (p, i) => `
    <article class="product-card" data-id="${p.id}" style="transition-delay:${i * 60}ms">
      <div class="product-media">
        <img src="${p.images[0]}" alt="${loc(p.name)}" loading="lazy" width="600" height="800">
        ${p.badge ? `<span class="product-badge">${loc(p.badge)}</span>` : ""}
      </div>
      <div class="product-info">
        <h3>${loc(p.name)}</h3>
        <p class="product-color">${categoryLabel(p.category)} · ${loc(p.color)}</p>
        <div class="product-footer">
          <span class="product-price">${t("price.dm")}</span>
          <span class="product-view">${t("product.view")}</span>
        </div>
      </div>
    </article>
  `
    )
    .join("");

  $$(".product-card", grid).forEach((card) => {
    card.addEventListener("click", () => openProduct(Number(card.dataset.id)));
  });

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  $$(".product-card", grid).forEach((c) => io.observe(c));
}

function setModalImage(src, alt) {
  const img = $("#modalImage");
  img.src = src;
  img.alt = alt;
}

function openProduct(id, keepOpen = false) {
  const p = products.find((x) => x.id === id);
  if (!p) return;
  activeProduct = p;
  if (!keepOpen || !p.sizes.includes(selectedSize)) {
    selectedSize = p.sizes.includes("M") ? "M" : p.sizes[0];
  }

  const name = loc(p.name);
  setModalImage(p.images[0], name);
  $("#modalBrand").textContent = "Divine Collection";
  $("#modalTitle").textContent = name;
  $("#modalDesc").textContent = loc(p.description);
  $("#modalPrice").textContent = t("price.dm");

  const thumbs = $("#modalThumbs");
  if (p.images.length > 1) {
    thumbs.hidden = false;
    thumbs.innerHTML = p.images
      .map(
        (src, i) =>
          `<button type="button" class="modal-thumb${i === 0 ? " is-active" : ""}" data-src="${src}" aria-label="${name}"><img src="${src}" alt=""></button>`
      )
      .join("");
    $$(".modal-thumb", thumbs).forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        setModalImage(btn.dataset.src, name);
        $$(".modal-thumb", thumbs).forEach((b) => b.classList.toggle("is-active", b === btn));
      });
    });
  } else {
    thumbs.hidden = true;
    thumbs.innerHTML = "";
  }

  const sizeRow = $("#sizeRow");
  sizeRow.innerHTML = p.sizes
    .map(
      (s) =>
        `<button type="button" class="size-btn${s === selectedSize ? " is-active" : ""}" data-size="${s}">${s}</button>`
    )
    .join("");

  $$(".size-btn", sizeRow).forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      selectedSize = btn.dataset.size;
      $$(".size-btn", sizeRow).forEach((b) => b.classList.toggle("is-active", b === btn));
    });
  });

  $("#igOrderBtn").href = IG_URL;
  const modal = $("#productModal");
  modal.hidden = false;
  document.body.classList.add("modal-open");
}

function closeModal() {
  $("#productModal").hidden = true;
  document.body.classList.remove("modal-open");
  activeProduct = null;
}

function addToCart() {
  if (!activeProduct) return;
  const items = getCart();
  const key = `${activeProduct.id}-${selectedSize}`;
  const existing = items.find((i) => i.key === key);
  if (existing) {
    existing.qty += 1;
  } else {
    items.push({
      key,
      id: activeProduct.id,
      name: activeProduct.name,
      size: selectedSize,
      image: activeProduct.images[0],
      qty: 1
    });
  }
  saveCart(items);
  showToast(t("toast.added"));
}

function updateCartUI() {
  const items = getCart();
  const count = cartCount(items);
  const countEl = $("#cartCount");
  if (countEl) {
    countEl.textContent = String(count);
    countEl.classList.toggle("is-on", count > 0);
  }

  const container = $("#cartItems");
  const footer = $("#cartFooter");
  if (!container || !footer) return;

  if (!items.length) {
    container.innerHTML = `<p class="cart-empty">${t("cart.empty")}</p>`;
    footer.style.display = "none";
    return;
  }

  footer.style.display = "block";
  container.innerHTML = items
    .map(
      (item) => `
    <div class="cart-item" data-key="${item.key}">
      <img src="${item.image}" alt="">
      <div>
        <h4>${loc(item.name)}</h4>
        <p>${t("cart.size")} ${item.size} · ${item.qty}×</p>
      </div>
      <button type="button" class="cart-item-remove" data-remove="${item.key}" aria-label="Remove">&times;</button>
    </div>
  `
    )
    .join("");

  $("#cartTotal").textContent = String(count);
  $("#checkoutIg").href = IG_URL;

  $$("[data-remove]", container).forEach((btn) => {
    btn.addEventListener("click", () => {
      saveCart(getCart().filter((i) => i.key !== btn.dataset.remove));
    });
  });
}

function openCart() {
  $("#cartDrawer").hidden = false;
  document.body.classList.add("modal-open");
  updateCartUI();
}

function closeCart() {
  $("#cartDrawer").hidden = true;
  if ($("#productModal").hidden) document.body.classList.remove("modal-open");
}

function initHeader() {
  const header = $("#header");
  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 40);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  const toggle = $("#menuToggle");
  const mobileNav = $("#mobileNav");
  toggle?.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!open));
    mobileNav.hidden = open;
  });

  $$("a", mobileNav).forEach((a) => {
    a.addEventListener("click", () => {
      toggle.setAttribute("aria-expanded", "false");
      mobileNav.hidden = true;
    });
  });

  $$(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => setLang(btn.dataset.lang));
  });
}

function initCategoryFilter() {
  $$(".brand-chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      activeCategory = chip.dataset.cat || "";
      $$(".brand-chip").forEach((c) =>
        c.classList.toggle("is-active", (c.dataset.cat || "") === activeCategory)
      );
      renderProducts();
      $("#collection")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function initHeroSlides() {
  const slides = $$(".hero-image");
  if (slides.length < 2) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  let index = Math.max(0, slides.findIndex((slide) => slide.classList.contains("is-active")));
  setInterval(() => {
    slides[index].classList.remove("is-active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("is-active");
  }, 5600);
}

function initReveal() {
  const editorial = $(".editorial");
  if (!editorial) return;
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.2 }
  );
  io.observe(editorial);
}

function initCursorGlow() {
  const glow = $("#cursorGlow");
  if (!glow || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

  let x = 0;
  let y = 0;
  let tx = 0;
  let ty = 0;
  let raf = 0;

  const tick = () => {
    x += (tx - x) * 0.12;
    y += (ty - y) * 0.12;
    glow.style.left = `${x}px`;
    glow.style.top = `${y}px`;
    raf = requestAnimationFrame(tick);
  };

  window.addEventListener(
    "pointermove",
    (e) => {
      tx = e.clientX;
      ty = e.clientY;
      glow.classList.add("is-on");
      if (!raf) raf = requestAnimationFrame(tick);
    },
    { passive: true }
  );

  window.addEventListener("pointerleave", () => glow.classList.remove("is-on"));
}

function init() {
  const year = $("#year");
  if (year) year.textContent = String(new Date().getFullYear());

  applyI18n();
  initHeader();
  initHeroSlides();
  initCategoryFilter();
  initReveal();
  initCursorGlow();

  $("#cartBtn")?.addEventListener("click", openCart);
  $("#addToCartBtn")?.addEventListener("click", addToCart);

  $$("[data-close]").forEach((el) => el.addEventListener("click", closeModal));
  $$("[data-close-cart]").forEach((el) => el.addEventListener("click", closeCart));

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal();
      closeCart();
    }
  });
}

document.addEventListener("DOMContentLoaded", init);
