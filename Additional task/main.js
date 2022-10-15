const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: true,
        points: 40
    }
};
{ // task 1
    let max = users.Alex.skills.length;
    let mostSkilled = users.Alex;

    for (const key in users) {
        if (users[key].skills.length > max) {
            max = users[key].skills.length;
            mostSkilled = users[key];
        }

    }
    console.log(mostSkilled.skills);

}

{ // task 2
    let loggedInCount = 0;
    let usersOver50Point = 0;


    for (const key in users) {
        if (users[key].isLoggedIn)
            loggedInCount++;
        if (users[key].points >= 50)
            usersOver50Point++;


    }
    console.log(loggedInCount, usersOver50Point);

}

{ // task 3
    const mernStackers = [];
    for (const key in users) {
        if (
            users[key].skills.includes('MongoDB') &&
            users[key].skills.includes('Express') &&
            users[key].skills.includes('React') &&
            users[key].skills.includes('Node')) {
            console.log(key);
        }
    }

}

{ // task 4
    const copyUsers = Object.assign(users);
    copyUsers.Tahir = {
        emial: 'tahirtahirli2002@gmail.com',
        skillls: ['html', 'css', 'javascript', 'c#', 'sql'],
        age: 20,
        isLoggedIn: true,
        points: 100
    };
    console.log(copyUsers.tahir);

}

{ // task 5, 6
    console.log(Object.keys(users));
    console.log(Object.values(users));
    console.log(Object.entries(users));

}

{ // task  7
    // countries.forEach(item => console.log(item.name , item.capital, item.population, item.languages, ));
}



//========================== Exercise level 3

const productUsers = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt: '08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt: '08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt: '08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt: '08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt: '08/01/2020 10:00 AM',
        isLoggedIn: false
    }
];


{ // task 1

    const personAccount = {
        firstName: 'tahir',
        lastName: 'tahirli',
        incomes: [
            [45, "tahir verdi"],
            [548, "samir verdi"],
            [45, "tahir verdi"],
            [548, "samir verdi"],
            [548, "tahir verdi"],
            [45, "samir verdi"],
        ],
        expenses: [
            [45, "tahir aldi"],
            [548, "samir aldi"],
            [45, "tahir aldi"],
            [548, "samir aldi"],
            [548, "tahir aldi"],
            [45, "samir aldi"],
        ],

        totalIncome() {
            let sum = 0;
            this.incomes.forEach(item => {
                sum += item[0];
            });
            return sum;

        },
        totalExpense() {
            let sum = 0;
            this.expenses.forEach(item => {
                sum += item[0];
            });
            return sum;

        }


    };

}

{ // task 2  a
    function signUp(newUser) {
        let canUserSignUp = true;
        productUsers.forEach(user => {
            if (user.username == newUser.username) {
                console.log("username Already exists");
                canUserSignUp = false;
                return;
            }

        });

        if (canUserSignUp) {
            productUsers.push(newUser);
        }
    }

    let tahir = {
        _id: 'ab12exs',
        username: 'Tahir',
        email: 'Tahirtahirli.com',
        password: '123123',
        createdAt: '08/01/2020 9:00 AM',
        isLoggedIn: false

    };
    let thomas = {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt: '08/01/2020 10:00 AM',
        isLoggedIn: false
    };
    signUp(tahir);

    console.log(productUsers);

}

{ // task 2 b
    function signIn(userName, password) {
        let userNotFound = true;
        productUsers.forEach(item => {
            if (item.username == userName && item.password == password) {
                console.log('user  signed in');
                userNotFound = false;

                return;
            }


        });
        if (userNotFound)
            console.log('UserName or Password is wrong');
    }
    signIn("Thomas", 123333);
}


const products = [
    {
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [
            { userId: 'fg12cy', rate: 5 },
            { userId: 'zwf8md', rate: 4.5 }
        ],
        likes: []
    },
    {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy']
    },
    {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [{ userId: 'fg12cy', rate: 5 }],
        likes: ['fg12cy']
    }
];



{ //Task 3 a
    function rateProduct(user, productId, rate) {
        products.forEach(item => {
            if (item._id == productId) {

                let userRated = false;

                item.ratings.forEach(rating => {
                    if (rating.userId == user._id) {

                        //update id
                        userRated = true;
                        rating.rate == rate;
                        console.log('existing user rated');
                    }

                });
                if (!userRated) {
                    item.ratings.push({ userId: user._id, rate: rate });
                    console.log('new user rated');
                }
            }
        });

    }

    rateProduct(productUsers[0], 'eedfcf', 5.5);
    rateProduct(productUsers[0], 'eedfcf', 5.5);

}

{ // Task 3 b

    function avarageRating(productId) {
        products.forEach(item => {

            if (item._id == productId) {
                let sum = 0;
                item.ratings.forEach(rating => {
                    sum += rating.rate;
                });
               avarage = sum / item.ratings.length;

               console.log(avarage)
            }

        });
    }

   avarageRating('hedfcg');

}
