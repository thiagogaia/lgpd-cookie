<svelte:options immutable={true} tag='lgpd-cookie'/>
<script>
  import {fade} from 'svelte/transition'
  import { slide } from 'svelte/transition'
  export let text = 'Este site utiliza cookies primários e de terceiros para garantir a funcionabilidade da plataforma e uma melhor experiência de navegação. Saiba mais em nossa <a href="https://betec.com.br/politica-de-cookies" style="color: #fff">Política de Cookies </a>.'
  function setCookie(nome, valor, dias = 15) {
    var duracao = new Date();
    duracao.setDate(duracao.getDate() + dias);
    var cookiePeriodo = nome + "=" + encodeURIComponent(valor) + (duracao ? "; expires=" + duracao.toUTCString() : "");
    document.cookie = cookiePeriodo;
  }

  function getCookie(nome) {
    var valor = "; " + document.cookie;
    var partes = valor.split("; " + nome + "=");
    if (partes.length == 2) return partes.pop().split(";").shift();
  }

  let cookiePolicy = getCookie('cookiePolicy') || false

  function accept() {
    cookiePolicy = true
    setCookie('cookiePolicy', cookiePolicy, 365)
  }

  let showSettings = false
  function settings() {
    showSettings = !showSettings
  }
</script>

{#if !cookiePolicy}

  <div in:fade out:fade id="cookiePolicy">
    <div class="container2">
      <p class="titleContainer">Este website utiliza cookies</p>
      
      <p>{@html text}</p>

      <div class="buttonsActions">
        <button on:click={accept} class="footer_output_btn btn btn-success">
          Permitir Cookies
        </button>
        <button on:click={accept} class="footer_output_btn btn btn-success">
          Recusar Cookies
        </button>
        <button on:click={settings} class="footer_output_btn btn btn-success">
          Preferência de Cookies
        </button>
      </div>
      

      {#if showSettings}
        <div transition:slide class="prefCookie">
          <p><strong>SUAS PREFERÊNCIAS DE COOKIES</strong></p>
          <p>Usamos diferentes tipos de cookies para otimizar sua experiência em nosso site. Clique nas categorias abaixo para saber mais sobre a sua finalidade. Você pode escolher quais tipos de cookies permitir e pode alterar suas preferências a qualquer momento. Lembre-se de que ao desativar os cookies poderá afetar sua experiência no site.</p>
          <p>Clique <a href="https://betec.com.br/politica-de-cookies" style="color: #fff;">AQUI</a> para ser direcionado à nossa Política de Cookies e obter mais informações.</p>
          <p>
            <input type="checkbox" checked disabled /> Cookies Funcionais
          </p>
          <p>Estes cookies são os necessários, ou seja, essencial para suportar a funcionalidade principal do site, como fornecer login seguro.</p>
          <p>
            <input type="checkbox" /> Cookies Analitíco
          </p>
          <p>
            Estes cookies facilitam a medição e a análise para melhorar a experiência de navegação.
          </p>
          <p>
            <input type="checkbox" /> Cookies de publicidade
          </p>
          <p>
            Estes cookies ajudam a veicular conteúdo publicitário relevante para você
          </p>
          <p>
            <input type="checkbox" /> Cookies de Mídia Social
          </p>
          <p>facilitam o compartilhamento em redes sociais, fornecem ferramentas para que você se conecte a Plataforma da BETEC e nos ajudam a entender melhor tanto o público-alvo do site como a eficácia de nossa divulgação nas mídias sociais. Estes são cookies de terceiros. Suas escolhas em relação a esses cookies são determinadas pelas plataformas de mídia social nas quais você tem conta.</p>
        </div>
      {/if}
    </div>
  </div>
{/if}

<style>
  input[type=checkbox]
  {
    -ms-transform: scale(1.5); /* IE */
    -moz-transform: scale(1.5); /* FF */
    -webkit-transform: scale(1.5); /* Safari and Chrome */
    -o-transform: scale(1.5); /* Opera */
    transform: scale(1.5);
    padding: 10px;
  }
  
  #cookiePolicy .prefCookie {
    margin-top: 15px;
  }
  #cookiePolicy .titleContainer {
    font-size: 1.2em;
  }

  #cookiePolicy .buttonsActions {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 7px;
  }

  #cookiePolicy {
    overflow-y: auto;
    max-height: 420px;
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 99999;
    background-color: #0e0d1dd6;
    width: 100%;
    display: flex;
    justify-content: center;
    /* align-items: baseline; */
  }

  #cookiePolicy .container2 {
    padding: 20px 42px;
    /* border: 1px solid red; */
    max-width: 640px;
  }

  #cookiePolicy p {
    font-family: Avenir Next,Helvetica Neue,Helvetica,sans-serif;
    margin-top: 0;
    color: #fff;
    font-size: 0.79em;
  }

  #cookiePolicy .footer_output_btn {
    font-weight: bold;
    padding: 2px 14px 4px;
    min-width: 168px;
    border: 1px solid #fff;
    box-shadow: none !important;
    color: #fff;
    background-color: transparent;
    height: 40px;
    font-size: 16px;
    font-weight: 600;
  }

  .footer_output_btn:hover {
    background-image: linear-gradient(rgba(19, 81, 180, 0.16), rgba(19, 81, 180, 0.16));
  }

  .btn:not(:disabled):not(.disabled) {
    cursor: pointer;
  }

  .btn-success {
    color: #fff !important;
    background-color: #8dbf42;
    border-color: #8dbf42;
  }

  .btn {
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    user-select: none;
    border: 1px solid transparent;
    line-height: 1.5;
    border-radius: .25rem;
    padding: 0.4375rem 1.25rem;
    text-shadow: none;
    font-size: 14px;
    white-space: normal;
    touch-action: manipulation;
    box-shadow: 0px 5px 20px 0 rgba(0, 0, 0, 0.1);
    will-change: opacity, transform;
    transition: all 0.3s ease-out;
    -webkit-transition: all 0.3s ease-out;
  }

  @media screen and (max-width: 768px) {
    #cookiePolicy .container2 {
      padding: 15px 10px;
    }
  }
</style>
