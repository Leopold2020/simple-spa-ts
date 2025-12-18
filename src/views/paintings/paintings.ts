import { getPaintings } from "../../lib/store";
import "./style.css";

interface Painter {
  name: string;
}

interface Painting {
  imageUrl?: string;
  name?: string;
  painter?: Painter;
  description?: string;
}

export default function paintings() {
  const container = document.createElement("div");
  container.classList.add("paintings-page");

  const title = document.createElement("h2");
  title.textContent = "Gallery";
  container.appendChild(title);

  const grid = document.createElement("div");
  grid.classList.add("paintings-grid");
  grid.textContent = "Loading...";
  container.appendChild(grid);

  (async () => {
    try {
      const paintings = await getPaintings() as Painting[];
      grid.innerHTML = "";


      if (!paintings || paintings.length === 0) {
        grid.textContent = "No paintings yet. Add one using the form.";
        return;
      }

      paintings.forEach((p) => {
        const card = document.createElement("div");
        card.classList.add("painting-card");

        const img = document.createElement("img");
        img.src = String(p.imageUrl || "");
        img.alt = p.name || "painting";
        img.classList.add("painting-image");
        card.appendChild(img);

        const info = document.createElement("div");
        info.classList.add("painting-info");

        const name = document.createElement("h3");
        name.textContent = p.name || "Untitled";
        info.appendChild(name);

        const painter = document.createElement("p");
        painter.textContent = p.painter && p.painter.name ? `By ${p.painter.name}` : "";
        info.appendChild(painter);

        const desc = document.createElement("p");
        desc.textContent = p.description || "";
        info.appendChild(desc);

        card.appendChild(info);
        grid.appendChild(card);
      });
    } catch (err) {
      grid.textContent = "Failed to load paintings.";
      console.error(err);
    }
  })();

  return container;
}