# Fiber SE7E · Landing page

Landing page **institucional** do **Fiber SE7E (Multvit)**, sem checkout: todos os botões de contato levam ao WhatsApp. Site estático (HTML + CSS + JS, sem build), pronto para a Vercel.
O planejamento e as fontes de cada informação estão em [`docs/PLANEJAMENTO.md`](docs/PLANEJAMENTO.md).

## Estrutura

```
index.html                 página
assets/css/style.css       estilos (tokens no topo)
assets/js/main.js          interações, motion e tracking (CONFIG no topo)
assets/vendor/motion.min.js Motion (motion.dev) 11.11.17, servido localmente
assets/fonts/              Bricolage Grotesque (títulos) e Figtree (texto), woff2 latin
assets/img/                imagens otimizadas (WebP responsivo), logos, favicon, og-image
assets/img/original/       imagens originais recebidas
```

## Onde alterar

Tudo no topo de `assets/js/main.js`:

| Item | Chave |
|---|---|
| Links de compra (1, 2 e 4 potes) | `CONFIG.checkout` |
| WhatsApp e mensagem inicial | `CONFIG.whatsapp` |
| Meta Pixel (PageView, Contact, ViewContent) | `CONFIG.metaPixelId` |
| Microsoft Clarity | `CONFIG.clarityId` |

Preços, depoimentos e textos ficam em `index.html`.

## Rodar localmente

```bash
python3 -m http.server 8000
```

## Após o deploy

- Publicado em https://lp.multvit.com.br (Vercel). `og:image`, `og:url` e canonical já apontam para esse domínio.
- Depoimentos usam iniciais no lugar das fotos. Ao receber as fotos, troque o `<span class="avatar">` por `<img class="avatar" …>`.
