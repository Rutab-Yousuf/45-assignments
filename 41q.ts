let magicians : string[] = [`Robert`, `Charlie`, `Cook`]
function magicians_name (magicians : string[]){
magicians.forEach(magician => {
    console.log(`${magician} magician`);
    return magicians

}
) 
}
magicians_name(magicians)


function make_great(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}
make_great(magicians);
magicians_name(magicians);

