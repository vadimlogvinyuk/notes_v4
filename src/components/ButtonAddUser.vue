<template>
    <div>
    <button type="button" class="btn btn-link" data-toggle="modal"
            data-target="#addUserModal" data-whatever="@mdo"> <i class="el-icon-circle-plus"></i> Add user</button>
    <div class="modal fade" id="addUserModal" tabindex="-1" role="dialog"
         aria-labelledby="addUserModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">New user</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="form-group">
                            <label for="recipient-name" class="col-form-label">name:</label>
                            <input type="text" class="form-control" id="recipient-name" v-model="userName">
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" data-dismiss="modal"@click="onClickAddNewUser">Add</button>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'

    export default {
        name: 'app',

        data () {
            return {
                userName:''
            }
        },
        methods: {
            ...mapActions(['addNewUser']),

            onClickAddNewUser() {
                this.addNewUser(this.userName);
                this.userName = "";
            }

        }

    }

</script>



