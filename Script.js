let selectedPrice = 0;

function toggleBox(id) {
    const box = document.querySelector(`#content-${id}`).parentElement;
    const allBoxes = document.querySelectorAll(".box");

    allBoxes.forEach(b => b.classList.remove("expanded"));
    if (!box.classList.contains("expanded")) {
        box.classList.add("expanded");
    }

    // Update selected price when an option is clicked
    updatePrice(id);
}

function updatePrice(id) {
    const priceElement = document.querySelector(`#content-${id}`).parentElement.querySelector(".price");
    if (priceElement) {
        selectedPrice = parseFloat(priceElement.textContent.replace("$", "").trim());
    }

    // Update total price in UI
    document.querySelector(".total-usd").innerHTML = `<strong>Total: $${selectedPrice}.00 USD</strong>`;
}

function addToCart() {
    if (selectedPrice === 0) {
        alert("Please select an option first!");
    } else {
        alert(`Added to cart! Total: $${selectedPrice}.00 USD`);
    }
}
