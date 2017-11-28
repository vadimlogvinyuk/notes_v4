<template>
    <div>
        <nav class="navbar navbar-expand-md navbar-dark bg-dark ">

            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                <a class="navbar-brand" href="#">Notes</a>
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item active">

                    </li>
                    <li class="nav-item active">
                        <AddNote/>
                    </li>
                    <li class="nav-item active">
                        <ButtonShareNote/>
                    </li>

                </ul>
                <OtherUser/>
                <AddUser/>
                <AllNotesUsers/>
            </div>

        </nav>

    </div>
</template>

<script>
    import AddUser  from './ButtonAddUser.vue'
    import OtherUser from './ButtonOtherUser.vue'
    import AddNote   from './ButtonAddNote.vue'
    import AllNotesUsers from './ButtonAllNotesUsers.vue'
    import ButtonShareNote from './ButtonShareNote.vue'

    export default {
        components:{
            AddUser,
            OtherUser,
            AddNote,
            AllNotesUsers,
            ButtonShareNote,
        }
    }
</script>


