let createArtistBoxes = (nameArray, parent, device) => {
  for (var i = 0; i < nameArray.length; i++) {
    let artistName = nameArray[i]
    switch (device) {
      case 'computer':
        parent.append(`<a href=""><span class="artist-boxes" data-artist="${artistName}"><i class="material-icons dots">radio_button_checked</i> ${artistName} <i class="material-icons dots">radio_button_checked</i></span></a>`)
        break;

      case 'mobile':
        part2InnerBox.append(`<a href=""><span class="artistBoxes" data-artist="${artistName}">${artistName}</span></a>`)
        break;

    }
  }
}
let selectArtist = (target, className) => {
  target.toggleClass(className)
}

let setInputObj = (spans, modal) => {
  inputObject = {
    artists: updateArtistObj(modal, ['green-dot', 'blue-dot', 'grey-dot']),

    artistAmount: modal.find('input[type=range]').eq(0).val()

  }
  return inputObject
}

let updateArtistObj = (modal, classNameArray) => {
  let artistObj = {
    liked: {
      names: [],
      tag: 1,
      songAmount: modal.find('input[type=range]').eq(1).val()
    },
    wants: {
      names: [],
      tag: 2,
      songAmount: modal.find('input[type=range]').eq(2).val()
    },
    heardOf: {
      names: [],
      tag: 3,
      songAmount: modal.find('input[type=range]').eq(3).val()
    },
    other: {
      names: [],
      tag: 3,
      songAmount: modal.find('input[type=range]').eq(4).val()
    }
  }
  $('.artist-boxes').each((i, band) => {

    let name = $(band).attr('data-artist')

    if ($(band).children().hasClass(classNameArray[0])) {
      console.log('heheheheheh', name);
      artistObj.liked.names.push(name)
    } else if ($(band).children().hasClass(classNameArray[1])) {
      artistObj.wants.names.push(name)
    } else if ($(band).children().hasClass(classNameArray[2])) {
      artistObj.heardOf.names.push(name)
    } else {
      artistObj.other.names.push(name)
    }

  })
  return artistObj;
}
