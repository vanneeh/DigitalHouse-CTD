function changeMap() {
    let option = document.getElementById("local").value;
    switch (option) {
        case "0":
            document.getElementById("mapa").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235198.7885150827!2d-43.58640913701253!3d-22.91406903476988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bde559108a05b%3A0x50dc426c672fd24e!2sRio%20de%20Janeiro%2C%20RJ!5e0!3m2!1spt-BR!2sbr!4v1632531556557!5m2!1spt-BR!2sbr";
            break;
        case "1":
            document.getElementById("mapa").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.9541404694364!2d-43.21268124892793!3d-22.951915984915146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997fd5984aa13f%3A0x9dc984d7019502de!2sCristo%20Redentor!5e0!3m2!1spt-BR!2sbr!4v1632536690116!5m2!1spt-BR!2sbr";
            console.log('mudou pra cristo')
            break;
        case "2":
            document.getElementById("mapa").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14696.105254813623!2d-43.16335191916957!3d-22.94925800866392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9980409039f845%3A0x8075d7bcdfbcb48c!2zUMOjbyBkZSBBw6d1Y2Fy!5e0!3m2!1spt-BR!2sbr!4v1632536747154!5m2!1spt-BR!2sbr";
            break;
        case "3":
            document.getElementById("mapa").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29395.97851112686!2d-43.21577785097659!3d-22.931904985215677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997fbbf0688d6b%3A0xc444f12c61c36e0!2sSanta%20Teresa%2C%20Rio%20de%20Janeiro%20-%20RJ!5e0!3m2!1spt-BR!2sbr!4v1632536857870!5m2!1spt-BR!2sbr";
            break;
        case "4":
            document.getElementById("mapa").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.0342131133866!2d-43.23234984892825!3d-22.91210888493559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997e5dba888b0d%3A0xf5f33188ee6274e5!2zTWFyYWNhbsOj!5e0!3m2!1spt-BR!2sbr!4v1632536915690!5m2!1spt-BR!2sbr";
            break;
        case "5":
            document.getElementById("mapa").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58780.655638311975!2d-43.29727070282648!3d-22.957923837407886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997fd5c89b3ae3%3A0x46b0bd9b029f14fc!2sParque%20Nacional%20da%20Tijuca!5e0!3m2!1spt-BR!2sbr!4v1632536939625!5m2!1spt-BR!2sbr";
            break;
        case "6":
            document.getElementById("mapa").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.117187332574!2d-43.17875154892841!3d-22.909048084937197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997f61ed302451%3A0xa0ffbd623ec5a540!2sTheatro%20Municipal%20do%20Rio%20de%20Janeiro!5e0!3m2!1spt-BR!2sbr!4v1632536959861!5m2!1spt-BR!2sbr";
            break;
    }