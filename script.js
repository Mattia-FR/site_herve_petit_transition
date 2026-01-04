// Sélectionner tous les work-items
const workItems = document.querySelectorAll(".work-item");
const body = document.body;

// Créer la modale (une seule fois)
const modal = document.createElement("div");
modal.className = "modal";
modal.innerHTML = `
  <article class="modal-content">
    <button class="modal-close" aria-label="Fermer">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-x-icon lucide-circle-x"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>
    </button>
    <img src="" alt="" class="modal-image">
  </article>
`;
body.appendChild(modal);

const modalImage = modal.querySelector(".modal-image");
const closeBtn = modal.querySelector(".modal-close");

// Fonction pour ouvrir la modale
function openModal(imgSrc, imgAlt) {
	modalImage.src = imgSrc;
	modalImage.alt = imgAlt;
	modal.classList.add("active");
	closeBtn.focus(); // Place le focus sur le bouton de fermeture pour l'accessibilité
	body.style.overflow = "hidden"; // Empêche le scroll
}

// Fonction pour fermer la modale
function closeModal() {
	modal.classList.remove("active");
	body.style.overflow = ""; // Restaure le scroll
}

// Ajouter les événements sur chaque œuvre
for (const item of workItems) {
	// Ouvrir la modale au clic sur une œuvre
	item.addEventListener("click", () => {
		const img = item.querySelector("img");
		openModal(img.src, img.alt);
	});

	// Ajouter la navigation au clavier (Enter ou Espace)
	item.addEventListener("keydown", (e) => {
		if (e.key === "Enter" || e.key === " ") {
			e.preventDefault(); // Empêche le scroll avec Space
			const img = item.querySelector("img");
			openModal(img.src, img.alt);
		}
	});
}

// Fermer la modale avec le bouton de fermeture
closeBtn.addEventListener("click", closeModal);

// Fermer en cliquant en dehors de l'image
modal.addEventListener("click", (e) => {
	if (e.target === modal) {
		closeModal();
	}
});

// Fermer avec la touche Échap
document.addEventListener("keydown", (e) => {
	if (e.key === "Escape" && modal.classList.contains("active")) {
		closeModal();
	}
});
