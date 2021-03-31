function getIconsDb() {
    return [
        {
            name: "cat",
            prefix: "fa-",
            type: "animal",
            family: "fas",
        },
        {
            name: "crow",
            prefix: "fa-",
            type: "animal",
            family: "fas",
        },
        {
            name: "dog",
            prefix: "fa-",
            type: "animal",
            family: "fas",
        },
        {
            name: "dove",
            prefix: "fa-",
            type: "animal",
            family: "fas",
        },
        {
            name: "dragon",
            prefix: "fa-",
            type: "animal",
            family: "fas",
        },
        {
            name: "horse",
            prefix: "fa-",
            type: "animal",
            family: "fas",
        },
        {
            name: "hippo",
            prefix: "fa-",
            type: "animal",
            family: "fas",
        },
        {
            name: "fish",
            prefix: "fa-",
            type: "animal",
            family: "fas",
        },
        {
            name: "carrot",
            prefix: "fa-",
            type: "vegetable",
            family: "fas",
        },
        {
            name: "apple-alt",
            prefix: "fa-",
            type: "vegetable",
            family: "fas",
        },
        {
            name: "lemon",
            prefix: "fa-",
            type: "vegetable",
            family: "fas",
        },
        {
            name: "pepper-hot",
            prefix: "fa-",
            type: "vegetable",
            family: "fas",
        },
        {
            name: "user-astronaut",
            prefix: "fa-",
            type: "user",
            family: "fas",
        },
        {
            name: "user-graduate",
            prefix: "fa-",
            type: "user",
            family: "fas",
        },
        {
            name: "user-ninja",
            prefix: "fa-",
            type: "user",
            family: "fas",
        },
        {
            name: "user-secret",
            prefix: "fa-",
            type: "user",
            family: "fas",
        },
        {
            name: "compact-disc",
            prefix: "fa-",
            type: "computers",
            family: "fas",
        },
        {
            name: "desktop",
            prefix: "fa-",
            type: "computers",
            family: "fas",
        },
        {
            name: "headphones",
            prefix: "fa-",
            type: "computers",
            family: "fas",
        },
        {
            name: "mobile",
            prefix: "fa-",
            type: "computers",
            family: "fas",
        }
    ];
}

// funzione stampa icone 

function printIcon(array) {
    // resetta ogni volta che si selecta il tipo
    $('.icons').html('');
    // ciclo per splittare elementi arrayObj
    array.forEach((elem) => {
        let prefix = elem['prefix'];
        let name = elem['name'];
        let family = elem['family'];
        let color = elem['color'];
        
        const icon = `
            <div>
                <i class= "${family} ${prefix + name}" style="color:${color}"></i>
                <div class= "title">${name.toUpperCase()}</div>
            </div>
        `;
            
        $('.icons').append(icon);
    });
}

function colors() {
    return ['purple', 'orange', 'green', 'blue', 'yellow'];
}

// funzione per ciclare arrayObj e creare array con type degli obj array
function iconsTypes(array) {
    const arrTypes = [];
    array.forEach((elem) => {
        if (!arrTypes.includes(elem['type'])) {
            arrTypes.push(elem['type']);
        }
    });
    return arrTypes;
}

// funzione per colorare le icone in base al tipo
function colorIcons(array, arrTypes, colors) {
    const arrColorType = array.map(elem => {
        // creo elemento clone
        const elemClone = { ...elem };
        // creo var elemento clone
        const iconType = elemClone['type'];
        // trovo la posizione dell'elemento nell'array
        const indexType = arrTypes.indexOf(iconType);
        // creo var con quanti color ci sono in base al type
        const color = colors[indexType];
        elemClone['color'] = color;
        return elemClone;
    });
    return arrColorType;

}

// funzione per aggiungere opzioni alla select
function addOptions(types) {
    const select = $('#type');
    types.forEach(item => {
        const optionHtml = `
            <option value="${item}">${item}</option> 
        `;
        select.append(optionHtml);
    });
}

// funzione per filtrare in base al tipo
function filterArray(array, key) {
    const filteredArray = array.filter(elem => {
        if (elem['type'] == key) {
            return elem;
        }
    });
    return filteredArray;
}


function init() {
    const arrIcons = getIconsDb();
    const type = iconsTypes(arrIcons);
    const color = colors();

    const colorIcon = colorIcons(arrIcons, type, color);

    printIcon(colorIcon);

    addOptions(type);
    const select = $('#type');
    select.change(function (event) {
        const currentType = $(this).val();
        if (type.includes(currentType)) {
            // filtriamo l'array in base al tipo
            const filteredIcons = filterArray(colorIcon, currentType);
            // mostrare i valori filtrati
            printIcon(filteredIcons);
        } else {
            printIcon(colorIcon);
        }
    });
}

$(init);


