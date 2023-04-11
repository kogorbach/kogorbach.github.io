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
    },
    {
        id: "weaver",
        url: "https://static.wikia.nocookie.net/dota2_gamepedia/images/0/09/Weaver_icon.png"
    },
    {
        id: "lich",
        url: "https://static.wikia.nocookie.net/dota2_gamepedia/images/b/bb/Lich_icon.png"
    },
    {
        id: "muerta",
        url: "https://static.wikia.nocookie.net/dota2_gamepedia/images/1/1f/Muerta_icon.png"
    },
    {
        id: "pudge",
        url: "https://static.wikia.nocookie.net/dota2_gamepedia/images/c/c0/Pudge_icon.png"
    },
    {
        id: "batrider",
        url: "https://static.wikia.nocookie.net/dota2_gamepedia/images/f/f2/Batrider_icon.png"
    },
    {
        id: "abaddon",
        url: "https://static.wikia.nocookie.net/dota2_gamepedia/images/2/26/Abaddon_icon.png"
    },
    {
        id: "qop",
        url: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/qoparcana/hero_img/qop_portrait.png"
    },
    {
        id: "voidSpirit",
        url: "https://gamepedia.cursecdn.com/dota2_gamepedia/9/99/Void_Spirit_icon.png"
    },
    {
        id: "silencer",
        url: "https://static.wikia.nocookie.net/dota2_gamepedia/images/9/9f/Silencer_icon.png"
    },
    {
        id: "pugna",
        url: "https://static.wikia.nocookie.net/dota2_gamepedia/images/c/cd/Pugna_icon.png"
    },
    {
        id: "skymage",
        url: "https://static.wikia.nocookie.net/dota2_gamepedia/images/b/bf/Skywrath_Mage_icon.png"
    },
    {
        id: "underlord",
        url: "https://static.wikia.nocookie.net/dota2_gamepedia/images/e/eb/Underlord_Lore.png"
    },
    {
        id: "warlock",
        url: "https://www.dotafire.com/images/hero/icon/warlock.png"
    },
    {
        id: "viper",
        url: "https://images.wsj.net/im-676201?width=1280&size=1"
    }
]

const items = [{
    id: "relic",
    url: "https://static.wikia.nocookie.net/dotaunderlords_gamepedia_en/images/1/10/Sacred_relic_icon.png"
},
{
    id: "radiance",
    url: "https://static.wikia.nocookie.net/dota2_gamepedia/images/d/df/Radiance_%28Active%29_icon.png"
},
{
    id: "nullifier",
    url: "https://static.wikia.nocookie.net/dota2_gamepedia/images/b/bc/Nullifier_icon.png"
},
{
    id: "rapier",
    url: "https://static.wikia.nocookie.net/dotaunderlords_gamepedia_en/images/9/9c/Divine_rapier_icon.png"
},
{
    id: "witchblade",
    url: "https://static.wikia.nocookie.net/dota2_gamepedia/images/6/68/Witch_Blade_icon.png"
},
{
    id: "shard",
    url: "https://static.wikia.nocookie.net/dota2_gamepedia/images/d/d8/Aghanim%27s_Shard_icon.png"
},
{
    id: "moonshard",
    url: "https://static.wikia.nocookie.net/dota2_gamepedia/images/2/21/Moon_Shard_icon.png"
},
{
    id: "bloodstone",
    url: "https://static.wikia.nocookie.net/dota2_gamepedia/images/5/5a/Bloodstone_icon.png"
},
{
    id: "kayasange",
    url: "https://static.wikia.nocookie.net/dota2_gamepedia/images/6/67/Kaya_and_Sange_icon.png"
},
{
    id: "manta",
    url: "https://static.wikia.nocookie.net/dota2_gamepedia/images/8/84/Manta_Style_icon.png"
},
{
    id: "vessel",
    url: "https://static.wikia.nocookie.net/dota2_gamepedia/images/2/2a/Spirit_Vessel_icon.png"
},
{
    id: "ethereal",
    url: "https://static.wikia.nocookie.net/dota2_gamepedia/images/5/5b/Ethereal_Blade_icon.png"
},
{
    id: "dagon",
    url: "https://static.wikia.nocookie.net/dota2_gamepedia/images/7/70/Dagon_5_icon.png"
},
{
    id: "crimson",
    url: "https://3.bp.blogspot.com/-RlkqdA_XIis/VCpiCEqLGFI/AAAAAAAAAzI/PxAzEMIkRdU/s1600/crimson_guard_dota_2.png"
},
{
    id: "pipe",
    url: "https://pbs.twimg.com/media/D996JxEXYAI7BEo.jpg"
},
{
    id: "greaves",
    url: "https://static.wikia.nocookie.net/dota2_gamepedia/images/9/94/Guardian_Greaves_icon.png"
},
{
    id: "lotus",
    url: "https://i.pinimg.com/originals/3d/3f/97/3d3f97c0a2eb1fc9e1208613d02c484c.jpg"
},
{
    id: "shiva",
    url: "https://steamuserimages-a.akamaihd.net/ugc/595902618978516399/BD5F8A207E824C03D5196131D95C1E54790B6AFD/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"
},
{
    id: "shroud",
    url: "https://static.wikia.nocookie.net/dota2_gamepedia/images/c/c5/Eternal_Shroud_icon.png"
}
]


window.onload = function () {
    heroes.forEach(element => {
        document.querySelectorAll('[data-id=' + element.id + ']')
            .forEach(img => img.src = element.url)
    })
    items.forEach(element => {
        document.querySelectorAll('[data-id=' + element.id + ']')
            .forEach(img => img.src = element.url)
    })
}
