<template>
  <div class="flex">
    <div class="flex justify-between w-500 mt-12">
      <div class="left grid grid-cols-3 gap-1">
        <div class="rounded-md"
            :key="seat.id"
            :class="{ [seat.color]: !seat.isSelected , 'selected': seat.isSelected}"
            v-for="seat in seats.left"
            @click="pushToCart(seat)">
        </div>
      </div>
      <div class="right grid grid-cols-3 gap-1">
        <div class="rounded-md"
            :key="seat.id"
            :class="{ [seat.color]: !seat.isSelected , 'selected': seat.isSelected}"
            v-for="seat in seats.right"
            @click="pushToCart(seat)">
        </div>
      </div>
    </div>
    <div class="cart pl-10 mt-12" v-if="totalcart.length">
        <div>Total Cart value:</div>
        <div> {{totalcartCompute}} </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'seatBooking',
  data() {
    return {
      seats: {
        left: [{
          id: 1,
          value: 100,
          color: 'gray',
          isSelected: false,
        },
        {
          id: 2,
          value: 200,
          color: 'blue',
          isSelected: false,
        },
        {
          id: 3,
          value: 300,
          color: 'light-blue',
          isSelected: false,
        },
        {
          id: 4,
          value: 400,
          color: 'dark-blue',
          isSelected: false,
        },
        {
          id: 5,
          value: 100,
          color: 'gray',
          isSelected: false,
        },
        {
          id: 6,
          value: 200,
          color: 'blue',
          isSelected: false,
        },
        {
          id: 7,
          value: 300,
          color: 'light-blue',
          isSelected: false,
        },
        {
          id: 8,
          value: 400,
          color: 'dark-blue',
          isSelected: false,
        },
        {
          id: 9,
          value: 100,
          color: 'gray',
          isSelected: false,
        },
        {
          id: 10,
          value: 200,
          color: 'blue',
          isSelected: false,
        },
        {
          id: 11,
          value: 300,
          color: 'light-blue',
          isSelected: false,
        },
        {
          id: 12,
          value: 400,
          color: 'dark-blue',
          isSelected: false,
        },
        {
          id: 13,
          value: 100,
          color: 'gray',
          isSelected: false,
        },
        {
          id: 14,
          value: 200,
          color: 'blue',
          isSelected: false,
        },
        {
          id: 15,
          value: 300,
          color: 'light-blue',
          isSelected: false,
        },
        {
          id: 16,
          value: 400,
          color: 'dark-blue',
          isSelected: false,
        },
        {
          id: 17,
          value: 100,
          color: 'gray',
          isSelected: false,
        },
        {
          id: 18,
          value: 200,
          color: 'blue',
          isSelected: false,
        },
        {
          id: 19,
          value: 300,
          color: 'light-blue',
          isSelected: false,
        },
        {
          id: 20,
          value: 400,
          color: 'dark-blue',
          isSelected: false,
        },
        {
          id: 21,
          value: 100,
          color: 'gray',
          isSelected: false,
        },
        {
          id: 22,
          value: 200,
          color: 'blue',
          isSelected: false,
        },
        {
          id: 23,
          value: 300,
          color: 'light-blue',
          isSelected: false,
        },
        {
          id: 24,
          value: 400,
          color: 'dark-blue',
          isSelected: false,
        }],
        right: [
         {
          id: 25,
          value: 100,
          color: 'gray',
          isSelected: false,
        },
        {
          id: 26,
          value: 200,
          color: 'blue',
          isSelected: false,
        },
        {
          id: 27,
          value: 300,
          color: 'light-blue',
          isSelected: false,
        },
        {
          id: 28,
          value: 400,
          color: 'dark-blue',
          isSelected: false,
        },
        {
          id: 29,
          value: 100,
          color: 'gray',
          isSelected: false,
        },
        {
          id: 30,
          value: 200,
          color: 'blue',
          isSelected: false,
        },
        {
          id: 31,
          value: 300,
          color: 'light-blue',
          isSelected: false,
        },
        {
          id: 32,
          value: 400,
          color: 'dark-blue',
          isSelected: false,
        },
        {
          id: 33,
          value: 100,
          color: 'gray',
          isSelected: false,
        },
        {
          id: 34,
          value: 200,
          color: 'blue',
          isSelected: false,
        },
        {
          id: 35,
          value: 300,
          color: 'light-blue',
          isSelected: false,
        },
        {
          id: 36,
          value: 400,
          color: 'dark-blue',
          isSelected: false,
        },
        {
          id: 37,
          value: 100,
          color: 'gray',
          isSelected: false,
        },
        {
          id: 38,
          value: 200,
          color: 'blue',
          isSelected: false,
        },
        {
          id: 39,
          value: 300,
          color: 'light-blue',
          isSelected: false,
        },
        {
          id: 40,
          value: 400,
          color: 'dark-blue',
          isSelected: false,
        },
        {
          id: 41,
          value: 100,
          color: 'gray',
          isSelected: false,
        },
        {
          id: 42,
          value: 200,
          color: 'blue',
          isSelected: false,
        },
        {
          id: 43,
          value: 300,
          color: 'light-blue',
          isSelected: false,
        },
        {
          id: 44,
          value: 400,
          color: 'dark-blue',
          isSelected: false,
        },
        {
          id: 45,
          value: 100,
          color: 'gray',
          isSelected: false,
        },
        {
          id: 46,
          value: 200,
          color: 'blue',
          isSelected: false,
        },
        {
          id: 47,
          value: 300,
          color: 'light-blue',
          isSelected: false,
        },
        {
          id: 48,
          value: 400,
          color: 'dark-blue',
          isSelected: false,
        }
        ]
      },
      totalcart: [],
    };
  },
  computed: {
    totalcartCompute() {
      let amount = 0;
      this.totalcart.forEach(el => {
        amount += el.value;
      });
      return amount;
    }
  },
  methods: {
   pushToCart(seat) {
    if(seat.color !== 'gray') {
      if(!seat.isSelected) {
        this.totalcart.push(seat);
      } else {
       this.totalcart = this.totalcart.filter(el => el.id !== seat.id);
      }
      seat.isSelected = !seat.isSelected;
    }
   }
  }
}
</script>

<style>
  .gray {
    cursor: not-allowed;
    background: #D1D5DB;
    width: 50px;
    height: 50px;
  }

  .selected {
    cursor: pointer;
    background: green;
    width: 50px;
    height: 50px;
  }

  .blue {
    cursor: pointer;
    background: #60A5FA;
    width: 50px;
    height: 50px;
  }

  .light-blue {
   cursor: pointer;
    background: #BFDBFE;
    width: 50px;
    height: 50px;
  }

  .dark-blue {
    background: #1E40AF;
    width: 50px;
    height: 50px;
  }

  .w-500 {
   width: 400px;
  }
</style>
