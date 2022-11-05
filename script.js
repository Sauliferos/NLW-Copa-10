function createGame (player1, hour, player2) {
	return `
		<li>
            <img class="flag" src="./assets/logo-${player1}.svg" alt="">
            <strong>${hour}</strong>
        	<img class="flag" src="./assets/logo-${player2}.svg" alt="">
        </li>
	`
}

function createCard (day, date, games) {
    return `
    	<div class="card"> 
        	<h2> ${day} <span>${date}</span> </h2>

        	<ul>
                ${games}
			</ul>
    	</div>
    `
}

document.querySelector("#cards").innerHTML =	
    createCard("24|11", "Quinta", 
		createGame("switzerland", "7:00", "cameroon") +
            createGame("uruguay", "10:00", "south-corea") +
                createGame("portugal", "13:00", "ghana") +
                    createGame("brazil", "16:00", "serbia")) +

    createCard("28|11", "Segunda",
        createGame("cameroon", "7:00", "serbia") +
            createGame("south-corea", "10:00", "ghana") +
                createGame("brazil", "13:00", "switzerland") +
                    createGame("portugal", "16:00", "uruguay")) +
	
	createCard("2|12", "Sexta", 
		createGame("south-corea", "12:00", "portugal") +
			   createGame("ghana", "12:00", "uruguay") +
			   		createGame("serbia", "16:00", "switzerland") +
			   			createGame("cameroon", "16:00", "brazil")
	)

document.body.setAttribute('data-theme', 'yellow')

const button = document.querySelector('.js-theme')

const themes = {
	'yellow': 'blue',
	'blue': 'green',
	'green': 'yellow',
}

if (button) {
	button.addEventListener('click', event => {
		event.preventDefault()
		const currentTheme = document.body.dataset.theme
		document.body.setAttribute('data-theme', themes[currentTheme] || 'yellow')
	})
}