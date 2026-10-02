    const toggle = document.getElementById("menu-toggle");
    const nav = document.getElementById("nav-list");

    toggle.addEventListener("click", () => {
        const open = nav.classList.toggle("open");
        toggle.setAttribute("aria-expanded", open);
        toggle.innerHTML = open
            ? '<i class="fa-solid fa-xmark"></i>'
            : '<i class="fa-solid fa-bars"></i>';
    });

    nav.querySelectorAll("a").forEach(link =>
        link.addEventListener("click", () => nav.classList.remove("open"))
    );