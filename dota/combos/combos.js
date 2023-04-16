import { HEROES } from './constants/heroes.js'
import { ITEMS } from './constants/items.js'
import { VIDEOS } from './constants/videos.js'

window.onload = function () {
    HEROES.forEach(element => {
        document.querySelectorAll('[data-id=' + element.id + ']')
            .forEach(img => img.src = element.url)
    })
    ITEMS.forEach(element => {
        document.querySelectorAll('[data-id=' + element.id + ']')
            .forEach(img => img.src = element.url)
    })
}

document.querySelectorAll('.combo').forEach(div => {
    div.addEventListener('click', () => {
        const videoId = div.id;
        showVideoPopup(videoId);
    });
});

document.querySelectorAll('.video-div').forEach(div => {
    div.addEventListener('click', () => {
        const videoId = div.dataset.videoId;
        showVideoPopup(videoId);
    });
});

document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            const popup = document.getElementById("popup");
            if (popup) {
                popup.remove();
            }
        }
});

function showVideoPopup(videoId) {
    if (VIDEOS.hasOwnProperty(videoId)) {
        const videoUrl = VIDEOS[videoId];
        const popup = document.createElement('div');
        popup.id = "popup"
        popup.classList.add('popup');

        const iframe = document.createElement('iframe');
        iframe.src = videoUrl + "?autoplay=1&controls=0&modestbranding=1&showInfo=0"
        iframe.width = 560;
        iframe.height = 315;
        iframe.allow = 'autoplay; encrypted-media';
        iframe.allowFullscreen = true;

        const closeButton = document.createElement('button');
        closeButton.innerHTML = '&times;'; // Use the HTML entity for "X"
        closeButton.classList.add('close-button');
        closeButton.onclick = () => {
            popup.remove();
        };

        popup.appendChild(iframe);
        popup.appendChild(closeButton);

        document.body.appendChild(popup);
    }
}