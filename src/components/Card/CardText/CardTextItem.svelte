<script>
import CardToShowText from './CardToShowText/index.svelte'
export let title
export let textToShow

let active = false

const handleShowText = () => {
  active = !active
  console.log(active)
}
</script>

<div class="card-text-item-container">
  <div class="card-text-item" on:click="{handleShowText}" aria-hidden="true">
    <p class="{active && 'card-text-title-active'}">{title}</p>
    <img
      class="card-text-icon {active ? 'showText' : 'hiddenText'}"
      src="/assets/down-arrow.svg"
      alt="Arrow"
      draggable="false"
      aria-hidden="false" />
  </div>
  <CardToShowText textToShow="{textToShow}" active="{active}" />
</div>

<style type="text/scss" lang="scss">
.card-text {
  &-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 0.8rem;
    padding-bottom: 0.5rem;
    cursor: pointer;
    padding: 0.5rem 0;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-tap-highlight-color: transparent;
    transition: var(--transition);

    &-container {
      margin-bottom: 1.5rem;
      border-bottom: 1px solid rgb(139, 139, 139);
    }
  }
  &-title-active {
    transition: var(--transition);
    color: var(--purpleBg);
  }

  &-icon {
    width: 15px;
    height: 15px;
    opacity: 0.8;
    transition: var(--transition);
  }
}

.hiddenText {
  &:hover {
    transform: rotate(10deg);
  }
}
.showText {
  transition: var(--transition);
  transform: rotate(180deg);
}
</style>
