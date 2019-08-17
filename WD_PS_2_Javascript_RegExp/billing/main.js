const GOODS = [
    {
        category: 'furniture',
        name: 'Chair',
        amount: 1,
        price: 20
    },
    {
        category: 'supplies',
        name: 'Gel Pen',
        amount: 20,
        price: 2
    },
    {
        category: 'other',
        name: 'Trash Bin',
        amount: 1,
        price: 5
    },
    {
        category: 'furniture',
        name: 'Sofa',
        amount: 1,
        price: 50
    },
    {
        category: 'supplies',
        name: 'Notebook',
        amount: 3,
        price: 3
    },
    {
        category: 'other',
        name: 'Calendar 2019',
        amount: 1,
        price: 3
    }
];

outputData(GOODS);
let vectorSort = true;

document.getElementById('category').addEventListener('click' ,() => {
    outputData(sortedType(GOODS, "category" ))
});
document.getElementById('name').addEventListener('click' ,() => {
    outputData(sortedType(GOODS, "name" ))
});

document.getElementById('select_category').addEventListener('change', (event) => {
   outputData(GOODS.filter(entry => entry.category === event.target.value));
});

document.getElementById('search').addEventListener('input', (event) => {
   outputData(GOODS.filter(entry => entry.name.match(event.target.value)));
});

function outputData(data) {
    let table = '<tbody>';
    let totalPrise = 0;
    data.forEach((entry) => {
        totalPrise += entry.amount * entry.price;
        table += '<tr>';
        table += '<td>'+ entry.category + '</td>';
        table += '<td>'+ entry.name + '</td>';
        table += '<td>'+ entry.amount + '</td>';
        table += '<td>'+ entry.price + '</td>';
        table += '</tr>';
    });
    table += '</tbody>';
    totalPrise += '$';
    document.getElementById('priseList').innerHTML = table;
    document.getElementById('totalPrise').innerHTML = totalPrise;
}


sortedType(GOODS, "category");

function sortedType(arraySort, tabName) {
    arraySort.sort( (entry1, entry2) => {
        if (vectorSort) return sortArray (entry1, entry2, tabName);
        else return sortArray(entry2, entry1, tabName);
    } );
    vectorSort = !vectorSort;
    return arraySort;
}

function sortArray(a, b, tabName) {
    if (a[tabName] > b[tabName]) return 1;
    if (a[tabName] < b[tabName]) return -1;
    return 0;
}