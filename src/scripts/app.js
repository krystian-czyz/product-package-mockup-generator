var package = new Vue({
  el: '#app-package',
  data: {
    title: 'Learn Language',
    titleVertical: 'deutsch',
    flag: 'de',
    image: 'img/image-1.png',
    imageMarginTop: 9,
    imageMarginLeft: 4,
    imageWidth: 200,
    imageOptions: [
      { text: 'Woman 1', value: 'img/image-1.png'},
      { text: 'Woman 2', value: 'img/image-3.png'},
      { text: 'Man', value: 'img/image-2.png'}
    ],
    gradient: 'yellow',
    gradientOptions: [
      { text: 'Yellow', value: 'yellow'},
      { text: 'Purple', value: 'purple'}
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
