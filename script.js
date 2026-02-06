const products = [
  { id: 1, name: 'Classic Denim Jacket', category: 'Apparel', price: 89000, stock: 42, rating: 4.6, tag: 'Best Seller', image: 'https://images.unsplash.com/photo-1618886614638-80e3c103d31a?auto=format&fit=crop&w=900&q=80', description: 'Vintage fit with modern comfort and premium stitching.' },
  { id: 2, name: 'Minimal White Sneakers', category: 'Footwear', price: 64000, stock: 68, rating: 4.4, tag: 'Trending', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80', description: 'Everyday wear with premium sole support.' },
  { id: 3, name: 'Leather Crossbody Bag', category: 'Accessories', price: 72000, stock: 31, rating: 4.5, tag: 'Editor Pick', image: 'https://images.unsplash.com/photo-1591561954555-607968c989ab?auto=format&fit=crop&w=900&q=80', description: 'Compact design with spacious pockets.' },
  { id: 4, name: 'Smart Casual Watch', category: 'Accessories', price: 129000, stock: 18, rating: 4.8, tag: 'Premium', image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=900&q=80', description: 'Elegant timepiece with steel finish.' },
  { id: 5, name: 'Cozy Knit Sweater', category: 'Apparel', price: 55000, stock: 50, rating: 4.2, tag: 'Winter', image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=900&q=80', description: 'Soft cotton blend for cooler evenings.' },
  { id: 6, name: 'Aviator Sunglasses', category: 'Accessories', price: 38000, stock: 74, rating: 4.3, tag: 'Summer', image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=80', description: 'UV protection with timeless style.' },
  { id: 7, name: 'Urban Chino Pants', category: 'Apparel', price: 48000, stock: 56, rating: 4.1, tag: 'New', image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=900&q=80', description: 'Tailored fit with stretch comfort.' },
  { id: 8, name: 'Wireless Earbuds Pro', category: 'Electronics', price: 149000, stock: 27, rating: 4.7, tag: 'Hot', image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=900&q=80', description: 'Noise cancellation and crystal-clear audio.' },
  { id: 9, name: 'Commuter Backpack', category: 'Bags', price: 92000, stock: 23, rating: 4.4, tag: 'Travel', image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80', description: 'Laptop sleeve and weather-resistant shell.' },
  { id: 10, name: 'Ceramic Coffee Mug Set', category: 'Home', price: 34000, stock: 95, rating: 4.0, tag: 'Bundle', image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=900&q=80', description: 'Set of 4 handcrafted matte mugs.' },
  { id: 11, name: 'Performance Hoodie', category: 'Apparel', price: 79000, stock: 40, rating: 4.6, tag: 'Athleisure', image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=900&q=80', description: 'Breathable fabric engineered for movement.' },
  { id: 12, name: 'Minimal Desk Lamp', category: 'Home', price: 59000, stock: 35, rating: 4.5, tag: 'Home', image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=80', description: 'Warm ambient light with touch controls.' },
  { id: 13, name: 'Premium Yoga Mat', category: 'Fitness', price: 42000, stock: 66, rating: 4.4, tag: 'Wellness', image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80', description: 'Cushioned mat with anti-slip texture.' },
  { id: 14, name: 'Smart Water Bottle', category: 'Lifestyle', price: 36000, stock: 53, rating: 4.2, tag: 'Hydration', image: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&w=900&q=80', description: 'Tracks your hydration goals all day.' },
  { id: 15, name: 'Portable Blender', category: 'Kitchen', price: 51000, stock: 32, rating: 4.1, tag: 'Kitchen', image: 'https://images.unsplash.com/photo-1570222094114-d054a817e56b?auto=format&fit=crop&w=900&q=80', description: 'USB-rechargeable blender for smoothies.' },
  { id: 16, name: 'Travel Neck Pillow', category: 'Travel', price: 27000, stock: 80, rating: 4.0, tag: 'Comfort', image: 'https://images.unsplash.com/photo-1527633412983-d80af308e660?auto=format&fit=crop&w=900&q=80', description: 'Memory foam support for long trips.' },
  { id: 17, name: 'Bluetooth Speaker Mini', category: 'Electronics', price: 47000, stock: 48, rating: 4.3, tag: 'Audio', image: 'https://images.unsplash.com/photo-1589003077984-894e133dabab?auto=format&fit=crop&w=900&q=80', description: 'Compact sound with deep bass.' },
  { id: 18, name: 'Gaming Mouse Pro', category: 'Electronics', price: 62000, stock: 29, rating: 4.5, tag: 'Gaming', image: 'https://images.unsplash.com/photo-1563297007-0686b7003af7?auto=format&fit=crop&w=900&q=80', description: 'Precision sensor and RGB controls.' },
  { id: 19, name: 'Organic Face Serum', category: 'Beauty', price: 39000, stock: 57, rating: 4.4, tag: 'Skincare', image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=900&q=80', description: 'Natural glow with vitamin-rich formula.' },
  { id: 20, name: 'Luxury Bath Towel Set', category: 'Home', price: 45000, stock: 41, rating: 4.3, tag: 'Bath', image: 'https://images.unsplash.com/photo-1616627561950-9f746e330187?auto=format&fit=crop&w=900&q=80', description: 'Soft, absorbent, and quick-dry towels.' },
  { id: 21, name: 'Ergonomic Office Chair', category: 'Furniture', price: 215000, stock: 15, rating: 4.8, tag: 'Office', image: 'https://images.unsplash.com/photo-1505798577917-a65157d3320a?auto=format&fit=crop&w=900&q=80', description: 'Lumbar support with breathable mesh.' },
  { id: 22, name: 'Wireless Keyboard', category: 'Electronics', price: 57000, stock: 37, rating: 4.2, tag: 'Work', image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=80', description: 'Slim profile with long battery life.' },
  { id: 23, name: 'Stainless Cookware Set', category: 'Kitchen', price: 132000, stock: 21, rating: 4.6, tag: 'Cookware', image: 'https://images.unsplash.com/photo-1586201375761-83865001e31b?auto=format&fit=crop&w=900&q=80', description: 'Durable 5-piece induction-ready set.' },
  { id: 24, name: 'Trail Running Shoes', category: 'Footwear', price: 118000, stock: 33, rating: 4.7, tag: 'Sport', image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=900&q=80', description: 'Grip-focused outsole for rough terrain.' },
  { id: 25, name: 'Noise Cancelling Headphones', category: 'Electronics', price: 196000, stock: 17, rating: 4.8, tag: 'Premium Audio', image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=80', description: 'Immersive listening with ANC.' },
  { id: 26, name: 'Smart Home Camera', category: 'Electronics', price: 87000, stock: 28, rating: 4.4, tag: 'Security', image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=900&q=80', description: '1080p monitoring with night vision.' },
  { id: 27, name: 'Classic Fedora Hat', category: 'Accessories', price: 33000, stock: 44, rating: 4.1, tag: 'Style', image: 'https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?auto=format&fit=crop&w=900&q=80', description: 'Statement accessory with timeless edge.' },
  { id: 28, name: 'Digital Kitchen Scale', category: 'Kitchen', price: 26000, stock: 61, rating: 4.0, tag: 'Utility', image: 'https://images.unsplash.com/photo-1494962227006-107baac595ed?auto=format&fit=crop&w=900&q=80', description: 'Precise measurements for perfect meals.' },
  { id: 29, name: 'Canvas Wall Art Trio', category: 'Decor', price: 68000, stock: 22, rating: 4.3, tag: 'Decor', image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=900&q=80', description: 'Modern prints to elevate your space.' },
  { id: 30, name: 'Rechargeable Hand Fan', category: 'Lifestyle', price: 19000, stock: 77, rating: 4.1, tag: 'Summer Essential', image: 'https://images.unsplash.com/photo-1522758971460-1d21eed7dc1d?auto=format&fit=crop&w=900&q=80', description: 'Portable cooling with USB charging.' },
];

const accessPolicy = {
  customer: ['Browse Products', 'Add to Cart', 'Checkout', 'Track Orders', 'Manage Account'],
  vendor: ['Manage Own Products', 'View Own Products', 'Manage Own Inventory'],
  staff: ['Process Orders', 'Manage Products (Limited)', 'View Customer Support'],
  admin: ['Manage Products', 'Manage Orders', 'Manage Users', 'Manage Payments', 'View Reports'],
  super_admin: ['Full System Access', 'Manage Settings', 'Oversee All Activities', 'User Permission Overrides'],
  content_manager: ['Manage Site Content', 'Add/Edit Blogs'],
  marketing_manager: ['Run Promotions', 'Manage Discounts'],
  customer_support: ['Handle Customer Queries', 'View Order Issues'],
  logistics_shipping: ['Manage Order Fulfilment', 'Handle Dispatch'],
  accountant: ['Manage Finances', 'Generate Reports'],
};

const STORAGE_KEYS = {
  users: 'novacart_users',
  roleUsers: 'novacart_role_users',
  session: 'novacart_session',
};

const state = {
  route: 'home',
  selectedProductId: null,
  search: '',
  user: null,
  cart: [],
  wishlist: [],
  orders: {
    'NC-1001': { status: 'Packed', total: 218000, customer: 'Sarah L.' },
    'NC-1002': { status: 'Out for Delivery', total: 96000, customer: 'Milan A.' },
    'NC-1003': { status: 'Delivered', total: 320000, customer: 'Priya R.' },
  },
};

function formatNaira(value) {
  return `₦${Number(value).toLocaleString('en-NG', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

const el = {
  navLinks: document.querySelectorAll('[data-route]'),
  pages: document.querySelectorAll('.page'),
  productGrid: document.getElementById('product-grid'),
  detailsContainer: document.getElementById('details-container'),
  catalogMeta: document.getElementById('catalog-meta'),
  searchInput: document.getElementById('global-search'),
  cartCount: document.getElementById('cart-count'),
  wishlistCount: document.getElementById('wishlist-count'),
  quickCartItems: document.getElementById('quick-cart-items'),
  quickTotal: document.getElementById('quick-total'),
  cartItems: document.getElementById('cart-items'),
  cartSubtotal: document.getElementById('cart-subtotal'),
  cartTax: document.getElementById('cart-tax'),
  cartGrand: document.getElementById('cart-grand'),
  wishlistItems: document.getElementById('wishlist-items'),
  cartPanel: document.getElementById('cart-panel'),
  wishlistPanel: document.getElementById('wishlist-panel'),
  accountStatus: document.getElementById('account-status'),
  checkoutForm: document.getElementById('checkout-form'),
  checkoutMessage: document.getElementById('checkout-message'),
  loginForm: document.getElementById('login-form'),
  registerForm: document.getElementById('register-form'),
  userLogoutBtn: document.getElementById('user-logout-btn'),
  userWelcome: document.getElementById('user-welcome'),
  userAvatarPreview: document.getElementById('user-avatar-preview'),
  userAvatarUpload: document.getElementById('user-avatar-upload'),
  trackingForm: document.getElementById('tracking-form'),
  trackingStatus: document.getElementById('tracking-status'),
  userSettingsForm: document.getElementById('user-settings-form'),
  settingsStatus: document.getElementById('settings-status'),
  rolePanel: document.getElementById('role-access-panel'),
  roleRegisterForm: document.getElementById('role-register-form'),
  roleLoginForm: document.getElementById('role-login-form'),
  roleAccessStatus: document.getElementById('role-access-status'),
  roleWelcome: document.getElementById('role-welcome'),
  roleAvatarPreview: document.getElementById('role-avatar-preview'),
  roleAvatarUpload: document.getElementById('role-avatar-upload'),
  openWorkspaceBtn: document.getElementById('open-workspace-btn'),
  logoutRoleBtn: document.getElementById('logout-role-btn'),
  workspaceNav: document.getElementById('workspace-nav'),
  workspaceCards: document.getElementById('workspace-cards'),
  workspaceRoleBadge: document.getElementById('workspace-role-badge'),
  homeStats: document.getElementById('home-stats'),
  currentUserChip: document.getElementById('current-user-chip'),
  userDisplayName: document.getElementById('user-display-name'),
  roleDisplayName: document.getElementById('role-display-name'),
};

function uid() {
  return typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : `id_${Date.now()}_${Math.random().toString(36).slice(2)}`;
}

function readJson(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback;
  } catch {
    return fallback;
  }
}

function writeJson(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getUsers() {
  return readJson(STORAGE_KEYS.users, []);
}

function getRoleUsers() {
  return readJson(STORAGE_KEYS.roleUsers, []);
}

function canAccessWorkspace() {
  return Boolean(state.user && state.user.role && state.user.role !== 'customer');
}

function setRoute(route) {
  if (route === 'workspace' && !canAccessWorkspace()) {
    route = 'account';
    el.roleAccessStatus.textContent = 'Operations access required for this workspace.';
    el.roleAccessStatus.classList.add('access-denied');
  }
  state.route = route;
  el.pages.forEach((page) => page.classList.toggle('active', page.dataset.page === route));
  el.navLinks.forEach((button) => button.classList.toggle('active', button.dataset.route === route));
  if (route === 'details') renderDetails(state.selectedProductId);
  if (route === 'workspace') renderWorkspace();
}

function setUserSession(user) {
  state.user = user || null;
  const role = state.user?.role || 'guest';

  const userSignedIn = role === 'customer';
  const roleSignedIn = role !== 'guest' && role !== 'customer';

  el.userLogoutBtn.hidden = !userSignedIn;
  el.rolePanel.hidden = userSignedIn;

  if (userSignedIn) {
    el.accountStatus.textContent = `Signed in as ${state.user.name} (${state.user.email}).`;
    el.userWelcome.textContent = `Welcome back, ${state.user.name}. This account belongs to you.`;
    el.userDisplayName.textContent = state.user.name;
    el.userAvatarPreview.src = state.user.avatar || 'https://via.placeholder.com/120x120.png?text=User';
  } else {
    el.accountStatus.textContent = 'Not signed in as customer.';
    el.userWelcome.textContent = 'Welcome, guest.';
    el.userDisplayName.textContent = 'Guest';
    el.userAvatarPreview.src = 'https://via.placeholder.com/120x120.png?text=User';
  }

  if (roleSignedIn) {
    el.roleAccessStatus.classList.remove('access-denied');
    el.roleAccessStatus.textContent = `${role.replaceAll('_', ' ')} access granted.`;
    el.roleWelcome.textContent = `Logged in as ${state.user.name} (${state.user.email}).`;
    el.roleDisplayName.textContent = `${state.user.name} (${role.replaceAll('_', ' ')})`;
    el.roleAvatarPreview.src = state.user.avatar || 'https://via.placeholder.com/120x120.png?text=Role';
  } else {
    el.roleWelcome.textContent = 'No role user signed in.';
    el.roleDisplayName.textContent = 'None';
    el.roleAvatarPreview.src = 'https://via.placeholder.com/120x120.png?text=Role';
  }

  if (state.user) {
    el.currentUserChip.hidden = false;
    el.currentUserChip.textContent = `${state.user.name} · ${role.replaceAll('_', ' ')}`;
  } else {
    el.currentUserChip.hidden = true;
    el.currentUserChip.textContent = 'Guest';
  }

  updateWorkspaceControls();
  renderWorkspace();
}

function loadSession() {
  setUserSession(readJson(STORAGE_KEYS.session, null));
}

function saveSession(user) {
  writeJson(STORAGE_KEYS.session, user);
  loadSession();
}

function clearSession() {
  localStorage.removeItem(STORAGE_KEYS.session);
  loadSession();
}

function openPanel(panel) { panel.classList.add('open'); panel.setAttribute('aria-hidden', 'false'); }
function closePanel(panel) { panel.classList.remove('open'); panel.setAttribute('aria-hidden', 'true'); }

function getFilteredProducts() {
  const term = state.search.trim().toLowerCase();
  if (!term) return products;
  return products.filter((product) => [product.name, product.category, product.description, product.tag].join(' ').toLowerCase().includes(term));
}

function renderCatalog() {
  const filtered = getFilteredProducts();
  el.catalogMeta.textContent = `${filtered.length} products · ${new Set(filtered.map((p) => p.category)).size} categories`;
  el.productGrid.innerHTML = filtered.map((product) => `
    <article class="product">
      <img src="${product.image}" alt="${product.name}" loading="lazy" />
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p class="muted">${product.category} · ⭐ ${product.rating} · ${product.tag} · Stock ${product.stock}</p>
      <div class="price">${formatNaira(product.price)}</div>
      <div class="row">
        <button class="small-btn" data-action="details" data-id="${product.id}">View</button>
        <button class="small-btn" data-action="cart" data-id="${product.id}">Add Cart</button>
        <button class="small-btn" data-action="wishlist" data-id="${product.id}">Wishlist</button>
      </div>
    </article>`).join('');
}

function renderDetails(productId) {
  const product = products.find((item) => item.id === productId);
  if (!product) return;
  el.detailsContainer.innerHTML = `
    <div class="section-head"><h2>Product Details</h2><button class="small-btn" data-route="catalog">Back</button></div>
    <div class="details-layout">
      <img src="${product.image}" alt="${product.name}" />
      <div>
        <h3>${product.name}</h3>
        <p class="muted">${product.category} · Rating ${product.rating} · ${product.tag}</p>
        <p>${product.description}</p>
        <p class="price">${formatNaira(product.price)}</p>
      </div>
    </div>`;
}

function addToCart(productId) {
  const product = products.find((item) => item.id === productId);
  if (!product) return;
  state.cart.push(product);
  renderCart();
}

function removeFromCart(index) {
  state.cart.splice(index, 1);
  renderCart();
}

function addToWishlist(productId) {
  const product = products.find((item) => item.id === productId);
  if (!product || state.wishlist.some((item) => item.id === productId)) return;
  state.wishlist.push(product);
  renderWishlist();
}

function removeFromWishlist(index) {
  state.wishlist.splice(index, 1);
  renderWishlist();
}

function renderCart() {
  el.cartCount.textContent = state.cart.length;
  const subtotal = state.cart.reduce((sum, item) => sum + item.price, 0);
  const tax = subtotal * 0.08;
  const grand = subtotal + tax;
  el.cartSubtotal.textContent = formatNaira(subtotal);
  el.cartTax.textContent = formatNaira(tax);
  el.cartGrand.textContent = formatNaira(grand);
  el.quickTotal.textContent = formatNaira(grand);
  const markup = state.cart.length ? state.cart.map((item, index) =>
    `<li><span>${item.name} · ${formatNaira(item.price)}</span><button class="small-btn danger" data-action="remove-cart" data-index="${index}">Remove</button></li>`
  ).join('') : '<li>Your cart is empty.</li>';
  el.cartItems.innerHTML = markup;
  el.quickCartItems.innerHTML = markup;
}

function renderWishlist() {
  el.wishlistCount.textContent = state.wishlist.length;
  el.wishlistItems.innerHTML = state.wishlist.length
    ? state.wishlist.map((item, index) => `<li><span>${item.name}</span><button class="small-btn danger" data-action="remove-wishlist" data-index="${index}">Remove</button></li>`).join('')
    : '<li>Your wishlist is empty.</li>';
}

function updateWorkspaceControls() {
  const allowed = canAccessWorkspace();
  el.openWorkspaceBtn.hidden = !allowed;
  el.logoutRoleBtn.hidden = !allowed;
  el.workspaceNav.hidden = !allowed;
}

function renderWorkspace() {
  const role = state.user?.role;
  if (!canAccessWorkspace()) {
    el.workspaceRoleBadge.textContent = 'Locked';
    el.workspaceCards.innerHTML = '<article class="panel">No access. Sign in with a role account.</article>';
    return;
  }
  const modules = accessPolicy[role] || [];
  el.workspaceRoleBadge.textContent = role.replaceAll('_', ' ');
  el.workspaceCards.innerHTML = modules.map((module) =>
    `<article class="glass panel"><h3>${module}</h3><p class="card-note">Accessible for <strong>${role.replaceAll('_', ' ')}</strong>.</p></article>`
  ).join('');
}

function renderHomeStats() {
  const orderCount = Object.keys(state.orders).length;
  const totalStock = products.reduce((sum, p) => sum + p.stock, 0);
  const avgPrice = products.reduce((sum, p) => sum + p.price, 0) / products.length;
  el.homeStats.innerHTML = [
    `Products in catalog: ${products.length}`,
    `Orders in system: ${orderCount}`,
    `Inventory units: ${totalStock}`,
    `Average product price: ${formatNaira(avgPrice)}`,
  ].map((line) => `<li>${line}</li>`).join('');
}

function handleRegister(event) {
  event.preventDefault();
  const name = event.target.querySelector('[name="register-name"]').value.trim();
  const email = event.target.querySelector('[name="register-email"]').value.trim().toLowerCase();
  const password = event.target.querySelector('[name="register-password"]').value;
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!name || !isValidEmail || password.length < 6) {
    el.accountStatus.textContent = 'Name, valid email and password (min 6 chars) are required.';
    return;
  }
  const users = getUsers();
  if (users.some((u) => u.email === email)) {
    el.accountStatus.textContent = 'User email already exists.';
    return;
  }
  users.push({ id: uid(), name, email, password, role: 'customer', avatar: '' });
  writeJson(STORAGE_KEYS.users, users);
  el.accountStatus.textContent = 'Registration successful. You can sign in now.';
  event.target.reset();
}

function handleLogin(event) {
  event.preventDefault();
  const email = document.getElementById('login-email').value.trim().toLowerCase();
  const password = document.getElementById('login-password').value;
  const user = getUsers().find((u) => u.email === email && u.password === password);
  if (!user) {
    el.accountStatus.textContent = 'Invalid user credentials.';
    return;
  }
  saveSession({ ...user, role: 'customer' });
  event.target.reset();
}

function handleUserLogout() {
  clearSession();
  el.accountStatus.textContent = 'User logged out.';
}

function handleRoleRegister(event) {
  event.preventDefault();
  const role = document.getElementById('role-register-select').value;
  const name = document.getElementById('role-register-name').value.trim();
  const email = document.getElementById('role-register-email').value.trim().toLowerCase();
  const password = document.getElementById('role-register-password').value;

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!role || !name || !isValidEmail || password.length < 6) {
    el.roleAccessStatus.textContent = 'Role, name, valid email and password are required.';
    el.roleAccessStatus.classList.add('access-denied');
    return;
  }

  const roleUsers = getRoleUsers();
  if (roleUsers.some((u) => u.email === email)) {
    el.roleAccessStatus.textContent = 'Role account already registered for this email.';
    el.roleAccessStatus.classList.add('access-denied');
    return;
  }

  roleUsers.push({ id: uid(), name, email, password, role, avatar: '' });
  writeJson(STORAGE_KEYS.roleUsers, roleUsers);
  el.roleAccessStatus.classList.remove('access-denied');
  el.roleAccessStatus.textContent = `${role.replaceAll('_', ' ')} account registered successfully.`;
  event.target.reset();
}

function handleRoleLogin(event) {
  event.preventDefault();
  const email = document.getElementById('role-login-email').value.trim().toLowerCase();
  const password = document.getElementById('role-login-password').value;
  const roleUser = getRoleUsers().find((u) => u.email === email && u.password === password);
  if (!roleUser) {
    el.roleAccessStatus.textContent = 'Invalid role login credentials.';
    el.roleAccessStatus.classList.add('access-denied');
    return;
  }
  el.roleAccessStatus.classList.remove('access-denied');
  saveSession(roleUser);
  event.target.reset();
}

function handleRoleLogout() {
  clearSession();
  el.roleAccessStatus.textContent = 'Role user logged out.';
  if (state.route === 'workspace') setRoute('account');
}

function updateAvatarForCurrentSession(dataUrl, mode) {
  if (!state.user) return;
  if (mode === 'customer' && state.user.role !== 'customer') return;
  if (mode === 'role' && state.user.role === 'customer') return;

  const key = state.user.role === 'customer' ? STORAGE_KEYS.users : STORAGE_KEYS.roleUsers;
  const users = readJson(key, []);
  const idx = users.findIndex((u) => u.id === state.user.id);
  if (idx < 0) return;

  users[idx].avatar = dataUrl;
  writeJson(key, users);
  saveSession({ ...users[idx] });
}

function fileToDataURL(file, callback) {
  const reader = new FileReader();
  reader.onload = () => callback(String(reader.result));
  reader.readAsDataURL(file);
}

function isImageFile(file) {
  return Boolean(file && file.type && file.type.startsWith('image/'));
}

function handleCheckout(event) {
  event.preventDefault();
  if (!state.cart.length) {
    el.checkoutMessage.textContent = 'Cart is empty. Add products before checkout.';
    return;
  }
  const paymentMethod = document.getElementById('payment-method').value;
  if (!paymentMethod) {
    el.checkoutMessage.textContent = 'Please choose a payment method.';
    return;
  }
  const newOrderId = `NC-${1000 + Math.floor(Math.random() * 9000)}`;
  const total = state.cart.reduce((s, i) => s + i.price, 0);
  state.orders[newOrderId] = { status: 'Order Confirmed', total: Number(total.toFixed(2)), customer: state.user?.name || 'Guest user' };
  el.checkoutMessage.textContent = `Gateway approved via ${paymentMethod}. Order placed: ${newOrderId}.`;
  state.cart = [];
  renderCart();
  renderHomeStats();
  event.target.reset();
}

function handleTracking(event) {
  event.preventDefault();
  const orderId = document.getElementById('tracking-id').value.trim().toUpperCase();
  const order = state.orders[orderId];
  el.trackingStatus.textContent = order ? `${orderId}: ${order.status} | Customer: ${order.customer} | Total: ${formatNaira(order.total)}` : `No tracking data found for ${orderId}.`;
}

function handleUserSettings(event) {
  event.preventDefault();
  const name = document.getElementById('setting-name').value || 'User';
  const theme = document.getElementById('setting-theme').value;
  const notify = document.getElementById('setting-notify').value;
  el.settingsStatus.textContent = `Saved settings for ${name}: Theme=${theme}, Notifications=${notify}.`;
}

document.addEventListener('click', (event) => {
  const routeBtn = event.target.closest('[data-route]');
  if (routeBtn) setRoute(routeBtn.getAttribute('data-route'));

  const routeLink = event.target.closest('[data-route-link]');
  if (routeLink) {
    event.preventDefault();
    setRoute(routeLink.getAttribute('data-route-link'));
  }

  const actionBtn = event.target.closest('[data-action]');
  if (!actionBtn) return;
  const action = actionBtn.getAttribute('data-action');
  const id = Number(actionBtn.getAttribute('data-id'));
  const index = Number(actionBtn.getAttribute('data-index'));

  if (action === 'details') { state.selectedProductId = id; setRoute('details'); }
  if (action === 'cart') addToCart(id);
  if (action === 'wishlist') addToWishlist(id);
  if (action === 'remove-cart') removeFromCart(index);
  if (action === 'remove-wishlist') removeFromWishlist(index);
});

el.searchInput.addEventListener('input', (event) => {
  state.search = event.target.value;
  renderCatalog();
});

el.userAvatarUpload.addEventListener('change', (event) => {
  const file = event.target.files?.[0];
  if (!file) return;
  if (!isImageFile(file)) {
    el.accountStatus.textContent = 'Please upload a valid image file.';
    return;
  }
  fileToDataURL(file, (url) => updateAvatarForCurrentSession(url, 'customer'));
});

el.roleAvatarUpload.addEventListener('change', (event) => {
  const file = event.target.files?.[0];
  if (!file) return;
  if (!isImageFile(file)) {
    el.roleAccessStatus.textContent = 'Please upload a valid image file.';
    el.roleAccessStatus.classList.add('access-denied');
    return;
  }
  fileToDataURL(file, (url) => updateAvatarForCurrentSession(url, 'role'));
});

document.getElementById('cart-btn').addEventListener('click', () => openPanel(el.cartPanel));
document.getElementById('close-cart').addEventListener('click', () => closePanel(el.cartPanel));
document.getElementById('wishlist-btn').addEventListener('click', () => openPanel(el.wishlistPanel));
document.getElementById('close-wishlist').addEventListener('click', () => closePanel(el.wishlistPanel));

el.checkoutForm.addEventListener('submit', handleCheckout);
el.loginForm.addEventListener('submit', handleLogin);
el.registerForm.addEventListener('submit', handleRegister);
el.userLogoutBtn.addEventListener('click', handleUserLogout);
el.roleRegisterForm.addEventListener('submit', handleRoleRegister);
el.roleLoginForm.addEventListener('submit', handleRoleLogin);
el.logoutRoleBtn.addEventListener('click', handleRoleLogout);
el.trackingForm.addEventListener('submit', handleTracking);
el.userSettingsForm.addEventListener('submit', handleUserSettings);

renderCatalog();
renderCart();
renderWishlist();
renderHomeStats();
renderWorkspace();
setRoute('home');
loadSession();
