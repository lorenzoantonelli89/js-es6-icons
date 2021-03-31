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
    ];
}

function printIcon(array) {
    // $('.icons').html('');
    array.forEach((elem) => {
        let prefix = elem['prefix'];
        let name = elem['name'];
        let family = elem['family'];
        let colors;
        if (elem['type'] == 'animal') {
            colors = 'purple';
        } else if (elem['type'] == 'vegetable') {
            colors = 'orange';
        } else {
            colors = 'yellow';
        }
        const icon = `
            <div>
                <i class= "${family} ${prefix + name}" style="color:${colors}"></i>
                <div class= "title">${name.toUpperCase()}</div>
            </div>
        `;
            
        $('.icons').append(icon);
    });
}

function colors() {
    return ['purple', 'orange', 'yellow', 'blue', 'green'];
}




function init() {
    printIcon(getIconsDb());
}

$(init);


