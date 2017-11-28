<template>
    <div v-if="users.length > 0">
        <div class="btn-group">
            <button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {{currentUser.userName}}
            </button>
            <div class="dropdown-menu">
                <a class="dropdown-item" href="#" v-for="user in users" @click="onClickOtherUser(user)"
                v-if="user != currentUser">{{user.userName}}</a>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import { mapActions } from 'vuex'

    export default {
        computed:{
            ...mapGetters ([
                'users','currentUser'
            ])
        },
        methods:{
            ...mapActions (['OtherUser']),

            onClickOtherUser(UserChoise) {
                this.OtherUser (UserChoise);
            }
        }
    }

</script>


