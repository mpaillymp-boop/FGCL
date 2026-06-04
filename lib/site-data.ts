/**
 * Central content source for the FGCL site. Copy is taken from the client
 * brief (Site_internet_FGCL). Keep all visible strings here so the Copy
 * Self-Audit stays in one place.
 */

export const NAV_LINKS = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/a-propos" },
  { label: "Produits", href: "/produits" },
  { label: "Services", href: "/services" },
  { label: "Ressources", href: "/ressources" },
  { label: "Nous contacter", href: "/contact" },
] as const;

export const CONTACT = {
  phone: "+237 243 04 45 95",
  phoneHref: "tel:+237243044595",
  address: "Bonanjo, Douala",
  cityFull: "Bonanjo, Douala, Cameroun",
  lat: 4.03752,
  lng: 9.68975,
};

// Section 2 — Nos expertises rapides
export const EXPERTISES = [
  {
    icon: "AppWindow",
    title: "Applications métiers",
    text: "Des outils conçus selon vos besoins opérationnels.",
  },
  {
    icon: "Workflow",
    title: "Automatisation",
    text: "Réduction des tâches manuelles et amélioration de l'efficacité.",
  },
  {
    icon: "BarChart3",
    title: "Reporting & tableaux de bord",
    text: "Des données claires pour piloter votre activité.",
  },
  {
    icon: "Blocks",
    title: "Solutions No-code",
    text: "Des solutions rapides à déployer, flexibles et évolutives.",
  },
] as const;

// Section 3 — Notre mission
export const MISSION_CARDS = [
  {
    icon: "Ruler",
    title: "Solutions sur mesure",
    text: "Des applications adaptées à vos métiers et à vos processus opérationnels.",
  },
  {
    icon: "Rocket",
    title: "Déploiement rapide",
    text: "Des outils no-code et low-code pour livrer vos solutions en un temps record.",
  },
  {
    icon: "ShieldCheck",
    title: "Fiabilité & sécurité",
    text: "Vos données sont sécurisées, vos opérations fiables et vos décisions éclairées.",
  },
  {
    icon: "TrendingUp",
    title: "Performance durable",
    text: "Nous optimisons vos processus pour améliorer votre productivité et votre rentabilité.",
  },
] as const;

// Section 4 — Ils nous font confiance
export const CLIENT_LOGOS = [
  {
    name: "Ceva Logistics",
    src: "https://upload.wikimedia.org/wikipedia/commons/6/62/CEVA_Logistics_New_Logo.png",
  },
  {
    name: "Perenco",
    src: "https://extranet.co.perenco.com/img/parenco-logo.svg",
  },
  {
    name: "Boissons du Cameroun",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReG3rj1ugLlzr9TgESVqCx9MTRyWhwA9tGOQ&s",
  },
  {
    name: "SRC",
    src: "https://src.cm/wp-content/uploads/2025/09/logo-src-cameroun-mini.webp",
  },
  {
    name: "PHP",
    src: "https://louma-jobs.com/cameroun/wp-content/uploads/sites/2/2020/11/t%C3%A9l%C3%A9chargement.png",
  },
] as const;

// Section 5 — Digitalisation : avantages
export const DIGITAL_BENEFITS = [
  "Prise de décision plus rapide",
  "Meilleure traçabilité des opérations",
  "Réduction des tâches manuelles",
  "Gain de productivité",
  "Données centralisées et exploitables",
  "Meilleure adaptation aux exigences du marché",
] as const;

export const DIGITAL_DEFINITIONS = [
  {
    term: "Digitalisation",
    text: "Intégrer des outils numériques dans les activités de l'entreprise pour gagner en efficacité.",
  },
  {
    term: "Numérisation",
    text: "Transformer un document papier en format numérique, comme un PDF.",
  },
  {
    term: "Transformation digitale",
    text: "Faire évoluer progressivement l'organisation grâce au numérique, en respectant ses réalités métier et terrain.",
  },
] as const;

// À propos — chiffres clés
export const KEY_FIGURES = [
  { value: 50, prefix: "+", suffix: "", label: "clients accompagnés" },
  { value: 100, prefix: "+", suffix: "", label: "projets réalisés" },
  { value: 20, prefix: "+", suffix: "", label: "experts à votre service" },
  { value: 100, prefix: "", suffix: "%", label: "engagés pour la performance" },
] as const;

// Produits — Terminaux Famoco
export const FAMOCO_PRODUCTS = [
  {
    name: "Famoco Touch",
    img: "https://www.famoco.com/wp-content/uploads/Famoco_Touch_Hero-1024x1016.png",
    href: "https://www.famoco.com/fr/hardware/terminaux-mobiles/famoco-touch/",
    text: "Terminal tactile robuste pour les usages terrain et la collecte de données.",
  },
  {
    name: "Famoco Tap&Go",
    img: "https://www.famoco.com/wp-content/uploads/Famoco_TapGo_Hero-1024x1019.webp",
    href: "https://www.famoco.com/fr/hardware/terminaux-mobiles/famoco-tap-and-go/",
    text: "Lecteur NFC sécurisé pour le contrôle d'accès et le paiement sans contact.",
  },
  {
    name: "Famoco Square",
    img: "https://www.famoco.com/wp-content/uploads/Famoco_Square_Miniature-300x298.webp",
    href: "https://www.famoco.com/fr/hardware/terminaux-mobiles/famoco-square/",
    text: "Format compact pensé pour la validation et l'identification mobile.",
  },
  {
    name: "FX325",
    img: "https://www.famoco.com/wp-content/uploads/FX325_Miniature-300x298.png",
    href: "https://www.famoco.com/fr/hardware/terminaux-mobiles/fx325/",
    text: "Terminal durci pour les environnements logistiques exigeants.",
  },
  {
    name: "FP200",
    img: "https://www.famoco.com/wp-content/uploads/FP200_Hero-1024x1018.png",
    href: "https://www.famoco.com/fr/hardware/terminaux-mobiles/fp200/",
    text: "Terminal de paiement et de collecte sécurisé, certifié pour le terrain.",
  },
  {
    name: "Famoco Digitouch",
    img: "https://www.famoco.com/wp-content/uploads/Famoco_Digitouch_Miniature-1024x1018.webp",
    href: "https://www.famoco.com/fr/hardware/terminaux-mobiles/famoco-digitouch/",
    text: "Écran tactile polyvalent pour le self-service et l'enrôlement.",
  },
  {
    name: "Famoco Tab",
    img: "https://www.famoco.com/wp-content/uploads/Famoco_Tab_Miniature-300x298.png",
    href: "https://www.famoco.com/fr/hardware/terminaux-mobiles/famoco-tab/",
    text: "Tablette sécurisée pour la gestion des opérations sur site.",
  },
  {
    name: "Famoco Tab 10",
    img: "https://www.famoco.com/wp-content/uploads/Famoco_Tab10_Miniature-300x298.webp",
    href: "https://www.famoco.com/fr/hardware/terminaux-mobiles/famoco-tab-10/",
    text: "Grand format 10 pouces pour la supervision et les tableaux de bord terrain.",
  },
] as const;

// Services
export const SERVICES = [
  {
    icon: "AppWindow",
    title: "Applications métier",
    text: "Création d'applications sur mesure pour les opérations terrain, le contrôle, la maintenance, la sécurité, les audits et le suivi d'activité.",
  },
  {
    icon: "Workflow",
    title: "Automatisation des processus",
    text: "Automatisation des tâches répétitives, génération de rapports, envoi d'e-mails, workflows de validation et intégration avec vos outils existants.",
  },
  {
    icon: "BarChart3",
    title: "Reporting & tableaux de bord",
    text: "Tableaux de bord pour suivre vos indicateurs, vos performances, vos anomalies et vos opérations en temps réel.",
  },
  {
    icon: "Server",
    title: "Infogérance & infrastructure",
    text: "Accompagnement sur le matériel informatique, la sécurité, les équipements, la maintenance et les environnements techniques.",
  },
] as const;

// Services — accompagnement (page service détaillée)
export const SERVICE_STEPS = [
  {
    icon: "Compass",
    title: "Accompagnement à la digitalisation",
    text: "Nous analysons vos process actuels et définissons une trajectoire de digitalisation pragmatique et progressive.",
  },
  {
    icon: "FileText",
    title: "Rédaction du cahier des charges",
    text: "Nous formalisons vos besoins en un cahier des charges clair pour cadrer votre projet de bout en bout.",
  },
  {
    icon: "Smartphone",
    title: "Création de votre application",
    text: "Nous concevons votre application mobile ou web adaptée à votre métier et à la digitalisation de vos process.",
  },
  {
    icon: "GraduationCap",
    title: "Mise en place et formation",
    text: "Nous déployons la solution et formons vos équipes pour une adoption rapide et durable.",
  },
] as const;

// Ressources — vidéos YouTube
export const RESOURCE_VIDEOS = [
  { id: "48gF4BZYNu4", title: "Daxium en action : digitaliser vos opérations" },
  { id: "5_8UzOzOA8M", title: "Créer une application métier sans coder" },
  { id: "F1Ihtg81ktI", title: "Reporting et suivi terrain en temps réel" },
  { id: "WY3VlhJKWY0", title: "Cas d'usage : traçabilité et contrôle" },
  { id: "2NeHMrDBVBE", title: "Automatiser vos workflows de validation" },
  { id: "LV9it7FN90Y", title: "Digitalisation : du papier au tableau de bord" },
] as const;
