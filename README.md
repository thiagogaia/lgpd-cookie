# lgpd-cookie
Criador de aviso para atender à LGPD

Adicione o script à sua pagina e em seguida chame o componente da seguinte forma:

```html
<script src="js/lgpd-cookie.js" type="module"></script>
<lgpd-cookie text='Seu Texto aqui. Obs: Aceita HTML para referenciar a politica de privacidade' />
```
  
A ação do botão 'Sim, eu aceito' cria um cookie chamado *cookiePolicy*. O qual deve fazer parte da sua lógica para não aparecer mais o aviso.

~~
Ex.:
```php
if(!isset($_COOKIE['cookiePolicy']) || $_COOKIE['cookiePolicy'] === true ) {
  //Mostra o componente lgpdCookie
  echo "<lgpd-cookie text='Seu Texto aqui. Obs: Aceita HTML para referenciar a politica de privacidade' />";
}
```
~~
Update: O JS já faz a verificação do cookie **NÃO necessitando mais NADA além de chamar o script e o componente.**
