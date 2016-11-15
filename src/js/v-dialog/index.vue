<template>
<div>
    <vMask v-if="hasMask"></vMask>
    <div class="dialog" v-show="show" @touchmove="!this.scroll && $event.preventDefault()">
        <div :class="type" :transition="dialogTransition">
            <div class="dialog-head" v-if="hasTitle">
                {{title}}
                <i class="dialig-close" v-if="hasClose"></i>
            </div>
            <div class="dialog-body">
                <slot></slot>
            </div>
            <div class="dialog-foot">
                <slot name="foot"></slot>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import vMask from 'js/v-mask'
let path = require('path');
export default {
    name:'v-dialog',
    components:{
        vMask
    },
    props: {
        hasMask: {
            type: Boolean,
            default: true
        },
        type: {
            type: String,
            default: ''
        },
        show: {
            type: Boolean,
            default: true
        },
        dialogTransition: {
            type: String,
            default: 'vux-dialog'
        },
        scroll: {
            type: Boolean,
            default: true
        },
        title:{
            type: String,
            default: 'Title'
        },
        hasClose:{
            type: Boolean,
            default: false
        },
        hasTitle: {
            type: Boolean,
            default: true
        }
    }
}
</script>
<style lang="sass">
@import "../../scss/ionic.scss";
@import "./_dialog.scss";
</style>
