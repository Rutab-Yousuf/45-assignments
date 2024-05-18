function make_album(artist: string, title: string, tracks? :number) {
    let album = [ artist, title ];
    if (tracks) {
        album["tracks"] = tracks;
    }
    return album;
}

console.log(make_album("Singer One", "First Album"));
console.log(make_album("Singer Two", "Second Album", 7));
console.log(make_album("Singer Three", "Third Album", 10));

