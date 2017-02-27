let rooString = "U2, Red Hot Chili Peppers, The Weeknd, Chance The Rapper, Major Lazer, Flume, Lorde, The xx, Travis Scott, Cage The Elephant, Marshmello, The Head and The Heart, Big Gigantic, Glass Animals, Future Islands, Tory Lanez, Tove Lo, Crystal Castles, Umphrey's McGee, Portugal The Man, Tegan and Sara, Milky Chance, Yellow Claw, Cold War Kids, Kaleo, Russ, Jon Bellion, Royal Blood, The Strumbellas, Car Seat Headrest, Michael Kiwanuka, Gallant, Louis The Child, D.R.A.M., Borgore, Dua Lipa, NGHTMRE, Getter, Snails, James Vincent McMorrow, Joseph, Illenium, Flatbush Zombies, Amine, Claude Vonstroke, Francis and The Lights, Margo Price, BADBADNOTGOOD, The Front Bottoms, G. Jones, Preservation Hall Jazz Band, Greensky Bluegrass, Cam, Bad Suns, Coin, Mandolin Orange, Eden, Rainbow Kitten Surprise, Ookay, Herobust, Kevin Morby, Goldfish, Noname, Leon, Albin Lee Meldau, San Holo, Rezz, Angelique Kidjo, Haywyre, Deap Vally, Hippo Campus, Luke Combs, Vanic, Unlike Pluto, Kaiydo, Ten Fe, Nightly, The Orwells, Stick Figure, Mondo Cozmo, Barclay Crenshaw, Goody Grace, July Talk, Turkuaz, Lucy Dacus, Klangstof, Kevin Abstract, Khruangbin, The Lemon Twigs, Wilderado, Twin Limb, Big Jesus, Twiddle, White Reaper, River Whyless, Alexandra Savior, Lukas Nelson, Promise Of The Real, Innanet James, Ganja White Night, Welles, Aaron Lee Tasjan"


$(function() {
  let festChoice = ''
  let currentPart = 1
  let part2InnerBox = $('#part2InnerBox')
  let part4Element = $('#part4')
  let currentSelection = 'selected1'
  let currentHeader = null
  let currentBody = null
  let partsObj = {}
  let selectionsObj = {}
  let artistObj = {}
  let posterArray = []
  let nameArrays = {}
  let playlistIds = []
  const weightArray = () => [78, 83, 86, 88, 90, 92, 94, 96, 98, 100]




  rooString = rooString.split(", ")
  let artistAmount = rooString.length
  let posterCounter = 1

  part1()
  // part2()
  // part3()
  // part4()
  // part5()

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
      currentHeader = $('.p2header')
      showHeader()

    })

    $(window).on("orientationchange", setBody)

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



  function setBody() {
    if (currentBody) {
      currentBody.css('margin-top', `${currentHeader.height()+25}px`)

    }
  }

  function showHeader() {
    for (let selection in selectionsObj) {
      if (selectionsObj[selection].value === true) {
        $(`#${selection}`).show()
        currentHeader = $('.p2header')


        console.log(currentHeader.height());
      } else {
        $(`#${selection}`).hide()
      }
    }
    setBody()
  }

  function showPart() {
    for (let part in partsObj) {
      if (partsObj[part].on === true) {
        $(`#${part}`).show()
        currentBody = partsObj[part].container

      } else {
        $(`#${part}`).hide()
      }
    }
    setBody()
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
        names: [],
        element: $(`#selected1`)
      },
      selected2: {
        value: false,
        names: [],
        element: $(`#selected2`)
      },
      selected3: {
        value: false,
        names: [],
        element: $(`#selected3`)
      },

    }


    partsObj = {
      part1: {
        on: true,
        hasCalled: true,
        container: null
      },
      part2: {
        on: false,
        hasCalled: false,
        container: $('#part2Box')
      },
      part3: {
        on: false,
        hasCalled: false,
        container: $('.qContainer')
      },
      part4: {
        on: false,
        hasCalled: false,
        container: $('#playlist-container')
      },
      part5: {
        on: false,
        hasCalled: false,
        container: $('#playlist-container')
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
      currentHeader = $('.part3header')
      if (!partsObj.part3.hasCalled) {

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
    $('.P2').click(function(e) {
      e.preventDefault()
      smoothTop(e)

      if ($(e.target).hasClass('R')) {
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
    $('.P3.L').click((e) => {
      changePartObj(-1)
      showHeader()
    })
    $('.P3.R').click((e) => {
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
    $('#hiddenReshuffle').trigger("mouseenter.tooltip");
    setTimeout(function() {
      $("#hiddenReshuffle").trigger("mouseleave.tooltip");
    }, 2000);
    
    let artistPerDay = $('#slider2').val()
    let artistDivide = artistAmount / artistPerDay
    let artistMod = artistAmount % artistPerDay


    createPosterDivs(Math.floor(artistDivide), artistMod)

    $('#reshuffle').click((e) => {
      smoothTop(e)
      setTimeout(function() {
        createPosterDivs(Math.floor(artistDivide), artistMod)

      }, 1100)
    })

    $('.P4').click((e) => {
      if ($(e.target).hasClass('R')) {
        console.log('been clicked');
        smoothTop(e)
        // $('#reshuffle').parent().hide()
        // $('#button4R').parent().hide()
        let element = $('#playlist-container').detach()
        $('#part5').append(element)
        if (!partsObj.part5.hasCalled) {
          part5()
        }
        changePartObj(1)
      } else if ($(e.target).hasClass('L')) {
        changePartObj(-1)
      }

    })
  }

  function initializeArtistObj() {
    // artistObj = {
    //   liked: {
    //     names: [],
    //     tag: 1
    //   },
    //   wants: {
    //     names: [],
    //     tag: 2
    //   },
    //   heardOf: {
    //     names: [],
    //     tag: 3
    //   },
    //   other: {
    //     names: [],
    //     tag: 3
    //   }
    // }
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
          "NoName"
        ],
        tag: 1,
        songAmount: $('#slider3').val()
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
        tag: 2,
        songAmount: $('#slider4').val()

      },
      "heardOf": {
        names: [
          "Major Lazer",
          "Marshmello",
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
        tag: 3,
        songAmount: $('#slider5').val()

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
          "Barclay Crenshaw",
          "Goody Grace",
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
        tag: 3,
        songAmount: $('#slider6').val()
      }
    }
  }

  function shuffleLists() {
    artistObj.liked.names.shuffle()
    artistObj.wants.names.shuffle()
    artistObj.heardOf.names.shuffle()
    artistObj.other.names.shuffle()
  }

  function createPosterDivs(posterAmount, extras) {
    $('#playlist-container').empty()
    posterArray = []
    initializeArtistObj()
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
    // createArtistObj()
    shuffleLists()
    for (var selects in artistObj) {

      for (name of artistObj[selects].names) {
        // console.log('here');
        let hx = $(`<h${artistObj[selects].tag} data-song-amounts="${artistObj[selects].songAmount}"></h${artistObj[selects].tag}>`)
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
      poster.children().eq(0).attr('data-list-num', i + 1)
      poster.appendTo($('#playlist-container'))
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

  // -------------------Part 5 -----------------------
  function part5() {

    $('.poster').click(posterClick)

  }

  function posterClick(e) {
    nameArrays = {
      names: [],
      amounts: [],
      target: $()
    }


    getNameArraysInfo(e)



  }

  function getNameArraysInfo(e) {
    if ($(e.target).hasClass('poster')) {
      $(e.target).children().each((i, child) => {
        nameArrays.names.push($(child).text())
        nameArrays.amounts.push($(child).attr('data-song-amounts'))
        nameArrays.target = $(e.target)
      })
    } else {
      $(e.target).parent().children().each((i, child) => {
        nameArrays.names.push($(child).text())
        nameArrays.amounts.push($(child).attr('data-song-amounts'))
        nameArrays.target = $(e.target).parent()
      })

    }

    posterToSpotify()
  }

  function getArtists(artist) {
    return $.ajax({
      url: 'https://api.spotify.com/v1/search',
      method: 'GET',
      dataType: 'json',
      data: {
        type: 'artist',
        q: artist
      }
    })
  }

  function getArtistTopTracks(artistId) {
    return $.ajax({
      url: `https://api.spotify.com/v1/artists/${artistId}/top-tracks`,
      method: 'GET',
      dataType: 'json',
      data: {
        country: 'US'
      }
    })
  }



  function posterToSpotify() {
    let searchResults = nameArrays.names.map(function(name) {
      return getArtists(name)
    })

    $.when(...searchResults)
      .then((...searchResults) => {
        searchResults = searchResults.map((a) => a[0].artists.items[0])
        console.log(searchResults);
        getTopTracks(searchResults)
      })
  }

  function getTopTracks(artists) {
    let tTracks = artists.filter((artist) => artist)
      .map(artist => getArtistTopTracks(artist.id))
    $.when(...tTracks)
      .then((...tTrackss) => {
        let topTracks = tTracks.map(artist => artist.responseJSON.tracks)
          .map((artist10) => artist10.map((track) => track.id))
        playlistIds = []
        filterTopSongsByWeight(topTracks)

      })
  }

  function filterTopSongsByWeight(topTracks) {

    topTracks.forEach((songIds, j) => {
      let weights = weightArray()
      let tenthWeight = weights[9]

      for (let i = 0; i < nameArrays.amounts[j]; i++) {
        let ran = Math.floor(Math.random() * tenthWeight)
        let hasAdded = false
        for (let k = 0; k < 10; k++) {
          if (ran < weights[k] && !hasAdded) {
            playlistIds.push(songIds[k])
            weights.splice(k, 0, -Infinity)
            hasAdded = true
          }
        }
      }

    })
    createPlaylist()

  }

  function createPlaylist() {
    const baseUrl = `https://embed.spotify.com/?theme=white&uri=spotify:trackset:Daily Playlist ${nameArrays.target.prev().attr('data-list-num')}:`;
    playlistIds.shuffle().join(',');

    nameArrays.target.parent().append(`<div class="non-floater"><iframe class="playlist" src="${baseUrl + playlistIds}" height="400"></iframe></div>`);
    nameArrays.target.off("click", posterClick)
    nameArrays.target.hide();
  }

  // END OF DOCREADY
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
