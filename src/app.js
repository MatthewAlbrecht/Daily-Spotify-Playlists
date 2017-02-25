let rooString = "U2, Red Hot Chili Peppers, The Weeknd, Chance The Rapper, Major Lazer, Flume, Lorde, The xx, Travis Scott, Cage The Elephant, Marhsmello, The Head and The Heart, Big Gigantic, Glass Animals, Future Islands, Tory Lanez, Tove Lo, Crystal Castles, Umphrey's McGee, Portugal The Man, Tegan and Sara, Milky Chance, Yellow Claw, Cold War Kids, Kaleo, Russ, Jon Bellion, Royal Blood, The Strumbellas, Car Seat Headrest, Michael Kiwanuka, Gallant, Louis The Child, D.R.A.M., Borgore, Dua Lipa, NGHTMRE, Getter, Snails, James Vincent McMorrow, Joseph, Illenium, Flatbush Zombies, Amine, Claude Vonstroke, Francis and The Lights, Margo Price, BADBADNOTGOOD, The Front Bottoms, G. Jones, Preservation Hall Jazz Band, Greensky Bluegrass, Cam, Bad Suns, Coin, Mandolin Orange, Eden, Rainbow Kitten Surprise, Ookay, Herobust, Kevin Morby, Goldfish, No Name, Leon, Albin Lee Meldau, San Holo, Rezz, Angelique Kidjo, Haywyre, Deap Vally, Hippo Campus, Luke Combs, Vanic, Unlike Pluto, Kaiydo, Ten Fe, Nightly, The Orwells, Stick Figure, Mondo Cozmo, Barclay Crenshaw v. Goody Grace, July Talk, Turkuaz, Lucy Dacus, Klangstof, Kevin Abstract, Khruangbin, The Lemon Twigs, Wilderado, Twin Limb, Big Jesus, Twiddle, White Reaper, River Whyless, Alexandra Savior, Lukas Nelson, Promise Of The Real, Innanet James, Ganja White Night, Welles, Aaron Lee Tasjan"


$(function() {
  let festChoice = ''
  let currentPart = 1;
  let part2InnerBox = $('#part2InnerBox')
  let part4Element = $('#part4')
  let currentSelection = 'selected1'
  let partsObj = {}
  let selectionsObj = {}
  let artistObj = {}
  let posterArray = []
  rooString = rooString.split(", ")
  let artistAmount = rooString.length
  let posterCounter = 1

  part1()
  // part2()
  // part3()
  // part4()

  function part1() {
    createHelperObjects()
    showPart()
    part2InnerBox.html('')
    $('.fest').click(function(e) {
      festChoice = $(e.target).attr('data-fest')
      if (!partsObj.part2.hasCalled) {
        part2();
      }
      changePartObj(1)

    })

  }

  function part2() {
    showHeader()
    for (var i = 0; i < rooString.length; i++) {
      artistName = rooString[i]
      part2InnerBox.append(`<a href=""><span class="artistBoxes" data-artist="${artistName}">${artistName}</span></a>`)
    }
    boxClicking()
    nextSelectionButton()
  }

  function showHeader() {
    for (let selection in selectionsObj) {
      if (selectionsObj[selection].value === true) {
        $(`#${selection}`).show()
      } else {
        $(`#${selection}`).hide()
      }
    }
  }

  function showPart() {
    for (let part in partsObj) {
      if (partsObj[part].on === true) {
        $(`#${part}`).show()
      } else {
        $(`#${part}`).hide()
      }
    }
  }

  function changePartObj(n) {
    partsObj['part' + currentPart].on = false
    currentPart += n
    partsObj['part' + currentPart].on = true
    partsObj['part' + currentPart].hasCalled = true

    showPart()
  }

  function createHelperObjects() {
    selectionsObj = {
      selected1: {
        value: true,
        names: []
      },
      selected2: {
        value: false,
        names: []
      },
      selected3: {
        value: false,
        names: []
      },

    }
    partsObj = {
      part1: {
        on: true,
        hasCalled: true
      },
      part2: {
        on: false,
        hasCalled: false
      },
      part3: {
        on: false,
        hasCalled: false
      },
      part4: {
        on: false,
        hasCalled: false
      }
    }
    artistObj = {
      "liked": {
        names: [
          "U2",
          "Red Hot Chili Peppers",
          "Chance The Rapper",
          "Flume",
          "Travis Scott",
          "Cage The Elephant",
          "The Head and The Heart",
          "Big Gigantic",
          "Glass Animals",
          "Umphrey's McGee",
          "Portugal The Man",
          "Cold War Kids",
          "Royal Blood",
          "Michael Kiwanuka",
          "D.R.A.M.",
          "NGHTMRE",
          "Snails",
          "Flatbush Zombies",
          "Herobust",
          "No Name"
        ],
        tag: 1
      },
      "wants": {
        names: [
          "The Weeknd",
          "Lorde",
          "The xx",
          "Future Islands",
          "Crystal Castles",
          "Milky Chance",
          "Yellow Claw",
          "Car Seat Headrest",
          "Gallant",
          "Louis The Child",
          "Borgore",
          "Getter",
          "Francis and The Lights",
          "BADBADNOTGOOD",
          "The Front Bottoms",
          "G. Jones",
          "Preservation Hall Jazz Band",
          "Goldfish",
          "San Holo",
          "Haywyre",
          "Hippo Campus",
          "Vanic",
          "The Orwells",
          "Stick Figure"
        ],
        tag: 2
      },
      "heardOf": {
        names: [
          "Major Lazer",
          "Marhsmello",
          "Tory Lanez",
          "Tove Lo",
          "The Strumbellas",
          "Dua Lipa",
          "Illenium",
          "Claude Vonstroke",
          "Greensky Bluegrass",
          "Ten Fe",
          "Big Jesus"
        ],
        tag: 3
      },
      "other": {
        names: [
          "Tegan and Sara",
          "Kaleo",
          "Russ",
          "Jon Bellion",
          "James Vincent McMorrow",
          "Joseph",
          "Amine",
          "Margo Price",
          "Cam",
          "Bad Suns",
          "Coin",
          "Mandolin Orange",
          "Eden",
          "Rainbow Kitten Surprise",
          "Ookay",
          "Kevin Morby",
          "Leon",
          "Albin Lee Meldau",
          "Rezz",
          "Angelique Kidjo",
          "Deap Vally",
          "Luke Combs",
          "Unlike Pluto",
          "Kaiydo",
          "Nightly",
          "Mondo Cozmo",
          "Barclay Crenshaw v. Goody Grace",
          "July Talk",
          "Turkuaz",
          "Lucy Dacus",
          "Klangstof",
          "Kevin Abstract",
          "Khruangbin",
          "The Lemon Twigs",
          "Wilderado",
          "Twin Limb",
          "Twiddle",
          "White Reaper",
          "River Whyless",
          "Alexandra Savior",
          "Lukas Nelson",
          "Promise Of The Real",
          "Innanet James",
          "Ganja White Night",
          "Welles",
          "Aaron Lee Tasjan"
        ],
        tag: 3
      }
    }
  }

  function smoothTop(e) {
    let target = e.target.hash
    $('html, body').animate({
      scrollTop: $('#top').offset().top
    }, 1000);
  }

  function prevHeader() {
    let prevNumber = Number(currentSelection.slice(-1)) - 1
    if (prevNumber != 0) {
      changeHeader(prevNumber)
    } else {
      changePartObj(-1)

    }
  }

  function nextHeader() {
    let nextNumber = Number(currentSelection.slice(-1)) + 1
    if (nextNumber != 4) {
      changeHeader(nextNumber)
    } else {

      if (!partsObj.part3.hasCalled) {
        console.log('hehehehehehhe');
        part3()
      }
      changePartObj(1)

    }
  }

  function changeHeader(num) {
    selectionsObj[currentSelection].value = false
    currentSelection = currentSelection.slice(0, -1) + num
    selectionsObj[currentSelection].value = true
    showHeader()
  }

  function nextSelectionButton() {
    $('.button1R,.button1L').click(function(e) {
      e.preventDefault()
      smoothTop(e)

      if ($(e.target).hasClass('button1R')) {
        nextHeader()
      } else {
        prevHeader()
      }

    })
  }

  function boxClicking() {
    $('.artistBoxes').click(function(e) {
      e.preventDefault()
      $(e.target).toggleClass(currentSelection)
      selectionsObj[currentSelection].names.push($(e.target).attr('data-artist'))

    })
  }

  function part3() {
    $('.button2L').click((e) => {
      console.log('at part3()', partsObj);
      changePartObj(-1)
    })
    $('.button2R').click((e) => {
      if (!partsObj.part4.hasCalled) {
        part4()
      }
      changePartObj(1)
    })

    $('.qContainer').mouseup((e) => {
      changeEstimate()
    })


  }

  function changeEstimate() {
    let estimate = 3 * $('#slider2').val() * $('#slider3').val()
    $('#estimate h3').html(`Estimated Playlist Length: <br><br> ${Math.round(estimate)} Minutes`)
  }

  // *****************************  RANDOMIZATION

  function part4() {
    // createArtistObj()
    shuffleLists()
    posterSetUp()


  }

  function posterSetUp() {
    let artistPerDay = $('#slider2').val()
    let artistDivide = artistAmount / artistPerDay
    let artistMod = artistAmount % artistPerDay
    console.log('artistDivide:', artistDivide, 'artistAmount:', artistAmount, 'artistMod:', artistMod, 'artistPerDay', artistPerDay);
    createPosterDivs(Math.floor(artistDivide), artistMod)
  }

  function shuffleLists() {
    artistObj.liked.names.shuffle()
    artistObj.wants.names.shuffle()
    artistObj.heardOf.names.shuffle()
    artistObj.other.names.shuffle()
  }

  function createPosterDivs(posterAmount, extras) {
    part4Element.empty()
    //part4Element.children.remove()
    //part4Element.html('')
    for (var i = 0; i < posterAmount; i++) {
      let posterContainer = $(`<div class="posterContainer"></div>`)
      let posterHeader = $(`<h1 class="posterHeader">Daily Playlist #${i+1}</h1>`).appendTo(posterContainer)
      let poster = $(`<div class="poster"></div>`).appendTo(posterContainer)
      posterArray.push(posterContainer)
    }
    addArtistToPosters(posterAmount)




  }

  function addArtistToPosters(posterAmount) {
    let counter = 0
    for (var selects in artistObj) {

      for (name of artistObj[selects].names) {
        // console.log('here');
        let hx = $(`<h${artistObj[selects].tag}></h${artistObj[selects].tag}>`)
        // console.log(posterArray[counter % posterAmount].children(1)[0]);
        console.log(counter, name);
        posterArray[counter % posterAmount].children().eq(1).append(hx.text(name))
        counter++
      }
    }
    shuffleAndDeployPosters()
  }

  function shuffleAndDeployPosters() {
    posterArray.shuffle()
    for (var i = 0; i < posterArray.length; i++) {
      poster = posterArray[i]
      poster.children().eq(0).text(`Daily Playlist #${i+1}`)
      poster.appendTo(part4Element)
    }
  }

  function createArtistObj() {
    $('.artistBoxes').each((i, band) => {

      let name = $(band).text()
      if ($(band).hasClass('selected1')) {
        artistObj.liked.names.push(name)
      } else if ($(band).hasClass('selected2')) {
        artistObj.wants.names.push(name)
      } else if ($(band).hasClass('selected3')) {
        artistObj.heardOf.names.push(name)
      } else {
        artistObj.other.names.push(name)
      }

    })
  }


})

Array.prototype.shuffle = function() {

  for (var i = this.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = this[i];
    this[i] = this[j];
    this[j] = temp;
  }
  return this;
}
