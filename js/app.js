let btnStar = {
  props: ['star-message-btn'],

  template: `<button @click="status"> {{ starMessageBtn }} </button>`,

  methods: {
    status() {
      this.$emit('status')
    }
  }
}

let vm = new Vue({
  el: "#app",
  components: { btnStar },
  
  data: {
    title: 'Salut',
    message: "Mon message",
    star: false,
    starMessageBtn: 'Collect a star',
    mushroom: false,
    lives: 3,
  },

  methods: {
    changeStar: function() {      
      if(this.star === false) {
        this.star = true;
        this.starMessageBtn = 'Remove star';
      } else {
        this.star = false;
        this.starMessageBtn = 'Collect a star';
      }
    }
  }

})