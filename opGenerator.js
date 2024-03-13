document.addEventListener("DOMContentLoaded", function() {
    const outputBox = document.querySelector(".outputBox");
    const defendingButton = document.getElementById("DefenseButton")
    const attackingButton = document.getElementById("AttackButton")
    const attackingOpsList = [
      "Ram", "Brava", "Grim", "Sens", "Osa", "Flores", "Zero", "Ace", "Iana", "Kali",
      "Amaru", "Nokk", "Gridlock", "Nomad", "Maverick", "Lion", "Finka", "Dokkaebi",
      "Zofia", "Ying", "Jackal", "Hibana", "Capitao", "Blackbeard", "Buck", "Sledge",
      "Thatcher", "Ash", "Thermite", "Montagne", "Twitch", "Blitz", "IQ", "Fuze", "Glaz", "Deimos"
  ];
    
    const defendingOpsList = [
      "Tubarao", "Fenrir", "Solis", "Azami", "Thorn", "Thunderbird", "Aruni", "Melusi",
      "Oryx", "Wamai", "Goyo", "Warden", "Mozzie", "Kaid", "Clash", "Maestro", "Alibi",
      "Vigil", "Ela", "Lesion", "Mira", "Echo", "Caveira", "Valkyrie", "Frost", "Mute", 
      "Smoke", "Castle", "Pulse", "Doc", "Rook", "Jager", "Bandit", "Tachanka", "Kapkan"
  ];
    function operatorImageUpdate(randomOp) {
      let imgUrl;
      ﻿imgUrl = "Assets/" + randomOp + ".png";
    //Legacy Code that I've kept in because its fucking hilarious
    /*switch (randomOp) {
        // Attacking Operators
        case "Ram":
            imgUrl = 'Assets/ram.png';
            break;
        case "Brava":
            imgUrl = 'Assets/brava.png';
            break;
        case "Grim":
            imgUrl = 'Assets/grim.png';
            break;
        case "Sens":
            imgUrl = 'Assets/sens.png';
            break;
        case "Osa":
            imgUrl = 'Assets/osa.png';
            break;
        case "Flores":
            imgUrl = 'Assets/flores.png';
            break;
        case "Zero":
            imgUrl = 'Assets/zero.png';
            break;
        case "Ace":
            imgUrl = 'Assets/ace.png';
            break;
        case "Iana":
            imgUrl = 'Assets/iana.png';
            break;
        case "Kali":
            imgUrl = 'Assets/kali.png';
            break;
        case "Amaru":
            imgUrl = 'Assets/amaru.png';
            break;
        case "Nokk":
            imgUrl = 'Assets/nokk.png';
            break;
        case "Gridlock":
            imgUrl = 'Assets/gridlock.png';
            break;
        case "Nomad":
            imgUrl = 'Assets/nomad.png';
            break;
        case "Maverick":
            imgUrl = 'Assets/maverick.png';
            break;
        case "Lion":
            imgUrl = 'Assets/lion.png';
            break;
        case "Finka":
            imgUrl = 'Assets/finka.png';
            break;
        case "Dokkaebi":
            imgUrl = 'Assets/dokkaebi.png';
            break;
        case "Zofia":
            imgUrl = 'Assets/zofia.png';
            break;
        case "Ying":
            imgUrl = 'Assets/ying.png';
            break;
        case "Jackal":
            imgUrl = 'Assets/jackal.png';
            break;
        case "Hibana":
            imgUrl = 'Assets/hibana.png';
            break;
        case "Capitao":
            imgUrl = 'Assets/capitao.png';
            break;
        case "Blackbeard":
            imgUrl = 'Assets/blackbeard.png';
            break;
        case "Buck":
            imgUrl = 'Assets/buck.png';
            break;
        case "Sledge":
            imgUrl = 'Assets/sledge.png';
            break;
        case "Thatcher":
            imgUrl = 'Assets/thatcher.png';
            break;
        case "Ash":
            imgUrl = 'Assets/ash.png';
            break;
        case "Thermite":
            imgUrl = 'Assets/thermite.png';
            break;
        case "Montagne":
            imgUrl = 'Assets/montagne.png';
            break;
        case "Twitch":
            imgUrl = 'Assets/twitch.png';
            break;
        case "Blitz":
            imgUrl = 'Assets/blitz.png';
            break;
        case "IQ":
            imgUrl = 'Assets/iq.png';
            break;
        case "Fuze":
            imgUrl = 'Assets/fuze.png';
            break;
        case "Glaz":
            imgUrl = 'Assets/glaz.png';
            break;
        case "Deimos":
            imgUrl = 'Assets/deimos.png'
            break;

        // Defending Operators
        case "Tubarao":
            imgUrl = 'Assets/tubarao.png';
            break;
        case "Fenrir":
            imgUrl = 'Assets/fenrir.png';
            break;
        case "Solis":
            imgUrl = 'Assets/solis.png';
            break;
        case "Azami":
            imgUrl = 'Assets/azami.png';
            break;
        case "Thorn":
            imgUrl = 'Assets/thorn.png';
            break;
        case "Thunderbird":
            imgUrl = 'Assets/thunderbird.png';
            break;
        case "Aruni":
            imgUrl = 'Assets/aruni.png';
            break;
        case "Melusi":
            imgUrl = 'Assets/melusi.png';
            break;
        case "Oryx":
            imgUrl = 'Assets/oryx.png';
            break;
        case "Wamai":
            imgUrl = 'Assets/wamai.png';
            break;
        case "Goyo":
            imgUrl = 'Assets/goyo.png';
            break;
        case "Warden":
            imgUrl = 'Assets/warden.png';
            break;
        case "Mozzie":
            imgUrl = 'Assets/mozzie.png';
            break;
        case "Kaid":
            imgUrl = 'Assets/kaid.png';
            break;
        case "Clash":
            imgUrl = 'Assets/clash.png';
            break;
        case "Maestro":
            imgUrl = 'Assets/maestro.png';
            break;
        case "Alibi":
            imgUrl = 'Assets/alibi.png';
            break;
        case "Vigil":
            imgUrl = 'Assets/vigil.png';
            break;
        case "Ela":
            imgUrl = 'Assets/ela.png';
            break;
        case "Lesion":
            imgUrl = 'Assets/lesion.png';
            break;
        case "Mira":
            imgUrl = 'Assets/mira.png';
            break;
        case "Echo":
            imgUrl = 'Assets/echo.png';
            break;
        case "Caveira":
            imgUrl = 'Assets/caveira.png';
            break;
        case "Valkyrie":
            imgUrl = 'Assets/valkyrie.png';
            break;
        case "Frost":
            imgUrl = 'Assets/frost.png';
            break;
        case "Mute":
            imgUrl = 'Assets/mute.png';
            break;
        case "Smoke":
            imgUrl = 'Assets/smoke.png';
            break;
        case "Castle":
            imgUrl = 'Assets/castle.png';
            break;
        case "Pulse":
            imgUrl = 'Assets/pulse.png';
            break;
        case "Doc":
            imgUrl = 'Assets/doc.png';
            break;
        case "Rook":
            imgUrl = 'Assets/rook.png';
            break;
        case "Jager":
            imgUrl = 'Assets/jager.png';
            break;
        case "Bandit":
            imgUrl = 'Assets/bandit.png';
            break;
        case "Tachanka":
            imgUrl = 'Assets/tachanka.png';
            break;
        case "Kapkan":
            imgUrl = 'Assets/kapkan.png';
            break;

    }
*/
    // Set the image source to the determined URL
    document.getElementById('operatorImg').src = imgUrl;
}

    function attackingOp() {
      let randomIndex = Math.floor(Math.random() * attackingOpsList.length);
      let randomOp = attackingOpsList[randomIndex];
      outputBox.innerHTML = randomOp;
      operatorImageUpdate(randomOp);
  };
    
    function defendingOp() {
      let randomIndex = Math.floor(Math.random() * defendingOpsList.length);
      let randomOp = defendingOpsList[randomIndex];
      outputBox.innerHTML = randomOp;
      operatorImageUpdate(randomOp);
  };

    attackingButton.addEventListener("click", attackingOp);
    defendingButton.addEventListener("click", defendingOp);
});
