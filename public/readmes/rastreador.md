# Rastreador de Preços

Plataforma local em Python para monitorar preços de produtos cadastrados
manualmente, manter o histórico em SQLite, analisar promoções, enviar alertas
por e-mail e visualizar os dados em um dashboard Streamlit.

O projeto foi preparado principalmente para hardware e periféricos. Ele não
procura todos os produtos de uma loja automaticamente: você escolhe os produtos
e cadastra a URL exata de cada oferta.

## Funcionalidades Atuais

- cadastro de categorias, lojas, produtos e ofertas;
- várias ofertas do mesmo produto em lojas diferentes;
- coleta genérica com `requests`, BeautifulSoup e seletor CSS manual;
- coleta em lote com intervalo controlado entre ofertas;
- histórico detalhado de preços por oferta em SQLite;
- preço atual, preço antigo, preço Pix, preço parcelado e disponibilidade;
- menor preço histórico, menores preços de 30 e 90 dias e média de 30 dias;
- índice de preço e classificação de promoções;
- alertas imediatos por e-mail com cooldown e proteção contra repetições;
- dashboard local com filtros e gráficos;
- testes automatizados com `unittest`.

## Instalação

Requer Python 3.12 ou superior.

```powershell
python -m venv --copies .venv
.\.venv\Scripts\python.exe -m pip install -r requirements.txt
Copy-Item .env.example .env
```

O arquivo `.env` contém configurações privadas e credenciais. Ele nunca deve
ser enviado ao GitHub.

## Primeiro Teste

O `.env.example` usa o site público Books to Scrape para permitir um teste
simples. Depois de criar o `.env`, execute:

```powershell
.\.venv\Scripts\python.exe principal.py
```

Esse comando monitora apenas o produto definido no `.env`, cria os cadastros
necessários e salva a leitura em `dados/precos.db`.

## Cadastrar Seus Produtos

Crie seu catálogo pessoal:

```powershell
Copy-Item catalogo.example.json catalogo.json
```

Edite `catalogo.json` e substitua os dados de exemplo pelas URLs exatas das
páginas dos produtos e pelos seletores CSS dos preços. Depois, importe:

```powershell
.\.venv\Scripts\python.exe popular_produtos.py
```

O comando pode ser executado novamente para atualizar os mesmos cadastros sem
duplicá-los. Consulte o [guia de cadastro manual](documentacao/catalogo_manual.md).

## Coletar Todas As Ofertas

```powershell
.\.venv\Scripts\python.exe coletar_ofertas.py --intervalo 10
```

O intervalo é o número de segundos aguardado entre uma oferta e a próxima. Se
uma oferta falhar, as demais continuam sendo processadas.

## Abrir O Dashboard

```powershell
.\.venv\Scripts\streamlit.exe run dashboard/painel.py
```

Abra [http://localhost:8501](http://localhost:8501).

O dashboard apenas lê o banco SQLite. Ele não coleta preços ao abrir. Se os
filtros estiverem vazios, primeiro importe o `catalogo.json`. Se os filtros
aparecerem, mas os gráficos estiverem vazios, execute a coleta em lote.

O painel apresenta:

- filtros por categoria, loja, produto e período;
- filtros de especificações conforme a categoria;
- histórico de preço por produto e loja;
- comparação atual entre lojas;
- produtos identificados como promoção;
- menores preços históricos.

## Configurar E-mail

Para Gmail, ative a verificação em duas etapas e crie uma senha de app. Use o
e-mail dono da senha de app como remetente:

```env
EMAIL_REMETENTE=seu-email@gmail.com
EMAIL_DESTINATARIO=seu-email@gmail.com
SENHA_EMAIL=sua-senha-de-app
SERVIDOR_SMTP=smtp.gmail.com
PORTA_SMTP=465
ENVIAR_EMAIL=true
```

Remetente e destinatário podem ser o mesmo endereço. Para testar sem enviar
e-mail, use `ENVIAR_EMAIL=false`.

## Análise E Alertas

```text
índice de preço = preço atual / média de 30 dias * 100
```

- `100`: preço na média;
- `90`: 10% abaixo da média;
- `80`: 20% abaixo da média.

As classificações atuais são: preço normal, boa oportunidade, promoção forte
e menor preço histórico.

Alertas imediatos podem ser enviados para preço-alvo, promoção forte e menor
preço histórico. O sistema não repete alertas para o mesmo preço e respeita o
cooldown configurado. Boas oportunidades são marcadas para resumo diário, mas
o envio do e-mail consolidado ainda não foi implementado.

## Testes

```powershell
.\.venv\Scripts\python.exe -m unittest discover -s testes -p "teste_*.py" -v
```

## Agendamento

Consulte o [guia de agendamento no Windows](documentacao/agendamento_windows.md).

## Arquivos Locais E GitHub

Estes arquivos são usados localmente, mas são ignorados pelo Git:

- `.env`: configurações privadas e credenciais;
- `.venv/`: ambiente virtual recriável;
- `catalogo.json`: seu catálogo pessoal;
- `dados/precos.db`: banco e histórico coletado;
- `registros/*.log`: registros de execução;
- `__pycache__/`: cache recriável do Python.

O `catalogo.example.json`, os testes, o dashboard e os guias fazem parte do
projeto e devem permanecer no GitHub.

## Estrutura Principal

```text
rastreador/
  alertas/
  analise/
  coletores/
  banco_dados.py
  catalogo.py
  configuracao.py
  lote.py
  servico.py
dashboard/
documentacao/
testes/
principal.py
popular_produtos.py
coletar_ofertas.py
catalogo.example.json
```

## Limitações Atuais

- O coletor genérico depende de URLs e seletores CSS cadastrados manualmente.
- Sites que carregam o preço somente com JavaScript podem não funcionar.
- Proteções antiautomação de algumas lojas podem impedir a coleta.
- Mudanças no HTML das lojas podem exigir atualização dos seletores.
- Ainda não existem coletores especializados para cada loja.
- O resumo diário ainda não envia um e-mail consolidado.
