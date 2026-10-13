const IG_URL = "https://www.instagram.com/cozychic.vs/";
const BRAND = "Cozy & Chic";
const CART_KEY = "cc_cart_v1";
const LANG_KEY = "cc_lang";
const EUR_RATE = 100;
const FREE_SHIP = 7000;
const SHIP_AL = 400;
const SHIP_INTL = 700;

const products = [
  {
    id: 1,
    tags: ["lingerie"],
    category: "lingerie",
    name: { sq: "Set bralette e zezë", en: "Black bralette set" },
    color: { sq: "E zezë", en: "Black" },
    badge: { sq: "VS", en: "VS" },
    images: ["images/products/bralette-black.png"],
    focus: "center 18%",
    crop: true,
    description: {
      sq: "Set pa tela në të zezë, me gota të buta dhe rrip me emblemë. I lehtë për ditë dhe natë.",
      en: "Wireless black set with a soft cup and a branded band. Light enough for day and night."
    },
    price: 4200,
    sizes: ["XS", "S", "M", "L", "XL"]
  },
  {
    id: 2,
    tags: ["lingerie"],
    category: "lingerie",
    name: { sq: "Set dantelle e zezë", en: "Black lace set" },
    color: { sq: "E zezë", en: "Black" },
    badge: { sq: "VS", en: "VS" },
    images: ["images/products/lace-black.png"],
    focus: "center 16%",
    crop: true,
    description: {
      sq: "Set push-up me dantellë të zezë dhe rripa me shkrim. Gotë e mbajtur, prerje e ulët.",
      en: "Black lace push-up set with logo straps. A lined cup and a low-rise brief."
    },
    price: 5800,
    sizes: ["XS", "S", "M", "L", "XL"]
  },
  {
    id: 3,
    tags: ["lingerie"],
    category: "lingerie",
    name: { sq: "Set dantelle leopard", en: "Leopard lace set" },
    color: { sq: "Leopard", en: "Leopard" },
    badge: { sq: "E re", en: "New" },
    images: ["images/products/lace-leopard.png"],
    focus: "center 22%",
    crop: true,
    description: {
      sq: "Dantellë leopard mbi bazë të zezë, me rripa të shkruar. Set për një look më të theksuar.",
      en: "Leopard lace over black, with branded straps. A set with a stronger look."
    },
    price: 6400,
    sizes: ["XS", "S", "M", "L", "XL"]
  },
  {
    id: 4,
    tags: ["lingerie"],
    category: "lingerie",
    name: { sq: "Tangice me kristale", en: "Crystal strap thong" },
    color: { sq: "Disa ngjyra", en: "Several colors" },
    badge: { sq: "VS", en: "VS" },
    images: ["images/products/thong-crystal.png"],
    focus: "center",
    crop: false,
    description: {
      sq: "Tangice sateni me rrip të gjerë me kristale. Zgjidh të zezë, të bardhë ose të kuqe.",
      en: "Satin thong with a wide crystal strap. Choose black, white, or red."
    },
    price: 1900,
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { id: "black", sq: "E zezë", en: "Black" },
      { id: "white", sq: "E bardhë", en: "White" },
      { id: "red", sq: "E kuqe", en: "Red" }
    ]
  },
  {
    id: 5,
    tags: ["pajamas"],
    category: "pajamas",
    name: { sq: "Pizhama saten blu e shkurtër", en: "Navy satin short set" },
    color: { sq: "Blu deti", en: "Navy" },
    badge: { sq: "Pizhama", en: "Pajamas" },
    images: ["images/products/pajama-navy.png"],
    focus: "center 28%",
    crop: true,
    description: {
      sq: "Komplet i shkurtër sateni blu deti, me piping të bardhë dhe xhep me emblemë.",
      en: "Navy satin short set with white piping and a logo pocket."
    },
    price: 5200,
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 6,
    tags: ["accessories"],
    category: "accessories",
    name: { sq: "Mbajtëse kartash e zezë", en: "Black quilted card case" },
    color: { sq: "E zezë", en: "Black" },
    badge: { sq: "Aksesor", en: "Accessory" },
    images: ["images/products/card-case.png"],
    focus: "center",
    crop: false,
    description: {
      sq: "Mbajtëse kartash e zezë me kapitonazh dhe unazë metalike për çelësa.",
      en: "Black quilted card case with a metal key ring."
    },
    price: 2800,
    sizes: ["ONE"]
  },
  {
    id: 7,
    tags: ["lingerie"],
    category: "lingerie",
    name: { sq: "Set bralette e kuqe", en: "Red bralette set" },
    color: { sq: "E kuqe", en: "Red" },
    badge: { sq: "VS", en: "VS" },
    images: ["images/products/bralette-red.png"],
    focus: "center 20%",
    crop: true,
    description: {
      sq: "Set pa tela në të kuqe, me prerje trekëndëshi dhe rrip me emblemë.",
      en: "Wireless red set with a triangle neckline and a branded band."
    },
    price: 4200,
    sizes: ["XS", "S", "M", "L", "XL"]
  },
  {
    id: 8,
    tags: ["pajamas"],
    category: "pajamas",
    name: { sq: "Pizhama saten e bardhë", en: "White satin pajama set" },
    color: { sq: "E bardhë", en: "White" },
    badge: { sq: "Pizhama", en: "Pajamas" },
    images: ["images/products/pajama-white.png"],
    focus: "center 24%",
    crop: true,
    description: {
      sq: "Pizhama e gjatë sateni e bardhë, me piping të zi, kopsa dhe xhep me emblemë.",
      en: "White long satin pajamas with black piping, buttons, and a logo pocket."
    },
    price: 6800,
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 9,
    tags: ["accessories"],
    category: "accessories",
    name: { sq: "Kuletë rozë me vija", en: "Pink striped zip wallet" },
    color: { sq: "Rozë", en: "Pink" },
    badge: { sq: "Aksesor", en: "Accessory" },
    images: ["images/products/wallet-pink.png"],
    focus: "center",
    crop: true,
    description: {
      sq: "Kuletë me zinxhir, vija rozë dhe emblemë metalike. Për kartat dhe monedhat.",
      en: "Zip wallet in pink stripes with a metal logo. For cards and coins."
    },
    price: 3200,
    sizes: ["ONE"]
  },
  {
    id: 10,
    tags: ["pajamas"],
    category: "pajamas",
    name: { sq: "Pizhama saten me vija të kuqe", en: "Red striped satin set" },
    color: { sq: "E kuqe", en: "Red" },
    badge: { sq: "E re", en: "New" },
    images: ["images/products/pajama-red.png"],
    focus: "center 22%",
    crop: true,
    description: {
      sq: "Pizhama sateni me vija të kuqe, piping të zi dhe lidhje në bel.",
      en: "Red striped satin pajamas with black piping and a tie waist."
    },
    price: 6800,
    sizes: ["S", "M", "L", "XL"]
  }
];

const i18n = {
  sq: {
    "meta.title": "Cozy & Chic — Bukuri dhe kujdes personal",
    "meta.desc": "Cozy & Chic, dyqan bukurie me seli në Shqipëri. Veshje intime, pizhama dhe aksesorë, me dërgesë në Shqipëri, Kosovë dhe Maqedoninë e Veriut.",
    "lang.aria": "Gjuha",
    "nav.shop": "Dyqani",
    "nav.categories": "Kategoritë",
    "nav.story": "Rreth nesh",
    "nav.delivery": "Dërgesa",
    "hero.kicker": "Estd 2012 · Shqipëri",
    "hero.tag": "Bukuri, kozmetikë dhe kujdes personal",
    "hero.lead": "Veshje intime, pizhama sateni dhe aksesorë. Dyqan me seli në Shqipëri, me dërgesë në Shqipëri, Kosovë dhe Maqedoninë e Veriut.",
    "hero.ctaShop": "Shiko koleksionin",
    "hero.ctaIg": "Na ndiq në Instagram",
    "hero.pay": "Pagesë në dorëzim",
    "hero.altMain": "Pizhama sateni e bardhë",
    "hero.altFloat": "Set dantelle leopard",
    "cat.all": "Të gjitha",
    "cat.lingerie": "Veshje intime",
    "cat.pajamas": "Pizhama",
    "cat.accessories": "Aksesorë",
    "categories.label": "Kategoritë",
    "categories.title": "Zgjidh një kategori",
    "categories.desc": "Veshje intime, pizhama dhe aksesorë nga koleksioni ynë.",
    "categories.aria": "Kategoritë",
    "collection.label": "Koleksioni",
    "collection.title": "Të zgjedhura për ty",
    "collection.desc": "Çmimet janë në Lek. Transport falas mbi 7.000 Lek, me pagesë në dorëzim.",
    "perk.ship": "Transport falas mbi 7.000 Lek",
    "perk.pay": "Pagesë në dorëzim",
    "perk.zone": "Dërgesë AL · XK · MK",
    "editorial.label": "Pizhama",
    "editorial.title": "Saten.<br>Qetësi.<br>Cozy & Chic.",
    "editorial.body": "Komplete sateni për në shtëpi, me prerje të pastër dhe detaje të vogla që duken.",
    "editorial.cta": "Shiko pizhamat",
    "editorial.alt": "Pizhama sateni me vija të kuqe",
    "story.label": "Rreth nesh",
    "story.body": "Cozy & Chic është një dyqan bukurie i hapur më 2012, me seli në Shqipëri. Sillim veshje intime, pizhama dhe aksesorë, dhe dërgojmë në Shqipëri, Kosovë dhe Maqedoninë e Veriut. Për parfum dhe kozmetikë, na shkruaj në Instagram.",
    "story.p1": "Estd 2012",
    "story.p2": "Bukuri, kozmetikë dhe kujdes personal",
    "story.p3": "Me seli në Shqipëri",
    "story.p4": "Dërgesë në Shqipëri, Kosovë dhe Maqedoninë e Veriut",
    "story.p5": "Porosi edhe në Instagram @cozychic.vs",
    "delivery.label": "Dërgesa dhe kontakti",
    "delivery.title": "Ku dërgojmë",
    "delivery.desc": "Shto produktet në shportë dhe lër të dhënat. Do të të kontaktojmë për konfirmim. Pagesa bëhet në dorëzim.",
    "delivery.al": "Shqipëri",
    "delivery.alBody": "Dërgesë në të gjithë vendin. Transporti 400 Lek, falas mbi 7.000 Lek.",
    "delivery.xk": "Kosovë",
    "delivery.xkBody": "Dërgesë në Kosovë. Transporti 700 Lek, falas mbi 7.000 Lek.",
    "delivery.mk": "Maqedonia e Veriut",
    "delivery.mkBody": "Dërgesë në Maqedoninë e Veriut. Transporti 700 Lek, falas mbi 7.000 Lek.",
    "visit.ig": "Shkruaj @cozychic.vs",
    "visit.shop": "Kthehu te dyqani",
    "footer.tag": "Bukuri dhe kujdes personal",
    "footer.note": "Me seli në Shqipëri · Dërgesa AL, XK, MK",
    "modal.add": "Shto në shportë",
    "modal.ig": "Pyet në Instagram",
    "modal.size": "Masa",
    "modal.color": "Ngjyra",
    "close": "Mbyll",
    "cart.title": "Shporta jote",
    "cart.subtotal": "Nëntotali",
    "cart.shipping": "Transporti",
    "cart.free": "Falas",
    "cart.freeShip": "Transporti është falas për këtë porosi.",
    "cart.total": "Totali",
    "cart.checkout": "Vazhdo në pagesë",
    "cart.hint": "Transport falas mbi 7.000 Lek. Në Shqipëri 400 Lek, në Kosovë dhe Maqedoni 700 Lek.",
    "cart.empty": "Shporta jote është bosh.",
    "cart.size": "Masa",
    "cart.oneSize": "Një masë",
    "cart.qty": "Sasia",
    "cart.remove": "Hiq",
    "cart.aria": "Shporta",
    "cart.away": "Edhe {amount} për transport falas.",
    "checkout.title": "Pagesa",
    "checkout.name": "Emri dhe mbiemri",
    "checkout.phone": "Telefoni",
    "checkout.city": "Qyteti",
    "checkout.country": "Shteti",
    "checkout.address": "Adresa",
    "checkout.note": "Shënim",
    "checkout.pay": "Pagesë në dorëzim",
    "checkout.place": "Konfirmo porosinë",
    "checkout.back": "Kthehu në shportë",
    "checkout.error": "Shkruaj emrin, telefonin dhe qytetin.",
    "checkout.thanks": "Porosia u pranua",
    "checkout.doneBody": "Kopjoje porosinë dhe na dërgo në Instagram që ta konfirmojmë. Pagesa bëhet në dorëzim.",
    "checkout.close": "Vazhdo blerjen",
    "checkout.copy": "Kopjo porosinë",
    "checkout.copied": "Porosia u kopjua",
    "checkout.sendIg": "Dërgo në Instagram",
    "checkout.order": "Porosia",
    "country.al": "Shqipëri",
    "country.xk": "Kosovë",
    "country.mk": "Maqedonia e Veriut",
    "toast.added": "U shtua në shportë",
    "product.view": "Shiko",
    "product.empty": "Asnjë produkt në këtë kategori.",
    "marquee": ["Cozy & Chic", "Estd 2012", "Veshje intime", "Pizhama", "Aksesorë", "Shqipëri", "Kosovë", "Maqedoni", "Pagesë në dorëzim"]
  },
  en: {
    "meta.title": "Cozy & Chic — Beauty and personal care",
    "meta.desc": "Cozy & Chic is a beauty shop based in Albania. Lingerie, pajamas and accessories, with delivery to Albania, Kosovo and North Macedonia.",
    "lang.aria": "Language",
    "nav.shop": "Shop",
    "nav.categories": "Categories",
    "nav.story": "About",
    "nav.delivery": "Delivery",
    "hero.kicker": "Estd 2012 · Albania",
    "hero.tag": "Beauty, cosmetics and personal care",
    "hero.lead": "Lingerie, satin pajamas and accessories. Based in Albania, with delivery to Albania, Kosovo and North Macedonia.",
    "hero.ctaShop": "Shop the collection",
    "hero.ctaIg": "Follow on Instagram",
    "hero.pay": "Pay on delivery",
    "hero.altMain": "White satin pajama set",
    "hero.altFloat": "Leopard lace set",
    "cat.all": "All",
    "cat.lingerie": "Lingerie",
    "cat.pajamas": "Pajamas",
    "cat.accessories": "Accessories",
    "categories.label": "Categories",
    "categories.title": "Shop by category",
    "categories.desc": "Lingerie, pajamas and accessories from the collection.",
    "categories.aria": "Categories",
    "collection.label": "Collection",
    "collection.title": "Picked for you",
    "collection.desc": "Prices are in lek. Free delivery over 7,000 lek, pay on delivery.",
    "perk.ship": "Free delivery over 7,000 lek",
    "perk.pay": "Pay on delivery",
    "perk.zone": "Delivery AL · XK · MK",
    "editorial.label": "Pajamas",
    "editorial.title": "Satin.<br>Ease.<br>Cozy & Chic.",
    "editorial.body": "Satin sets for home, with a clean cut and small details that show.",
    "editorial.cta": "Shop pajamas",
    "editorial.alt": "Red striped satin pajamas",
    "story.label": "About",
    "story.body": "Cozy & Chic is a beauty shop opened in 2012 and based in Albania. We carry lingerie, pajamas and accessories, and we deliver to Albania, Kosovo and North Macedonia. For perfume and cosmetics, message us on Instagram.",
    "story.p1": "Estd 2012",
    "story.p2": "Beauty, cosmetics and personal care",
    "story.p3": "Based in Albania",
    "story.p4": "Delivery to Albania, Kosovo and North Macedonia",
    "story.p5": "Orders also on Instagram @cozychic.vs",
    "delivery.label": "Delivery and contact",
    "delivery.title": "Where we deliver",
    "delivery.desc": "Add pieces to your bag and leave your details. We contact you to confirm. You pay on delivery.",
    "delivery.al": "Albania",
    "delivery.alBody": "Delivery across the country. Shipping is 400 lek, free over 7,000 lek.",
    "delivery.xk": "Kosovo",
    "delivery.xkBody": "Delivery to Kosovo. Shipping is 700 lek, free over 7,000 lek.",
    "delivery.mk": "North Macedonia",
    "delivery.mkBody": "Delivery to North Macedonia. Shipping is 700 lek, free over 7,000 lek.",
    "visit.ig": "Message @cozychic.vs",
    "visit.shop": "Back to the shop",
    "footer.tag": "Beauty and personal care",
    "footer.note": "Based in Albania · Delivery AL, XK, MK",
    "modal.add": "Add to bag",
    "modal.ig": "Ask on Instagram",
    "modal.size": "Size",
    "modal.color": "Color",
    "close": "Close",
    "cart.title": "Your bag",
    "cart.subtotal": "Subtotal",
    "cart.shipping": "Delivery",
    "cart.free": "Free",
    "cart.freeShip": "Delivery is free for this order.",
    "cart.total": "Total",
    "cart.checkout": "Continue to payment",
    "cart.hint": "Free delivery over 7,000 lek. 400 lek in Albania, 700 lek in Kosovo and Macedonia.",
    "cart.empty": "Your bag is empty.",
    "cart.size": "Size",
    "cart.oneSize": "One size",
    "cart.qty": "Quantity",
    "cart.remove": "Remove",
    "cart.aria": "Bag",
    "cart.away": "{amount} more for free delivery.",
    "checkout.title": "Payment",
    "checkout.name": "Full name",
    "checkout.phone": "Phone",
    "checkout.city": "City",
    "checkout.country": "Country",
    "checkout.address": "Address",
    "checkout.note": "Note",
    "checkout.pay": "Pay on delivery",
    "checkout.place": "Place order",
    "checkout.back": "Back to bag",
    "checkout.error": "Enter your name, phone and city.",
    "checkout.thanks": "Order received",
    "checkout.doneBody": "Copy the order and send it on Instagram so we can confirm it. You pay on delivery.",
    "checkout.close": "Continue shopping",
    "checkout.copy": "Copy order",
    "checkout.copied": "Order copied",
    "checkout.sendIg": "Send on Instagram",
    "checkout.order": "Order",
    "country.al": "Albania",
    "country.xk": "Kosovo",
    "country.mk": "North Macedonia",
    "toast.added": "Added to bag",
    "product.view": "View",
    "product.empty": "No products in this category.",
    "marquee": ["Cozy & Chic", "Estd 2012", "Lingerie", "Pajamas", "Accessories", "Albania", "Kosovo", "Macedonia", "Pay on delivery"]
  }
};

const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

let lang = localStorage.getItem(LANG_KEY) || "sq";
if (!i18n[lang]) lang = "sq";
let activeProduct = null;
let selectedSize = "M";
let selectedColor = "";
let selectedQty = 1;
let activeCategory = "";
let cartMode = "bag";
let lastFocus = null;
let lastOrder = null;

function t(key) {
  const value = i18n[lang][key] ?? i18n.en[key] ?? key;
  return value;
}

function loc(obj) {
  if (!obj || typeof obj === "string") return obj || "";
  return obj[lang] || obj.sq || obj.en || "";
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[char]));
}

function formatLek(amount) {
  const formatted = Math.round(amount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return `${formatted} Lek`;
}

function formatEur(amount) {
  return `≈ €${Math.round(amount / EUR_RATE)}`;
}

function priceMarkup(product) {
  return `<span class="price-now">${formatLek(product.price)}</span><span class="price-eur">${formatEur(product.price)}</span>`;
}

function countryName(code) {
  if (code === "XK") return t("country.xk");
  if (code === "MK") return t("country.mk");
  return t("country.al");
}

function selectedCountry() {
  return $("#orderCountry")?.value || "AL";
}

function shippingFor(subtotal, country = selectedCountry()) {
  if (subtotal <= 0 || subtotal >= FREE_SHIP) return 0;
  return country === "AL" ? SHIP_AL : SHIP_INTL;
}

function countLabel(n) {
  if (lang === "sq") return n === 1 ? "1 produkt" : `${n} produkte`;
  return n === 1 ? "1 product" : `${n} products`;
}

function getCart() {
  try {
    const items = JSON.parse(localStorage.getItem(CART_KEY) || "[]");
    return Array.isArray(items) ? items : [];
  } catch {
    return [];
  }
}

function linePrice(item) {
  if (typeof item.price === "number") return item.price;
  const product = products.find((entry) => entry.id === item.id);
  return product ? product.price : 0;
}

function cartSubtotal(items = getCart()) {
  return items.reduce((sum, item) => sum + linePrice(item) * item.qty, 0);
}

function cartCount(items = getCart()) {
  return items.reduce((sum, item) => sum + item.qty, 0);
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
    const value = t(el.getAttribute("data-i18n"));
    if (typeof value !== "string") return;
    if (value.includes("<br>")) el.innerHTML = value;
    else el.textContent = value;
  });

  $$("[data-i18n-aria]").forEach((el) => {
    el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria")));
  });

  $$("[data-i18n-alt]").forEach((el) => {
    el.alt = t(el.getAttribute("data-i18n-alt"));
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
      .map((word, i) => `<span>${escapeHtml(word)}</span>${i < doubled.length - 1 ? '<span class="dot">·</span>' : ""}`)
      .join("");
  }

  document.title = t("meta.title");
  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute("content", t("meta.desc"));
  const og = document.querySelector('meta[property="og:locale"]');
  if (og) og.setAttribute("content", lang === "sq" ? "sq_AL" : "en_US");

  renderProducts();
  updateCartUI();
  if (activeProduct && !$("#productModal").hidden) openProduct(activeProduct.id, true);
}

function setLang(next) {
  if (!i18n[next]) return;
  lang = next;
  localStorage.setItem(LANG_KEY, lang);
  applyI18n();
}

function filteredProducts() {
  if (!activeCategory) return products;
  return products.filter((product) => product.tags.includes(activeCategory));
}

function renderProducts() {
  const grid = $("#productGrid");
  const count = $("#productCount");
  if (!grid) return;
  const list = filteredProducts();
  if (count) count.textContent = countLabel(list.length);

  if (!list.length) {
    grid.innerHTML = `<p class="empty-note">${escapeHtml(t("product.empty"))}</p>`;
    return;
  }

  grid.innerHTML = list
    .map((product) => {
      const name = escapeHtml(loc(product.name));
      return `
        <article class="product-card" data-id="${product.id}" tabindex="0" role="button" aria-label="${name}">
          <div class="product-media">
            <img src="${product.images[0]}" alt="${name}" class="${product.crop ? "is-crop" : ""}" style="object-position:${product.focus || "center"}" loading="lazy" width="640" height="840">
            ${product.badge ? `<span class="product-badge">${escapeHtml(loc(product.badge))}</span>` : ""}
          </div>
          <div class="product-info">
            <h3>${name}</h3>
            <p class="product-color">${escapeHtml(t(`cat.${product.category}`))} · ${escapeHtml(loc(product.color))}</p>
            <div class="product-footer">
              <span class="product-price">${priceMarkup(product)}</span>
              <span class="product-view">${escapeHtml(t("product.view"))}</span>
            </div>
          </div>
        </article>`;
    })
    .join("");

  $$(".product-card", grid).forEach((card) => {
    const open = () => openProduct(Number(card.dataset.id));
    card.addEventListener("click", open);
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        open();
      }
    });
  });

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce || !("IntersectionObserver" in window)) {
    $$(".product-card", grid).forEach((card) => card.classList.add("is-in"));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-in");
        io.unobserve(entry.target);
      });
    },
    { threshold: 0.12 }
  );
  $$(".product-card", grid).forEach((card) => io.observe(card));
}

function isOneSize(product) {
  return product.sizes.length === 1 && product.sizes[0] === "ONE";
}

function openProduct(id, keepOpen = false) {
  const product = products.find((entry) => entry.id === id);
  if (!product) return;
  activeProduct = product;
  if (!keepOpen) {
    selectedSize = isOneSize(product) ? "ONE" : (product.sizes.includes("M") ? "M" : product.sizes[0]);
    selectedColor = product.colors ? product.colors[0].id : "";
    selectedQty = 1;
    lastFocus = document.activeElement;
  }

  const name = loc(product.name);
  const image = $("#modalImage");
  image.src = product.images[0];
  image.alt = name;
  image.style.objectPosition = product.focus || "center";
  image.style.transform = product.crop ? "scale(1.08)" : "none";
  $("#modalBrand").textContent = BRAND;
  $("#modalTitle").textContent = name;
  $("#modalDesc").textContent = loc(product.description);
  $("#modalPrice").innerHTML = priceMarkup(product);
  const qtyValue = $("#qtyValue");
  if (qtyValue) qtyValue.textContent = String(selectedQty);

  const sizeBlock = $("#sizeBlock");
  const sizeRow = $("#sizeRow");
  if (isOneSize(product)) {
    sizeBlock.hidden = true;
    sizeRow.innerHTML = "";
  } else {
    sizeBlock.hidden = false;
    sizeRow.innerHTML = product.sizes
      .map((size) => `<button type="button" class="size-btn${size === selectedSize ? " is-active" : ""}" data-size="${size}">${size}</button>`)
      .join("");
    $$(".size-btn", sizeRow).forEach((btn) => {
      btn.addEventListener("click", () => {
        selectedSize = btn.dataset.size;
        $$(".size-btn", sizeRow).forEach((item) => item.classList.toggle("is-active", item === btn));
      });
    });
  }

  const colorBlock = $("#colorBlock");
  const colorRow = $("#colorRow");
  if (!product.colors) {
    colorBlock.hidden = true;
    colorRow.innerHTML = "";
  } else {
    colorBlock.hidden = false;
    colorRow.innerHTML = product.colors
      .map((color) => `<button type="button" class="size-btn${color.id === selectedColor ? " is-active" : ""}" data-color="${color.id}">${escapeHtml(loc(color))}</button>`)
      .join("");
    $$("[data-color]", colorRow).forEach((btn) => {
      btn.addEventListener("click", () => {
        selectedColor = btn.dataset.color;
        $$("[data-color]", colorRow).forEach((item) => item.classList.toggle("is-active", item === btn));
      });
    });
  }

  $("#igOrderBtn").href = IG_URL;
  const modal = $("#productModal");
  modal.hidden = false;
  document.body.classList.add("modal-open");
  $("#modalClose")?.focus();
}

function closeModal() {
  const modal = $("#productModal");
  if (!modal || modal.hidden) return;
  modal.hidden = true;
  if ($("#cartDrawer").hidden) document.body.classList.remove("modal-open");
  activeProduct = null;
  if (lastFocus && typeof lastFocus.focus === "function") lastFocus.focus();
}

function addToCart() {
  if (!activeProduct) return;
  const items = getCart();
  const color = activeProduct.colors?.find((entry) => entry.id === selectedColor) || null;
  const key = `${activeProduct.id}-${selectedSize}-${color ? color.id : "default"}`;
  const existing = items.find((item) => item.key === key);
  if (existing) existing.qty = Math.min(9, existing.qty + selectedQty);
  else {
    items.push({
      key,
      id: activeProduct.id,
      name: activeProduct.name,
      size: selectedSize,
      color: color ? { sq: color.sq, en: color.en } : null,
      colorId: color ? color.id : "",
      image: activeProduct.images[0],
      price: activeProduct.price,
      qty: selectedQty
    });
  }
  saveCart(items);
  showToast(t("toast.added"));
  const btn = $("#addToCartBtn");
  if (btn) {
    btn.textContent = t("toast.added");
    clearTimeout(addToCart._t);
    addToCart._t = setTimeout(() => {
      btn.textContent = t("modal.add");
    }, 1200);
  }
}

function saveCart(items) {
  localStorage.setItem(CART_KEY, JSON.stringify(items));
  updateCartUI();
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
  const form = $("#checkoutForm");
  const done = $("#orderDone");
  if (!container || !footer) return;

  container.hidden = cartMode !== "bag";
  if (form) form.hidden = cartMode !== "checkout";
  if (done) done.hidden = cartMode !== "done";
  footer.style.display = cartMode === "bag" && items.length ? "block" : "none";

  const title = $("#cartTitle");
  if (title) {
    if (cartMode === "checkout") title.textContent = t("checkout.title");
    else if (cartMode === "done") title.textContent = t("checkout.thanks");
    else title.textContent = t("cart.title");
  }

  if (!items.length) {
    container.innerHTML = `<p class="cart-empty">${escapeHtml(t("cart.empty"))}</p>`;
    return;
  }

  container.innerHTML = items
    .map((item) => {
      const bits = [item.size === "ONE" ? t("cart.oneSize") : `${t("cart.size")} ${item.size}`];
      if (item.color) bits.push(loc(item.color));
      return `
        <div class="cart-item">
          <img src="${escapeHtml(item.image)}" alt="">
          <div>
            <h4>${escapeHtml(loc(item.name))}</h4>
            <p>${escapeHtml(bits.join(" · "))}</p>
            <div class="qty">
              <button type="button" data-qty="${escapeHtml(item.key)}" data-dir="-1" aria-label="−">−</button>
              <span>${item.qty}</span>
              <button type="button" data-qty="${escapeHtml(item.key)}" data-dir="1" aria-label="+">+</button>
            </div>
          </div>
          <div class="cart-item-side">
            <strong>${formatLek(linePrice(item) * item.qty)}</strong>
            <button type="button" class="cart-item-remove" data-remove="${escapeHtml(item.key)}">${escapeHtml(t("cart.remove"))}</button>
          </div>
        </div>`;
    })
    .join("");

  const subtotal = cartSubtotal(items);
  const shipping = shippingFor(subtotal);
  const totalLabel = formatLek(subtotal + shipping);
  $("#cartSubtotal").textContent = formatLek(subtotal);
  $("#cartShipping").textContent = shipping === 0 ? t("cart.free") : formatLek(shipping);
  $("#cartTotal").textContent = totalLabel;
  const checkoutTotal = $("#checkoutTotal");
  if (checkoutTotal) checkoutTotal.textContent = totalLabel;

  const note = $("#shipNote");
  const bar = $("#shipBar");
  if (note && bar) {
    const ratio = Math.min(1, subtotal / FREE_SHIP);
    bar.style.width = `${Math.round(ratio * 100)}%`;
    note.textContent = subtotal >= FREE_SHIP
      ? t("cart.freeShip")
      : t("cart.away").replace("{amount}", formatLek(FREE_SHIP - subtotal));
  }
}

function changeQty(key, dir) {
  const items = getCart();
  const item = items.find((entry) => entry.key === key);
  if (!item) return;
  item.qty += dir;
  saveCart(item.qty < 1 ? items.filter((entry) => entry.key !== key) : items);
}

function showCartMode(mode) {
  cartMode = mode;
  updateCartUI();
}

function openCart() {
  $("#cartDrawer").hidden = false;
  document.body.classList.add("modal-open");
  showCartMode(cartMode === "done" ? "bag" : cartMode);
}

function closeCart() {
  $("#cartDrawer").hidden = true;
  if ($("#productModal").hidden) document.body.classList.remove("modal-open");
  if (cartMode === "done") cartMode = "bag";
}

function openCheckout() {
  if (!getCart().length) return;
  const error = $("#checkoutError");
  if (error) error.textContent = "";
  showCartMode("checkout");
}

function orderText(order) {
  const lines = order.items.map((item) => {
    const bits = [loc(item.name)];
    bits.push(item.size === "ONE" ? t("cart.oneSize") : item.size);
    if (item.color) bits.push(loc(item.color));
    bits.push(`× ${item.qty}`);
    return bits.join(" · ");
  });
  return [
    BRAND,
    `${t("checkout.order")} ${order.orderNo}`,
    ...lines,
    `${t("cart.total")}: ${formatLek(order.total)} (${formatEur(order.total)})`,
    order.name,
    order.phone,
    `${order.city}, ${countryName(order.country)}`,
    order.address,
    order.note
  ].filter(Boolean).join("\n");
}

function placeOrder(event) {
  event.preventDefault();
  const items = getCart();
  const name = $("#orderName")?.value.trim() || "";
  const phone = $("#orderPhone")?.value.trim() || "";
  const city = $("#orderCity")?.value.trim() || "";
  const country = selectedCountry();
  const address = $("#orderAddress")?.value.trim() || "";
  const note = $("#orderNote")?.value.trim() || "";
  const error = $("#checkoutError");
  const phoneDigits = phone.replace(/\D/g, "");
  if (name.length < 2 || phoneDigits.length < 8 || city.length < 2) {
    if (error) error.textContent = t("checkout.error");
    return;
  }
  if (!items.length) return;

  const subtotal = cartSubtotal(items);
  const shipping = shippingFor(subtotal, country);
  const total = subtotal + shipping;
  const orderNo = `CC-${String(Date.now()).slice(-6)}`;
  lastOrder = { orderNo, name, phone, city, country, address, note, items, subtotal, shipping, total, lang };
  localStorage.removeItem(CART_KEY);

  $("#orderNumber").textContent = orderNo;
  $("#orderSummary").textContent = `${name} · ${city} · ${formatLek(total)}`;
  $("#checkoutForm")?.reset();
  const countrySelect = $("#orderCountry");
  if (countrySelect) countrySelect.value = country;
  showCartMode("done");
}

function initHeader() {
  const header = $("#header");
  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 8);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  const toggle = $("#menuToggle");
  const mobileNav = $("#mobileNav");
  toggle?.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!open));
    mobileNav.hidden = open;
  });

  $$("a", mobileNav).forEach((link) => {
    link.addEventListener("click", () => {
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
      $$(".brand-chip").forEach((item) => item.classList.toggle("is-active", (item.dataset.cat || "") === activeCategory));
      renderProducts();
      $("#productGrid")?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
  });

  $$("[data-cat-jump]").forEach((link) => {
    link.addEventListener("click", () => {
      const next = link.getAttribute("data-cat-jump") || "";
      activeCategory = next;
      $$(".brand-chip").forEach((item) => item.classList.toggle("is-active", (item.dataset.cat || "") === activeCategory));
      renderProducts();
    });
  });
}

function initPreloader() {
  const el = $("#preloader");
  if (!el) return;
  const started = performance.now();
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const min = reduce ? 300 : 1500;
  let queued = false;
  const finish = () => {
    if (queued) return;
    queued = true;
    const wait = Math.max(0, min - (performance.now() - started));
    setTimeout(() => {
      el.classList.add("is-done");
      el.setAttribute("aria-hidden", "true");
      setTimeout(() => el.remove(), reduce ? 0 : 600);
    }, wait);
  };
  if (document.readyState === "complete") finish();
  else window.addEventListener("load", finish);
  setTimeout(finish, 5000);
}

function init() {
  const year = $("#year");
  if (year) year.textContent = String(new Date().getFullYear());
  initPreloader();
  applyI18n();
  initHeader();
  initCategoryFilter();

  $("#cartBtn")?.addEventListener("click", openCart);
  $("#addToCartBtn")?.addEventListener("click", addToCart);
  $("#qtyMinus")?.addEventListener("click", () => {
    selectedQty = Math.max(1, selectedQty - 1);
    const qtyValue = $("#qtyValue");
    if (qtyValue) qtyValue.textContent = String(selectedQty);
  });
  $("#qtyPlus")?.addEventListener("click", () => {
    selectedQty = Math.min(9, selectedQty + 1);
    const qtyValue = $("#qtyValue");
    if (qtyValue) qtyValue.textContent = String(selectedQty);
  });
  $("#cartItems")?.addEventListener("click", (event) => {
    const qtyBtn = event.target.closest("[data-qty]");
    if (qtyBtn) {
      changeQty(qtyBtn.dataset.qty, Number(qtyBtn.dataset.dir));
      return;
    }
    const remove = event.target.closest("[data-remove]");
    if (remove) saveCart(getCart().filter((item) => item.key !== remove.dataset.remove));
  });
  $("#checkoutBtn")?.addEventListener("click", openCheckout);
  $("#checkoutBack")?.addEventListener("click", () => showCartMode("bag"));
  $("#checkoutForm")?.addEventListener("submit", placeOrder);
  $("#orderCountry")?.addEventListener("change", updateCartUI);
  $("#orderClose")?.addEventListener("click", closeCart);
  $("#copyOrderBtn")?.addEventListener("click", async () => {
    if (!lastOrder) return;
    const text = orderText(lastOrder);
    try {
      await navigator.clipboard.writeText(text);
      showToast(t("checkout.copied"));
    } catch {
      showToast(text);
    }
  });

  $$("[data-close]").forEach((el) => el.addEventListener("click", closeModal));
  $$("[data-close-cart]").forEach((el) => el.addEventListener("click", closeCart));

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    if (!$("#cartDrawer").hidden) closeCart();
    else closeModal();
  });
}

document.addEventListener("DOMContentLoaded", init);
