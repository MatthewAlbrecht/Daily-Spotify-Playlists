let createArtistBoxes = (nameArray, parent, device) => {
  for (var i = 0; i < nameArray.length; i++) {
    let artistName = nameArray[i]
    switch (device) {
      case 'computer':
        parent.append(`<a href=""><span class="artist-boxes" data-artist="${artistName}"><i class="material-icons dots">brightness_1</i> ${artistName}</span></a>`)
        break;

      case 'mobile':
        part2InnerBox.append(`<a href=""><span class="artistBoxes" data-artist="${artistName}">${artistName}</span></a>`)
        break;

    }
  }
}
let selectArtist = (target, className) => target.toggleClass(className)
