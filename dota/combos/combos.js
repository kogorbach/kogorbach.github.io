import { HEROES } from './constants/heroes.js'
import { ITEMS } from './constants/items.js'
// import {VIDEOS} from './videos.js'

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