<template>
    <div>
      <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
      <h5 class="my-0 mr-md-auto font-weight-normal">Rosidi</h5>
      <nav class="my-2 my-md-0 mr-md-3">
        <a class="p-2 text-dark" href="#">Добави</a>
      </nav>
      <a class="btn btn-outline-primary" href="#" v-on:click.prevent="logout">Logout</a>
    </div>
      <div class="container">
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Позиция</th>
              <th scope="col">Текст</th>
              <th class="text-right" scope="col">Опции</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>asdsa</td>
              <td>asdsa</td>
              <td class="text-right" ><a class="btn btn-outline-warning btn-xs" href="#"><i class="fas fa-pen-square"></i></a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'HelloWorld',
  data () {
    return {

    }
  },
  methods: {
    logout: function() {
      firebase.auth().signOut().then(() => {
        this.$router.replace('/login');
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  html {
    font-size: 14px;
  }
  @media (min-width: 768px) {
    html {
      font-size: 16px;
    }
  }

  .container {
    max-width: 960px;
  }

  .pricing-header {
    max-width: 700px;
  }

  .card-deck .card {
    min-width: 220px;
  }

  .border-top { border-top: 1px solid #e5e5e5; }
  .border-bottom { border-bottom: 1px solid #e5e5e5; }

  .box-shadow { box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05); }
</style>
