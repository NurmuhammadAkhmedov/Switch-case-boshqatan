document.addEventListener("DOMContentLoaded", function () {
    let plusButtons = document.querySelectorAll(".plus_btn");

    plusButtons.forEach(button => {
        button.addEventListener("click", function () {
            let card = this.closest(".card_item");
            let foodName = card.querySelector(".food_name").innerText;
            let foodPrice = card.querySelector(".food_info").innerText;

            let quantity = prompt(`${foodName} dan nechta zakaz qilmoqchisiz?`, "1");
            quantity = parseInt(quantity);

            if (!isNaN(quantity) && quantity > 0) {
                let totalPrice = quantity * parseInt(foodPrice.replace(/\D/g, ""));
                let confirmOrder = confirm(`${quantity} ta ${foodName} jami narxi ${totalPrice} sum\nMahsulotni zakaz qilasizmi?`);

                switch (confirmOrder) {
                    case true:
                        alert("Zakaz qabul qilindi");
                        break;
                    case false:
                        alert("Zakaz bekor qilindi");
                        break;
                    default:
                        alert("Noma’lum xatolik yuz berdi");
                        break;
                }
            } else {
                alert("Noto‘g‘ri miqdor kiritildi!");
            }
        });
    });
});
