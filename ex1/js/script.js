"use strict";

while (true) {


    let lover = prompt('Ім\'я партнера?');
    if (lover == null) {
        break;
    }else if(Number(lover)){
		alert("Помилка введення!");
		continue;
	}
	
    let kids = prompt('Скільки дітей хочете?');
    if (kids == null) {
        break;
    }else if(!Number(kids)){
		alert("Помилка введення!");
		continue;
	}
    
	let job = prompt('Ваша професія?');
    if (job == null) {
        break;
    }else if(Number(job)){
		alert("Помилка введення!");
		continue;
	}
    
	let country = prompt('Ім\'я країни?');
    if (country == null) {
        break;
    }else if(Number(country)){
		alert("Помилка введення!");
		continue;
	}
    
	while (true) {
        let choise = prompt('Передбачити Шлюб чи майбутню Роботу?', 'Шлюб/Робота');
        if (choise == null) {
            break;
        }
        switch (choise) {
            case 'Шлюб':
                if (kids == 1) {
                    alert(`Ви укладите шлюб з ${lover} та у вас буде ${kids} дитина`);
                } else {
                    alert(`Ви укладите шлюб з ${lover} та у вас буде ${kids} дітей `);
                }
                break;

            case 'Робота':
                alert(`Ви переїдите у місто ${country} на посаду ${job}`);
                break;

            default:
                alert('Виберіть щось одне!!');

        }
    }
}

alert("Бувай!");