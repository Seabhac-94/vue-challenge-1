const app = Vue.createApp({
    data() {
        return {
            name: 'Zac Allen',
            age: 26,
            image: 'giphy.gif'
        }
    },
    methods: {
        ageInFiveYears() {
            ageInFiveYears = this.age + 5
            return ageInFiveYears
        },
        favouriteNumber(){
            const favouriteNumber = Math.random()
            return favouriteNumber
        }
    }
})

app.mount('#assignment')