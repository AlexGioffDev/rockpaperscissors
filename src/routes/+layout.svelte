<script lang="ts">
    import '../app.css';
</script>

<header class="container-fluid">
    <div class="title-container">
        <div>
          <img class="logo" alt="rsp" src="/logo.png" />     
        </div>
        <h1>Rock... Paper... Victory!</h1>
    </div>
</header>
<main class="container">
    <slot />
</main>


<style>

  .logo {
    width: 120px;
    height: 120px;
  }
</style>

