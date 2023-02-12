<h1 align="center"> lgpd-cookie </h1>

<p align="center">
  Criador de aviso para atender à LGPD
</p>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=49AA26&labelColor=000000">
</p>

<br>

<p align="center">
  <img alt="projeto lgpd-cookie" src=".github/preview.jpg" width="100%">
</p>

## 🐡 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- Svelte
- HTML e CSS
- JavaScript

## 💻 Projeto

Adicione o script à sua pagina e em seguida chame o componente da seguinte forma:

```html
<script src="js/lgpd-cookie.js" type="module"></script>
<lgpd-cookie text='Seu Texto aqui. Obs: Aceita HTML para referenciar a politica de privacidade' />
```

A ação do botão 'Sim, eu aceito' cria um cookie chamado *cookiePolicy*. ~~O qual deve fazer parte da sua lógica para não aparecer mais o aviso.~~

~~Ex.:
```php
Codigo antigo foi atualizada verificação por JS
```

Update: O JS já faz a verificação do cookie **NÃO necessitando mais NADA além de chamar o script e o componente.**

## :memo: Licença

Esse projeto está sob a licença MIT.
