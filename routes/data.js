var user = ['Abigail',
    'April',
    'Ashley',
    'Becky',
    'Betty',
    'Carina',
    'Carmen',
    'Corrine',
    'Crystal',
    'Daphne',
    'Darcy',
    'Deborah',
    'Debra',
    'Ellen',
    'Ellie',
    'Emerald',
    'Emma',
    'Enid',
    'Elsa',
    'Erica',
    'Estelle',
    'Eudora',
    'Eva',
    'Fannie',
    'Fiona',
    'Frances',
    'Frederica',
    'Gina',
    'Gillian',
    'Gladys',
    'Gloria',
    'Greta',
    'Gwendolyn',
    'Helena',
    'Hellen',
    'Hebe',
    'Heidi',
    'Ingrid',
    'Ishara',
    'Irene',
    'Iris',
    'Ivy',
    'Jacqueline',
    'Jamie',
    'Jane',
    'Janet',
    'Juliana',
    'Julie',
    'June',
    'Karida',
    'Katherine',
    'Kate',
    'Katrina',
    'Kitty',
    'Laura',
    'Lydia',
    'Lucine',
    'Lulu',
    'Mamie',
    'Manda',
    'Nicole',
    'Nikita',
    'Nina',
    'Oprah',
    'Pamela',
    'Paula',
    'Pauline',
    'P;earl',
    'Philomena',
    'Phoebe',
    'Phyllis',
    'Priscilla',
    'Quentina',
    'Rachel',
    'Rebecca',
    'Regina',
    'Rose',
    'Roxanne',
    'Ruth',
    'Sabrina',
    'Samantha',
    'Sandy',
    'Tamara',
    'Tammy',
    'Tess',
    'Teresa',
    'Tiffany',
    'Tracy',
    'Vanessa',
    'Victoria',
    'Vivian',
    'Wanda',
    'Wendy',
    'Winnie',
    'Yolanda',
    'Yvette',
    'Yvonne',
    'Zoey',
    'Keleman',
    'Kell'
];

function RandomNumBoth(Min, Max) {
    var Range = Max - Min;
    var Rand = Math.random();
    var num = Min + Math.round(Rand * Range); //四舍五入
    return num;
}
var images = [
    'http://semantic-ui.com/images/avatar2/small/rachel.png',
    'http://semantic-ui.com/images/avatar2/small/matthew.png',
    'http://semantic-ui.com/images/avatar/small/jenny.jpg',
    'http://semantic-ui.com/images/avatar/small/veronika.jpg',
    'http://semantic-ui.com/images/avatar/small/tom.jpg',
    'http://semantic-ui.com/images/avatar/small/matt.jpg',
    'http://semantic-ui.com/images/avatar/small/stevie.jpg',
    'http://semantic-ui.com/images/avatar/small/helen.jpg',
    'http://semantic-ui.com/images/avatar/small/christian.jpg',
    'http://semantic-ui.com/images/avatar/small/daniel.jpg',
    'http://semantic-ui.com/images/avatar/small/elliot.jpg',
    'http://semantic-ui.com/images/avatar2/small/mark.png',
    'http://semantic-ui.com/images/avatar2/small/lindsay.png',
    'http://semantic-ui.com/images/avatar2/small/lena.png',
    'http://semantic-ui.com/images/avatar2/small/molly.png'
];

function getImage(i) {
    return images[i % 15];
}
var str = '';
for (var i = 1; i < 101; i++) {
    str += '{"id":' + i +
        ',"name": "' + user[i - 1] +
        '","age":' + RandomNumBoth(16, 110) +
        ',"phone":"(' + RandomNumBoth(111, 890) + ') ' + RandomNumBoth(111, 890) + '-' + RandomNumBoth(1001, 9999) +
        '","image":"' + getImage(i) +
        '","phrase":"world peace"},';
}
console.log(str);
