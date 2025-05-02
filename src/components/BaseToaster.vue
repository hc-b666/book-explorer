<template>
  <div class="toaster">
    <transition name="toast">
      <div v-if="toasts.length > 0">
        <transition-group tag="ul" class="toaster__wrapper">
          <li v-for="toast in toasts" :key="toast.id" :class="['toaster__inner', toastMap[toast.status]]">
            <span class="toaster__inner-text">{{ toast.text }}</span>
          </li>
        </transition-group>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "BaseToaster",
  data: () => ({
    toastMap: {
      warning: "warning",
      error: "error",
      success: "success",
    },
  }),
  computed: {
    toasts() {
      return this.$store.getters.toasts;
    }
  },
}
</script>

<style lang="scss" scoped>
.toast-enter-from,
.toast-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

.toast-enter-active,
.toast-leave-active {
  transition: 0.25s ease all;
}

.toaster {
  &__wrapper {
    position: fixed;
    bottom: 3%;
    right: 5%;

    z-index: 100;

    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  &__inner {
    --color: black;
    display: flex;
    align-items: center;
    gap: 1rem;

    border-radius: 0.3rem;

    border: 1px solid transparent;

    background-color: white;

    padding: 12px 24px;

    border-color: var(--color);
    color: var(--color);

    svg {
      fill: var(--color);
      stroke: var(--color);
    }

    &.success {
      --color: green;
    }

    &.warning {
      --color: orange;
    }

    &.error {
      --color: red;
    }

    &-icon {
      width: 1.8rem;
      aspect-ratio: 1/1;
    }

    &-text {
      font-size: 1.2rem;
      font-weight: 600;
    }
  }
}
</style>
