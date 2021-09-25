const Person = {
    data() {
      return {
        "person": {
        },
             }
    },
 

created() {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then((parsedJson) => {
            console.log(parsedJson);
            this.person = parsedJson.results[0]
            this.picture = this.person.picture.large
        })
        .catch( err => {
            console.error(err)
        })
    },
 
    computed: {
        prettyBirthday() {
            return dayjs(this.person.dob.date).format('D MMM YYYY');
        }
    },
}
 
  
Vue.createApp(Person).mount('#PersonApp');