<template>
    <div>
        <span>
            <input type="checkbox">
            <strong>{{todo.id}}</strong>
            {{todo.title}}
            <button>&times;</button>
        </span>
    </div>
</template>

<script>
    export default {
        props:{
            todo: {
                type: Object,
                required: true
            }
        }
    }
</script>