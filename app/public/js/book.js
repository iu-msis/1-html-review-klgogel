const BookApp = {
    data() {
      return {
        books: [],
        selectedBooks: null,
        booksForm: {}
      }
    },
    computed: {},
    methods: {
        prettyDollar(n) {
            const d = new Intl.NumberFormat("en-US").format(n);
            return "$ " + d;
        },
        fetchBooksData() {
            fetch('/api/books/')
            .then( response => response.json() )
            .then( (responseJson) => {
                console.log(responseJson);
                this.books = responseJson;
            })
            .catch( (err) => {
                console.error(err);
            })
        }
        handleEditBooks(books){
            this.selectedBooks=books;
            this.booksForm = this.selectedBooks;
        },
        handleCancelEdit(){
            this.selectedBooks = null;
            this.booksForm = {};
        }
    },
    created() {
        this.fetchBooksData();
    }
  
  }
  
  Vue.createApp(BookApp).mount('#booksApp');