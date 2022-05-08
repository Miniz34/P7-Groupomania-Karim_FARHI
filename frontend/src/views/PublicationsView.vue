<template>

  <head>
    <link rel="stylesheet" href="http://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.1.0/css/font-awesome.min.css" />
  </head>
  <div class="publication" id="publication">
    <div v-for="post in publication" v-bind:key="post" class="container">
      <div class="well">
        <div class="media">
          <a class="pull-left" href="#">
            <img class="media-object" src="http://placekitten.com/150/150">
          </a>
          <div class="media-body">
            <h4 class="media-heading">{{ post }}</h4>
            <p class="text-right">By Francisco</p>
            <p>sup</p>
            <ul class="list-inline list-unstyled main-post">
              <li><span><i class="glyphicon glyphicon-calendar"></i> 2 days, 8 hours </span></li>
              <li>|</li>
              <span><i class="glyphicon glyphicon-comment"></i> 2 comments</span>
              <li>|</li>
              <li>
                <span class="glyphicon glyphicon-star"></span>
                <span class="glyphicon glyphicon-star"></span>
                <span class="glyphicon glyphicon-star"></span>
                <span class="glyphicon glyphicon-star"></span>
                <span class="glyphicon glyphicon-star-empty"></span>
              </li>
              <li>|</li>
              <li>
                <!-- Use Font Awesome http://fortawesome.github.io/Font-Awesome/ -->
                <span><i class="fa fa-facebook-square"></i></span>
                <span><i class="fa fa-twitter-square"></i></span>
                <span><i class="fa fa-google-plus-square"></i></span>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  </div>

  <p>{{ publication }}</p>
</template>

<script>


export default {
  name: "publicationView",
  data() {
    return {
      publication: {
        id: "8",
        content: "azezaee",
        userId: "14"
      },


    };
  },
  methods: {
    async mounted() {
      const res = await fetch('http://localhost:3000/api/publication/get')
      const data = await res.json()
      this.publication = data
      console.log(data)
    },
    testClick() {
      const test = console.log("bonjours")
      return test
    }
  }

}



</script>


<style>
.well {
  margin-top: 50px;
  background-color: white;
}

.main-post {
  display: flex;
}
</style>