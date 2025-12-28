## 🎯 Objectif

* Maintenir présence pendant refonte
* Rassurer visiteurs et galeristes
* Respecter univers artiste
* Permettre contact immédiat
* Ne pas concurrencer futur site

---

## 📱 Structure / approche

* Mobile-first, scroll vertical, sections empilées
* HTML/CSS simples, JS léger optionnel (modale, email, transitions)
* **Typographie** :
  * Titres / Hero : Lusitana
  * Texte courant / paragraphes : Nunito

---

## 🧱 Sections

1. **Hero** : image forte, nom **Hervé Petit**, rôle *Peintre*, note “Site en cours de refonte”
2. **Message de transition** : 3–5 lignes, ton neutre et humain
3. **Œuvres** : 3 images, vertical mobile / simple grid desktop, modale clic
4. **Présentation artiste** : 80–120 mots, 3ᵉ personne, 1–2 paragraphes
5. **Contact** : email clair + phrase d’intention
6. **Footer** : minimal, © Hervé Petit – année

---

## 🎨 Esthétique

* Sobriété, hiérarchie claire, beaucoup d’air
* 1 image principale + 3 secondaires
* Couleurs / accents définis (voir ci-dessous)

---

## 🎨 Palette recommandée

* **Bg crème neutre** : `#F6F4EF`
* **Texte principal** : `#2E2C28`
* **Texte secondaire** : `#5A564F`
* **Accent bleu grisé** : `#6E86A6`
* **Accent pastel / hover** : `#B7C7DA`

**Variante froide** : `#F5F5F2`, `#2B2B29`, `#5C5E5A`, `#708AAE`, `#C2D1E4`

---

## 🛠 Technique

* HTML sémantique, CSS simple, responsive
* JS optionnel : modale image, obfuscation email, transitions légères
* Google Fonts intégrées :
  * Lusitana pour titres / hero
  * Nunito pour texte courant

---

## Responsive

* Mobile-first : styles de base pour smartphone (<768px)
* Premier breakpoint : 768px (tablette)
  - Sections possibles en 2 colonnes
  - Espacements et typographie légèrement augmentés
* Deuxième breakpoint : 1024px (desktop)
  - Hero plus large
  - Les œuvres alignées en 3 colonnes grâce à Flexbox avec wrap
  - Présentation artiste avec avatar à côté du texte
* Utilisation de rem, clamp() pour typo et spacing
* Flexbox pour alignements et layout
