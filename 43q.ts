// another way
let magicians : string[] = [`Robert`, `Charlie`, `Cook`]
function magicians_name (magicians : string[]){
    magicians.forEach(magician => {
        console.log(`${magician} magician`);
        return magicians
    
    }
    ) 
    }
function again_great (magicians: string[]) : string[] {
    let great_magicians : string[] = [];
    magicians.forEach(magician => {
        great_magicians.push(`${magician} is The Great Magician`)
    })
    return great_magicians
}
let great_magicians = again_great(magicians.slice())
magicians_name(magicians)
magicians_name(great_magicians)

