# Landing Page Fiber SE7E — Análise e Planejamento (Fases 1 a 5)

> Status: **aprovado e implementado** (Fases 6 e 7 concluídas). Decisões do cliente: preços do S1 mantidos; sem versão 200 g; depoimentos e prova social do S1 liberados; garantia 7 dias e frete grátis SP/PR/SC/RS válidos; sem bloco para lojistas; Pixel + Clarity mantidos; logo recolorido.
> Revisão 3 (cliente): ingredientes atualizados (fibra de batata-doce no lugar da fécula; amido resistente incluído); "+140.000 clientes"; garantia de 7 dias só no bloco próprio (removida dos kits e do FAQ); hero sem nomes de ingredientes.
> Data: 05/11/2026 · Revisão 2: nova tipografia, paleta Esmeralda, primeira dobra sem "8 g por porção".

---

## FASE 1 — Análise dos sites do produto

Os três links foram acessados (via conta Vercel; a rede da sessão bloqueia `*.vercel.app` diretamente).

| Site | Natureza | Público |
|---|---|---|
| **S1** `lab1-seven-indol` — "Fiber7 \| Saúde Intestinal Natural" | Página de venda direta (kits, preços, checkout multvit.com.br) | Consumidor final (foco em mulheres 29–52 nos depoimentos) |
| **S2** `fiber7-multvit` — "Fiber Se7e — Nova Era Multvit" | Comunicado da troca de embalagem | Lojistas / farmácias (B2B) |
| **S3** `institucional-zeta-beryl` — "Fiber SE7E — Multvit" | Página institucional / ficha técnica | Consumidor + SEO |

### Base de conteúdo consolidada (somente dados verificáveis)

**Produto**
- Nome oficial (embalagem): **Fiber SE7E** · marca **Multvit®** · "Suplemento alimentar em pó de fibras".
- Alegação da embalagem: *"As fibras alimentares auxiliam no funcionamento do intestino."*
- Apresentações: **400 g** (rende até 40 doses de 10 g / 20 porções adulto) e **200 g** (até 20 porções adulto — citada só no S3).
- Acompanha **scoop** dosador.
- Pó solúvel; mistura em água, leite, sucos, chás ou vitaminas (S1, S3). Dica: batido com banana e mamão (S3 + lateral da embalagem).

**Composição (rótulo da nova embalagem)**
Fécula de batata, polidextrose, proteína de soja, fibra de trigo, goma guar e fibra de aveia.
**Contém glúten. Alérgicos: contém trigo, aveia e soja.**
Mix de fibras solúveis (polidextrose, goma guar) e insolúveis (fibra de trigo, fibra de aveia) — S3.

**Informação nutricional (rótulo)**

| | Adulto > 19 anos — porção 20 g (2 scoops), 20 porções/emb. | %VD | Criança 4–8 anos — porção 10 g (1 scoop), 40 porções/emb. | %VD |
|---|---|---|---|---|
| Valor energético | 36 kcal | 2 | 18 kcal | 1 |
| Carboidratos | 6 g | 2 | 3 g | 1 |
| Proteínas | 2 g | 4 | 1 g | 3 |
| **Fibras alimentares** | **8 g** | **32** | **4 g** | **16** |
| Sódio | 12 mg | 1 | 6 mg | 0 |

*Não contém quantidade significativa de açúcares totais, açúcares adicionados, gorduras totais, gorduras saturadas e gorduras trans.*

**Modo de uso** — adicionar a porção em 200 ml de líquido, mexer até homogeneizar e consumir em seguida. Adulto: 20 g (2 scoops). Criança 4–8 anos: 10 g (1 scoop).

**Conservação** — entre 15 °C e 30 °C, protegido de luz e umidade. Após aberto, consumir em até 45 dias.

**Regulatório / empresa**
- Notificação Anvisa: 25351.099768/2026-11 (alimento notificado) — S3.
- Fabricante: T G Pereira Ltda — CNPJ 04.529.592/0001-94 — Terra Roxa/PR.
- Telefone (44) 3645-2286 · multvit.com.br · WhatsApp (44) 9840-0223 (Seg–Sex, 8h–18h) — atualizado pelo cliente (antes: (44) 99805-7273, S2).
- Avisos: não é medicamento; não substitui refeições; gestantes, lactantes e crianças até 4 anos: orientação profissional (S1, S3).

**Nova embalagem (S2)** — mudou: design, cores, hierarquia do rótulo, posicionamento Multvit. Não mudou: fórmula, sabor/textura/diluição, rendimento, **código de barras (EAN)**. As duas embalagens podem coexistir no varejo durante a transição.

**Comercial (S1 — precisa de confirmação)**
- **Atualizado pelo cliente:** 1 pote **R$ 79,90** · 2 potes de R$ 159,80 por **R$ 129,90** (−19%) · 4 potes de R$ 319,60 por **R$ 229,90** (−28%). Links: páginas de produto em multvit.com.br/produtos/ (fiberse7e, combo-2-…, combo-4-…).
- Original do S1: 1 pote de R$ 69,90 por R$ 64,90 · 2 potes de R$ 139,80 por R$ 118,83 · 4 potes de R$ 279,60 por R$ 209,70.
- Checkout: `multvit.com.br/checkout/40061392:1`, `…/89362367:1`, `…/89362747:1`.
- Garantia de 7 dias com devolução de 100%. Envio para todo o Brasil.
- Rodapé do S1 diz © 2025 — preços podem estar desatualizados.

### ⚠️ Divergências e conteúdos que NÃO serão usados sem sua confirmação

| # | Ponto | S1 | S2 | S3 | Rótulo | Decisão proposta |
|---|---|---|---|---|---|---|
| 1 | Nome | Fiber7 | Fiber Se7e | Fiber SE7E | **Fiber SE7E** | Usar "Fiber SE7E" |
| 2 | Calorias | "22 kcal por porção" | — | 46 kcal/porção | **36 kcal (20 g) / 18 kcal (10 g)** (tabela atualizada enviada pelo cliente) | Usar a tabela atualizada |
| 3 | Ingredientes | inclui amido resistente | — | inclui amido resistente | **sem amido resistente** | Usar o rótulo (nova embalagem) |
| 4 | Açúcar | "Zero açúcar" | "Sem adição de açúcar" | — | "não contém quantidade significativa de açúcares…" | Usar a frase do rótulo |
| 5 | Duração do pote | "1 pote – 30 dias" | — | 400 g = 40 porções adulto (!) | 400 g = **20 porções adulto / 40 infantis** | S3 erra; usar o rótulo. "30 dias" removido |
| 6 | "100% natural", "comprovado cientificamente" | sim | — | — | não consta | **Não usar** |
| 7 | "95% vão ao banheiro em 24 h" | sim | — | — | — | **Não usar** (alegação de saúde sem fonte) |
| 8 | Prova social "10mil+ clientes, 4.9★, 95% recomendam" + 4 depoimentos com fotos | sim | — | — | — | **Não usar** sem comprovação |
| 9 | "Mais energia, pele, imunidade, humor" | sim | — | — | — | **Não usar** (extrapola a alegação permitida) |
| 10 | WhatsApp | — | `wa.me/44998057273` (sem DDI 55 — link quebra) | — | — | Usar `wa.me/5544998057273` |

---

## FASE 2 — Análise das landing pages de referência

O documento deixou os três campos como `[COLOCAR NOME, LINK OU LOCALIZAÇÃO DO PROJETO]`.
Encontrei na sua conta Vercel os três projetos mais recentes, que têm a mesma assinatura técnica e visual. **Analisei-os como referências presumidas — confirme se são esses.**

### R1 — Excalibur Fitness · `lp-excalibur-ten.vercel.app`
- **Estrutura:** página de uma dobra (hero 2 colunas: copy + "ingresso VIP" visual). Sem scroll.
- **Identidade:** preto `#050505` + ouro (`#f2c14e` com gradiente metálico animado) + vermelho "live". Bebas Neue + Inter.
- **Motion:** título letra a letra (split + translateY com stagger 60 ms); texto dourado com brilho em loop; raios cônicos girando; halo "respirando"; espada flutuando; **ingresso com tilt 3D seguindo o mouse + reflexo (glare) dinâmico**; no mobile, flutuação senoidal automática; canvas de faíscas subindo; contador com "tick" por dígito.
- **Microinterações:** CTA com faixa de brilho varrendo + anel pulsando; seta desliza no hover; `:active` scale .98; `focus-visible` com contorno.
- **Responsivo:** `display: contents` para reordenar a coluna no mobile; ajustes por **altura** da tela (`max-height`); oculta elementos decorativos em telas pequenas.
- **Acessibilidade:** `prefers-reduced-motion` desliga tudo; `aria-hidden` nos decorativos.
- **Melhor elemento:** o objeto 3D com tilt + glare e o título letra a letra.

### R2 — Prata & Pérola · `prata-perola.vercel.app`
- **Estrutura:** uma dobra, copy + medalhão do monograma.
- **Identidade:** marrom-café `#0d0906`, creme, caramelo, gradiente prata. Cormorant Garamond (serifa, itálico) + Jost. A mais sofisticada das três.
- **Motion:** usa **Motion (motion.dev) servido localmente**; classe `.m` no `<html>` define estados iniciais só quando o JS e o movimento estão disponíveis (sem "flash" e sem conteúdo invisível se o JS falhar); título palavra por palavra; reveal em cascata; logo surge com **mola (spring) + desfoque**; selo de texto circular girando; cometa em órbita; brilho prata percorrendo o monograma via `mask`; estrelas de 4 pontas em canvas; pulso de atenção no CTA após 2,4 s.
- **Melhor elemento:** a arquitetura de motion (`.m` + Motion + spring) e a elegância tipográfica serifada.

### R3 — Golfinho Moda Praia · `golfinho-moda-praia.vercel.app`
- **Estrutura:** uma dobra, copy + contador + medalhão.
- **Identidade:** azul-marinho, aqua, dourado. Fredoka + Nunito (lúdica).
- **Motion:** mesma base do R2 + **ondas SVG em 3 camadas com velocidades diferentes (parallax)**, bolhas em canvas, anel dourado cônico girando, **chips flutuantes** com entrada em mola escalonada.
- **Melhor elemento:** camadas de profundidade (ondas) e chips flutuantes de informação.

### O que levar para o Fiber SE7E (sem copiar)
1. Arquitetura de motion do R2/R3 (Motion local + `.m` + `prefers-reduced-motion`).
2. Objeto-produto com tilt 3D + reflexo (R1), aplicado ao pote real.
3. Chips flutuantes com dados reais (R3) → "8 g de fibras", "40 doses", "Acompanha scoop".
4. Título com reveal por palavra (R2) e partículas em canvas (R1/R3) — aqui como "fibras" orgânicas, discretas.
5. CTA com brilho + anel (padrão das três), reinterpretado nas cores da marca.
6. Responsividade por largura **e altura**.

**Diferença-chave:** as três referências são páginas de **uma dobra** para captar lead. O Fiber SE7E pede uma página **longa, informativa e de conversão** — o motion precisa trabalhar no **scroll**, não só na entrada.

---

## FASE 3 — Análise das imagens

| Arquivo | Conteúdo | Resolução | Fundo | Uso |
|---|---|---|---|---|
| `1.webp` | Pote 400 g, frontal, nova embalagem | 2000×2000 | transparente | **HERO** + seção "produto em detalhe" (com callouts) |
| `2.webp` | Caixa + pote juntos | 2000×1500 | transparente | **Nova embalagem / apresentação** e card de oferta |
| `3.webp` | Caixa em perspectiva, lateral com tabela nutricional e ingredientes legíveis | 1323×2000 | transparente | **Ficha técnica** (prova real de rótulo) |
| `4.png` | Logo Multvit (folha + "mult" verde; "vit" branco) | 680×302 | transparente | Logo do header — **precisa de versões de cor**: o "vit" branco some em fundo claro. Proposta: recolorir os pixels (sem alterar o desenho) para "mult" verde/"vit" amarelo (fundo claro) e "mult" branco/"vit" amarelo (fundo escuro), igual ao `5.jpg` |
| `5.jpg` | Cartão "Multvit — Fibra Alimentar — Comercial \| Anderson Alves" | 591×591 | verde | Referência de cor oficial. Uso opcional como avatar no bloco de atendimento WhatsApp |

Todas as imagens de produto têm fundo transparente e boa resolução → permitem composição livre sobre fundos e sombras próprias, sem recorte nem distorção. Serão exportadas em WebP responsivo (≈ 600/1000/1600 px) com `srcset`, `width/height` e `loading="lazy"` fora do hero.

Faltam (não inventarei): foto do pote de 200 g, foto do produto preparado/scoop, fotos de uso.

---

## FASE 4 — Estratégia e estrutura

**Objetivo de conversão:** compra no checkout multvit.com.br (se os preços forem confirmados) com WhatsApp como canal secundário.
**Mensagem central:** *8 g de fibras por porção, em um pó que se mistura à sua rotina.* Tom: confiável, claro, premium — sem promessas médicas.

| # | Seção | Conteúdo | Imagem | Motion principal |
|---|---|---|---|---|
| 0 | Header fixo | Logo, âncoras, CTA "Comprar" | logo | Transparente → vidro fosco ao rolar; esconde ao descer / volta ao subir |
| 1 | **Hero** | "Fibra todo dia. Intestino em dia." + alegação oficial + chips (8 g fibras · até 40 doses · acompanha scoop) + CTAs | `1.webp` | Título por palavra; pote entra com mola + desfoque; tilt 3D + reflexo; chips flutuantes; partículas de "fibra" |
| 2 | Faixa marquee | Mix de fibras · 8 g por porção · Acompanha scoop · Pó solúvel · Nova embalagem | — | Loop contínuo, pausa no hover |
| 3 | **Por que fibras** | Fibras auxiliam o funcionamento do intestino; rotina corrida dificulta consumo — o Fiber SE7E simplifica | — | Texto revelado linha a linha |
| 4 | **Produto em detalhe** (sticky) | Pote fixo ao centro; callouts surgem com o scroll: 400 g · 40 doses · scoop · mix solúvel+insolúvel | `1.webp` | **Assinatura:** linha sinuosa (o "trajeto" da embalagem) desenhada conforme o scroll, conectando os callouts |
| 5 | **Composição** | 6 ingredientes, separados em solúveis / insolúveis / base; aviso de alérgicos | — | Cards em cascata; hover com elevação |
| 6 | **Como usar** | 3 passos (scoop → 200 ml → misturar e consumir) + seletor Adulto/Criança que troca a dose | — | Troca animada de valores; ícones desenhando |
| 7 | **Tabela nutricional** | Tabela do rótulo, com seletor Adulto/Criança | `3.webp` | Números contando; barra de %VD crescendo |
| 8 | **Nova embalagem** | "Visual novo, mesma fórmula": o que mudou / o que não mudou (EAN igual) | `2.webp` | Parallax suave entre caixa e pote |
| 9 | **Ofertas** *(depende de confirmação)* | 1 / 2 / 4 potes, preços, frete, garantia | `1.webp`/`2.webp` | Card destaque com borda animada |
| 10 | **Garantia 7 dias** *(depende de confirmação)* | — | — | Selo girando lentamente |
| 11 | **FAQ** | Porção · alérgicos · é medicamento? · conservação · embalagem antiga é falsa? · EAN · entrega | — | Accordion acessível (`<details>` + altura animada) |
| 12 | **CTA final** | Chamada + botões Comprar / WhatsApp | `2.webp` | Fundo verde profundo com partículas |
| 13 | Rodapé | Logo, contatos, CNPJ, Anvisa, avisos legais | — | — |
| + | Botão flutuante WhatsApp (mobile: barra fixa "Comprar") | | | Aparece após o hero |

Sem depoimentos e sem números de prova social, salvo se você enviar material verificável.

---

## FASE 5 — Planejamento visual e técnico

### Direção criativa: "Botânica clínica"
Nem o "preto + ouro" das referências, nem o verde-limão genérico do S1. Uma linguagem editorial, clara e premium, que nasce da embalagem: o verde profundo da tampa-faixa, o amarelo do selo SE7E e o creme como respiro.

**Paleta "Esmeralda" (revisão 2 — escolhida após teste de 4 verdes)**
| Token | Cor | Uso |
|---|---|---|
| `--deep` / `--forest` / `--forest-2` | `#00301B` / `#00552F` / `#00703D` | Fundos escuros em degradê |
| `--green` | `#10A14F` | Ações, ícones, destaques |
| `--leaf` | `#74D99A` | Detalhes, gráficos, partículas |
| `--sun` | `#F5C400` | Amarelo SE7E — CTA principal, números |
| `--cream` | `#F6F3EA` | Fundo base |
| `--ink` | `#0E1A12` | Texto |

**Tipografia (revisão 2)**
- Títulos: **Bricolage Grotesque** (grotesca com personalidade, calorosa, contemporânea — combina com o logo arredondado da Multvit).
- Texto, UI e rótulos: **Figtree** (geométrica amigável, ótima legibilidade, números tabulares na tabela).
- Escala fluida com `clamp()`; altura de linha e medida (≈ 60 caracteres) controladas.

**Elementos gráficos próprios**
- Linha sinuosa contínua (referência ao intestino ilustrado da embalagem) como fio condutor entre seções.
- Folhas do logo como marca d'água sutil.
- Partículas finas em forma de filamento ("fibras") no hero e no CTA final.
- Grão (noise) leve sobre os fundos escuros.

### Motion (resumo)
- **Biblioteca:** Motion (motion.dev), servido localmente como nas referências + IntersectionObserver.
- **Entrada:** título por palavra, conteúdo em cascata, pote com mola + desfoque.
- **Scroll:** reveals por seção, linha SVG desenhada pelo progresso do scroll, seção sticky do produto, parallax leve (≤ 40 px) em imagens, números contando.
- **Interação:** tilt 3D + reflexo no pote (só com mouse), botões com brilho e seta, cards com elevação, accordion, seletor de dose.
- **Performance:** só `transform`/`opacity`; canvas pausado fora da tela e em abas ocultas; menos partículas no mobile; sem tilt em toque.
- **Acessibilidade:** `prefers-reduced-motion` → sem loops, parallax ou partículas; conteúdo nunca depende do JS para aparecer.

### Técnico
- Repositório vazio → **HTML + CSS + JS puros, sem build**, mesmo padrão das referências (deploy direto na Vercel).
- Estrutura: `index.html`, `assets/css/style.css`, `assets/js/main.js`, `assets/vendor/motion.min.js`, `assets/img/…`.
- SEO: title/description, Open Graph, JSON-LD `Product`.
- Configurável no topo do JS: links de checkout, WhatsApp, Meta Pixel (o S1 usa Pixel `1365038310604549` e Clarity — mantenho?).
- Mobile pensado à parte: hero empilhado com o pote primeiro, chips menores, seção sticky vira sequência simples, barra fixa de compra.

### Fase 7 — Controle de qualidade previsto
Playwright em 375 / 768 / 1280 / 1920 px: capturas, erros de console, links, accordion, seletor de dose, reduced-motion e métricas básicas (CLS, peso das imagens).

---

## Pendências para começar a Fase 6

1. **Referências:** as três LPs analisadas (Excalibur, Prata & Pérola, Golfinho) são as corretas?
2. **Preços e checkout** do S1 (R$ 64,90 / 118,83 / 209,70 e links) ainda valem? A versão 200 g será vendida?
3. **Prova social:** os depoimentos e números do S1 são reais e autorizados? (Proposta: não usar.)
4. **Garantia de 7 dias** e frete grátis SP/PR/SC/RS continuam válidos?
5. **Público:** foco no consumidor final, com um bloco curto para lojistas (embalagem nova/EAN)? Ou o contrário?
6. **Tracking:** manter Meta Pixel `1365038310604549` + Microsoft Clarity do S1?
7. **Logo:** posso gerar as versões de cor do `4.png` (recolorindo os pixels, sem mudar o desenho)?
