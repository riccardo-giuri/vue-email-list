Vue.createApp({
    data () {
        return {
            newMails: [],
            emailList: []
        }
    },

    mounted() {
        for(let i = 0; i < 10 ; i++) {
            axios
            .get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((axiosResp) => {
                this.newMails.push(axiosResp.data.response);

                if(this.newMails.length === 10) {
                    this.emailList = this.newMails;
                }
            });
        }     
    }
}).mount("#app");