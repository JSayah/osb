<template>
<div>
    <div id="userWrapper">
        <card class="card-user" id="user">
            <div class="author">
                <img class="avatar border-gray" src="https://img.icons8.com/dusk/100/000000/cat-profile.png" alt="..."/>
                <h4 class="title">{{user.data.displayName}}<br />
                <small>Level 99 Wizard</small>
                </h4>
            </div>
        </card>
    </div>
    <div id="coursesContainer">
        <div id="courses" class="row">
            <div class="col-md-4">
                <card id="router">
                    <router-link to="courses" tag="router">
                        <div id="course" class="author">
                            <img class="avatar border-gray" src="https://img.icons8.com/dusk/100/000000/cat-profile.png" alt="..."/>
                            <h4 class="title">Course Name<br />
                            <small>Status</small>
                            </h4>
                        </div>
                    </router-link>
                </card>
            </div>
            <div class="col-md-4">
                <card id="router">
                    <router-link to="courses" tag="router">
                        <div id="course" class="author">
                            <img class="avatar border-gray" src="https://img.icons8.com/dusk/100/000000/cat-profile.png" alt="..."/>
                            <h4 class="title">Course Name<br />
                            <small>Status</small>
                            </h4>
                        </div>
                    </router-link>
                </card>
            </div>
            <div class="col-md-4">
                <card id="router">
                    <router-link to="courses" tag="router">
                        <div id="course" class="author">
                            <img class="avatar border-gray" src="https://img.icons8.com/dusk/100/000000/cat-profile.png" alt="..."/>
                            <h4 class="title">Course Name<br />
                            <small>Status</small>
                            </h4>
                        </div>
                    </router-link>
                </card>
            </div>
        </div>
        <div id="courses" class="row">
            <div class="col-md-4">
                <card id="router">
                    <router-link to="courses" tag="router">
                        <div id="course" class="author">
                            <img class="avatar border-gray" src="https://img.icons8.com/dusk/100/000000/cat-profile.png" alt="..."/>
                            <h4 class="title">Course Name<br />
                            <small>Status</small>
                            </h4>
                        </div>
                    </router-link>
                </card>
            </div>
            <div class="col-md-4">
                <card id="router">
                    <router-link to="courses" tag="router">
                        <div id="course" class="author">
                            <img class="avatar border-gray" src="https://img.icons8.com/dusk/100/000000/cat-profile.png" alt="..."/>
                            <h4 class="title">Course Name<br />
                            <small>Status</small>
                            </h4>
                        </div>
                    </router-link>
                </card>
            </div>
            <div class="col-md-4">
                <card id="router">
                    <router-link to="courses" tag="router">
                        <div id="course" class="author">
                            <img class="avatar border-gray" src="https://img.icons8.com/dusk/100/000000/cat-profile.png" alt="..."/>
                            <h4 class="title">Course Name<br />
                            <small>Status</small>
                            </h4>
                        </div>
                    </router-link>
                </card>
            </div>
        </div>
    </div>
</div>    
</template>


<script>
 import { mapGetters } from "vuex";
  export default {
    computed: {
    ...mapGetters({
// map `this.user` to `this.$store.getters.user`
      user: "user"
    })
  }
}
</script>


<style>
    #userWrapper{
        width: 100%;
        margin:10px auto;
        border-bottom: solid 1px;
    }
    #user{
        text-align: center;
    }
    #courses{
        text-align: center;
    }
    #course{
        width: 80%;
        border: solid 1px;
        margin: 10px auto;
        padding: 10px;
    }
    router{
        text-decoration: none;
    }
</style>
