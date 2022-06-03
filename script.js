let body = document.querySelector("body"); //тело сайта
let main_player = document.querySelector(".main_player"); //игрок на главной сцене
let main = document.querySelector(".main"); //главная локация
let school = document.querySelector(".school"); //картинка школы
let workshop = document.querySelector('.mastery')
let arena = document.querySelector('.arena')
let location1 = document.querySelector('.location1')
let location2 = document.querySelector(".location2"); //локация 2
let location3 = document.querySelector('.location3')
let nojniBox = document.querySelector(".nojni"); //ачивка ножны
let swordBox = document.querySelector('.sword')
let blacksmith = document.querySelector('.blacksmith')
let checker = 0;
let damageModificator = 0
school.onclick = function(){
	main_player.style.top = "32%";
	main_player.style.left = "70%";
	let loc2_variants_block = document.querySelector(".loc2_variants_block");
	let talk = document.querySelector(".loc2_talk");
	let miss = document.querySelectorAll(".loc2_variants");
	let prav = document.querySelector(".loc2_pravilno");
	let timeText = document.querySelector(".loc2_timeText")
	let time = 10
	function changeLocation2(){
		main.style.display = "none";
		body.style.background = "green";
		location2.style.display = "block";

		setTimeout(showBuble, 1000);
		setTimeout(showVariants, 2000);
	}
	let showBuble = function() {
		talk.style.display = "block";
	} 
	let stopTimer = function () {
		clearInterval(timer)
		checker = 0	
	}
	let hideBody = function () {
		body.style.display = 'none'
	}
	let timer1 = function () {
		time = time - 1
		timeText.innerHTML = time
		if (time == 0) {
			alert('Ты проиграл!')
			stopTimer()
			hideBody()
		}
		if (checker == 1) {
			alert('Ты получил ножны!')
			stopTimer()
			damageModificator += 1
		}
	}
	let showVariants = function() {
		loc2_variants_block.style.display = "block";
		timer = setInterval(timer1, 1000)
	}
	for(let i=0; i<miss.length; i++) {
		miss[i].onclick = function() {
			alert("ошибка");
		}
	}
	prav.onclick = function() {
		main.style.display = "block";
		location2.style.display = "none";
		body.style.backgroundImage = "url(bg1.png)";
		body.style.backgroundSize = "cover";
		checker = 1;
		if(checker == 1){
			nojniBox.style.display = "block";
		}
	}
	setTimeout(changeLocation2, 1000);
}
workshop.onclick = function () {
	main_player.style.top = "64%"
	main_player.style.left = "38%"
	let talk = document.querySelector('.loc1_talk')
	let anvil = document.querySelector('.anvil')
	let timeText = document.querySelector('.loc1_timer')
	let clickCount = document.querySelector('.loc1_clicks')
	let time = 6
	let count = 0
	let unlockClick = 0
	let loc1player = document.querySelector('.loc1_mainPlayer')
	function changeLocation1 () {
		main.style.display = 'none'
		body.style.background = 'url(Loc1/workshop.jpg)'
		body.style.backgroundSize = '2800px auto'
		location1.style.display = 'block'
		loc1player.style.display = 'block'
		setTimeout(showBlacksmith, 1000)
		setTimeout(showAnvil, 2000)
	}
	let stopTimer = function () {
		clearInterval(timer)
		checker = 0
	}
	let hideBody = function () {
		body.style.display = 'none'
	}
	let showBlacksmith = function () {
		blacksmith.style.display = "block"
	}
	let showAnvil = function () {
		anvil.style.display = 'block'
		talk.style.display = 'block'
		timer = setInterval(timer2, 2000)
	}
	let timer2 = function () {
		time = time - 1
		unlockClick = 1
		timeText.innerHTML = time
		if (time < 1) {
			alert('Ты проиграл!')
			stopTimer()
			hideBody()
		}
		if (checker == 1) {		
			stopTimer()
		}
	}
	anvil.onclick = function () {
		if(unlockClick == 1) {
			count += 1
			clickCount.innerHTML = count
			if(count >= 20) {
				checker = 1
				main.style.display = "block";
				location1.style.display = "none";
				body.style.backgroundImage = "url(bg1.png)";
				body.style.backgroundSize = "cover";
				swordBox.style.display = 'block'
				alert('Ты получил меч!')
				damageModificator += 1
			}
		}
	}
	setTimeout(changeLocation1, 1000);
}
arena.onclick = function () {
	main_player.style.top = "24%"
	main_player.style.left = "28%"
	let player = document.querySelector('.loc3_mainPlayer')
	let enemy = document.querySelector('.loc3_enemy')
	let HUD = document.querySelector('.HUD')
	let button = document.querySelector('.button')
	let playerHp = 100
	let enemyHp = 200
	let initiative = 0
	let enemyHUD = document.querySelector('.enemy_hp')
	let playerHUD = document.querySelector('.player_hp')
	function changeLocation3 () {
		main.style.display = 'none'
		body.style.background = 'url(Loc3/arena.webp)'
		body.style.backgroundSize = '100% auto'
		location3.style.display = 'block'
		player.style.display = 'block'
		setTimeout(showEnemy, 1000)
	}
	let attackCycle1 = function () {
		player.style.left = '52%'
	}
	let attackCycle2 = function () {
		player.style.left = '42%'
	}
	let attackCycle3 = function () {
		enemy.style.left = '40%'
	}
	let attackCycle4 = function () {
		enemy.style.left = '50%'
	}
	let evasion1 = function () {
		enemy.style.left = '55%'
	}
	let evasion2 = function () {
		enemy.style.left = '50%'
	}
	let evasion3 = function () {
		player.style.left = '37%'
	}
	let evasion4 = function () {
		player.style.left = '42%'
	}
	let randomizer = function (arg) {
		return Math.round(Math.random() * arg)
	}
	let showEnemy = function () {
		enemy.style.display = 'block'
		HUD.style.display = 'flex'
	} 
	button.onclick = function () {
		if(initiative == 0) {
			playerAttacks()
		} else {
			enemyAttacks()
		}
	}
	let playerAttacks = function () {
		if(randomizer(4) > 3 - damageModificator) {
			alert('Атака успешна!')
			attackCycle1()
			setTimeout(attackCycle2, 500)
			enemyHp = enemyHp - randomizer(2) - 6 * damageModificator
			enemyHUD.innerHTML = enemyHp
			enemyHUD.style.width = enemyHp + 'px'
			if(enemyHp < 1) {
				alert('Ты выйграл!')
				body.style.display = 'none'
			}
		} else {
			alert('Промах!')
			alert('Ты потерял инициативу!')
			initiative = 1
			attackCycle1()
			setTimeout(attackCycle2, 500)
			evasion1()
			setTimeout(evasion2, 500)
		}
	}
	let enemyAttacks = function () {
		if(randomizer(4) > 1) {
			alert('Враг ударил!')
			attackCycle3()
			setTimeout(attackCycle4, 500)
			playerHp = playerHp - randomizer(5) - 15
			playerHUD.innerHTML = playerHp
			playerHUD.style.width = playerHp * 2 + 'px'
			if(playerHp < 1) {
				alert('Ты проиграл!')
				body.style.display = 'none'
			}
		} else {
			alert('Враг промахнулся')
			alert('Инициатива за тобой!')
			initiative = 0
			attackCycle3()
			setTimeout(attackCycle4, 500)
			evasion3()
			setTimeout(evasion4, 500)
		}
	}
	setTimeout(changeLocation3, 1000);
}