let players = [];
let currentStep = 0;
let currentPlayerIndex = 0;
let roles = [];
let animals = [
    "بطريق", "أسد", "فيل", "زرافة", "قرد", "دب", "دلفين", "نمر", "جمل", 
    "كوالا", "فأر", "عصفور", "سلحفاة", "غوريلا", "ضفدع", "عقاب", "بقرة", "خروف", 
    "حصان", "تمساح", "دجاجة", "غزال", "قنفذ", "ذئب", "راكون", "حمار", "سنجاب",
    "نسر", "فهد", "تنين", "حوت", "مهاجم", "فقمة", "عصفور الجنة", "قطة", "كلب"
];
let points = {};
let totalPlayers = 3; // الحد الأدنى للاعبين
let maxPlayers = 10;  // الحد الأقصى للاعبين

// إضافة لاعب جديد
function addPlayer() {
    if (players.length < maxPlayers) {
        let playerName = prompt("أدخل اسم اللاعب:");
        if (playerName && !players.includes(playerName)) {
            players.push(playerName);
        } else {
            alert("لا يمكن إدخال نفس الاسم.");
        }
    } else {
        alert("لقد وصلت إلى الحد الأقصى للاعبين.");
    }
}

// بدء اللعبة
function startGame() {
    if (players.length >= totalPlayers) {
        roles = shuffle(players);
        assignRoles();
        document.getElementById("start-screen").style.display = "none";
        document.getElementById("game-screen").style.display = "block";
        showCurrentPlayer();
    } else {
        alert("يرجى إضافة 3 لاعبين على الأقل.");
    }
}

// تخصيص الأدوار عشوائيًا
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // تبادل العناصر
    }
    return array;
}

// تخصيص أدوار اللاعبين (من هو "برا السالفه" ومن هو "جوا السالفه")
function assignRoles() {
    roles = players.map((player, index) => {
        return index === 0 ? 'برا السالفه' : 'جوا السالفه'; // أول لاعب "برا السالفه"
    });
    roles = shuffle(roles); // عشوائيًا بين اللاعبين
}

// إظهار اللاعب الحالي
function showCurrentPlayer() {
    let currentPlayer = players[currentPlayerIndex];
    document.getElementById("current-player").innerText = `اللاعب الحالي: ${currentPlayer}`;
    let role = roles[currentPlayerIndex];
    document.getElementById("role").innerText = `دورك: ${role === 'برا السالفه' ? 'أنت خارج السالفه' : 'أنت داخل السالفه'}`;
    let animal = animals[Math.floor(Math.random() * animals.length)];
    document.getElementById("animal").innerText = `اسم الحيوان: ${animal}`;
}

// الانتقال إلى الخطوة التالية
function nextStep() {
    currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
    showCurrentPlayer();
}

// طرح الأسئلة
function askQuestion() {
    // منطق طرح الأسئلة هنا
    // الانتقال إلى السؤال التالي
}

// التصويت
function vote(voteYes) {
    // منطق التصويت هنا
}

// إنهاء اللعبة
function endGame() {
    let result = "";
    for (let player of players) {
        result += `${player}: ${points[player] || 0} نقاط\n`;
    }
    document.getElementById("score").innerText = result;
    document.getElementById("score-board").style.display = "block";
}

// بدء لعبة جديدة
function startNewGame() {
    // إعادة تعيين كل شيء
    players = [];
    roles = [];
    points = {};
    currentPlayerIndex = 0;
    currentStep = 0;
    document.getElementById("score-board").style.display = "none";
    document.getElementById("start-screen").style.display = "block";
    document.getElementById("question-screen").style.display = "none";
}
