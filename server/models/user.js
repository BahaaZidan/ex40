const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema({
    username: {
        type: String,
        unique: true
    },
    facebookId: {
        type: String,
        unique: true
    },
    facebookToken: {
        type: String,
        unique: true
    },
    password:String
});


User.plugin(passportLocalMongoose);


module.exports = mongoose.model('User', User);

/*
{
    "title":"what's your favorite ?",
    "options":[{"name" : "lolo xd"}, {"name" : "lolo xd"}]
}

{
    "username":"avocado",
    "password":"shawmeng"
}

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsic3RyaWN0TW9kZSI6dHJ1ZSwic2VsZWN0ZWQiOnt9LCJnZXR0ZXJzIjp7fSwid2FzUG9wdWxhdGVkIjpmYWxzZSwiYWN0aXZlUGF0aHMiOnsicGF0aHMiOnsidXNlcm5hbWUiOiJpbml0IiwiX192IjoiaW5pdCIsImhhc2giOiJpbml0Iiwic2FsdCI6ImluaXQiLCJfaWQiOiJpbml0In0sInN0YXRlcyI6eyJpZ25vcmUiOnt9LCJkZWZhdWx0Ijp7fSwiaW5pdCI6eyJfX3YiOnRydWUsInVzZXJuYW1lIjp0cnVlLCJoYXNoIjp0cnVlLCJzYWx0Ijp0cnVlLCJfaWQiOnRydWV9LCJtb2RpZnkiOnt9LCJyZXF1aXJlIjp7fX0sInN0YXRlTmFtZXMiOlsicmVxdWlyZSIsIm1vZGlmeSIsImluaXQiLCJkZWZhdWx0IiwiaWdub3JlIl19LCJlbWl0dGVyIjp7ImRvbWFpbiI6bnVsbCwiX2V2ZW50cyI6e30sIl9ldmVudHNDb3VudCI6MCwiX21heExpc3RlbmVycyI6MH19LCJpc05ldyI6ZmFsc2UsIl9kb2MiOnsiX192IjowLCJ1c2VybmFtZSI6ImF2b2NhZG8iLCJoYXNoIjoiZGI3NTM1OGQzOGM3MzVlMjM2ZjEzYzhkMDEwNTlmN2YwYWFmNjc4NGE4Yjc2MTE5MzBkZDUzNjQxZjJiOGMwYzQyZDRmMDZiZmZkOGFkNTVkZDhiODNhOTU2OGNlOWM5M2I1YzE2MmE4YmYzOTllOWI1OGZjYTc0ZTQ0MDBiY2YwODJmNWYxYjVhNGY4MDkyODFhOTkxODAwZjVmYzM5ZTNjYmQ0OTQyMDc1OTMzN2UwNmRiOWNkNjQ1NTQ1YmVlNGUyZDUzOGZjZmZhZmNkMDQzM2Y0NDVhZDNlZTBkNmJjMjU4ZmJiYzQwNDYxZmY5MTJlZmI5ZDVkYzA2MTgwNmY1MWZjNmI5YzhjYjdkZWZiNDQxYTk5NjI5NTBkNmRmOWI5ZTMzNTliMmFjOWQ3NjI3MTE2NjU2MmU5MjQyNWRiMjExYTFhMzg5NjhjNGI1MTViM2JkZTdmMWI0ZTdiNTMzNjNhNDg1ZmZiMzA4YTY2YzZmMzIyZDhmZDRhZGRiYmIwMDlmYWQ2M2ZjN2YzNDI1ODY0MTRjZTQ2ZjZjNTU3YTNmZTRkMDQ2OTc2ZDU3ZmMwMWMzZjBmOGY1NWU1ZjM4YzBhZjM0MTQzMTVlMWQ3ZDIwMjkwYzQ5NjEwMDhlYTI3OGQwMmFhNjZjZWFiY2Q2NGQ0ZTg1ZDM2OWQwNjAwNDU5YWZhZWNlZWFlZTI0MDBlNWY2ZWQ3MjBmYmU2MzhkNmFmZGNkM2EwNjA5OTMwY2I0ZTIxZTdiODBlY2M5NzhkODg4NzhlZTZmZmI3ODhjMDM0MzY0YTRhOGM0ZWUwOWJmYTFmNmIyNWY5NjFkOGNmOTdmMTFlOGJmNzNmMDBhMzMwNGQ2OWJkYWQzOTAwMDczOGQ4ZjFhYmJmNGNjMjE3OTRkYzk3YzU1YjY5ZjY4N2Y4MmFmNjg5ZGMzOGFiMjFjNzcxMmQ5MmI0N2U0YWM2YzIwZmIxNTNhMDQxYzY5MTRjNjgzZjkyNDkwNWMzOGFmNzZlYzE0MTI5YzY1ZmRiMDM4Yzc4NTdlMDI2NzFlODdlYWU1NTJiYjZmMWE3MDU2NjcxM2FlNmI1ZTYyNjc3ZDgyN2U4YTdiMzQ2NzE0YjEwMGQ5Zjc4Y2Y5N2IyZmE3YWQzNWY5ZDc2ODdhMzlkY2RkMDI3ZGU4MmZlZDM4NzY4ODdmYjc5MWVlMzMxN2RjNmJlMmViNTcxNjQ3OWNhY2Y0ZDJiZGEwZWYzY2I0YjRhNWFiNTExNGNiYzIxNTZiMTczYTYxM2I2MTI1NzhiMmVkODkyM2UxNTllMzQ5NjVkNzgyMWY2NTQ0MzIzNDY0NGI3Mjc1ZjJjYjYyNTAxNTkyZjA0OGU2NWNjNCIsInNhbHQiOiJkYzMxNDhlZGU2MzU0ZWQxYzQzMTAzNGRlZDNmOTQwMThkMjhmYTYzNWUzOWExYjc5ZjM2Njk0Yjg3MGJlMDMzIiwiX2lkIjoiNTkwZjc3NmI3Y2YzMmUyMzI4M2EwNjEzIn0sImlhdCI6MTQ5NDE4NjE4MCwiZXhwIjoxNDk0NzkwOTgwfQ.5YTGv2CjCGbxv8McKQFAo2ZiBVrRtMwvQPCzOLtCMdM
*/