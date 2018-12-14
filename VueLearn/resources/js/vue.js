var app = new Vue({
    el: '#app',
    data: {
        message: `hello, 中文`,
        date: new Date(),
        link: `<a href="#" >Just A LiNK</a>`,
        a:2
    },
    created () {
        console.log(`${this.a} / ${this.message}`)

    },
    mounted () {
        console.log(this.$el)
        this.timer = setInterval(()=>{
            this.date = new Date()
        }, 1000)
    }, 
    beforeDestory () {
        if(this.timer){
            clearInterval(this.timer);
        }
    }
})