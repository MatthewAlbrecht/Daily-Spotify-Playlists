$(function() {
  let festChoice = ''
  let currentPart = 1;
  let part2InnerBox = $('#part2InnerBox')
  let currentSelection = 'selected1'
  let partsObj = {}
  let selectionsObj = {}
  rooString = rooString.split(", ")
  part1()

  function part1() {
    createHelperObjects()
    showPart()
    $('.fest').click(function(e) {
      festChoice = $(e.target).attr('data-fest')
      changePartObj()
      part2()
    })

  }

  function part2() {
    showHeader()
    for (var i = 0; i < rooString.length; i++) {
      artistName = rooString[i]
      // console.log(artistName);
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
      if (partsObj[part] === true) {
        $(`#${part}`).show()
      } else {
        $(`#${part}`).hide()
      }
    }
  }

  function changePartObj() {
    partsObj['part' + currentPart] = false
    currentPart++
    partsObj['part' + currentPart] = true
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
      part1: false,
      part2: false,
      part3: true
    }
  }

  function nextSelectionButton() {
    $('.p2button').click(function(e) {
      let nextNumber = Number(currentSelection.slice(-1)) + 1
      if (nextNumber != 4) {
        selectionsObj[currentSelection].value = false
        currentSelection = currentSelection.slice(0, -1) + nextNumber
        selectionsObj[currentSelection].value = true
        showHeader()
      } else {
        changePartObj()
        part3()
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
    console.log("HIIIIIIIII");
    console.log(selectionsObj);
  }

})









let rooString = "U2, Red Hot Chili Peppers, The Weeknd, Chance The Rapper, Major Lazer, Flume, Lorde, The xx, Travis Scott, Cage The Elephant, Marhsmello, The Head and The Heart, Big Gigantic, Glass Animals, Future Islands, Tory Lanez, Tove Lo, Crystal Castles, Umphrey's McGee, Portugal The Man, Tegan and Sara, Milky Chance, Yellow Claw, Cold War Kids, Kaleo, Russ, Jon Bellion, Royal Blood, The Strumbellas, Car Seat Headrest, Michael Kiwanuka, Gallant, Louis The Child, D.R.A.M., Borgore, Dua Lipa, NGHTMRE, Getter, Snails, James Vincent McMorrow, Joseph, Illenium, Flatbush Zombies, Amine, Claude Vonstroke, Francis and The Lights, Margo Price, BADBADNOTGOOD, The Front Bottoms, G. Jones, Preservation Hall Jazz Band, Greensky Bluegrass, Cam, Bad Suns, Coin, Mandolin Orange, Eden, Rainbow Kitten Surprise, Ookay, Herobust, Kevin Morby, Goldfish, No Name, Leon, Albin Lee Meldau, San Holo, Rezz, Angelique Kidjo, Haywyre, Deap Vally, Hippo Campus, Luke Combs, Vanic, Unlike Pluto, Kaiydo, Ten Fe, Nightly, The Orwells, Stick Figure, Mondo Cozmo, Barclay Crenshaw v. Goody Grace, July Talk, Turkuaz, Lucy Dacus, Klangstof, Kevin Abstract, Khruangbin, The Lemon Twigs, Wilderado, Twin Limb, Big Jesus, Twiddle, White Reaper, River Whyless, Alexandra Savior, Lukas Nelson, Promise Of The Real, Innanet James, Ganja White Night, Welles, Aaron Lee Tasjan"
