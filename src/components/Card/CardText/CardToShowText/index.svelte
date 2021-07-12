<script>
export let active
export let textToShow
</script>

<div>
  {#if active}
    <p class="card-text-hidden {active && 'slide-bottom-text'}">
      {textToShow}
    </p>
  {/if}
</div>

<style type="text/scss" lang="scss">
.card-text {
  &-hidden {
    text-align: center;
    padding-bottom: 1rem;
  }
}

/**
 * ----------------------------------------
 * animation slide-bottom
 * ----------------------------------------
 */
@-webkit-keyframes slide-bottom {
  0% {
    -webkit-transform: translateY(-20px);
    transform: translateY(-20px);
  }
  100% {
    -webkit-transform: translateY(0px);
    transform: translateY(0px);
  }
}
@keyframes slide-bottom {
  0% {
    -webkit-transform: translateY(-20px);
    transform: translateY(-20px);
  }
  100% {
    -webkit-transform: translateY(0px);
    transform: translateY(0px);
  }
}

.slide-bottom-text {
  -webkit-animation: slide-bottom 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    forwards;
  animation: slide-bottom 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}
</style>
