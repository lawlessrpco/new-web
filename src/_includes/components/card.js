/*
The Card Component looks nice, can be used to display many different things
*/

const { html } = require("common-tags");

function Card({ title, desc, img, link }) {
    return html`
        <a class="card__link" href="${link}">
            <div class="card__container">
                <img
                    src="${img}"
                    alt="Card Image: ${title}"
                    class="card__image"
                />
                <div class="card__overlay"></div>
                <div class="card__text">
                    <p class="card__title">${title}</p>
                    <p class="card__desc">${desc}</p>
                </div>
            </div>
        </a>
    `;
}

module.exports = Card;
