const app = Vue.createApp({})

app.component('buttoncpt', {
    data() {
        return {
            classes: ['button', this.variant, this.size, this.color, { disableshadow: this.disableshadow }, { disabled: this.disabled }, { starticon: this.starticon }, { endicon: this.endicon }]
        }
    },
    props: {
        disableshadow: Boolean,
        disabled: Boolean,
        variant: String,
        starticon: String,
        endicon: String,
        size: String,
        color: String
    },
    computed: {
        textButton() {
            if (this.disabled)
                return 'Disabled'
            else if (this.color == 'secondary')
                return 'Secondary'
            else if (this.color == 'danger')
                return 'Danger'
            else
                return 'Default'
        },
        textSpan() {
            const props = this.$props
            let array = []
            for (const [key, value] of Object.entries(props)) {
                if (value != undefined && value != false)
                    if (value == true) {
                        array.push(key)
                    }
                    else {
                        array.push(`${key}="${value}"`)
                    }
            }
            return `<Button ${array.join(' ')} />`
        }
    },
    template: `
    <div>
        <span class="span-button">{{this.textSpan}}</span>
        <button type="button" :class="classes" :disabled="disabled">
            <span v-if="starticon != undefined" class="material-icons">{{starticon}}</span>   
                {{this.textButton}}
            <span v-if="endicon != undefined" class="material-icons">{{endicon}}</span>  
        </button>
    </div>`
})

const vm = app.mount('#app')