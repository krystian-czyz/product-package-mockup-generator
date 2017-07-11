var package = new Vue({
  el: '#app-package',
  data: {
		titleSelected: true,
    title: 'Super product',
		titleFontSize: 36,
		titleVerticalSelected: true,
    titleVertical: 'product',
		flagSelected: true,
		flagSideSelected: true,
    flag: 'gb',
		flagMarginTop: 123,
		imageSelected: true,
    image: 'img/woman-1.png',
    imageMarginTop: -26,
    imageMarginLeft: -19,
    imageWidth: 220,
    imageOptions: [
      { text: 'Woman', value: 'img/woman-1.png'},
      { text: 'Man', value: 'img/man-1.png'}
    ],
    gradient: 'yellow',
    gradientOptions: [
      { text: 'Yellow', value: 'yellow'},
      { text: 'Violet', value: 'violet'},
      { text: 'Red', value: 'red'},
      { text: 'Clot', value: 'clot'}
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
