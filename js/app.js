// app code

let app = new Vue({
    el : "#app",
    data: {
        total : 0,
        calculation : "0",
    },
    methods: {

        putIn : function(element) {
            this.calculation += element;
        },

        clear : function() {
            this.calculation = this.calculation.slice(0, this.calculation.length - 1);
        },

        calculate : function () {
            this.total = eval(this.calculation);
        }
    }

});
