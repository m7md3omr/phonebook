<template>
<div>
  <nav class="panel column is-offset-2 is-8">
    <p class="panel-heading">
      Vue js Phonebook
      <button class="button is-link is-outlined" @click="openAdd">
      Add New
      </button>
    </p>
    <div class="panel-block">
      <p class="control has-icons-left">
        <input class="input is-small" type="text" placeholder="search">
        <span class="icon is-small is-left">
          <i class="fas fa-search" aria-hidden="true"></i>
        </span>
      </p>
    </div>
    
    <a class="panel-block">
      <span class=" column is-9">
        marksheet
      </span>
      
      <span class="has-text-danger panel-icon  column is-1">
        <i class="fa fa-trash"></i>
      </span>
      <span class="has-text-info panel-icon  column is-1">
        <i class="fa fa-edit"></i>
      </span>
      <span class ="has-text-primary panel-icon  column is-1">
        <i class="fa fa-eye"></i>
      </span>
    </a>
  </nav>
<Add :openmodal="addActive" @closeRequest="close"></Add>
</div>
</template>
<script>

let Add = require('./Add.vue');
  export default{
    data(){
      return {
        addActive : ''
      }
    },
    methods:{
      openAdd(){
        this.addActive = 'is-active';
    },
    close(){
      this.addActive = '';
    }
  },
    components: {Add}

}
</script>