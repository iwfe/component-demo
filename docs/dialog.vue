<template>
<div>
    <vDialog>
        <div>这是内容</div>
        <div slot="foot" style="text-align:center; padding:10px 0;">
            <button class="button button-balanced">确认</button>
            <button class="button button-stable">取消</button>
        </div>
    </vDialog>
    <div>dialog 组件</div>
</div>
</template>

<script>
import vDialog from 'js/v-dialog/index.vue'
export default {
    components: {
        vDialog
    },
    beforeCreate(){
    }
}

</script>

