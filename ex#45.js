function createCar(manufacture, model, optional) {
    return {
        manufacture,
        model,
        ...optional
    };
}
let mycar = createCar("toyota", "corolla", { color: "silver", year: "2024" });
console.log(mycar);
export {};
