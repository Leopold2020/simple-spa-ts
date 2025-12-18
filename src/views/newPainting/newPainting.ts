// 1. Använda lokalt state
export default function newPainting() {
    let count = 1;
  
    const newPainting = document.createElement("div");
    newPainting.classList.add("newPainting");
    newPainting.innerHTML = `
      <h2>Uppload new painting</h2>
      <h2 id="boatHeading"></h2>
      <div class="buttons">
        <button id="incrementButton">Add boats</button>
        <button id="decrementButton">Remove boats</button>
      </div>
    `;
    const boatHeading = newPainting.querySelector<HTMLHeadingElement>("#boatHeading")!;
    const incrementButton = newPainting.querySelector<HTMLButtonElement>("#incrementButton")!;
    const decrementButton = newPainting.querySelector<HTMLButtonElement>("#decrementButton")!;
  
    if (count === 0) {
      decrementButton.disabled = true;
    }
  
    const updateBoats = () =>
      (boatHeading.innerHTML =
        Array.from({ length: count }, (_) => "⛵️").join("") || "no boats");
  
    incrementButton.addEventListener("click", () => {
      count++;
      updateBoats();
    });
    decrementButton.addEventListener("click", () => {
      if (count !== 0) {
        count--;
        updateBoats();
      }
    });
  
    // i slutändan returneras elementet som skapades med document.createElement("div")
    return newPainting;
  }
