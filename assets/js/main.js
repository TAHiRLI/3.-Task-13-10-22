
class Car {
    constructor(brand, model, motor, distance, imgUrl) {
        this.brand = brand;
        this.model = model;
        this.imgUrl = imgUrl;
        this.motor = motor;
        this.distance = distance;
        this.likes = 0;

    }
    displayInfo(id) {
        let car = document.getElementById('car-container');
        const like = this.like;
        car.innerHTML +=
            ` <div class="car p-3  rounded-3 ">
        <div class="card p-2  d-flex flex-column justify-content-between ">
            <div class="car-img">
                <img src=${this.imgUrl} class="w-100" alt="car">
            </div>
            <div class="card-title  mt-3">
                <h5 class="d-inline-block">${this.brand}</h5> <span class="text-muted h6 ms-2 ">${this.model}</span> <br>
                <span class="fw-semibold">Motor: </span><span class="text-muted">${this.motor}</span><br>
                <span class="fw-semibold">Distance: </span><span class="text-muted">${this.distance} </span>

            </div>
            <div class="card-footer d-flex justify-content-end w-100 ">
            <button  class="like likeBtn btn btn-outline-success"><i class="las la-thumbs-up"></i><span class="likeCount">${this.likes}</span></button>
            <button class="delete removeBtn btn btn-outline-danger ms-3"><i class="las la-trash"></i> Remove</button>

            </div>

        </div>
        
    </div>
`;

    }




}



function createCar(brand, model, motor, distance, url) {
    let car = new Car(brand.value, model.value, motor.value, distance.value, url.value);
    return car;
}

const car1 = new Car('Lambo', 'bmd', '2,5', '150000', 'assets/images/car.jpeg');
const car2 = new Car('Lada', '2107', '2,5', '150000', 'assets/images/images.jpeg');
const car3 = new Car('Lada', '2107', '2,5', '150000', 'assets/images/lambo.jpeg');


const Cars = [car1, car2, car3];

function addCar() {


    let brand = document.getElementById('brand');
    let model = document.getElementById('model');
    let motor = document.getElementById('motor');
    let distance = document.getElementById('distance');
    let url = document.getElementById('imgUrl');

    Cars.push(createCar(brand, model, motor, distance, url));

    Cars[Cars.length - 1].displayInfo();

    likes = document.getElementsByClassName("likeCount");
    likeBtn = document.getElementsByClassName('likeBtn');
    item = document.getElementsByClassName('car');
    removeBtn = document.getElementsByClassName('removeBtn');

    for (let i = 0; i < likeBtn.length; i++) {

        likeBtn[i].addEventListener('click', () => {
            likes[i].textContent = parseInt(likes[i].textContent) + 1;
        });
    }

    for (let i = 0; i < item.length; i++) {
        removeBtn[i].addEventListener('click', () => {
            item[i].style.display = 'none';
            Cars.splice(i, 1);
            console.log(Cars);

        });
    }


}

for (const car of Cars) {
    car.displayInfo();

}

var likes = document.getElementsByClassName("likeCount");
var likeBtn = document.getElementsByClassName('likeBtn');

console.log(likes);
for (let i = 0; i < likeBtn.length; i++) {

    likeBtn[i].addEventListener('click', () => {
        likes[i].textContent = parseInt(likes[i].textContent) + 1;
    });
}


var item = document.getElementsByClassName('car');
var removeBtn = document.getElementsByClassName('removeBtn');


for (let i = 0; i < item.length; i++) {
    removeBtn[i].addEventListener('click', () => {
        item[i].style.display = 'none';
        Cars.splice(i, 1);
        console.log(Cars);

    });
}







