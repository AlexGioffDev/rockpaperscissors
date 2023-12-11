<script lang="ts">
    import '../app.css';
    import Icon from '@iconify/svelte'
</script>

<header class="container-fluid">
    <div class="title-container">
        <div>
            <Icon icon="fa-regular:hand-rock" />
            <Icon icon="fa6-regular:hand" />
            <Icon icon="fa6-regular:hand-scissors" />
        </div>
        <h1>Rock... Paper... Victory!</h1>
    </div>
</header>
<main class="container">
    <slot />
</main>
