export default {

    template: `
    <div>
      <h2>{{message}}</h2>
      <button @click="btnClick">按钮</button>
    </div>
    `,
    data() {
        return {
            message: "hello webpack",
            name: "csy"
        }
    },
    methods: {
        btnClick() {
            console.log(this.name)
        }
    }

}