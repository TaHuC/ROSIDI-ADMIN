<template>
    <div>
      <div class="d-flex fixed-top flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
      <h5 class="my-0 mr-md-auto font-weight-normal">Rosidi</h5>
      <nav class="my-2 my-md-0 mr-md-3">
        <a class="p-2 text-dark" data-toggle="modal" data-target="#addModal"  href="#">Добави</a>
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
            <tr v-for="row in rows">
              <td>{{row.positionText}}</td>
              <td>{{row.textWeb}}</td>
              <td class="text-right" >
                <a class="btn btn-outline-warning btn-xs" v-on:click="setData(row)" data-toggle="modal" data-target="#editModal" href="#"><i class="fas fa-pen-square"></i></a>
                <a class="btn btn-outline-danger btn-xs" v-on:click.prevent="rempoveData(row)" href="#"><i class="fas fa-trash-alt"></i></a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- ADD Modal -->
      <div class="modal fade" id="addModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Добави Текст</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="form-group">
                <label for="positionText">Позиция</label>
                <input type="text" class="form-control" v-model="newText.positionText" autocomplate="off" id="positionText" placeholder="Позиция на текста...">
              </div>
              <div class="form-group">
                <label for="textWeb">Текст</label>
                <textarea id="textWeb" v-model="newText.textWeb" class="form-control" autocomplete="off"></textarea>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Затвори</button>
              <button type="button" v-on:click="addData" data-dismiss="modal" class="btn btn-primary">Запиши</button>
            </div>
          </div>
        </div>
      </div>

      <!-- EDIT Modal -->
      <div class="modal fade" id="editModal" tabindex="-1" role="dialog" aria-labelledby="editModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Редактиране</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="form-group">
                <label for="positionText">Позиция</label>
                <input type="text" class="form-control" v-model="editText.positionText" autocomplate="off" id="positionText" placeholder="Позиция на текста...">
              </div>
              <div class="form-group">
                <label for="textWeb">Текст</label>
                <textarea id="textWeb" v-model="editText.textWeb" class="form-control" autocomplete="off"></textarea>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Затвори</button>
              <button type="button" v-on:click="updateData(editText)" data-dismiss="modal" class="btn btn-primary">Запиши</button>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import Firebase from 'firebase'
import {db} from '../firebase'

let fireDB = db.database();
let dbRef = fireDB.ref('rows');

export default {
  name: 'HelloWorld',
  firebase: {
    rows: dbRef
  },
  data() {
    return {
      newText: {
        positionText: '',
        textWeb: ''
      },
      editText: {
        '.key': '',
        positionText: '',
        textWeb: ''
      }
    }
  },
  methods: {
    logout: function() {
      db.auth().signOut().then(() => {
        this.$router.replace('/login');
      })
    },
    addData: function() {
        dbRef.push(this.newText);
        this.newText.positionText = '';
        this.newText.textWeb = '';
        this.$toastr('success', 'Записан успешно');
    },
    setData: function(data) {
      this.editText['.key'] = data['.key'];
      this.editText.positionText = data.positionText;
      this.editText.textWeb = data.textWeb;
      
    },
    updateData: function(data) {
      let copy = { ...data };
      delete copy['.key'];
      dbRef.child(this.editText['.key']).set(copy);
      this.$toastr('success', 'Промените са запазени!');
      
    },
    rempoveData: function(row) {
      let confr = confirm("Сигурни ли сте, че искате да го изтриете!");
      if(confr == true) {
        dbRef.child(row['.key']).remove();
        this.$toastr('success', 'Данните са изтрити успешно!');
      }
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
    margin-top: 80px;
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
