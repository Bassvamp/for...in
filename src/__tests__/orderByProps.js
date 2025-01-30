import orderByProps from "../js/orderByProps.js";

test("test order by props", () => {
    let person = { name: "мечник", health: 10, level: 2, attack: 80, defense: 40 };
    let sortedPerson = { name: 'мечник', health: 10, attack: 80, defense: 40, level: 2 }
    orderByProps(person, ["name", "health"]);
    expect(person).toEqual(sortedPerson);
});