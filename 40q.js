function make_album(artist, title, tracks) {
    var album = { artist: artist, title: title };
    if (tracks) {
        album["tracks"] = tracks;
    }
    return album;
}
console.log(make_album("Singer One", "First Album"));
console.log(make_album("Singer Two", "Second Album"));
console.log(make_album("Singer Three", "Third Album", 12));
