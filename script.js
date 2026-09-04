const liveProducts = [
  {
    "id": "shopify-handheld-fan",
    "title": "Handheld Fan",
    "nameCn": "手持风扇",
    "category": "Ready to Buy",
    "categoryKey": "live",
    "price": "USD 18.00",
    "status": "Ready to buy online",
    "primaryImage": "assets/products/handheld-fan-black.png",
    "gallery": [
      "assets/products/handheld-fan-white.png",
      "assets/products/handheld-fan-black.png",
      "assets/products/handheld-fan-blue.png",
      "assets/products/handheld-fan-pink.png",
      "assets/generated/handheld-fan-green-lifestyle-banner.png"
    ],
    "skuCount": 4,
    "detailCount": 1,
    "imageCount": 5,
    "summary": "Portable cooling for students, office desks, travel bags and night-market shoppers.",
    "buyLink": "https://fh8gjq-qg.myshopify.com/products/handheld-fan"
  },
  {
    "id": "shopify-neck-fan",
    "title": "Neck Fan",
    "nameCn": "挂脖风扇",
    "category": "Ready to Buy",
    "categoryKey": "live",
    "price": "USD 7.60",
    "status": "Ready to buy online",
    "primaryImage": "assets/products/neck-fan-pink.png",
    "gallery": [
      "assets/products/neck-fan-white.png",
      "assets/products/neck-fan-pink.png",
      "assets/products/neck-fan-3-speed.png",
      "assets/products/neck-fan-advantages.png",
      "assets/products/neck-fan-colors.png",
      "assets/products/neck-fan-parameters.png",
      "assets/generated/neck-fan-green-lifestyle-banner.png"
    ],
    "skuCount": 5,
    "detailCount": 4,
    "imageCount": 7,
    "summary": "Hands-free cooling for commuters, riders, outdoor sellers and busy outdoor days.",
    "buyLink": "https://fh8gjq-qg.myshopify.com/products/neck-fan"
  }
];

const shopifyProductLinks = {
  "disposable-compartment-meal-box": {
    "price": "USD 48.66",
    "buyLink": "https://fh8gjq-qg.myshopify.com/products/disposable-compartment-food-container"
  },
  "ice-cube-mold": {
    "price": "From USD 6.50",
    "buyLink": "https://fh8gjq-qg.myshopify.com/products/ice-cube-tray"
  },
  "cooling-arm-sleeves": {
    "price": "USD 9.50",
    "buyLink": "https://fh8gjq-qg.myshopify.com/products/cooling-arm-sleeves"
  },
  "cutlery-organizer": {
    "price": "USD 10.50",
    "buyLink": "https://fh8gjq-qg.myshopify.com/products/cutlery-organizer"
  },
  "cosmetic-organizer": {
    "price": "From USD 11.50",
    "buyLink": "https://fh8gjq-qg.myshopify.com/products/makeup-organizer"
  },
  "coffee-cup-rack": {
    "price": "From USD 15.18",
    "buyLink": "https://fh8gjq-qg.myshopify.com/products/coffee-mug-rack"
  },
  "protective-apron": {
    "price": "USD 8.18",
    "buyLink": "https://fh8gjq-qg.myshopify.com/products/kitchen-apron"
  },
  "wall-mounted-storage-basket": {
    "price": "From USD 6.50",
    "buyLink": "https://fh8gjq-qg.myshopify.com/products/wall-mounted-storage-basket"
  },
  "home-vacuum-cleaner": {
    "price": "USD 55.00",
    "buyLink": "https://fh8gjq-qg.myshopify.com/products/home-vacuum-cleaner"
  },
  "household-juicer": {
    "price": "From USD 18.00",
    "buyLink": "https://fh8gjq-qg.myshopify.com/products/home-juicer"
  },
  "hair-drying-towel-cap": {
    "price": "USD 9.50",
    "buyLink": "https://fh8gjq-qg.myshopify.com/products/quick-dry-hair-towel-cap"
  },
  "adult-rain-boots": {
    "price": "USD 11.00",
    "buyLink": "https://fh8gjq-qg.myshopify.com/products/adult-rain-boots"
  },
  "foldable-drying-rack": {
    "price": "From USD 29.76",
    "buyLink": "https://fh8gjq-qg.myshopify.com/products/foldable-clothes-drying-rack"
  },
  "dry-wet-toiletry-bag": {
    "price": "USD 10.71",
    "buyLink": "https://fh8gjq-qg.myshopify.com/products/wet-dry-storage-bag"
  },
  "clothesline": {
    "price": "USD 17.00",
    "buyLink": "https://fh8gjq-qg.myshopify.com/products/clothesline"
  },
  "multipurpose-storage-box": {
    "price": "From USD 9.00",
    "buyLink": "https://fh8gjq-qg.myshopify.com/products/multipurpose-storage-box"
  },
  "baseball-cap-organizer": {
    "price": "USD 7.50",
    "buyLink": "https://fh8gjq-qg.myshopify.com/products/baseball-cap-organizer"
  },
  "dishwashing-cloth": {
    "price": "USD 5.21",
    "buyLink": "https://fh8gjq-qg.myshopify.com/products/dish-cloth"
  },
  "face-towels": {
    "price": "From USD 9.82",
    "buyLink": "https://fh8gjq-qg.myshopify.com/products/disposable-face-towels"
  },
  "shoe-washing-bag": {
    "price": "USD 7.59",
    "buyLink": "https://fh8gjq-qg.myshopify.com/products/shoe-washing-bag"
  },
  "bathroom-storage-rack": {
    "price": "From USD 5.65",
    "buyLink": "https://fh8gjq-qg.myshopify.com/products/bathroom-storage-rack"
  },
  "cleaning-cloth": {
    "price": "USD 6.99",
    "buyLink": "https://fh8gjq-qg.myshopify.com/products/cleaning-cloth"
  },
  "retainer-case": {
    "price": "USD 10.00",
    "buyLink": "https://fh8gjq-qg.myshopify.com/products/retainer-case"
  },
  "toothpick-holder": {
    "price": "USD 6.25",
    "buyLink": "https://fh8gjq-qg.myshopify.com/products/toothpick-dispenser"
  },
  "glass-squeegee": {
    "price": "From USD 7.00",
    "buyLink": "https://fh8gjq-qg.myshopify.com/products/glass-squeegee"
  },
  "tissue-paper-new": {
    "price": "From USD 15.00",
    "buyLink": "https://fh8gjq-qg.myshopify.com/products/tissue-paper"
  },
  "laundry-hamper": {
    "price": "USD 6.40",
    "buyLink": "https://fh8gjq-qg.myshopify.com/products/laundry-basket"
  },
  "clothes-quilt-storage": {
    "price": "From USD 6.10",
    "buyLink": "https://fh8gjq-qg.myshopify.com/products/clothing-bedding-storage-bag"
  },
  "car-vacuum-cleaner": {
    "price": "From USD 15.00",
    "buyLink": "https://fh8gjq-qg.myshopify.com/products/car-vacuum-cleaner"
  },
  "portable-sun-umbrella": {
    "price": "USD 13.00",
    "buyLink": "https://fh8gjq-qg.myshopify.com/products/sun-umbrella"
  },
  "sun-protection-hat": {
    "price": "From USD 6.25",
    "buyLink": "https://fh8gjq-qg.myshopify.com/products/sun-hat"
  },
  "sun-face-shield": {
    "price": "From USD 6.50",
    "buyLink": "https://fh8gjq-qg.myshopify.com/products/sun-protection-face-cover"
  },
  "moisture-absorber-box": {
    "price": "USD 7.50",
    "buyLink": "https://fh8gjq-qg.myshopify.com/products/dehumidifier-box"
  },
  "kids-rain-boots": {
    "price": "USD 9.76",
    "buyLink": "https://fh8gjq-qg.myshopify.com/products/kids-rain-boots"
  },
  "collapsible-camping-bucket": {
    "price": "From USD 12.00",
    "buyLink": "https://fh8gjq-qg.myshopify.com/products/foldable-camping-bucket"
  },
  "camping-table-chair": {
    "price": "From USD 22.00",
    "buyLink": "https://fh8gjq-qg.myshopify.com/products/camping-table-chair-set"
  },
  "camping-lantern": {
    "price": "From USD 12.00",
    "buyLink": "https://fh8gjq-qg.myshopify.com/products/camping-lantern"
  },
  "camping-moisture-mat": {
    "price": "USD 19.00",
    "buyLink": "https://fh8gjq-qg.myshopify.com/products/camping-mat"
  },
  "shoe-storage-box-new": {
    "price": "USD 10.00",
    "buyLink": "https://fh8gjq-qg.myshopify.com/products/shoe-storage-box"
  },
  "lunch-box-new": {
    "price": "USD 10.20",
    "buyLink": "https://fh8gjq-qg.myshopify.com/products/lunch-box"
  },
  "jewelry-organizer": {
    "price": "USD 7.59",
    "buyLink": "https://fh8gjq-qg.myshopify.com/products/jewelry-organizer"
  },
  "cube-pill-organizer": {
    "price": "USD 11.20",
    "buyLink": "https://fh8gjq-qg.myshopify.com/products/pill-organizer"
  }
};

const linkedCatalogProducts = (window.CATALOG_PRODUCTS || []).map((product) => ({
  ...product,
  ...(shopifyProductLinks[product.id] || {}),
}));
const catalogProducts = [...liveProducts, ...linkedCatalogProducts];
let currentProduct = null;
let selectedSku = "";
let inquiryCart = JSON.parse(localStorage.getItem("yimingInquiryCart") || "[]");

function customerStatus(product) {
  return product.buyLink ? "Ready to buy online" : "Quote available";
}

function optionSummary(product) {
  return `${product.gallery.length} product photos`;
}

function fallbackVisual(title, type) {
  return `
    <div class="fallback-visual ${type}">
      <span>${title.split(" ").slice(0, 2).join(" ")}</span>
    </div>
  `;
}

function createCatalogCard(product) {
  const image = product.primaryImage;
  const price = product.price || "Quote";
  return `
    <article class="catalog-card image-card" data-type="${product.categoryKey}" data-id="${product.id}">
      <button class="product-image-button view-product" type="button" data-id="${product.id}" aria-label="Open ${product.title}">
        ${image ? `<img src="${image}" alt="${product.title}" loading="lazy" />` : fallbackVisual(product.title, product.categoryKey)}
      </button>
      <div>
        <span class="status">${customerStatus(product)}</span>
        <h3>${product.title}</h3>
        <p>${product.summary}</p>
        <div class="product-data-row">
          <small>${product.category}</small>
          <small>${optionSummary(product)}</small>
        </div>
        <div class="card-shop-row">
          <strong>${price}</strong>
          <button class="button light full view-product" type="button" data-id="${product.id}">View Options</button>
        </div>
      </div>
    </article>
  `;
}

function createLiveCard(product) {
  return `
    <article class="live-card">
      <div class="live-image">
        <img src="${product.primaryImage}" alt="${product.title}" />
      </div>
      <div class="live-body">
        <span class="status">${product.status}</span>
        <h3>${product.title}</h3>
        <p>${product.summary}</p>
        <div class="price-row">
          <strong>${product.price}</strong>
          <span>Price in US dollars</span>
        </div>
        <ul>
          <li>Color options</li>
          <li>Online checkout</li>
          <li>Everyday use</li>
          <li>Bulk inquiry</li>
        </ul>
        <a class="button dark full" href="${product.buyLink}">Buy Now</a>
      </div>
    </article>
  `;
}

function updateCartPill() {
  const pill = document.querySelector("#cartPill");
  if (pill) pill.textContent = `Quote List: ${inquiryCart.length}`;
  localStorage.setItem("yimingInquiryCart", JSON.stringify(inquiryCart));
}

function renderSkuPicker(product) {
  const picker = document.querySelector("#skuPicker");
  const images = product.gallery.length ? product.gallery : [product.primaryImage].filter(Boolean);
  picker.innerHTML = images
    .map(
      (src, index) => `
        <button class="sku-option ${index === 0 ? "active" : ""}" type="button" data-src="${src}" data-label="Photo ${String(index + 1).padStart(2, "0")}" aria-label="View ${product.title} photo ${index + 1}">
          <img src="${src}" alt="${product.title} photo ${index + 1}" />
        </button>
      `,
    )
    .join("");
  selectedSku = images[0] || "";
  document.querySelector("#selectedSkuLabel").textContent = images.length ? "Photo 01" : "No image";
}

function openProduct(product) {
  currentProduct = product;
  const dialog = document.querySelector("#productDialog");
  const images = product.gallery.length ? product.gallery : [product.primaryImage].filter(Boolean);
  selectedSku = images[0] || "";
  document.querySelector("#dialogStatus").textContent = customerStatus(product);
  document.querySelector("#dialogTitle").textContent = product.title;
  document.querySelector("#dialogSummary").textContent = product.summary;
  document.querySelector("#dialogPrice").textContent = product.price || "Request a quote";
  document.querySelector("#dialogCategory").textContent = product.category;
  document.querySelector("#dialogImageCount").textContent = optionSummary(product);
  document.querySelector("#dialogSkuCount").textContent = product.buyLink ? "Secure online checkout" : "Bulk quote available";
  const mainImage = document.querySelector("#dialogMainImage");
  mainImage.src = selectedSku || "";
  mainImage.alt = product.title;
  mainImage.hidden = !selectedSku;
  renderSkuPicker(product);
  document.querySelector("#dialogGallery").innerHTML = images.length
    ? images.map((src) => `<img src="${src}" alt="${product.title}" loading="lazy" />`).join("")
    : fallbackVisual(product.title, product.categoryKey);
  const buyNow = document.querySelector("#buyNowButton");
  const addButton = document.querySelector("#addToCartButton");
  if (product.buyLink) {
    buyNow.textContent = "Buy on Shopify";
    buyNow.href = product.buyLink;
    addButton.textContent = product.addLink ? "Add to Cart" : "Choose Options";
  } else {
    buyNow.textContent = "Request Quote";
    buyNow.href = "#contact";
    addButton.textContent = "Add to Quote List";
  }
  if (typeof dialog.showModal === "function") {
    dialog.showModal();
  } else {
    dialog.setAttribute("open", "");
  }
}

function addCurrentProductToCart() {
  if (!currentProduct) return;
  if (currentProduct.addLink) {
    window.open(currentProduct.addLink, "_blank", "noopener");
    return;
  }
  if (currentProduct.buyLink) {
    window.open(currentProduct.buyLink, "_blank", "noopener");
    return;
  }
  const item = {
    id: currentProduct.id,
    title: currentProduct.title,
    chinese: currentProduct.nameCn,
    skuImage: selectedSku,
  };
  inquiryCart = inquiryCart.filter((cartItem) => cartItem.id !== item.id);
  inquiryCart.push(item);
  updateCartPill();
  document.querySelector("#addToCartButton").textContent = "Added to Quote List";
}

function sendInquiryCart() {
  const lines = inquiryCart.length
    ? inquiryCart.map((item, index) => `${index + 1}. ${item.title} / Reference photo: ${item.skuImage || "not selected"}`)
    : ["Please send product price and delivery information."];
  const body = encodeURIComponent(`Hello, I would like to ask about these products:\n\n${lines.join("\n")}\n\nQuantity:\nDelivery city:\nName:\nPhone / WhatsApp:`);
  window.location.href = `mailto:lin@fszzlys.com?subject=Yiming Thailand product quote&body=${body}`;
}

const liveGrid = document.querySelector("#liveGrid");
const catalogGrid = document.querySelector("#catalogGrid");
const sceneSection = document.querySelector("#scenes");
const filters = document.querySelectorAll(".filter");
const dialogClose = document.querySelector("#dialogClose");
const productDialog = document.querySelector("#productDialog");
const addToCartButton = document.querySelector("#addToCartButton");
const sendCartButton = document.querySelector("#sendCartButton");
const skuPicker = document.querySelector("#skuPicker");

liveGrid.innerHTML = liveProducts.map(createLiveCard).join("");
catalogGrid.innerHTML = catalogProducts.map(createCatalogCard).join("");
document.querySelector("#heroNeckPrice").textContent = liveProducts.find((product) => product.id === "shopify-neck-fan").price;
document.querySelector("#productCount").textContent = catalogProducts.length;
document.querySelector("#categoryCount").textContent = new Set(linkedCatalogProducts.map((product) => product.categoryKey)).size;
updateCartPill();

filters.forEach((button) => {
  button.addEventListener("click", () => {
    filters.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    const filter = button.dataset.filter;
    document.querySelectorAll(".catalog-card").forEach((card) => {
      const match = filter === "all" || card.dataset.type === filter || (filter === "live" && catalogProducts.find((product) => product.id === card.dataset.id)?.buyLink);
      card.hidden = !match;
    });
  });
});

catalogGrid.addEventListener("click", (event) => {
  const button = event.target.closest(".view-product");
  if (!button) return;
  const product = catalogProducts.find((item) => item.id === button.dataset.id);
  if (product) openProduct(product);
});

sceneSection.addEventListener("click", (event) => {
  const button = event.target.closest(".scene-product-button");
  if (!button) return;
  const product = catalogProducts.find((item) => item.id === button.dataset.product);
  if (product) openProduct(product);
});

skuPicker.addEventListener("click", (event) => {
  const option = event.target.closest(".sku-option");
  if (!option) return;
  document.querySelectorAll(".sku-option").forEach((item) => item.classList.remove("active"));
  option.classList.add("active");
  selectedSku = option.dataset.src;
  document.querySelector("#dialogMainImage").src = selectedSku;
  document.querySelector("#selectedSkuLabel").textContent = option.dataset.label;
});

addToCartButton.addEventListener("click", addCurrentProductToCart);
sendCartButton.addEventListener("click", sendInquiryCart);
dialogClose.addEventListener("click", () => productDialog.close());
productDialog.addEventListener("click", (event) => {
  if (event.target === productDialog) productDialog.close();
});
