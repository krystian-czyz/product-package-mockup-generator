var package = new Vue({
  el: '#app-package',
  data: {
		titleSelected: true,
    title: 'Język angielski',
		titleFontSize: 36,
		titleVerticalSelected: true,
    titleVertical: '1000 słów',
		flagSelected: false,
		flagSideSelected: true,
    flag: 'gb',
		flagMarginTop: 123,
		imageSelected: true,
    image: 'img/woman-1.png',
    imageMarginTop: -26,
    imageMarginLeft: -19,
    imageWidth: 220,
    imageOptions: [
      { text: 'Woman 1', value: 'img/woman-1.png'},
      { text: 'Woman 2', value: 'img/woman-2.png'},
      { text: 'Woman 3', value: 'img/woman-3.png'},
      { text: 'Woman 4', value: 'img/woman-4.png'},
      { text: 'Woman 5', value: 'img/woman-5.png'},
      { text: 'Man 1', value: 'img/man-1.png'},
      { text: 'Man 2', value: 'img/man-2.png'},
      { text: 'Man 3', value: 'img/man-3.png'},
      { text: 'Man 4', value: 'img/man-4.png'},
      { text: 'Man 5', value: 'img/man-5.png'},
      { text: 'Man 6', value: 'img/man-6.png'},
      { text: 'Man 7', value: 'img/man-7.png'}
    ],
    gradient: 'gradient2',
    gradientOptions: [
      { text: 'Yellow', value: 'yellow'},
      { text: 'Gradient1', value: 'gradient1'},
      { text: 'Gradient2', value: 'gradient2'},
      { text: 'Gradient3', value: 'gradient3'},
      { text: 'Gradient4', value: 'gradient4'},
      { text: 'Gradient5', value: 'gradient5'}
    ]
  },
  methods: {
    imageUp: function() {
      this.imageMarginTop--;
    },

    imageRight: function() {
      this.imageMarginLeft++;
    },

    imageDown: function() {
      this.imageMarginTop++;
    },

    imageLeft: function() {
      this.imageMarginLeft--;
    },

  }
})
