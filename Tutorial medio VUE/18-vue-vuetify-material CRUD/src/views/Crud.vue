<template>
  <v-container grid-list-xl>
    <h1>Crud examples</h1>
    <v-layout row wrap>
      <v-flex md6>
        <v-card class="mb-3" v-for="(item,index) in taskList" :key="index">
          <v-card-text>
            <v-chip class="mb-3" color="pink" label text-color="white">
              <v-icon left>mdi-label</v-icon>
              {{ item.title }}
            </v-chip>
            <p>{{ item.description }}</p>
            <v-btn class="ma-2 warning" @click="edit(index)">Edit</v-btn>
            <v-btn class="ma-2 error" @click="deleteTask(item.id)">Delete</v-btn>
          </v-card-text>
        </v-card>
        <!-- <v-card class="mb-3">
          <v-card-text>
            <v-chip class="mb-3" color="pink" label text-color="white">
              <v-icon left>mdi-label</v-icon>Title task 2
            </v-chip>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Fugit placeat maxime deserunt voluptates accusantium magni neque,
              magnam dolorum? Nobis accusantium officiis in et esse iusto cum repudiandae
              modi provident delectus!
            </p>
            <v-btn class="ma-2 warning">Edit</v-btn>
            <v-btn class="ma-2 error">Delete</v-btn>
          </v-card-text>
        </v-card>-->
      </v-flex>
      <v-flex md6>
        <v-card class="mb-3 pa-3" v-if="!editMode">
          <v-form @submit.prevent="addTask">
            <v-text-field label="Task title" v-model="titleTask" />
            <v-textarea label="Description task" v-model="descriptionTask" />
            <v-btn block color="success" type="submit">Add task</v-btn>
          </v-form>
        </v-card>
        <v-card class="mb-3 pa-3" v-if="editMode">
          <v-form @submit.prevent="editTask">
            <v-text-field label="Task title" v-model="titleTask" />
            <v-textarea label="Description task" v-model="descriptionTask" />
            <v-btn block color="warning" type="submit">Edit task</v-btn>
          </v-form>
        </v-card>
      </v-flex>
    </v-layout>
    <v-snackbar v-model="snackbar">
      {{ snackbarMessage }}
      <v-btn color="pink" @click="snackbar = false">Close</v-btn>
    </v-snackbar>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      editMode: false,
      titleTask: "",
      descriptionTask: "",
      snackbar: false,
      snackbarMessage: "",
      indexArray: 0,
      taskList: [
        {
          id: 1,
          title: "title task 1",
          description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fugit placeat maxime deserunt voluptates accusantium magni neque,
                        magnam dolorum? Nobis accusantium officiis in et esse iusto cum repudiandae
                        modi provident delectus!`
        },
        {
          id: 2,
          title: "title task 2",
          description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fugit placeat maxime deserunt voluptates accusantium magni neque,
                        magnam dolorum? Nobis accusantium officiis in et esse iusto cum repudiandae
                        modi provident delectus!`
        }
      ]
    };
  },
  methods: {
    addTask() {
      if (this.titleTask === "" || this.descriptionTask === "") {
        this.snackbar = true;
        this.snackbarMessage = "Form is incompleted";
      } else {
        this.taskList.push({
          id: Date.now(),
          title: this.titleTask,
          description: this.descriptionTask
        });
        this.titleTask = "";
        this.descriptionTask = "";
        this.snackbar = true;
        this.snackbarMessage = "New task added";
      }
    },
    deleteTask(id) {
      this.taskList = this.taskList.filter(item => item.id != id);
    },
    edit(index) {
      this.titleTask = this.taskList[index].title;
      this.descriptionTask = this.taskList[index].description;
      this.editMode = true;
      this.indexArray = index;
    },
    editTask() {
      this.taskList[this.indexArray].title = this.titleTask;
      this.taskList[this.indexArray].description = this.descriptionTask;
      this.titleTask = "";
      this.descriptionTask = "";
      this.editMode = false;
      this.snackbar = true;
      this.snackbarMessage = "Task adited";
    }
  }
};
</script>