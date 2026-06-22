# GameLegenda v0.1

Protótipo técnico para Windows desenvolvido em .NET 9 e WPF. O projeto captura textos exibidos em uma janela de jogo, reconhece o conteúdo por OCR, traduz e mostra o resultado como um overlay transparente próximo à posição original.

O objetivo é funcionar como uma legenda visual discreta para diálogos, menus e jogos sem tradução oficial para português, preservando a interface original sempre que possível.

## Status

O projeto está em fase experimental. A versão atual valida captura de janela, OCR local, cache, glossário, provedores de tradução e posicionamento do overlay.

## Funcionalidades atuais

- Captura de janela no Windows
- Reconhecimento de texto via OCR local
- Overlay transparente e always-on-top
- Tradução posicionada próxima ao texto original
- Cache local de traduções
- Glossário interno
- Provedores plugáveis de tradução
- Integração inicial com DeepL e LibreTranslate
- Atalhos para captura, visibilidade e posição do overlay

## Tecnologias

- C#
- .NET 9
- WPF
- Windows.Media.Ocr
- PowerShell como fallback local para OCR
- DeepL API
- LibreTranslate
- Cache e glossário locais

## Como executar

```powershell
dotnet restore GameLegenda.sln
dotnet run --project src/GameLegenda.App/GameLegenda.App.csproj
```

Na janela do aplicativo:

1. Clique em `Abrir janela de teste`.
2. Clique em `Iniciar captura (F8)`.
3. A tradução aparece sobre a janela capturada.
4. Use `F9` para mostrar ou ocultar o overlay.
5. Use `F10` para ativar o ajuste por arraste.
6. Use `Esc` para parar a captura ativa.

## Fluxo de tradução

O aplicativo consulta os recursos nesta ordem:

1. Cache e glossário local.
2. DeepL, quando habilitado e configurado com uma chave.
3. LibreTranslate local, quando habilitado.
4. Dicionário local mínimo para termos conhecidos.

Para executar o LibreTranslate localmente:

```powershell
pip install libretranslate
libretranslate
```

Depois, mantenha o provedor local habilitado no aplicativo e use o endpoint `http://127.0.0.1:5000/translate`.

## Observações da versão

- O serviço tenta acessar `Windows.Media.Ocr` por reflexão, sem depender de pacote externo.
- Quando o OCR nativo não está disponível no runtime, o projeto usa um fallback em PowerShell.
- Para melhorar o reconhecimento, o fallback gera recortes ampliados e preserva as coordenadas dos textos.
- O overlay é limpo ao encerrar a captura e pode ser ocultado quando a janela capturada perde o foco.
- A precisão varia de acordo com o jogo, a resolução, a fonte e a qualidade visual do texto.

## Testes

```powershell
dotnet run --project tests/GameLegenda.Core.Tests/GameLegenda.Core.Tests.csproj
```
