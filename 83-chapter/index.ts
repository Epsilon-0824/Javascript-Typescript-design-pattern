type BaseVehicle = {
    make: string
    model: string
}

type MotorBike = BaseVehicle & {
    type: 'Motorbike'
    fuel: 'petrol'
}

type Car = BaseVehicle & {
    type: 'car'
    fuel: 'petrol' | 'diesel'
    doors: number
}

type Vehicle = Car | MotorBike

const myCar: Vehicle = {
    type: 'Motorbike',
    fuel: 'petrol',
    make: 'jj',
    model: 'a'
}