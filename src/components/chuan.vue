<!-- 子组件 -->
<template>
  <button @click="emitEvent">Emit Event</button>
</template>
<script>
export default {
  methods: {
    emitEvent() {
      this.$emit('customEvent', 'Hello from Child');
    }
  }
}
</script>

<!-- 父组件 -->
<template>
  <ChildComponent @customEvent="handleCustomEvent"></ChildComponent>
</template>
<script>
export default {
  methods: {
    handleCustomEvent(message) {
      console.log(message);
    }
  }
}
</script>