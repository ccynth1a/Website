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
      imgUrl = "Assets/" + randomOp + ".png";
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
