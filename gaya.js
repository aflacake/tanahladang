document.addEventListener('DOMContentLoaded', function () {
// const pesanLanskap = document.querySelector(".pesanLanskap");
// if (pesanLanskap) {
//    pesanLanskap.style.display = "block";
//    pesanLanskap.style.padding = '20px';
//    pesanLanskap.style.fontSize = '16px';
// }


const style = document.createElement("style");
style.textContent = `
    #kotaRumahKambing, #kotaPohonBurung, #kontenSumur {
        z-index: 15;
    }

    summary::-webkit-details-marker {
        display: none;
    }
    summary {
        position: relative;
        padding-left: 5px;
    }
    summary::before {
        content: "▶";
        position: absolute;
        left: 0;
        top: 0;
        transform: translateY(25%);
        transition: transform 0.3s ease;
    }
    details[open] summary::before {
        content: "▼";
    }
`;
document.head.appendChild(style);
});
