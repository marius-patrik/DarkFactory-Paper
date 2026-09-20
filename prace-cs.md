## DarkFactory:
Umělá inteligence v praxi -
Agentické a harnessové inženýrství

Patrik Marius · Gymnázium J. K. Tyla · 2026

## Anotace

[CZ] Tato odborná práce se zabývá principy agentického inženýrství (*agentic engineering*): efektivními inženýrskými praktikami pro vývoj pomocí umělé inteligence prostřednictvím agentických systémů a architekturou těchto systémů. Praktickým přínosem práce je návrh a implementace systému DarkFactory — agentního harnessu instalovatelného jako aplikace pro platformu GitHub (GitHub App). Systém usiluje o maximální možnou míru automatizace vývojového cyklu od interpretace požadavků v GitHub Issues, přes plánování, až po vývoj kódu a sloučení změn. Práce reflektuje, že současné agentní systémy nelze vnímat jako plně autonomní: jazykové modely vyžadují deterministické mantinely, správu kontextu a zapojení člověka (*Human-in-the-loop*).

## Klíčová slova

Agent, Agentické inženýrství, Agentní harness, Chatbot, Dovednosti, Git, GitHub, Jazykový model ( LLM ) , Rozšíření, Smyčka ReAct ( Agent Loop ) , Vektorová reprezentace

## Obsah

1. [DarkFactory:
   Umělá inteligence v praxi -
   Agentické a harnessové inženýrství](#loc-1)
2. [Anotace](#loc-2)
3. [Klíčová slova](#loc-3)
4. [1 Úvod](#loc-4)
  1. [1.1 Motivace a vymezení problému](#loc-5)
  2. [1.2 Cíl práce a výzkumné otázky](#loc-6)
    1. [1.2.1 Hlavní cíl](#loc-7)
    2. [1.2.2 Dílčí cíle](#loc-8)
    3. [1.2.3 Výzkumné otázky](#loc-9)
  3. [1.3 Metodika práce](#loc-10)
5. [2 Agentické AI: Vymezení konceptů - Teoretická část](#loc-11)
  1. [2.1 Vývojové prostředí a praxe](#loc-12)
    1. [2.1.1 Správa verzí [Version Control]](#loc-13)
    2. [2.1.2 Git a GitHub](#loc-14)
    3. [2.1.3 Větve (Branches)](#loc-16)
    4. [2.1.4 Pull Request](#loc-17)
    5. [2.1.5 Slučování změn (Commit and Merge)](#loc-18)
    6. [2.1.6 Plánování [Planning]](#loc-19)
    7. [2.1.7 Kontinuální integrace (CI a GitHub Actions)](#loc-20)
    8. [2.1.8 Požadované kontroly (Required Checks)](#loc-21)
  2. [2.2 Large Language Model ( LLM ) , chatboti a agenti](#loc-22)
    1. [2.2.1 Úvod](#loc-23)
    2. [2.2.2 Agent vs. Chatbot](#loc-25)
    3. [2.2.3 Tokeny, tokenizace a Vektorová reprezentace [Embedding]](#loc-26)
  3. [2.3 Agentické inženýrství a Agent Harness](#loc-27)
    1. [2.3.1 Úvod](#loc-28)
    2. [2.3.2 Smyčka ReAct ( Agent Loop )](#loc-29)
    3. [2.3.3 Vyvolávání nástrojů [Tool Calling]](#loc-31)
    4. [2.3.4 Dovednosti](#loc-32)
    5. [2.3.5 Škálování: Multiagentní systémy (Subagenti) a grafy (DAG workflows) [Scaling: Multiagent Systems (Subagents) and DAG Workflows (Graphs)]](#loc-33)
6. [3 DarkFactory: Architektura harnessu - Praktická část](#loc-34)
  1. [3.1 Git a GitHub](#loc-35)
7. [4 Výsledky a diskuse](#loc-36)
8. [5 Závěr](#loc-37)
9. [Seznam zdrojů](#loc-38)
10. [Rejstřík](#loc-42)
11. [Seznam příloh](#loc-43)

## 1 Úvod

### 1.1 Motivace a vymezení problému

Ústřední inženýrská otázka této práce proto nespočívá v tom, zda jazykový model dokáže napsat fragment kódu. Zkoumáme, jaká kontrolní a dozorčí architektura — značovaná jako [***Agent Harness***](#kw-harness) — musí model obklopovat, aby bylo možné jeho výstupům v produkčním repozitáři spolehlivě důvěřovat a dosáhnout vysoké míry autonomie se zachováním lidského dohledu.

### 1.2 Cíl práce a výzkumné otázky

#### 1.2.1 Hlavní cíl

Vymezit teoretické principy agentického inženýrství (*agentic engineering*) a navrhnout modulární architekturu agent harnessu pro automatizovaný vývoj softwaru se zachováním lidského dohledu v klíčových rozhodovacích bodech.

#### 1.2.2 Dílčí cíle

- Vymezit infrastrukturu pro správu verzí (Git, GitHub a kontinuální integraci).
- Analyzovat limity velkých jazykových modelů (dynamiku kontextového okna, jev Context Rot, ztrátovou kompresi a sémantický posun).
- Navrhnout architekturu agent harnessu zahrnující nástrojové smyčky (ReAct), bezpečnostní pískoviště a hierarchickou orchestraci subagentů.
- Formalizovat mechanismy zapojení člověka do smyčky (*Human-in-the-loop*), schvalovací brány a protokol revizních značek pro dohled nad textovými výstupy.

#### 1.2.3 Výzkumné otázky

### 1.3 Metodika práce

Práce má teoreticko-architektonický a inženýrský charakter. Vzhledem k dynamickému vývoji v oblasti autonomního softwarového vývoje práce důsledně zachovává a integruje zavedené anglické odborné názvy (např. *harness*, *pull request*, *agent loop*, *prompt engineering*, *skills* či *context rot*). Použití této terminologie je integrální součástí práce, neboť tyto anglické pojmy představují de facto celosvětové průmyslové standardy (*industry standards*), jejichž doslovný český překlad by byl nejednoznačný, zavádějící či v rozporu s běžnou inženýrskou praxí.

Postup práce sleduje strukturu inženýrského cyklu:

-
  1. Analýza konceptu: Systematické zmapování limitů autoregresivních modelů, dynamiky kontextového okna, jevu Context Rot a rozhraní nástrojů.
-
  1. Návrh architektury: Formulace modulárního modelu agent harnessu, správy stavu, exekučního pískoviště, bezpečnostních pojistek a orchestrace subagentů.
-
  1. Kritické zhodnocení: Porovnání navržených principů s volnými agentními smyčkami a vymezení provozních limitů autonomního inženýrství.

## 2 Agentické AI: Vymezení konceptů - Teoretická část

Úvod

### 2.1 Vývojové prostředí a praxe

#### 2.1.1 Správa verzí [Version Control]

#### 2.1.2 Git a GitHub

Pro autonomní vývoj softwaru je spolehlivá správa verzí naprosto nezbytným základem. Jazykové modely generují kód na základě statistické pravděpodobnosti, a proto se nevyhnutelně dopouštějí chyb, logických přehmatů či regresí. Verzovací systém vytváří bezpečné a deterministické prostředí, v němž lze každou úpravu zaznamenat, otestovat a v případě selhání kdykoliv vrátit zpět k funkčnímu stavu. Namísto teoretických abstrakcí práce přímo využívá distribuovaný systém [***Git***](#kw-git)★ v kombinaci s platformou [***GitHub***](#kw-github)★.

Klíčové komponenty infrastruktury zahrnují:

- Distribuovaný systém Git ([1](#loc-39)): Ukládá kompletní historii projektu v podobě jednotlivých revizí (*commitů*). Vývojář i agent pracují s plnou lokální kopií repozitáře, což umožňuje provádět změny, přepínat větve a spouštět lokální testy zcela nezávisle na síťovém připojení.
- Platforma GitHub: Slouží jako centrální bod pro sdílení kódu, týmovou koordinaci a automatizaci:
  - Zadávání a sledování úkolů (Issues): Strukturovaná textová zadání požadavků a hlášení chyb, která agentovi slouží jako výchozí specifikace úlohy.
  - Revize změn (Pull Requests): Uživatelské rozhraní pro přehledné zobrazení diffu, diskusi nad kódem a formální schválení člověkem.
  - Automatizace (GitHub Actions): Běhové prostředí pro automatické spouštění testů, linterů a překladů při každé události v repozitáři.

Agent v tomto pojetí nevystupuje jako černá skříňka s proprietárním protokolem, nýbrž jako standardní přispěvatel, který plně respektuje běžné vývojářské zvyklosti a nástroje.

#### 2.1.3 Větve (Branches)

#### 2.1.4 Pull Request

#### 2.1.5 Slučování změn (Commit and Merge)

#### 2.1.6 Plánování [Planning]

#### 2.1.7 Kontinuální integrace (CI a GitHub Actions)

#### 2.1.8 Požadované kontroly (Required Checks)

### 2.2 Large Language Model ( LLM ) , chatboti a agenti

#### 2.2.1 Úvod

V agentickém softwarovém inženýrství vystupuje velký jazykový model (LLM) jako stochastické kognitivní jádro celého systému. Z hlediska vnitřní architektury se jedná o dekodérový transformer (*Decoder-only*), jehož typickými představiteli jsou moderní modely řad Claude, GPT či DeepSeek ([2](#loc-40)). Role modelu nespočívá ve vystupování jako vševědoucí orákulum se spolehlivou znalostí okolního světa, nýbrž jako pokročilý generátor hypotéz, kódu a strukturovaných volání nástrojů řízený obdrženým kontextem.

Základní principy fungování modelu zahrnují:

- Autoregresivní predikce: Model zpracovává zadanou sekvenci textu a na jejím základě iterativně předpovídá nejpravděpodobnější následující symboly (tokeny).
- Stochastická povaha: Vzhledem k pravděpodobnostnímu vzorkování může model na totožný vstup reagovat mírně odlišně, což vyžaduje deterministické mantinely v nadřazeném agent harnessu.

Pro efektivní nasazení modelu do vývojového cyklu je nezbytné porozumět způsobu, jakým reprezentuje informace a jaké fyzické limity vymezují jeho operační paměť.

#### 2.2.2 Agent vs. Chatbot

[***Chatbot***](#kw-chatbot)★ — [CZ] Systém založený na jazykovém modelu určený primárně k textové interakci s uživatelem; odpovídá na jednotlivé požadavky, ale sám o sobě nedisponuje autonomní prováděcí smyčkou ani nástroji pro samostatnou modifikaci okolního prostředí.. [***Agent***](#kw-agent)★ — [CZ] Softwarový systém řízený jazykovým modelem a vybavený nástroji, který samostatně plánuje, vnímá stav prostředí a provádí vícekrokové akce směřující k dosažení zadaného inženýrského cíle.. Rozdíl mezi nimi nespočívá v odlišném jazykovém modelu, ale v architektuře jeho zapojení do pracovního prostředí.

Srovnání obou přístupů:

- Konverzační chatbot:
  - Reaguje pouze na přímé textové výzvy v uzavřeném okně chatu.
  - Nemá přímý přístup k souborovému systému ani k nástrojům operačního systému.
  - Uživatel musí navržený kód ručně zkopírovat, vložit do projektu a otestovat.
- Autonomní agent:
  - Je vybaven sadou výkonných nástrojů (*tools*) pro práci s repozitářem.
  - Aktivně prozkoumává soubory, modifikuje zdrojový kód, spouští testy a interpretuje jejich návratové kódy.
  - Funguje v autonomní prováděcí smyčce, v níž iterativně reaguje na reálnou odezvu vývojového prostředí.

#### 2.2.3 Tokeny, tokenizace a Vektorová reprezentace [Embedding]

Jazykový model nepracuje přímo se znaky ani slovy v lidském slova smyslu. Vstupní text je nejprve deterministickým algoritmem převeden na číselné reprezentace, se kterými následně počítají maticové vrstvy neuronové sítě.

Tento proces zahrnuje následující pojmy:

- Tokeny a tokenizér: Token představuje základní diskrétní jednotku (celé slovo, slabiku či fragment znaků). Převod mezi textem a posloupností číselných tokenů zajišťuje tokenizér (nejčastěji na bázi algoritmu Byte Pair Encoding, BPE).
- [***Vektorová reprezentace***](#kw-embedding)★ — [CZ] Vícerozměrná vektorová reprezentace tokenů nebo jiných dat, v níž numerické vztahy mezi vektory zachycují užitečné sémantické vztahy mezi reprezentacemi. (např. vektorová analogie
  <math><mtext>král</mtext><mo>−</mo><mtext>muž</mtext><mo>+</mo><mtext>žena</mtext><mo>≈</mo><mtext>královna</mtext></math>
  ).
- Jazyková asymetrie tokenizace: Vzhledem k trénovacím datům optimalizovaným primárně pro angličtinu spotřebovávají flektivní jazyky s bohatou diakritikou (včetně češtiny) 2× až 3× více tokenů pro vyjádření téhož významu.

Z inženýrského hlediska je proto žádoucí vést systémové prompty, technické plány i komunikaci mezi nástroji v angličtině, aby se šetřila kapacita kontextu a snížila latence inference.

### 2.3 Agentické inženýrství a Agent Harness

#### 2.3.1 Úvod

V terminologii agentického inženýrství používá tato práce pojem [***Agentní harness***](#kw-harness)★. [CZ] Agentní harness — aplikační a orchestrační vrstva obklopující inferenční jádro modelu, která zajišťuje běhové prostředí nástrojů, dynamickou správu kontextového okna, bezpečnostní mantinely, práci se stavem a deterministické řízení životního cyklu požadavku.. Samotné inferenční jádro provádí výhradně matematické maticové operace nad zadanými váhami a vektory tokenů; veškerou orchestraci, práci se soubory a řízení bezpečnosti zajišťuje harness.

Ústřední komponentou a hlavní prováděcí funkcí, která v architektuře harnessu řídí samotný běh a iterativní koordinaci agenta v reálném vývojovém prostředí, je [***Smyčka ReAct ( Agent Loop )***](#kw-agent-loop)★. [CZ] Iterativní prováděcí cyklus autonomního agenta založený na vzoru ReAct (Reasoning + Acting), v němž model střídavě uvažuje, volá nástroje a vyhodnocuje pozorování z běhového prostředí..

#### 2.3.2 Smyčka ReAct ( Agent Loop )

Agentní smyčka (*Agent Loop*) představuje výkonné jádro celého agent harnessu. Zatímco pasivní konverzační chatbot jednorázově odpoví na uživatelský dotaz a čeká na další vstup, agentní smyčka autonomně udržuje kontinuální iterativní proces, v němž harness opakovaně vyhodnocuje stav repozitáře, volá jazykový model a vykonává požadované systémové akce.

V každé iteraci agentní smyčky harness zajišťuje tyto klíčové funkce:

- Inicializace a správa sezení: Sestavení systémového promptu, dynamická injekce kontextu repozitáře a sledování spotřeby tokenů.
- Běhové prostředí nástrojů: Bezpečné spouštění příkazů v operačním systému a zpětné předávání výstupů modelu.
- Řízení stavových přechodů a vynucování mantinelů: Dohled nad dodržováním procesních pravidel, detekce a zastavení uvíznutých běhů a vynucování lidských schvalovacích bran.

Vnitřní kognitivní krok modelu uvnitř smyčky se řídí operačním vzorem ReAct (*Reasoning + Acting*) ([3](#loc-41)), který propojuje rozvahu s přímým jednáním. Tento prováděcí cyklus sestává ze čtyř navazujících fází znázorněných na [Obrázek 1](#fig-react-loop):

1. Rozvaha (*Thought*): Model vyhodnotí aktuální stav kontextu a formuluje svůj nejbližší záměr.
2. Volání nástroje (*Tool Call*): Emitování strukturovaného požadavku na provedení konkrétní akce s určenými parametry.
3. Vykonání a pozorování (*Observation*): Harness bezpečně provede akci v systému a výstup (výpis souboru či chybovou zprávu) vloží zpět do kontextu.
4. Navazující iterace: Model v dalším tahu analyzuje získanou odezvu a rozhoduje o dalším kroku.

Kvalita a provozní spolehlivost celého systému tak závisí v prvé řadě na robustnosti architektury harnessu a spolehlivosti jeho agentní smyčky, nikoliv pouze na samotném jazykovém modelu.

![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5MjAgNTQwIiB3aWR0aD0iOTIwIiBoZWlnaHQ9IjU0MCI+CiAgPGRlZnM+CiAgICA8IS0tIEFycm93aGVhZCBtYXJrZXJzIC0tPgogICAgPG1hcmtlciBpZD0iYXJyb3ciIHZpZXdCb3g9IjAgMCAxMCAxMCIgcmVmWD0iNiIgcmVmWT0iNSIgbWFya2VyV2lkdGg9IjYiIG1hcmtlckhlaWdodD0iNiIgb3JpZW50PSJhdXRvLXN0YXJ0LXJldmVyc2UiPgogICAgICA8cGF0aCBkPSJNIDAgMSBMIDEwIDUgTCAwIDkgeiIgZmlsbD0iIzQ3NTU2OSIgLz4KICAgIDwvbWFya2VyPgogICAgPG1hcmtlciBpZD0iYXJyb3ctYmx1ZSIgdmlld0JveD0iMCAwIDEwIDEwIiByZWZYPSI2IiByZWZZPSI1IiBtYXJrZXJXaWR0aD0iNiIgbWFya2VySGVpZ2h0PSI2IiBvcmllbnQ9ImF1dG8tc3RhcnQtcmV2ZXJzZSI+CiAgICAgIDxwYXRoIGQ9Ik0gMCAxIEwgMTAgNSBMIDAgOSB6IiBmaWxsPSIjMjU2M2ViIiAvPgogICAgPC9tYXJrZXI+CiAgICA8bWFya2VyIGlkPSJhcnJvdy1lbWVyYWxkIiB2aWV3Qm94PSIwIDAgMTAgMTAiIHJlZlg9IjYiIHJlZlk9IjUiIG1hcmtlcldpZHRoPSI2IiBtYXJrZXJIZWlnaHQ9IjYiIG9yaWVudD0iYXV0by1zdGFydC1yZXZlcnNlIj4KICAgICAgPHBhdGggZD0iTSAwIDEgTCAxMCA1IEwgMCA5IHoiIGZpbGw9IiMwNTk2NjkiIC8+CiAgICA8L21hcmtlcj4KICAgIDxtYXJrZXIgaWQ9ImFycm93LXZpb2xldCIgdmlld0JveD0iMCAwIDEwIDEwIiByZWZYPSI2IiByZWZZPSI1IiBtYXJrZXJXaWR0aD0iNiIgbWFya2VySGVpZ2h0PSI2IiBvcmllbnQ9ImF1dG8tc3RhcnQtcmV2ZXJzZSI+CiAgICAgIDxwYXRoIGQ9Ik0gMCAxIEwgMTAgNSBMIDAgOSB6IiBmaWxsPSIjN2MzYWVkIiAvPgogICAgPC9tYXJrZXI+CiAgICA8bWFya2VyIGlkPSJhcnJvdy1hbWJlciIgdmlld0JveD0iMCAwIDEwIDEwIiByZWZYPSI2IiByZWZZPSI1IiBtYXJrZXJXaWR0aD0iNiIgbWFya2VySGVpZ2h0PSI2IiBvcmllbnQ9ImF1dG8tc3RhcnQtcmV2ZXJzZSI+CiAgICAgIDxwYXRoIGQ9Ik0gMCAxIEwgMTAgNSBMIDAgOSB6IiBmaWxsPSIjZDk3NzA2IiAvPgogICAgPC9tYXJrZXI+CgogICAgPCEtLSBGaWx0ZXJzIGZvciBzdWJ0bGUgc2hhZG93IC0tPgogICAgPGZpbHRlciBpZD0ic2hhZG93IiB4PSItNSUiIHk9Ii01JSIgd2lkdGg9IjExMCUiIGhlaWdodD0iMTE1JSIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgPGZlRHJvcFNoYWRvdyBkeD0iMCIgZHk9IjIiIHN0ZERldmlhdGlvbj0iMyIgZmxvb2QtY29sb3I9IiMwZjE3MmEiIGZsb29kLW9wYWNpdHk9IjAuMDgiIC8+CiAgICA8L2ZpbHRlcj4KICA8L2RlZnM+CgogIDxzdHlsZT4KICAgIC50aXRsZS10ZXh0IHsgZm9udC1mYW1pbHk6ICdDYXJsaXRvJywgJ0NhbGFkZWEnLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIHNhbnMtc2VyaWY7IGZvbnQtd2VpZ2h0OiBib2xkOyBmb250LXNpemU6IDE0cHg7IH0KICAgIC5zdWItdGV4dCB7IGZvbnQtZmFtaWx5OiAnQ2FybGl0bycsICdDYWxhZGVhJywgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBzYW5zLXNlcmlmOyBmb250LXNpemU6IDExLjVweDsgfQogICAgLmVkZ2UtbGFiZWwgeyBmb250LWZhbWlseTogJ0NhcmxpdG8nLCAnQ2FsYWRlYScsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgc2Fucy1zZXJpZjsgZm9udC1zaXplOiAxMXB4OyBmb250LXdlaWdodDogNjAwOyBmaWxsOiAjNDc1NTY5OyB9CiAgICAuY29kZS1iYWRnZSB7IGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7IGZvbnQtc2l6ZTogMTAuNXB4OyB9CiAgICAubG9vcC1iYWRnZSB7IGZvbnQtZmFtaWx5OiAnQ2FybGl0bycsICdDYWxhZGVhJywgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBzYW5zLXNlcmlmOyBmb250LXdlaWdodDogYm9sZDsgZm9udC1zaXplOiAxMS41cHg7IGZpbGw6ICMwNDc4NTc7IH0KICA8L3N0eWxlPgoKICA8IS0tIEJhY2tncm91bmQgY29udGFpbmVyIC0tPgogIDxyZWN0IHg9IjEwIiB5PSIxMCIgd2lkdGg9IjkwMCIgaGVpZ2h0PSI1MjAiIHJ4PSIxNiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjZTJlOGYwIiBzdHJva2Utd2lkdGg9IjEuNSIgLz4KCiAgPCEtLSBPdXRlciBoYXJuZXNzIGJvdW5kYXJ5IGJveCAtLT4KICA8cmVjdCB4PSIyMzAiIHk9IjI4IiB3aWR0aD0iNjYwIiBoZWlnaHQ9IjQ4NSIgcng9IjEyIiBmaWxsPSIjZjhmYWZjIiBzdHJva2U9IiNjYmQ1ZTEiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtZGFzaGFycmF5PSI2LDQiIC8+CiAgPHRleHQgeD0iMjUwIiB5PSI1MiIgY2xhc3M9ImVkZ2UtbGFiZWwiIGZpbGw9IiM2NDc0OGIiIGZvbnQtc2l6ZT0iMTIiPkFHRU5UIEhBUk5FU1MgJmFtcDsgUFJPU1TFmEVEw408L3RleHQ+CgogIDwhLS0gMS4gVcW+aXZhdGVsIChVc2VyKSAtLT4KICA8ZyBmaWx0ZXI9InVybCgjc2hhZG93KSI+CiAgICA8cmVjdCB4PSIzNSIgeT0iMTQ1IiB3aWR0aD0iMTU1IiBoZWlnaHQ9IjgwIiByeD0iMTAiIGZpbGw9IiNmMWY1ZjkiIHN0cm9rZT0iIzk0YTNiOCIgc3Ryb2tlLXdpZHRoPSIxLjgiIC8+CiAgICA8Y2lyY2xlIGN4PSIxMTIuNSIgY3k9IjE3MyIgcj0iMTQiIGZpbGw9IiNjYmQ1ZTEiIC8+CiAgICA8cGF0aCBkPSJNIDk4IDIwNiBBIDE0IDE0IDAgMCAxIDEyNyAyMDYgWiIgZmlsbD0iI2NiZDVlMSIgLz4KICAgIDx0ZXh0IHg9IjExMi41IiB5PSIyMTUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGNsYXNzPSJ0aXRsZS10ZXh0IiBmaWxsPSIjMGYxNzJhIj5Vxb5pdmF0ZWw8L3RleHQ+CiAgPC9nPgoKICA8IS0tIEFycm93IFVzZXIgLT4gQ29udGV4dCAtLT4KICA8cGF0aCBkPSJNIDE5MCAxNzUgTCAyNjggMTc1IiBmaWxsPSJub25lIiBzdHJva2U9IiMyNTYzZWIiIHN0cm9rZS13aWR0aD0iMiIgbWFya2VyLWVuZD0idXJsKCNhcnJvdy1ibHVlKSIgLz4KICA8cmVjdCB4PSIxOTUiIHk9IjE1MyIgd2lkdGg9IjcwIiBoZWlnaHQ9IjE4IiByeD0iNCIgZmlsbD0iI2VmZjZmZiIgLz4KICA8dGV4dCB4PSIyMzAiIHk9IjE2NiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgY2xhc3M9ImVkZ2UtbGFiZWwiIGZpbGw9IiMxZDRlZDgiPjEuIFphZMOhbsOtPC90ZXh0PgoKICA8IS0tIDIuIEtvbnRleHQgYSBoaXN0b3JpZSAoQ29udGV4dCBXaW5kb3cpIC0tPgogIDxnIGZpbHRlcj0idXJsKCNzaGFkb3cpIj4KICAgIDxyZWN0IHg9IjI3MCIgeT0iMTMwIiB3aWR0aD0iMTgwIiBoZWlnaHQ9IjExMCIgcng9IjEwIiBmaWxsPSIjZWVmMmZmIiBzdHJva2U9IiM2MzY2ZjEiIHN0cm9rZS13aWR0aD0iMiIgLz4KICAgIDxyZWN0IHg9IjI4MiIgeT0iMTQyIiB3aWR0aD0iMTU2IiBoZWlnaHQ9IjI0IiByeD0iNSIgZmlsbD0iI2UwZTdmZiIgLz4KICAgIDx0ZXh0IHg9IjM2MCIgeT0iMTU4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBjbGFzcz0idGl0bGUtdGV4dCIgZmlsbD0iIzMxMmU4MSI+S29udGV4dCBrb252ZXJ6YWNlPC90ZXh0PgogICAgPHRleHQgeD0iMzYwIiB5PSIxODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGNsYXNzPSJzdWItdGV4dCIgZmlsbD0iIzQzMzhjYSI+4oCiIFN5c3RlbSBwcm9tcHQgJmFtcDsgcHJhdmlkbGE8L3RleHQ+CiAgICA8dGV4dCB4PSIzNjAiIHk9IjE5OCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgY2xhc3M9InN1Yi10ZXh0IiBmaWxsPSIjNDMzOGNhIj7igKIgSGlzdG9yaWUgenByw6F2IChUdXJucyk8L3RleHQ+CiAgICA8dGV4dCB4PSIzNjAiIHk9IjIxNiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgY2xhc3M9InN1Yi10ZXh0IiBmaWxsPSIjNDMzOGNhIj7igKIgVsO9c3R1cHkgbsOhc3Ryb2rFryAoTG9nKTwvdGV4dD4KICA8L2c+CgogIDwhLS0gQXJyb3cgQ29udGV4dCAtPiBJbmZlcmVuY2UgLS0+CiAgPHBhdGggZD0iTSA0NTAgMTg1IEwgNTE4IDE4NSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjN2MzYWVkIiBzdHJva2Utd2lkdGg9IjIiIG1hcmtlci1lbmQ9InVybCgjYXJyb3ctdmlvbGV0KSIgLz4KICA8cmVjdCB4PSI0NTYiIHk9IjE2NSIgd2lkdGg9IjYwIiBoZWlnaHQ9IjE4IiByeD0iNCIgZmlsbD0iI2Y1ZjNmZiIgLz4KICA8dGV4dCB4PSI0ODYiIHk9IjE3OCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgY2xhc3M9ImVkZ2UtbGFiZWwiIGZpbGw9IiM2ZDI4ZDkiPlRva2VueTwvdGV4dD4KCiAgPCEtLSAzLiBJbmZlcmVuY2UgJiBNecWhbGVua2EgKFJlYXNvbmluZyAvIFRob3VnaHQpIC0tPgogIDxnIGZpbHRlcj0idXJsKCNzaGFkb3cpIj4KICAgIDxyZWN0IHg9IjUyMCIgeT0iMTE1IiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE0MCIgcng9IjEwIiBmaWxsPSIjZmFmNWZmIiBzdHJva2U9IiNhODU1ZjciIHN0cm9rZS13aWR0aD0iMiIgLz4KICAgIDxyZWN0IHg9IjUzMiIgeT0iMTI3IiB3aWR0aD0iMTc2IiBoZWlnaHQ9IjI2IiByeD0iNSIgZmlsbD0iI2YzZThmZiIgLz4KICAgIDx0ZXh0IHg9IjYyMCIgeT0iMTQ1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBjbGFzcz0idGl0bGUtdGV4dCIgZmlsbD0iIzU4MWM4NyI+TExNIEluZmVyZW5jZSAmYW1wOyBSb3p2YWhhPC90ZXh0PgogICAgPHRleHQgeD0iNjIwIiB5PSIxNzIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGNsYXNzPSJ0aXRsZS10ZXh0IiBmaWxsPSIjN2UyMmNlIj7igJ5NecWhbGVua2HigJwgKFRob3VnaHQpPC90ZXh0PgogICAgPHRleHQgeD0iNjIwIiB5PSIxOTMiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGNsYXNzPSJzdWItdGV4dCIgZmlsbD0iIzZiMjFhOCI+TW9kZWwgYW5hbHl6dWplIHN0YXYsPC90ZXh0PgogICAgPHRleHQgeD0iNjIwIiB5PSIyMTAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGNsYXNzPSJzdWItdGV4dCIgZmlsbD0iIzZiMjFhOCI+cGzDoW51amUgZGFsxaHDrSBrcm9rIGEgcm96aG9kbmU6PC90ZXh0PgogICAgPHRleHQgeD0iNjIwIiB5PSIyMzUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGNsYXNzPSJlZGdlLWxhYmVsIiBmaWxsPSIjNTgxYzg3Ij5Ba2NlIHZzLiBEb2tvbsSNZW7DrTwvdGV4dD4KICA8L2c+CgogIDwhLS0gQnJhbmNoIEE6IE9kZXZ6ZMOhbsOtIHbDvXNsZWRrdSAoRmluYWwgT3V0cHV0KSAtLT4KICA8cGF0aCBkPSJNIDYyMCAxMTUgTCA2MjAgNzggTCAxMTIuNSA3OCBMIDExMi41IDE0MyIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDU5NjY5IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1kYXNoYXJyYXk9IjUsNCIgbWFya2VyLWVuZD0idXJsKCNhcnJvdy1lbWVyYWxkKSIgLz4KICA8cmVjdCB4PSIzMDAiIHk9IjY2IiB3aWR0aD0iMTgwIiBoZWlnaHQ9IjI0IiByeD0iNCIgZmlsbD0iI2VjZmRmNSIgc3Ryb2tlPSIjYTdmM2QwIiAvPgogIDx0ZXh0IHg9IjM5MCIgeT0iODIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGNsYXNzPSJlZGdlLWxhYmVsIiBmaWxsPSIjMDQ3ODU3Ij5Dw61sIHNwbG7Em246IEZpbsOhbG7DrSBvZHBvdsSbxI88L3RleHQ+CgogIDwhLS0gQnJhbmNoIEI6IFRvb2wgQ2FsbCAtLT4KICA8cGF0aCBkPSJNIDYyMCAyNTUgTCA2MjAgMzA4IiBmaWxsPSJub25lIiBzdHJva2U9IiNkOTc3MDYiIHN0cm9rZS13aWR0aD0iMiIgbWFya2VyLWVuZD0idXJsKCNhcnJvdy1hbWJlcikiIC8+CiAgPHJlY3QgeD0iNTQ4IiB5PSIyNzIiIHdpZHRoPSIxNDQiIGhlaWdodD0iMjAiIHJ4PSI0IiBmaWxsPSIjZmZmYmViIiAvPgogIDx0ZXh0IHg9IjYyMCIgeT0iMjg2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBjbGFzcz0iZWRnZS1sYWJlbCIgZmlsbD0iI2I0NTMwOSI+UG90xZllYmEgYWtjZSAoQWN0KTwvdGV4dD4KCiAgPCEtLSA0LiBUb29sIENhbGwgKEpTT04vQmFzaCkgLS0+CiAgPGcgZmlsdGVyPSJ1cmwoI3NoYWRvdykiPgogICAgPHJlY3QgeD0iNTI1IiB5PSIzMTAiIHdpZHRoPSIxOTAiIGhlaWdodD0iODYiIHJ4PSIxMCIgZmlsbD0iI2ZmZmJlYiIgc3Ryb2tlPSIjZjU5ZTBiIiBzdHJva2Utd2lkdGg9IjIiIC8+CiAgICA8cmVjdCB4PSI1MzciIHk9IjMyMiIgd2lkdGg9IjE2NiIgaGVpZ2h0PSIyNCIgcng9IjUiIGZpbGw9IiNmZWYzYzciIC8+CiAgICA8dGV4dCB4PSI2MjAiIHk9IjMzOCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgY2xhc3M9InRpdGxlLXRleHQiIGZpbGw9IiM3ODM1MGYiPlZvbMOhbsOtIG7DoXN0cm9qZSAoVG9vbCBDYWxsKTwvdGV4dD4KICAgIDx0ZXh0IHg9IjYyMCIgeT0iMzYyIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBjbGFzcz0iY29kZS1iYWRnZSIgZmlsbD0iIzkyNDAwZSI+eyJuYW1lIjogImdyZXAiLCAiYXJncyI6IHsuLi59fTwvdGV4dD4KICAgIDx0ZXh0IHg9IjYyMCIgeT0iMzgwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBjbGFzcz0ic3ViLXRleHQiIGZpbGw9IiNiNDUzMDkiPm5lYm8gQmFzaCAvIENvZGUgZXhlY3V0aW9uPC90ZXh0PgogIDwvZz4KCiAgPCEtLSBBcnJvdyBUb29sIENhbGwgLT4gRXhlY3V0aW9uIEVudmlyb25tZW50IC0tPgogIDxwYXRoIGQ9Ik0gNzE1IDM1MyBMIDc1OCAzNTMiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzQ3NTU2OSIgc3Ryb2tlLXdpZHRoPSIyIiBtYXJrZXItZW5kPSJ1cmwoI2Fycm93KSIgLz4KCiAgPCEtLSA1LiBWw71rb25uw6kgcHJvc3TFmWVkw60gKEV4ZWN1dGlvbiBFbnZpcm9ubWVudCkgLS0+CiAgPGcgZmlsdGVyPSJ1cmwoI3NoYWRvdykiPgogICAgPHJlY3QgeD0iNzYwIiB5PSIzMDAiIHdpZHRoPSIxMjAiIGhlaWdodD0iMTEwIiByeD0iMTAiIGZpbGw9IiNmMGZkZmEiIHN0cm9rZT0iIzBkOTQ4OCIgc3Ryb2tlLXdpZHRoPSIyIiAvPgogICAgPHJlY3QgeD0iNzY4IiB5PSIzMTAiIHdpZHRoPSIxMDQiIGhlaWdodD0iMjQiIHJ4PSI1IiBmaWxsPSIjY2NmYmYxIiAvPgogICAgPHRleHQgeD0iODIwIiB5PSIzMjYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGNsYXNzPSJ0aXRsZS10ZXh0IiBmaWxsPSIjMTE1ZTU5Ij5Qcm9zdMWZZWTDrTwvdGV4dD4KICAgIDx0ZXh0IHg9IjgyMCIgeT0iMzQ4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBjbGFzcz0ic3ViLXRleHQiIGZpbGw9IiMwZjc2NmUiPuKAoiBTYW5kYm94IC8gT1M8L3RleHQ+CiAgICA8dGV4dCB4PSI4MjAiIHk9IjM2OCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgY2xhc3M9InN1Yi10ZXh0IiBmaWxsPSIjMGY3NjZlIj7igKIgU291Ym9yeSAvIEdpdDwvdGV4dD4KICAgIDx0ZXh0IHg9IjgyMCIgeT0iMzg4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBjbGFzcz0ic3ViLXRleHQiIGZpbGw9IiMwZjc2NmUiPuKAoiBNQ1Agc2VydmVyeTwvdGV4dD4KICA8L2c+CgogIDwhLS0gQXJyb3cgRXhlY3V0aW9uIC0+IE9ic2VydmF0aW9uIC0tPgogIDxwYXRoIGQ9Ik0gODIwIDQxMCBMIDgyMCA0NTIgTCA3MjIgNDUyIiBmaWxsPSJub25lIiBzdHJva2U9IiMwNTk2NjkiIHN0cm9rZS13aWR0aD0iMiIgbWFya2VyLWVuZD0idXJsKCNhcnJvdy1lbWVyYWxkKSIgLz4KCiAgPCEtLSA2LiBWw71zdHVwIG7DoXN0cm9qZSAoT2JzZXJ2YXRpb24pIC0tPgogIDxnIGZpbHRlcj0idXJsKCNzaGFkb3cpIj4KICAgIDxyZWN0IHg9IjUyMCIgeT0iNDE1IiB3aWR0aD0iMjAwIiBoZWlnaHQ9Ijc1IiByeD0iMTAiIGZpbGw9IiNmMGZkZjQiIHN0cm9rZT0iIzE2YTM0YSIgc3Ryb2tlLXdpZHRoPSIyIiAvPgogICAgPHJlY3QgeD0iNTMyIiB5PSI0MjUiIHdpZHRoPSIxNzYiIGhlaWdodD0iMjQiIHJ4PSI1IiBmaWxsPSIjZGNmY2U3IiAvPgogICAgPHRleHQgeD0iNjIwIiB5PSI0NDEiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGNsYXNzPSJ0aXRsZS10ZXh0IiBmaWxsPSIjMTQ1MzJkIj5Qb3pvcm92w6Fuw60gKE9ic2VydmF0aW9uKTwvdGV4dD4KICAgIDx0ZXh0IHg9IjYyMCIgeT0iNDYzIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBjbGFzcz0ic3ViLXRleHQiIGZpbGw9IiMxNTgwM2QiPlbDvXN0dXAgeiBuw6FzdHJvamUgKHN0ZG91dC9zdGRlcnIpPC90ZXh0PgogICAgPHRleHQgeD0iNjIwIiB5PSI0NzgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGNsYXNzPSJzdWItdGV4dCIgZmlsbD0iIzE2NjUzNCI+VsO9c2xlZGVrIHZ5aGxlZMOhdsOhbsOtIC8gxI10ZW7DrSBzb3Vib3J1PC90ZXh0PgogIDwvZz4KCiAgPCEtLSBSZUFjdCBGZWVkYmFjayBMb29wIEFycm93OiBPYnNlcnZhdGlvbiAtPiBDb250ZXh0IFdpbmRvdyAtLT4KICA8cGF0aCBkPSJNIDUyMCA0NTIgTCAzNjAgNDUyIEwgMzYwIDI0MiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDU5NjY5IiBzdHJva2Utd2lkdGg9IjIuNSIgbWFya2VyLWVuZD0idXJsKCNhcnJvdy1lbWVyYWxkKSIgLz4KCiAgPCEtLSBGZWVkYmFjayBMb29wIEJhZGdlICYgTGFiZWwgLS0+CiAgPGcgZmlsdGVyPSJ1cmwoI3NoYWRvdykiPgogICAgPHJlY3QgeD0iMzc1IiB5PSI0MzUiIHdpZHRoPSIxMjUiIGhlaWdodD0iMzQiIHJ4PSI2IiBmaWxsPSIjZGNmY2U3IiBzdHJva2U9IiMxMGI5ODEiIHN0cm9rZS13aWR0aD0iMS41IiAvPgogICAgPHRleHQgeD0iNDM3LjUiIHk9IjQ1MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgY2xhc3M9Imxvb3AtYmFkZ2UiPlJlQWN0IFNNWcSMS0E8L3RleHQ+CiAgICA8dGV4dCB4PSI0MzcuNSIgeT0iNDYzIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBjbGFzcz0ic3ViLXRleHQiIGZpbGw9IiMwNjVmNDYiPlpwxJt0IGRvIGtvbnRleHR1PC90ZXh0PgogIDwvZz4KCiAgPCEtLSBBbm5vdGF0aW9uIGZvb3RlciBpbnNpZGUgaGFybmVzcyBib3ggLS0+CiAgPHRleHQgeD0iMjUwIiB5PSI1MDAiIGNsYXNzPSJzdWItdGV4dCIgZmlsbD0iIzY0NzQ4YiIgZm9udC1zdHlsZT0iaXRhbGljIj4KICAgIEhhcm5lc3Mgc3ByYXZ1amUga29udGV4dCwgdm9sw6Fuw60gbsOhc3Ryb2rFryBhIGN5a2x1cyBvcGFrdWplLCBkb2t1ZCBhZ2VudCBuZW9obMOhc8OtIGhvdG92byBuZWJvIG5ldnnFvmFkdWplIHZzdHVwIMSNbG92xJtrYS4KICA8L3RleHQ+Cjwvc3ZnPgo=)

*Obrázek 1: Architektura autonomní ReAct smyčky (Reasoning + Acting) a tok dat mezi uživatelem, kontextem, modelem a výkonným prostředím.*

#### 2.3.3 Vyvolávání nástrojů [Tool Calling]

#### 2.3.4 Dovednosti

Se vzrůstající komplexitou úloh nelze veškeré instrukce, skripty a doménové znalosti vkládat do základního systémového promptu. K modulárnímu rozšíření schopností agenta slouží [***Dovednosti***](#kw-skills)★ — [CZ] Znovupoužitelné modulární balíčky instrukcí (typicky definovaných v souboru SKILL.md), procedurálních pravidel a volitelných pomocných skriptů či zdrojů, které harness dynamicky načítá do kontextu agenta podle povahy řešeného úkolu..

Architektura dovedností staví na následujících principech:

- Definiční soubor `SKILL.md`: Dovednost tvoří adresář obsahující definiční soubor se strukturovanou hlavičkou (YAML frontmatter vymezující název a popis role) a detailním návodem k použití.
- Dynamické načítání pro úsporu kontextu: Do výchozího promptu se vloží pouze stručný přehled dostupných dovedností. Kompletní instrukce a skripty se do kontextu načtou až v okamžiku, kdy agent danou dovednost explicitně vyvolá.
- Skripty a záchytné body (*Scripts & Hooks*): Dovednosti mohou obsahovat deterministické skripty pro rutinní transformace kódu a událostní háčky vyvolávané při stavových přechodech harnessu.

Kromě kontextových dovedností využívají pokročilé řídicí architektury také programové [***Rozšíření***](#kw-plugins)★ — [CZ] Rozšíření běžící přímo v prostředí harnessu, která rozšiřují jeho exekuční jádro o specializované systémové adaptéry, ovladače nástrojů a deterministické záchytné body.. Zatímco *Skills* fungují jako kontextové procedury a instrukce interpretované modelem, pluginy rozšiřují samotný harness na nativní systémové úrovni.

#### 2.3.5 Škálování: Multiagentní systémy (Subagenti) a grafy (DAG workflows) [Scaling: Multiagent Systems (Subagents) and DAG Workflows (Graphs)]

Monolitická agentní smyčka selhává při řešení komplexních, vícefázových úloh. Pro spolehlivé škálování se v moderních systémech uplatňuje hierarchická dělba práce a formalizace procesu do podoby grafu.

## 3 DarkFactory: Architektura harnessu - Praktická část

Úvod

### 3.1 Git a GitHub

## 4 Výsledky a diskuse

## 5 Závěr

## Seznam zdrojů

- [1.](#loc-15) CHACON, Scott a STRAUB, Ben. *Pro Git.*2. New York : Apress, 2014. ISBN 978-1-4842-0076-6.
- [2.](#loc-24) VASWANI, Ashish, SHAZEER, Noam, PARMAR, Niki, USZKOREIT, Jakob, JONES, Llion, GOMEZ, Aidan N., KAISER, Łukasz a POLOSUKHIN, Illia. Attention Is All You Need. *arXiv preprint arXiv:1706.03762.* Online. 2017. Available from: [https://arxiv.org/abs/1706.03762](https://arxiv.org/abs/1706.03762)
- [3.](#loc-30) YAO, Shunyu, ZHAO, Jeffrey, YU, Dian, DU, Nan, SHAFRAN, Izhak, NARASIMHAN, Karthik a CAO, Yuan. ReAct: Synergizing Reasoning and Acting in Language Models. *arXiv preprint arXiv:2210.03629.* Online. 2022. Available from: [https://arxiv.org/abs/2210.03629](https://arxiv.org/abs/2210.03629)
- 4.  MARIUS, Patrik. DarkFactory: autonomous, governed software engineering pipelines. Online. 2026. [Accessed 8 září 2026]. Available from: [https://github.com/marius-patrik/DarkFactory](https://github.com/marius-patrik/DarkFactory)
- 5.  HUMBLE, Jez a FARLEY, David. *Continuous Delivery: Reliable Software Releases through Build, Test, and Deployment Automation.*Boston : Addison-Wesley, 2010. ISBN 978-0-321-60191-9.
- 6.  Deepseek Harness. *arXiv preprint arXiv:2608.25512.* Online. 2026. Available from: [https://arxiv.org/abs/2608.25512](https://arxiv.org/abs/2608.25512)
- 7.  ANTHROPIC. Model Context Protocol documentation. Online. 2026. Available from: [https://modelcontextprotocol.io/docs/2026-07-28/getting-started/intro#explore-mcp](https://modelcontextprotocol.io/docs/2026-07-28/getting-started/intro#explore-mcp)
- 8.  ANTHROPIC. Prompt Engineering overview. Online. 2026. Available from: [https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview)
- 9.  LIU, Nelson F., LIN, Kevin, HEWITT, John, PARANJAPE, Ashwin, BEVILACQUA, Michele, PETRONI, Fabio a LIANG, Percy. Lost in the Middle: How Language Models Use Long Contexts. *Transactions of the Association for Computational Linguistics.* Online. 2024. Vol. 12, p. 157–173. Available from: [https://arxiv.org/abs/2307.03172](https://arxiv.org/abs/2307.03172)
- 10.  DAO, Tri, FU, Daniel Y., ERMON, Stefano, RUDRA, Atri a RÉ, Christopher. FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness. *Advances in Neural Information Processing Systems.* Online. 2022. Vol. 35, p. 16344–16359. Available from: [https://arxiv.org/abs/2205.14135](https://arxiv.org/abs/2205.14135)
- 11.  AINSLIE, Joshua, LEE-THORP, James, JONG, Michiel de, ZEMLYANSKIY, Yury, LEBRÓN, Federico a SANGHAI, Sumit. GQA: Training Generalized Multi-Query Transformer Models from Multi-Head Checkpoints. *arXiv preprint arXiv:2305.13245.* Online. 2023. Available from: [https://arxiv.org/abs/2305.13245](https://arxiv.org/abs/2305.13245)

## Rejstřík

[Agent](#kw-agent)
[Agentické inženýrství](#kw-agentic-engineering)
[Agentní harness](#kw-harness)
[Chatbot](#kw-chatbot)
[Degradace kontextu](#kw-context-rot)
[Dovednosti](#kw-skills)
[Generování rozšířené vyhledáváním ( RAG )](#kw-rag)
[Git](#kw-git)
[GitHub](#kw-github)
[GitHub Actions ( Actions )](#kw-github-actions)
[Inženýrství pracovních grafů ( Graph Engineering )](#kw-graph-engineering)
[Inženýrství prováděcí smyčky ( Loop Engineering )](#kw-loop-engineering)
[Jazykový model ( LLM )](#kw-language-model)
[Kompakce kontextu ( Compaction )](#kw-context-compaction)
[Kontextové inženýrství](#kw-context-engineering)
[Kontextové okno](#kw-context-window)
[Mezipaměť klíčů a hodnot ( KV Cache )](#kw-kv-cache)
[Model Context Protocol ( MCP )](#kw-mcp)
[Orientovaný acyklický graf ( DAG )](#kw-dag)
[Požadavek na sloučení](#kw-pull-request)
[Promptové inženýrství](#kw-prompt-engineering)
[Průběžná integrace ( CI )](#kw-continuous-integration)
[Rozšíření](#kw-plugins)
[Skript](#kw-script)
[Sloučení commitů ( Squash )](#kw-squash)
[Sloučení větví ( Merge )](#kw-merge)
[Smyčka ReAct ( Agent Loop )](#kw-agent-loop)
[Softwarové inženýrství](#kw-software-engineering)
[Softwarový kontejner ( Container )](#kw-container)
[Správa verzí](#kw-version-control)
[Tah interakce ( Turn )](#kw-turn)
[Token](#kw-token)
[Tokenizér](#kw-tokenizer)
[Transformerová architektura ( Transformer )](#kw-transformer)
[Událostní záchytný bod ( Hook )](#kw-hook)
[Vektorová reprezentace](#kw-embedding)
[Větev repozitáře ( Branch )](#kw-branch)
[Zapojení člověka do smyčky ( HITL )](#kw-human-in-the-loop)

### A

#### Agent

[CZ] Softwarový systém řízený jazykovým modelem a vybavený nástroji, který samostatně plánuje, vnímá stav prostředí a provádí vícekrokové akce směřující k dosažení zadaného inženýrského cíle.

#### Agentické inženýrství

[CZ] Inženýrská disciplína zaměřená na návrh, orchestraci a provoz agentických systémů kolem jazykových modelů, včetně nástrojů, kontextu, prováděcích smyček, bezpečnostních mantinelů a lidského dohledu.

#### Agentní harness

[CZ] Agentní harness — aplikační a orchestrační vrstva obklopující inferenční jádro modelu, která zajišťuje běhové prostředí nástrojů, dynamickou správu kontextového okna, bezpečnostní mantinely, práci se stavem a deterministické řízení životního cyklu požadavku.

### C

#### Chatbot

[CZ] Systém založený na jazykovém modelu určený primárně k textové interakci s uživatelem; odpovídá na jednotlivé požadavky, ale sám o sobě nedisponuje autonomní prováděcí smyčkou ani nástroji pro samostatnou modifikaci okolního prostředí.

### D

#### Degradace kontextu

[CZ] Degradace pozornosti a kvality logického uvažování modelu způsobená zaplněním kontextového okna dlouhou historií, šumem nebo vzájemně si konkurujícími informacemi, která vede k přehlížení instrukcí a ztrátě souvislostí.

#### Dovednosti

[CZ] Znovupoužitelné modulární balíčky instrukcí (typicky definovaných v souboru SKILL.md), procedurálních pravidel a volitelných pomocných skriptů či zdrojů, které harness dynamicky načítá do kontextu agenta podle povahy řešeného úkolu.

### G

#### Generování rozšířené vyhledáváním ( RAG )

[CZ] Architektura, v níž systém před generováním nebo během něj vyhledá relevantní informace z externího zdroje a vloží je do kontextu modelu, aby výstup mohl být založen na načtených datech.

#### Git

[CZ] Distribuovaný systém správy verzí, který uchovává historii projektu, podporuje větvení a slučování změn a umožňuje deterministický návrat k předchozím stavům repozitáře.

#### GitHub

[CZ] Cloudová platforma pro hosting gitových repozitářů, správu vývojového cyklu pomocí Issues a Pull Requests a automatizaci CI/CD pracovních postupů.

#### GitHub Actions ( Actions )

[CZ] Automatizační platforma GitHubu, která spouští deklarované workflow a jejich joby v reakci na události repozitáře nebo ruční spuštění.

### I

#### Inženýrství pracovních grafů ( Graph Engineering )

[CZ] Návrh agentních nebo automatizačních pracovních postupů jako explicitních grafů uzlů, závislostí a přechodů namísto jediné neomezené smyčky.

#### Inženýrství prováděcí smyčky ( Loop Engineering )

[CZ] Návrh a řízení iterativní prováděcí smyčky agenta: stavových přechodů, podmínek ukončení, rozpočtů, opakování, eskalací a vazby mezi rozhodováním modelu a nástroji.

### J

#### Jazykový model ( LLM )

[CZ] Velký jazykový model je neuronový model trénovaný nad rozsáhlými textovými daty, který autoregresivně zpracovává a generuje posloupnosti tokenů. V této práci vystupuje jako inferenční kognitivní jádro agentního systému.

### K

#### Kompakce kontextu ( Compaction )

[CZ] Proces zmenšení aktivního kontextu, typicky shrnutím, výběrem nebo nahrazením starších částí historie kompaktnější reprezentací tak, aby se běh vešel do kontextového okna.

#### Kontextové inženýrství

[CZ] Systematický návrh, výběr, pořadí a životní cyklus informací zpřístupňovaných modelu v aktivním kontextu, včetně instrukcí, paměti, nástrojových výsledků a externě načtených dat.

#### Kontextové okno

[CZ] Maximální rozsah tokenové sekvence, kterou model při jednom běhu dokáže zahrnout do aktivního kontextu. Prakticky omezuje součet instrukcí, historie, nástrojových výstupů a dalších dat předávaných modelu.

### M

#### Mezipaměť klíčů a hodnot ( KV Cache )

[CZ] Mezipaměť dříve vypočtených vektorů klíčů a hodnot v pozornostních vrstvách transformeru, která při autoregresivním generování omezuje nutnost opakovaně přepočítávat předchozí tokeny.

#### Model Context Protocol ( MCP )

[CZ] Model Context Protocol — otevřený standard původně navržený společností Anthropic pro standardizovanou komunikaci AI aplikací s externími nástroji, zdroji a daty prostřednictvím zpráv JSON-RPC.

### O

#### Orientovaný acyklický graf ( DAG )

[CZ] Orientovaný graf bez orientovaného cyklu. V pracovních postupech umožňuje explicitně vyjádřit závislosti mezi kroky a pořadí, které z nich vyplývá.

### P

#### Požadavek na sloučení

[CZ] Formální návrh na začlenění změn z jedné větve repozitáře do druhé, který slouží jako místo pro automatizované kontroly, lidskou revizi a diskusi nad navrženými úpravami.

#### Promptové inženýrství

[CZ] Inženýrská metodika systematického návrhu, strukturování a optimalizace instrukcí a systémových promptů pro řízení chování a mantinelů jazykového modelu.

#### Průběžná integrace ( CI )

[CZ] Vývojová praxe, při níž se změny často integrují a automaticky ověřují sestavením, testy a dalšími kontrolami, aby se integrační chyby odhalily co nejdříve.

### R

#### Rozšíření

[CZ] Rozšíření běžící přímo v prostředí harnessu, která rozšiřují jeho exekuční jádro o specializované systémové adaptéry, ovladače nástrojů a deterministické záchytné body.

### S

#### Skript

[CZ] Soubor nebo posloupnost příkazů určených k automatizovanému vykonání interpretem, shellem nebo jiným běhovým prostředím.

#### Sloučení commitů ( Squash )

[CZ] Operace, při níž se více po sobě jdoucích commitů nahradí jedním souhrnným commitem, obvykle za účelem zjednodušení historie před integrací změn.

#### Sloučení větví ( Merge )

[CZ] Operace správy verzí, která kombinuje změny nebo historii dvou vývojových linií do společného výsledného stavu; konflikty vyžadují explicitní vyřešení.

#### Smyčka ReAct ( Agent Loop )

[CZ] Iterativní prováděcí cyklus autonomního agenta založený na vzoru ReAct (Reasoning + Acting), v němž model střídavě uvažuje, volá nástroje a vyhodnocuje pozorování z běhového prostředí.

#### Softwarové inženýrství

[CZ] Systematické uplatňování inženýrských principů na specifikaci, návrh, implementaci, ověřování, provoz a údržbu softwarových systémů.

#### Softwarový kontejner ( Container )

[CZ] Izolované uživatelské běhové prostředí balící aplikaci a její závislosti při sdílení jádra hostitelského operačního systému; úroveň bezpečnostní izolace závisí na konkrétní implementaci a konfiguraci.

#### Správa verzí

[CZ] Správa a sledování změn zdrojových souborů a dalších verzovaných artefaktů tak, aby bylo možné změny bezpečně větvit, slučovat, auditovat a v případě potřeby vracet.

### T

#### Tah interakce ( Turn )

[CZ] Jedna diskrétní jednotka interakce v konverzačním nebo agentním protokolu, například zpráva uživatele, odpověď modelu nebo samostatně evidovaný výsledek nástroje.

#### Token

[CZ] Diskrétní jednotka zpracovávaná jazykovým modelem. Token odpovídá položce slovníku tokenizéru a je reprezentován číselným identifikátorem; nemusí odpovídat celému slovu.

#### Tokenizér

[CZ] Komponenta, která převádí text nebo jiný vstup na posloupnost tokenů a jejich identifikátorů a podle podporovaného směru také provádí zpětnou dekódovací transformaci.

#### Transformerová architektura ( Transformer )

[CZ] Architektura neuronových sítí založená na mechanismu pozornosti, která modeluje vztahy mezi prvky sekvence a tvoří základ většiny současných velkých jazykových modelů.

### U

#### Událostní záchytný bod ( Hook )

[CZ] Definovaný bod životního cyklu nebo události, na který lze navázat vlastní deterministickou logiku před, po nebo místo standardního chování systému.

### V

#### Vektorová reprezentace

[CZ] Vícerozměrná vektorová reprezentace tokenů nebo jiných dat, v níž numerické vztahy mezi vektory zachycují užitečné sémantické vztahy mezi reprezentacemi.

#### Větev repozitáře ( Branch )

[CZ] Pojmenovaná vývojová linie v systému správy verzí, která umožňuje provádět změny odděleně od jiné linie historie a později je porovnat nebo sloučit.

### Z

#### Zapojení člověka do smyčky ( HITL )

[CZ] Návrhový vzor, v němž lidský operátor zůstává součástí rozhodovacího procesu systému prostřednictvím schvalovacích bran (Human Gates), zejména před významnými nebo nevratnými systémovými operacemi.

## Seznam příloh
