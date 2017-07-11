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
