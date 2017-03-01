let rooString = "U2, Red Hot Chili Peppers, The Weeknd, Chance The Rapper, Major Lazer, Flume, Lorde, The xx, Travis Scott, Cage The Elephant, Marshmello, The Head and The Heart, Big Gigantic, Glass Animals, Future Islands, Tory Lanez, Tove Lo, Crystal Castles, Umphrey's McGee, Portugal The Man, Tegan and Sara, Milky Chance, Yellow Claw, Cold War Kids, Kaleo, Russ, Jon Bellion, Royal Blood, The Strumbellas, Car Seat Headrest, Michael Kiwanuka, Gallant, Louis The Child, D.R.A.M., Borgore, Dua Lipa, NGHTMRE, Getter, Snails, James Vincent McMorrow, Joseph, Illenium, Flatbush Zombies, Amine, Claude Vonstroke, Francis and The Lights, Margo Price, BADBADNOTGOOD, The Front Bottoms, G. Jones, Preservation Hall Jazz Band, Greensky Bluegrass, Cam, Bad Suns, Coin, Mandolin Orange, Eden, Rainbow Kitten Surprise, Ookay, Herobust, Kevin Morby, Goldfish, Noname, Leon, Albin Lee Meldau, San Holo, Rezz, Angelique Kidjo, Haywyre, Deap Vally, Hippo Campus, Luke Combs, Vanic, Unlike Pluto, Kaiydo, Ten Fe, Nightly, The Orwells, Stick Figure, Mondo Cozmo, Barclay Crenshaw, Goody Grace, July Talk, Turkuaz, Lucy Dacus, Klangstof, Kevin Abstract, Khruangbin, The Lemon Twigs, Wilderado, Twin Limb, Big Jesus, Twiddle, White Reaper, River Whyless, Alexandra Savior, Lukas Nelson, Promise Of The Real, Innanet James, Ganja White Night, Welles, Aaron Lee Tasjan"
rooString = rooString.split(", ")



$(function() {
  $('.modal').modal();
  let abc = $('.artist-boxes-container')
  let $modal = $('.modal-content')
  cPart1()


  function cPart1() {
    $('.nav-bars').each(function() {
      var $this = $(this);
      console.log(this);
      var $target = $('#' + $(this).attr('data-target'));
      console.log($target.outerHeight() - $this.height() + $target.offset().top);
      $this.pushpin({
        top: $target.offset().top,
        bottom: $target.offset().top + $target.outerHeight() - $this.height()
      });
    });
    createArtistBoxes(rooString, abc, 'computer')



    $('.artist-boxes-container.bonnaroo').click((e) => {
      e.preventDefault()
      console.log(e.target);
      let target = $(e.target)
      if (target.hasClass('artist-boxes')) {
        selectArtist(target.children(), $('li .active').attr('data-selection'))
        updateArtistObj($modal, ['green-dot', 'blue-dot', 'grey-dot'], true)
      }

    })
    $('input[type=range]').change(function(e) {
      console.log('heheheheheh');
      updateArtistObj($modal, null, false)

    })

  }

})
