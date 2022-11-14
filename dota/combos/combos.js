const heroes = [
    {
        id: "darkWillow",
        url: "https://static.wikia.nocookie.net/dota2_gamepedia/images/3/3c/Dark_Willow_icon.png"
    },
    {
        id: "undying",
        url: "https://static.wikia.nocookie.net/dota2_gamepedia/images/6/61/Undying_icon.png"
    },
    {
        id: "crystalMaiden",
        url: "https://static.wikia.nocookie.net/dota2_gamepedia/images/2/27/Crystal_Maiden_icon.png"
    },
    {
        id: "tinker",
        url: "https://static.wikia.nocookie.net/dota2_gamepedia/images/d/d1/Tinker_icon.png"
    },
    {
        id: "bloodseeker",
        url: "https://static.wikia.nocookie.net/dota2_gamepedia/images/5/56/Bloodseeker_icon.png"
    },
    {
        id: "io",
        url: "https://static.wikia.nocookie.net/dota2_gamepedia/images/8/8d/Io_icon.png"
    },
    {
        id: "axe",
        url: "https://static.wikia.nocookie.net/dota2_gamepedia/images/2/23/Axe_icon.png"
    },
    {
        id: "zeus",
        url: "https://static.wikia.nocookie.net/dota2_gamepedia/images/3/3f/Zeus_icon.png"
    },
    {
        id: "witchDoctor",
        url: "https://static.wikia.nocookie.net/dota2_gamepedia/images/3/33/Witch_Doctor_icon.png"
    },
    {
        id: "naturesProphet",
        url: "https://static.wikia.nocookie.net/dota2_gamepedia/images/c/c4/Nature%27s_Prophet_icon.png"
    },
    {
        id: "grimmstroke",
        url: "https://static.wikia.nocookie.net/dota2_gamepedia/images/d/d7/Grimstroke_icon.png"
    },
    {
        id: "snapfire",
        url: "https://static.wikia.nocookie.net/dota2_gamepedia/images/7/7a/Snapfire_icon.png"
    },
    {
        id: "hoodwink",
        url: "https://static.wikia.nocookie.net/dota2_gamepedia/images/c/c9/Hoodwink_icon.png"
    },
    {
        id: "pangolier",
        url: "https://static.wikia.nocookie.net/dota2_gamepedia/images/4/4e/Pangolier_icon.png"
    },
    {
        id: "bountyHunter",
        url: "https://static.wikia.nocookie.net/dota2_gamepedia/images/a/a6/Bounty_Hunter_icon.png"
    },
    {
        id: "sniper",
        url: "https://static.wikia.nocookie.net/dota2_gamepedia/images/5/51/Sniper_icon.png"
    },
    {
        id: "aa",
        url: "https://static.wikia.nocookie.net/dota2_gamepedia/images/6/67/Ancient_Apparition_icon.png"
    },
    {
        id: "spectre",
        url: "https://static.wikia.nocookie.net/dota2_gamepedia/images/f/ff/Spectre_icon.png"
    },
    {
        id: "ogre",
        url: "https://static.wikia.nocookie.net/dota2_gamepedia/images/e/e0/Ogre_Magi_icon.png"
    },
    {
        id: "primal",
        url: "https://static.wikia.nocookie.net/dota2_gamepedia/images/f/f2/Primal_Beast_icon.png"
    },
    {
        id: "kotl",
        url: "https://static.wikia.nocookie.net/dota2_gamepedia/images/b/b9/Keeper_of_the_Light_icon.png"
    },
    {
        id: "medusa",
        url: "https://static.wikia.nocookie.net/dota2_gamepedia/images/c/cc/Medusa_icon.png"
    },
    {
        id: "chen",
        url: "https://static.wikia.nocookie.net/dota2_gamepedia/images/6/61/Chen_icon.png"
    },
    {
        id: "dragonKnight",
        url: "https://static.wikia.nocookie.net/dota2_gamepedia/images/5/59/Dragon_Knight_icon.png"
    },
    {
        id: "rubick",
        url: "https://static.wikia.nocookie.net/dota2_gamepedia/images/8/8a/Rubick_icon.png"
    },
    {
        id: "sf",
        url: "https://static.wikia.nocookie.net/dota2_gamepedia/images/3/36/Shadow_Fiend_icon.png"
    },
    {
        id: "arcaneBlink",
        url: "https://static.wikia.nocookie.net/dota2_gamepedia/images/2/28/Arcane_Blink_icon.png"
    },
    {
        id: "disruptor",
        url: "https://static.wikia.nocookie.net/dota2_gamepedia/images/9/97/Disruptor_icon.png"
    }
]


window.onload = function () {
    heroes.forEach(element => {
        document.querySelectorAll('[data-id=' + element.id + ']')
            .forEach(img => img.src = element.url)
    })
}