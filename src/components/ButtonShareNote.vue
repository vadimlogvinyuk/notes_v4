<template>
    <div>
        <div class="btn-group" v-if=" users.length >1 && multipleSelection.length > 0">
            <button type="button" class="btn btn-link dropdown-toggle" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false" icon="el-icon-share">
                <i class="el-icon-share"></i>
                share
            </button>
            <div class="dropdown-menu">
                <a class="dropdown-item" href="#" v-for="user in users"
                @click="OtherUser(user)"
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
                'users','currentUser','multipleSelection'
            ])
        },
        methods:{
            ...mapActions (['ShareNotes']),

            OtherUser(UserChoise) {
                this.ShareNotes(UserChoise);
            }
        }
    }

</script>

