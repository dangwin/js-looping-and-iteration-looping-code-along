// Code your solutions in this file
let array = []

function writeCards(people, event) {
    for(let i = 0; i < people.length; i++) {
        array.push(`Thank you, ${people[i]}, for the wonderful ${event} gift!`)
    }
    return array
}






function countDown(number){
    while (number >= 0){
        console.log(number--)
    }

}
