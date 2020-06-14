let btnStar = {
  props: ['star-message-btn'],

  template: `<button class="btn-star btn-lg m-1" @click="starStatus"> {{ starMessageBtn }} </button>`,

  methods: {
    starStatus() {
      this.$emit('star-status')
    }
  }
}

let btnMushroom = {
  props: ['mushroom-message-btn'],

  template: `<button class="btn-mushroom btn-lg m-1" @click="mushroomStatus"> {{ mushroomMessageBtn }} </button>`,

  methods: {
    mushroomStatus() {
      this.$emit('mushroom-status')
    }
  }
}

let vm = new Vue({
  el: "#app",
  components: { btnStar, btnMushroom },
  
  data: {
    title: 'Salut',
    message: "Mon message",
    star: false,
    starMessageBtn: 'Collect a star',
    mushroom: false,
    mushroomMessageBtn: 'Give a mushroom',
    oneUpMessageBtn: '1up',
    hitMessageBtn: 'Hit !',

    lives: 3,
    invincible: 'Invincible !!!'
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
    },
    
    changeMushroom: function() {      
      if(this.mushroom === false) {
        this.mushroom = true;
      }
    },

    giveOneLive() {
      this.lives++;
    },

    hitHero() {
      if(this.star === false) {
        if(this.mushroom === false) {
          return (this.lives >=1 ? this.lives-- : this.lives = 0)
        } else {
          return this.mushroom = false;
        }
      }
    }
  }

})