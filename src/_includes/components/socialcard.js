const { html } = require("common-tags");

function SocialCard({ title, desc, icon, link }) {
    return html`
        <a href="${link}" class="socialcard__link">
            <div class="socialcard">
                <div class="socialcard__iconcontainer">
                    <i class="${icon} fa-lg"></i>
                </div>
                <div class="socialcard__contentcontainer">
                    <div class="socialcard__title">${title}</div>
                    <div class="socialcard__desc">${desc}</div>
                </div>
            </div>
        </a>
    `;
}

module.exports = SocialCard;
