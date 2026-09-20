## DarkFactory
Agentické a harnessové inženýrství:
Umělá inteligence v praxi

Patrik Marius · Gymnázium J. K. Tyla · 2026

## Annotation (Anotace)

[CZ] Tato odborná práce se zabývá principy agentického inženýrství (*agentic engineering*): efektivními inženýrskými praktikami pro vývoj pomocí umělé inteligence prostřednictvím agentických systémů a architekturou těchto systémů. Praktickým přínosem práce je návrh a implementace systému DarkFactory — agentního harnessu instalovatelného jako aplikace pro platformu GitHub (GitHub App). Systém usiluje o maximální možnou míru automatizace vývojového cyklu od interpretace požadavků v GitHub Issues, přes plánování, až po vývoj kódu a sloučení změn. Práce reflektuje, že současné agentní systémy nelze vnímat jako plně autonomní: jazykové modely vyžadují deterministické mantinely, správu kontextu a zapojení člověka (*Human-in-the-loop*).

[EN] This thesis examines the principles of agentic engineering: effective engineering practices for development with artificial intelligence through agentic systems and the architecture of these systems. The practical contribution of the thesis is the design and implementation of DarkFactory — an agentic harness installable as a GitHub App. The system aims to maximize automation of the development lifecycle, from interpreting requirements in GitHub Issues, through planning, to code development and merging changes. The thesis reflects that current agentic systems cannot be regarded as fully autonomous: language models require deterministic guardrails, context management, and human involvement (*Human-in-the-loop*).

## Keywords (Klíčová slova)

Agent , Agent Harness (Agentní harness) , Agent Loop (Smyčka ReAct) [ReAct Loop] , Chatbot , Embedding (Vektorová reprezentace) , Git , GitHub , Hook (Událostní záchytný bod) [Event Hook] , Loop Engineering (Inženýrství prováděcí smyčky) [Execution-loop Engineering] , Plugins (Rozšíření) , Script (Skript) , Skills (Dovednosti) , Tokenizer (Tokenizér) , Transformer (Transformerová architektura) [Transformer Architecture]

## Obsah

1. [DarkFactory
   Agentické a harnessové inženýrství:
   Umělá inteligence v praxi](#loc-1)
2. [Annotation (Anotace)](#loc-2)
3. [Keywords (Klíčová slova)](#loc-3)
4. [1 Introduction (Úvod)](#loc-4)
  1. [1.1 Motivation and Problem Definition (Motivace a vymezení problému)](#loc-5)
    1. [1.1.1 Úvod](#loc-6)
  2. [1.2 Thesis Objective and Research Questions (Cíl práce a výzkumné otázky)](#loc-7)
    1. [1.2.1 Úvod](#loc-8)
    2. [1.2.2 Main Goal (Hlavní cíl)](#loc-9)
      1. [1.2.2.1 Úvod](#loc-10)
    3. [1.2.3 Sub-goals (Dílčí cíle)](#loc-11)
      1. [1.2.3.1 Úvod](#loc-12)
    4. [1.2.4 Research Questions (Výzkumné otázky)](#loc-13)
      1. [1.2.4.1 Úvod](#loc-14)
  3. [1.3 Methodology (Metodika práce)](#loc-15)
    1. [1.3.1 Úvod](#loc-16)
5. [2 Agentic AI (Agentické AI)](#loc-17)
  1. [2.1 Development Environment and Practices (Vývojové prostředí a praxe)](#loc-18)
    1. [2.1.1 Úvod](#loc-20)
    2. [2.1.2 Software Engineering (Softwarové inženýrství)](#loc-21)
      1. [2.1.2.1 Úvod](#loc-22)
    3. [2.1.3 Version control (Správa verzí)](#loc-23)
      1. [2.1.3.1 Úvod](#loc-25)
      2. [2.1.3.2 Git](#loc-26)
        1. [2.1.3.2.1 Úvod](#loc-27)
    4. [2.1.4 CI (Průběžná integrace) [Continuous Integration]](#loc-28)
      1. [2.1.4.1 Úvod](#loc-30)
  2. [2.2 Language Models, Chatbots, and Agents (Jazykové modely, chatboti a agenti)](#loc-31)
    1. [2.2.1 Úvod](#loc-33)
    2. [2.2.2 LLM (Jazykový model) [Large Language Model]](#loc-34)
      1. [2.2.2.1 Úvod](#loc-35)
  3. [2.3 Agentic Engineering (Agentické inženýrství)](#loc-37)
    1. [2.3.1 Úvod](#loc-39)
    2. [2.3.2 Prompt Engineering (Promptové inženýrství)](#loc-40)
      1. [2.3.2.1 Úvod](#loc-42)
    3. [2.3.3 Agent Harness (Agentní harness)](#loc-43)
      1. [2.3.3.1 Úvod](#loc-45)
      2. [2.3.3.2 Agent Loop (Smyčka ReAct) [ReAct Loop]](#loc-46)
        1. [2.3.3.2.1 Úvod](#loc-48)
      3. [2.3.3.3 Tool Calling (Vyvolávání nástrojů)](#loc-49)
        1. [2.3.3.3.1 Úvod](#loc-51)
      4. [2.3.3.4 Skills (Dovednosti)](#loc-52)
        1. [2.3.3.4.1 Úvod](#loc-54)
      5. [2.3.3.5 Context Engineering (Kontextové inženýrství)](#loc-55)
        1. [2.3.3.5.1 Úvod](#loc-57)
      6. [2.3.3.6 Graph Engineering (Inženýrství pracovních grafů) [Workflow-graph Engineering]](#loc-58)
        1. [2.3.3.6.1 Úvod](#loc-60)
6. [3 DarkFactory: Architektura harnessu - Praktická část](#loc-61)
  1. [3.1 Development Environment and Practices (Vývojové prostředí a praxe)](#loc-62)
    1. [3.1.1 Úvod](#loc-63)
    2. [3.1.2 Version control (Správa verzí)](#loc-64)
      1. [3.1.2.1 Úvod](#loc-65)
      2. [3.1.2.2 Git](#loc-66)
        1. [3.1.2.2.1 Úvod](#loc-67)
7. [4 Results and Discussion (Výsledky a diskuse)](#loc-68)
8. [5 Conclusion (Závěr)](#loc-69)
9. [Seznam zdrojů](#loc-70)
10. [Seznam obrázků a tabulek](#loc-84)
11. [Seznam příloh](#loc-85)

## 1 Introduction (Úvod)

### 1.1 Motivation and Problem Definition (Motivace a vymezení problému)

Ústřední inženýrská otázka této práce proto nespočívá v tom, zda jazykový model dokáže napsat fragment kódu. Zkoumáme, jaká kontrolní a dozorčí architektura — značovaná jako ***Agent Harness (Agentní harness)*** — musí model obklopovat, aby bylo možné jeho výstupům v produkčním repozitáři spolehlivě důvěřovat a dosáhnout vysoké míry autonomie se zachováním lidského dohledu.

#### 1.1.1 Úvod

### 1.2 Thesis Objective and Research Questions (Cíl práce a výzkumné otázky)

#### 1.2.1 Úvod

#### 1.2.2 Main Goal (Hlavní cíl)

Vymezit teoretické principy agentického inženýrství (*agentic engineering*) a navrhnout modulární architekturu agent harnessu pro automatizovaný vývoj softwaru se zachováním lidského dohledu v klíčových rozhodovacích bodech.

##### 1.2.2.1 Úvod

#### 1.2.3 Sub-goals (Dílčí cíle)

- Vymezit infrastrukturu pro správu verzí (Git, GitHub a kontinuální integraci).
- Analyzovat limity velkých jazykových modelů (dynamiku kontextového okna, jev Context Rot, ztrátovou kompresi a sémantický posun).
- Navrhnout architekturu agent harnessu zahrnující nástrojové smyčky (ReAct), bezpečnostní pískoviště a hierarchickou orchestraci subagentů.
- Formalizovat mechanismy zapojení člověka do smyčky (*Human-in-the-loop*), schvalovací brány a protokol revizních značek pro dohled nad textovými výstupy.

##### 1.2.3.1 Úvod

#### 1.2.4 Research Questions (Výzkumné otázky)

##### 1.2.4.1 Úvod

### 1.3 Methodology (Metodika práce)

Práce má teoreticko-architektonický a inženýrský charakter. Vzhledem k dynamickému vývoji v oblasti autonomního softwarového vývoje práce důsledně zachovává a integruje zavedené anglické odborné názvy (např. *harness*, *pull request*, *agent loop*, *prompt engineering*, *skills* či *context rot*). Použití této terminologie je integrální součástí práce, neboť tyto anglické pojmy představují de facto celosvětové průmyslové standardy (*industry standards*), jejichž doslovný český překlad by byl nejednoznačný, zavádějící či v rozporu s běžnou inženýrskou praxí.

Postup práce sleduje strukturu inženýrského cyklu:

-
  1. Analýza konceptu: Systematické zmapování limitů autoregresivních modelů, dynamiky kontextového okna, jevu Context Rot a rozhraní nástrojů.
-
  1. Návrh architektury: Formulace modulárního modelu agent harnessu, správy stavu, exekučního pískoviště, bezpečnostních pojistek a orchestrace subagentů.
-
  1. Kritické zhodnocení: Porovnání navržených principů s volnými agentními smyčkami a vymezení provozních limitů autonomního inženýrství.

#### 1.3.1 Úvod

## 2 Agentic AI (Agentické AI)

Úvod

### 2.1 Development Environment and Practices (Vývojové prostředí a praxe)

Soubor verzovacích, plánovacích, integračních a kontrolních postupů tvořících deterministické prostředí pro agentní vývoj softwaru. <sup><span id="loc-19">(</span><a href="#loc-71" role="doc-biblioref">1</a>)</sup>

#### 2.1.1 Úvod

#### 2.1.2 Software Engineering (Softwarové inženýrství)

Systematické uplatňování inženýrských principů na specifikaci, návrh, implementaci, ověřování, provoz a údržbu softwarových systémů. <sup>(<a href="#loc-71" role="doc-biblioref">1</a>)</sup>

##### 2.1.2.1 Úvod

#### 2.1.3 Version control (Správa verzí)

Správa a sledování změn zdrojových souborů a dalších verzovaných artefaktů tak, aby bylo možné změny bezpečně větvit, slučovat, auditovat a v případě potřeby vracet. <sup><span id="loc-24">(</span><a href="#loc-72" role="doc-biblioref">2</a>)</sup>

##### 2.1.3.1 Úvod

##### 2.1.3.2 Git

Distribuovaný systém správy verzí, který uchovává historii projektu, podporuje větvení a slučování změn a umožňuje deterministický návrat k předchozím stavům repozitáře. <sup>(<a href="#loc-72" role="doc-biblioref">2</a>)</sup>

###### 2.1.3.2.1 Úvod

Pro autonomní vývoj softwaru je spolehlivá správa verzí naprosto nezbytným základem. Jazykové modely generují kód na základě statistické pravděpodobnosti, a proto se nevyhnutelně dopouštějí chyb, logických přehmatů či regresí. Verzovací systém vytváří bezpečné a deterministické prostředí, v němž lze každou úpravu zaznamenat, otestovat a v případě selhání kdykoliv vrátit zpět k funkčnímu stavu. Namísto teoretických abstrakcí práce přímo využívá distribuovaný systém ***Git***<sup>*</sup> v kombinaci s platformou ***GitHub***<sup>*</sup>.

Klíčové komponenty infrastruktury zahrnují:

- Distribuovaný systém Git <sup>(<a href="#loc-72" role="doc-biblioref">2</a>)</sup>: Ukládá kompletní historii projektu v podobě jednotlivých revizí (*commitů*). Vývojář i agent pracují s plnou lokální kopií repozitáře, což umožňuje provádět změny, přepínat větve a spouštět lokální testy zcela nezávisle na síťovém připojení.
- Platforma GitHub: Slouží jako centrální bod pro sdílení kódu, týmovou koordinaci a automatizaci:
  - Zadávání a sledování úkolů (Issues): Strukturovaná textová zadání požadavků a hlášení chyb, která agentovi slouží jako výchozí specifikace úlohy.
  - Revize změn (Pull Requests): Uživatelské rozhraní pro přehledné zobrazení diffu, diskusi nad kódem a formální schválení člověkem.
  - Automatizace (GitHub Actions): Běhové prostředí pro automatické spouštění testů, linterů a překladů při každé události v repozitáři.

#### 2.1.4 CI (Průběžná integrace) [Continuous Integration]

Vývojová praxe, při níž se změny často integrují a automaticky ověřují sestavením, testy a dalšími kontrolami, aby se integrační chyby odhalily co nejdříve. <sup><span id="loc-29">(</span><a href="#loc-73" role="doc-biblioref">3</a>)</sup>

##### 2.1.4.1 Úvod

### 2.2 Language Models, Chatbots, and Agents (Jazykové modely, chatboti a agenti)

Konceptuální minimum o jazykových modelech a jejich kontextu potřebné pro pochopení agentních systémů. <sup><span id="loc-32">(</span><a href="#loc-74" role="doc-biblioref">4</a>)</sup>

#### 2.2.1 Úvod

V agentickém softwarovém inženýrství vystupuje velký jazykový model (LLM) jako stochastické kognitivní jádro celého systému. Z hlediska vnitřní architektury se jedná o dekodérový transformer (*Decoder-only*; Transformer (Transformerová architektura) [Transformer Architecture] ), jehož typickými představiteli jsou moderní modely řad Claude, GPT či DeepSeek <sup>(<a href="#loc-74" role="doc-biblioref">4</a>)</sup>. Role modelu nespočívá ve vystupování jako vševědoucí orákulum se spolehlivou znalostí okolního světa, nýbrž jako pokročilý generátor hypotéz, kódu a strukturovaných volání nástrojů řízený obdrženým kontextem.

Základní principy fungování modelu zahrnují:

- Autoregresivní predikce: Model zpracovává zadanou sekvenci textu a na jejím základě iterativně předpovídá nejpravděpodobnější následující symboly (tokeny).
- Stochastická povaha: Vzhledem k pravděpodobnostnímu vzorkování může model na totožný vstup reagovat mírně odlišně, což vyžaduje deterministické mantinely v nadřazeném agent harnessu.

Pro efektivní nasazení modelu do vývojového cyklu je nezbytné porozumět způsobu, jakým reprezentuje informace a jaké fyzické limity vymezují jeho operační paměť. theory_body: none, ***Chatbot***<sup>*</sup> — [CZ] Systém založený na jazykovém modelu určený primárně k textové interakci s uživatelem; odpovídá na jednotlivé požadavky, ale sám o sobě nedisponuje autonomní prováděcí smyčkou ani nástroji pro samostatnou modifikaci okolního prostředí.. ***Agent***<sup>*</sup> — [CZ] Softwarový systém řízený jazykovým modelem a vybavený nástroji, který samostatně plánuje, vnímá stav prostředí a provádí vícekrokové akce směřující k dosažení zadaného inženýrského cíle.. Rozdíl mezi nimi nespočívá v odlišném jazykovém modelu, ale v architektuře jeho zapojení do pracovního prostředí.

Srovnání obou přístupů:

- Konverzační chatbot:
  - Reaguje pouze na přímé textové výzvy v uzavřeném okně chatu.
  - Nemá přímý přístup k souborovému systému ani k nástrojům operačního systému.
  - Uživatel musí navržený kód ručně zkopírovat, vložit do projektu a otestovat.
- Autonomní agent:
  - Je vybaven sadou výkonných nástrojů (*tools*) pro práci s repozitářem.
  - Aktivně prozkoumává soubory, modifikuje zdrojový kód, spouští testy a interpretuje jejich návratové kódy.
  - Funguje v autonomní prováděcí smyčce, v níž iterativně reaguje na reálnou odezvu vývojového prostředí.

#### 2.2.2 LLM (Jazykový model) [Large Language Model]

Velký jazykový model je neuronový model trénovaný nad rozsáhlými textovými daty, který autoregresivně zpracovává a generuje posloupnosti tokenů. V této práci vystupuje jako inferenční kognitivní jádro agentního systému. <sup>(<a href="#loc-74" role="doc-biblioref">4</a>)</sup>

##### 2.2.2.1 Úvod

Jazykový model nepracuje přímo se znaky ani slovy v lidském slova smyslu. Vstupní text je nejprve deterministickým algoritmem převeden na číselné reprezentace, se kterými následně počítají maticové vrstvy neuronové sítě.

Tento proces zahrnuje následující pojmy:

- Tokeny a tokenizér ( Tokenizer (Tokenizér) ): Token představuje základní diskrétní jednotku (celé slovo, slabiku či fragment znaků). Převod mezi textem a posloupností číselných tokenů zajišťuje tokenizér (nejčastěji na bázi algoritmu Byte Pair Encoding, BPE).
- ***Embedding (Vektorová reprezentace)***<sup>*</sup> — [CZ] Vícerozměrná vektorová reprezentace tokenů nebo jiných dat, v níž numerické vztahy mezi vektory zachycují užitečné sémantické vztahy mezi reprezentacemi. <sup><span id="loc-36">(</span><a href="#loc-75" role="doc-biblioref">5</a>)</sup> (např. vektorová analogie
  <math><mtext>král</mtext><mo>−</mo><mtext>muž</mtext><mo>+</mo><mtext>žena</mtext><mo>≈</mo><mtext>královna</mtext></math>
  ).
- Jazyková asymetrie tokenizace: Vzhledem k trénovacím datům optimalizovaným primárně pro angličtinu spotřebovávají flektivní jazyky s bohatou diakritikou (včetně češtiny) 2× až 3× více tokenů pro vyjádření téhož významu.

Z inženýrského hlediska je proto žádoucí vést systémové prompty, technické plány i komunikaci mezi nástroji v angličtině, aby se šetřila kapacita kontextu a snížila latence inference.

### 2.3 Agentic Engineering (Agentické inženýrství)

Inženýrská disciplína zaměřená na návrh, orchestraci a provoz agentických systémů kolem jazykových modelů, včetně nástrojů, kontextu, prováděcích smyček, bezpečnostních mantinelů a lidského dohledu. <sup><span id="loc-38">(</span><a href="#loc-76" role="doc-biblioref">6</a>)</sup>

#### 2.3.1 Úvod

#### 2.3.2 Prompt Engineering (Promptové inženýrství)

Inženýrská metodika systematického návrhu, strukturování a optimalizace instrukcí a systémových promptů pro řízení chování a mantinelů jazykového modelu. <sup><span id="loc-41">(</span><a href="#loc-77" role="doc-biblioref">7</a>)</sup>

##### 2.3.2.1 Úvod

#### 2.3.3 Agent Harness (Agentní harness)

Agentní harness — aplikační a orchestrační vrstva obklopující inferenční jádro modelu, která zajišťuje běhové prostředí nástrojů, dynamickou správu kontextového okna, bezpečnostní mantinely, práci se stavem a deterministické řízení životního cyklu požadavku. <sup><span id="loc-44">(</span><a href="#loc-78" role="doc-biblioref">8</a>)</sup>

##### 2.3.3.1 Úvod

Samotné inferenční jádro provádí výhradně matematické maticové operace nad zadanými váhami a vektory tokenů; orchestraci, práci se soubory, správu stavu a bezpečnostní mantinely zajišťuje Agent Harness (Agentní harness) .

Ústřední prováděcí funkcí, která v architektuře harnessu řídí iterativní koordinaci agenta v reálném vývojovém prostředí, je ***Agent Loop (Smyčka ReAct) [ReAct Loop]***<sup>*</sup>. [CZ] Iterativní prováděcí cyklus autonomního agenta založený na vzoru ReAct (Reasoning + Acting), v němž model střídavě uvažuje, volá nástroje a vyhodnocuje pozorování z běhového prostředí..

##### 2.3.3.2 Agent Loop (Smyčka ReAct) [ReAct Loop]

Iterativní prováděcí cyklus autonomního agenta založený na vzoru ReAct (Reasoning + Acting), v němž model střídavě uvažuje, volá nástroje a vyhodnocuje pozorování z běhového prostředí. <sup><span id="loc-47">(</span><a href="#loc-79" role="doc-biblioref">9</a>)</sup>

###### 2.3.3.2.1 Úvod

Agentní smyčka (*Agent Loop*) představuje výkonné jádro celého agent harnessu. Zatímco pasivní konverzační chatbot jednorázově odpoví na uživatelský dotaz a čeká na další vstup, agentní smyčka autonomně udržuje kontinuální iterativní proces, v němž harness opakovaně vyhodnocuje stav repozitáře, volá jazykový model a vykonává požadované systémové akce.

V každé iteraci agentní smyčky harness zajišťuje tyto klíčové funkce:

- Inicializace a správa sezení: Sestavení systémového promptu, dynamická injekce kontextu repozitáře a sledování spotřeby tokenů.
- Běhové prostředí nástrojů: Bezpečné spouštění příkazů v operačním systému a zpětné předávání výstupů modelu.
- Řízení stavových přechodů a vynucování mantinelů ( Loop Engineering (Inženýrství prováděcí smyčky) [Execution-loop Engineering] ): Dohled nad dodržováním procesních pravidel, detekce a zastavení uvíznutých běhů a vynucování lidských schvalovacích bran.

Vnitřní kognitivní krok modelu uvnitř smyčky se řídí operačním vzorem ReAct (*Reasoning + Acting*) <sup>(<a href="#loc-79" role="doc-biblioref">9</a>)</sup>, který propojuje rozvahu s přímým jednáním. Tento prováděcí cyklus sestává ze čtyř navazujících fází znázorněných na [Obrázek 1](#fig-react-loop):

1. Rozvaha (*Thought*): Model vyhodnotí aktuální stav kontextu a formuluje svůj nejbližší záměr.
2. Volání nástroje (*Tool Call*): Emitování strukturovaného požadavku na provedení konkrétní akce s určenými parametry.
3. Vykonání a pozorování (*Observation*): Harness bezpečně provede akci v systému a výstup (výpis souboru či chybovou zprávu) vloží zpět do kontextu.
4. Navazující iterace: Model v dalším tahu analyzuje získanou odezvu a rozhoduje o dalším kroku.

Kvalita a provozní spolehlivost celého systému tak závisí v prvé řadě na robustnosti architektury harnessu a spolehlivosti jeho agentní smyčky, nikoliv pouze na samotném jazykovém modelu.

![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5MjAgNTQwIiB3aWR0aD0iOTIwIiBoZWlnaHQ9IjU0MCI+CiAgPGRlZnM+CiAgICA8IS0tIEFycm93aGVhZCBtYXJrZXJzIC0tPgogICAgPG1hcmtlciBpZD0iYXJyb3ciIHZpZXdCb3g9IjAgMCAxMCAxMCIgcmVmWD0iNiIgcmVmWT0iNSIgbWFya2VyV2lkdGg9IjYiIG1hcmtlckhlaWdodD0iNiIgb3JpZW50PSJhdXRvLXN0YXJ0LXJldmVyc2UiPgogICAgICA8cGF0aCBkPSJNIDAgMSBMIDEwIDUgTCAwIDkgeiIgZmlsbD0iIzQ3NTU2OSIgLz4KICAgIDwvbWFya2VyPgogICAgPG1hcmtlciBpZD0iYXJyb3ctYmx1ZSIgdmlld0JveD0iMCAwIDEwIDEwIiByZWZYPSI2IiByZWZZPSI1IiBtYXJrZXJXaWR0aD0iNiIgbWFya2VySGVpZ2h0PSI2IiBvcmllbnQ9ImF1dG8tc3RhcnQtcmV2ZXJzZSI+CiAgICAgIDxwYXRoIGQ9Ik0gMCAxIEwgMTAgNSBMIDAgOSB6IiBmaWxsPSIjMjU2M2ViIiAvPgogICAgPC9tYXJrZXI+CiAgICA8bWFya2VyIGlkPSJhcnJvdy1lbWVyYWxkIiB2aWV3Qm94PSIwIDAgMTAgMTAiIHJlZlg9IjYiIHJlZlk9IjUiIG1hcmtlcldpZHRoPSI2IiBtYXJrZXJIZWlnaHQ9IjYiIG9yaWVudD0iYXV0by1zdGFydC1yZXZlcnNlIj4KICAgICAgPHBhdGggZD0iTSAwIDEgTCAxMCA1IEwgMCA5IHoiIGZpbGw9IiMwNTk2NjkiIC8+CiAgICA8L21hcmtlcj4KICAgIDxtYXJrZXIgaWQ9ImFycm93LXZpb2xldCIgdmlld0JveD0iMCAwIDEwIDEwIiByZWZYPSI2IiByZWZZPSI1IiBtYXJrZXJXaWR0aD0iNiIgbWFya2VySGVpZ2h0PSI2IiBvcmllbnQ9ImF1dG8tc3RhcnQtcmV2ZXJzZSI+CiAgICAgIDxwYXRoIGQ9Ik0gMCAxIEwgMTAgNSBMIDAgOSB6IiBmaWxsPSIjN2MzYWVkIiAvPgogICAgPC9tYXJrZXI+CiAgICA8bWFya2VyIGlkPSJhcnJvdy1hbWJlciIgdmlld0JveD0iMCAwIDEwIDEwIiByZWZYPSI2IiByZWZZPSI1IiBtYXJrZXJXaWR0aD0iNiIgbWFya2VySGVpZ2h0PSI2IiBvcmllbnQ9ImF1dG8tc3RhcnQtcmV2ZXJzZSI+CiAgICAgIDxwYXRoIGQ9Ik0gMCAxIEwgMTAgNSBMIDAgOSB6IiBmaWxsPSIjZDk3NzA2IiAvPgogICAgPC9tYXJrZXI+CgogICAgPCEtLSBGaWx0ZXJzIGZvciBzdWJ0bGUgc2hhZG93IC0tPgogICAgPGZpbHRlciBpZD0ic2hhZG93IiB4PSItNSUiIHk9Ii01JSIgd2lkdGg9IjExMCUiIGhlaWdodD0iMTE1JSIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgPGZlRHJvcFNoYWRvdyBkeD0iMCIgZHk9IjIiIHN0ZERldmlhdGlvbj0iMyIgZmxvb2QtY29sb3I9IiMwZjE3MmEiIGZsb29kLW9wYWNpdHk9IjAuMDgiIC8+CiAgICA8L2ZpbHRlcj4KICA8L2RlZnM+CgogIDxzdHlsZT4KICAgIC50aXRsZS10ZXh0IHsgZm9udC1mYW1pbHk6ICdDYXJsaXRvJywgJ0NhbGFkZWEnLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIHNhbnMtc2VyaWY7IGZvbnQtd2VpZ2h0OiBib2xkOyBmb250LXNpemU6IDE0cHg7IH0KICAgIC5zdWItdGV4dCB7IGZvbnQtZmFtaWx5OiAnQ2FybGl0bycsICdDYWxhZGVhJywgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBzYW5zLXNlcmlmOyBmb250LXNpemU6IDExLjVweDsgfQogICAgLmVkZ2UtbGFiZWwgeyBmb250LWZhbWlseTogJ0NhcmxpdG8nLCAnQ2FsYWRlYScsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgc2Fucy1zZXJpZjsgZm9udC1zaXplOiAxMXB4OyBmb250LXdlaWdodDogNjAwOyBmaWxsOiAjNDc1NTY5OyB9CiAgICAuY29kZS1iYWRnZSB7IGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7IGZvbnQtc2l6ZTogMTAuNXB4OyB9CiAgICAubG9vcC1iYWRnZSB7IGZvbnQtZmFtaWx5OiAnQ2FybGl0bycsICdDYWxhZGVhJywgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBzYW5zLXNlcmlmOyBmb250LXdlaWdodDogYm9sZDsgZm9udC1zaXplOiAxMS41cHg7IGZpbGw6ICMwNDc4NTc7IH0KICA8L3N0eWxlPgoKICA8IS0tIEJhY2tncm91bmQgY29udGFpbmVyIC0tPgogIDxyZWN0IHg9IjEwIiB5PSIxMCIgd2lkdGg9IjkwMCIgaGVpZ2h0PSI1MjAiIHJ4PSIxNiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjZTJlOGYwIiBzdHJva2Utd2lkdGg9IjEuNSIgLz4KCiAgPCEtLSBPdXRlciBoYXJuZXNzIGJvdW5kYXJ5IGJveCAtLT4KICA8cmVjdCB4PSIyMzAiIHk9IjI4IiB3aWR0aD0iNjYwIiBoZWlnaHQ9IjQ4NSIgcng9IjEyIiBmaWxsPSIjZjhmYWZjIiBzdHJva2U9IiNjYmQ1ZTEiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtZGFzaGFycmF5PSI2LDQiIC8+CiAgPHRleHQgeD0iMjUwIiB5PSI1MiIgY2xhc3M9ImVkZ2UtbGFiZWwiIGZpbGw9IiM2NDc0OGIiIGZvbnQtc2l6ZT0iMTIiPkFHRU5UIEhBUk5FU1MgJmFtcDsgUFJPU1TFmEVEw408L3RleHQ+CgogIDwhLS0gMS4gVcW+aXZhdGVsIChVc2VyKSAtLT4KICA8ZyBmaWx0ZXI9InVybCgjc2hhZG93KSI+CiAgICA8cmVjdCB4PSIzNSIgeT0iMTQ1IiB3aWR0aD0iMTU1IiBoZWlnaHQ9IjgwIiByeD0iMTAiIGZpbGw9IiNmMWY1ZjkiIHN0cm9rZT0iIzk0YTNiOCIgc3Ryb2tlLXdpZHRoPSIxLjgiIC8+CiAgICA8Y2lyY2xlIGN4PSIxMTIuNSIgY3k9IjE3MyIgcj0iMTQiIGZpbGw9IiNjYmQ1ZTEiIC8+CiAgICA8cGF0aCBkPSJNIDk4IDIwNiBBIDE0IDE0IDAgMCAxIDEyNyAyMDYgWiIgZmlsbD0iI2NiZDVlMSIgLz4KICAgIDx0ZXh0IHg9IjExMi41IiB5PSIyMTUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGNsYXNzPSJ0aXRsZS10ZXh0IiBmaWxsPSIjMGYxNzJhIj5Vxb5pdmF0ZWw8L3RleHQ+CiAgPC9nPgoKICA8IS0tIEFycm93IFVzZXIgLT4gQ29udGV4dCAtLT4KICA8cGF0aCBkPSJNIDE5MCAxNzUgTCAyNjggMTc1IiBmaWxsPSJub25lIiBzdHJva2U9IiMyNTYzZWIiIHN0cm9rZS13aWR0aD0iMiIgbWFya2VyLWVuZD0idXJsKCNhcnJvdy1ibHVlKSIgLz4KICA8cmVjdCB4PSIxOTUiIHk9IjE1MyIgd2lkdGg9IjcwIiBoZWlnaHQ9IjE4IiByeD0iNCIgZmlsbD0iI2VmZjZmZiIgLz4KICA8dGV4dCB4PSIyMzAiIHk9IjE2NiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgY2xhc3M9ImVkZ2UtbGFiZWwiIGZpbGw9IiMxZDRlZDgiPjEuIFphZMOhbsOtPC90ZXh0PgoKICA8IS0tIDIuIEtvbnRleHQgYSBoaXN0b3JpZSAoQ29udGV4dCBXaW5kb3cpIC0tPgogIDxnIGZpbHRlcj0idXJsKCNzaGFkb3cpIj4KICAgIDxyZWN0IHg9IjI3MCIgeT0iMTMwIiB3aWR0aD0iMTgwIiBoZWlnaHQ9IjExMCIgcng9IjEwIiBmaWxsPSIjZWVmMmZmIiBzdHJva2U9IiM2MzY2ZjEiIHN0cm9rZS13aWR0aD0iMiIgLz4KICAgIDxyZWN0IHg9IjI4MiIgeT0iMTQyIiB3aWR0aD0iMTU2IiBoZWlnaHQ9IjI0IiByeD0iNSIgZmlsbD0iI2UwZTdmZiIgLz4KICAgIDx0ZXh0IHg9IjM2MCIgeT0iMTU4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBjbGFzcz0idGl0bGUtdGV4dCIgZmlsbD0iIzMxMmU4MSI+S29udGV4dCBrb252ZXJ6YWNlPC90ZXh0PgogICAgPHRleHQgeD0iMzYwIiB5PSIxODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGNsYXNzPSJzdWItdGV4dCIgZmlsbD0iIzQzMzhjYSI+4oCiIFN5c3RlbSBwcm9tcHQgJmFtcDsgcHJhdmlkbGE8L3RleHQ+CiAgICA8dGV4dCB4PSIzNjAiIHk9IjE5OCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgY2xhc3M9InN1Yi10ZXh0IiBmaWxsPSIjNDMzOGNhIj7igKIgSGlzdG9yaWUgenByw6F2IChUdXJucyk8L3RleHQ+CiAgICA8dGV4dCB4PSIzNjAiIHk9IjIxNiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgY2xhc3M9InN1Yi10ZXh0IiBmaWxsPSIjNDMzOGNhIj7igKIgVsO9c3R1cHkgbsOhc3Ryb2rFryAoTG9nKTwvdGV4dD4KICA8L2c+CgogIDwhLS0gQXJyb3cgQ29udGV4dCAtPiBJbmZlcmVuY2UgLS0+CiAgPHBhdGggZD0iTSA0NTAgMTg1IEwgNTE4IDE4NSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjN2MzYWVkIiBzdHJva2Utd2lkdGg9IjIiIG1hcmtlci1lbmQ9InVybCgjYXJyb3ctdmlvbGV0KSIgLz4KICA8cmVjdCB4PSI0NTYiIHk9IjE2NSIgd2lkdGg9IjYwIiBoZWlnaHQ9IjE4IiByeD0iNCIgZmlsbD0iI2Y1ZjNmZiIgLz4KICA8dGV4dCB4PSI0ODYiIHk9IjE3OCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgY2xhc3M9ImVkZ2UtbGFiZWwiIGZpbGw9IiM2ZDI4ZDkiPlRva2VueTwvdGV4dD4KCiAgPCEtLSAzLiBJbmZlcmVuY2UgJiBNecWhbGVua2EgKFJlYXNvbmluZyAvIFRob3VnaHQpIC0tPgogIDxnIGZpbHRlcj0idXJsKCNzaGFkb3cpIj4KICAgIDxyZWN0IHg9IjUyMCIgeT0iMTE1IiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE0MCIgcng9IjEwIiBmaWxsPSIjZmFmNWZmIiBzdHJva2U9IiNhODU1ZjciIHN0cm9rZS13aWR0aD0iMiIgLz4KICAgIDxyZWN0IHg9IjUzMiIgeT0iMTI3IiB3aWR0aD0iMTc2IiBoZWlnaHQ9IjI2IiByeD0iNSIgZmlsbD0iI2YzZThmZiIgLz4KICAgIDx0ZXh0IHg9IjYyMCIgeT0iMTQ1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBjbGFzcz0idGl0bGUtdGV4dCIgZmlsbD0iIzU4MWM4NyI+TExNIEluZmVyZW5jZSAmYW1wOyBSb3p2YWhhPC90ZXh0PgogICAgPHRleHQgeD0iNjIwIiB5PSIxNzIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGNsYXNzPSJ0aXRsZS10ZXh0IiBmaWxsPSIjN2UyMmNlIj7igJ5NecWhbGVua2HigJwgKFRob3VnaHQpPC90ZXh0PgogICAgPHRleHQgeD0iNjIwIiB5PSIxOTMiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGNsYXNzPSJzdWItdGV4dCIgZmlsbD0iIzZiMjFhOCI+TW9kZWwgYW5hbHl6dWplIHN0YXYsPC90ZXh0PgogICAgPHRleHQgeD0iNjIwIiB5PSIyMTAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGNsYXNzPSJzdWItdGV4dCIgZmlsbD0iIzZiMjFhOCI+cGzDoW51amUgZGFsxaHDrSBrcm9rIGEgcm96aG9kbmU6PC90ZXh0PgogICAgPHRleHQgeD0iNjIwIiB5PSIyMzUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGNsYXNzPSJlZGdlLWxhYmVsIiBmaWxsPSIjNTgxYzg3Ij5Ba2NlIHZzLiBEb2tvbsSNZW7DrTwvdGV4dD4KICA8L2c+CgogIDwhLS0gQnJhbmNoIEE6IE9kZXZ6ZMOhbsOtIHbDvXNsZWRrdSAoRmluYWwgT3V0cHV0KSAtLT4KICA8cGF0aCBkPSJNIDYyMCAxMTUgTCA2MjAgNzggTCAxMTIuNSA3OCBMIDExMi41IDE0MyIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDU5NjY5IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1kYXNoYXJyYXk9IjUsNCIgbWFya2VyLWVuZD0idXJsKCNhcnJvdy1lbWVyYWxkKSIgLz4KICA8cmVjdCB4PSIzMDAiIHk9IjY2IiB3aWR0aD0iMTgwIiBoZWlnaHQ9IjI0IiByeD0iNCIgZmlsbD0iI2VjZmRmNSIgc3Ryb2tlPSIjYTdmM2QwIiAvPgogIDx0ZXh0IHg9IjM5MCIgeT0iODIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGNsYXNzPSJlZGdlLWxhYmVsIiBmaWxsPSIjMDQ3ODU3Ij5Dw61sIHNwbG7Em246IEZpbsOhbG7DrSBvZHBvdsSbxI88L3RleHQ+CgogIDwhLS0gQnJhbmNoIEI6IFRvb2wgQ2FsbCAtLT4KICA8cGF0aCBkPSJNIDYyMCAyNTUgTCA2MjAgMzA4IiBmaWxsPSJub25lIiBzdHJva2U9IiNkOTc3MDYiIHN0cm9rZS13aWR0aD0iMiIgbWFya2VyLWVuZD0idXJsKCNhcnJvdy1hbWJlcikiIC8+CiAgPHJlY3QgeD0iNTQ4IiB5PSIyNzIiIHdpZHRoPSIxNDQiIGhlaWdodD0iMjAiIHJ4PSI0IiBmaWxsPSIjZmZmYmViIiAvPgogIDx0ZXh0IHg9IjYyMCIgeT0iMjg2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBjbGFzcz0iZWRnZS1sYWJlbCIgZmlsbD0iI2I0NTMwOSI+UG90xZllYmEgYWtjZSAoQWN0KTwvdGV4dD4KCiAgPCEtLSA0LiBUb29sIENhbGwgKEpTT04vQmFzaCkgLS0+CiAgPGcgZmlsdGVyPSJ1cmwoI3NoYWRvdykiPgogICAgPHJlY3QgeD0iNTI1IiB5PSIzMTAiIHdpZHRoPSIxOTAiIGhlaWdodD0iODYiIHJ4PSIxMCIgZmlsbD0iI2ZmZmJlYiIgc3Ryb2tlPSIjZjU5ZTBiIiBzdHJva2Utd2lkdGg9IjIiIC8+CiAgICA8cmVjdCB4PSI1MzciIHk9IjMyMiIgd2lkdGg9IjE2NiIgaGVpZ2h0PSIyNCIgcng9IjUiIGZpbGw9IiNmZWYzYzciIC8+CiAgICA8dGV4dCB4PSI2MjAiIHk9IjMzOCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgY2xhc3M9InRpdGxlLXRleHQiIGZpbGw9IiM3ODM1MGYiPlZvbMOhbsOtIG7DoXN0cm9qZSAoVG9vbCBDYWxsKTwvdGV4dD4KICAgIDx0ZXh0IHg9IjYyMCIgeT0iMzYyIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBjbGFzcz0iY29kZS1iYWRnZSIgZmlsbD0iIzkyNDAwZSI+eyJuYW1lIjogImdyZXAiLCAiYXJncyI6IHsuLi59fTwvdGV4dD4KICAgIDx0ZXh0IHg9IjYyMCIgeT0iMzgwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBjbGFzcz0ic3ViLXRleHQiIGZpbGw9IiNiNDUzMDkiPm5lYm8gQmFzaCAvIENvZGUgZXhlY3V0aW9uPC90ZXh0PgogIDwvZz4KCiAgPCEtLSBBcnJvdyBUb29sIENhbGwgLT4gRXhlY3V0aW9uIEVudmlyb25tZW50IC0tPgogIDxwYXRoIGQ9Ik0gNzE1IDM1MyBMIDc1OCAzNTMiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzQ3NTU2OSIgc3Ryb2tlLXdpZHRoPSIyIiBtYXJrZXItZW5kPSJ1cmwoI2Fycm93KSIgLz4KCiAgPCEtLSA1LiBWw71rb25uw6kgcHJvc3TFmWVkw60gKEV4ZWN1dGlvbiBFbnZpcm9ubWVudCkgLS0+CiAgPGcgZmlsdGVyPSJ1cmwoI3NoYWRvdykiPgogICAgPHJlY3QgeD0iNzYwIiB5PSIzMDAiIHdpZHRoPSIxMjAiIGhlaWdodD0iMTEwIiByeD0iMTAiIGZpbGw9IiNmMGZkZmEiIHN0cm9rZT0iIzBkOTQ4OCIgc3Ryb2tlLXdpZHRoPSIyIiAvPgogICAgPHJlY3QgeD0iNzY4IiB5PSIzMTAiIHdpZHRoPSIxMDQiIGhlaWdodD0iMjQiIHJ4PSI1IiBmaWxsPSIjY2NmYmYxIiAvPgogICAgPHRleHQgeD0iODIwIiB5PSIzMjYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGNsYXNzPSJ0aXRsZS10ZXh0IiBmaWxsPSIjMTE1ZTU5Ij5Qcm9zdMWZZWTDrTwvdGV4dD4KICAgIDx0ZXh0IHg9IjgyMCIgeT0iMzQ4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBjbGFzcz0ic3ViLXRleHQiIGZpbGw9IiMwZjc2NmUiPuKAoiBTYW5kYm94IC8gT1M8L3RleHQ+CiAgICA8dGV4dCB4PSI4MjAiIHk9IjM2OCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgY2xhc3M9InN1Yi10ZXh0IiBmaWxsPSIjMGY3NjZlIj7igKIgU291Ym9yeSAvIEdpdDwvdGV4dD4KICAgIDx0ZXh0IHg9IjgyMCIgeT0iMzg4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBjbGFzcz0ic3ViLXRleHQiIGZpbGw9IiMwZjc2NmUiPuKAoiBNQ1Agc2VydmVyeTwvdGV4dD4KICA8L2c+CgogIDwhLS0gQXJyb3cgRXhlY3V0aW9uIC0+IE9ic2VydmF0aW9uIC0tPgogIDxwYXRoIGQ9Ik0gODIwIDQxMCBMIDgyMCA0NTIgTCA3MjIgNDUyIiBmaWxsPSJub25lIiBzdHJva2U9IiMwNTk2NjkiIHN0cm9rZS13aWR0aD0iMiIgbWFya2VyLWVuZD0idXJsKCNhcnJvdy1lbWVyYWxkKSIgLz4KCiAgPCEtLSA2LiBWw71zdHVwIG7DoXN0cm9qZSAoT2JzZXJ2YXRpb24pIC0tPgogIDxnIGZpbHRlcj0idXJsKCNzaGFkb3cpIj4KICAgIDxyZWN0IHg9IjUyMCIgeT0iNDE1IiB3aWR0aD0iMjAwIiBoZWlnaHQ9Ijc1IiByeD0iMTAiIGZpbGw9IiNmMGZkZjQiIHN0cm9rZT0iIzE2YTM0YSIgc3Ryb2tlLXdpZHRoPSIyIiAvPgogICAgPHJlY3QgeD0iNTMyIiB5PSI0MjUiIHdpZHRoPSIxNzYiIGhlaWdodD0iMjQiIHJ4PSI1IiBmaWxsPSIjZGNmY2U3IiAvPgogICAgPHRleHQgeD0iNjIwIiB5PSI0NDEiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGNsYXNzPSJ0aXRsZS10ZXh0IiBmaWxsPSIjMTQ1MzJkIj5Qb3pvcm92w6Fuw60gKE9ic2VydmF0aW9uKTwvdGV4dD4KICAgIDx0ZXh0IHg9IjYyMCIgeT0iNDYzIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBjbGFzcz0ic3ViLXRleHQiIGZpbGw9IiMxNTgwM2QiPlbDvXN0dXAgeiBuw6FzdHJvamUgKHN0ZG91dC9zdGRlcnIpPC90ZXh0PgogICAgPHRleHQgeD0iNjIwIiB5PSI0NzgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGNsYXNzPSJzdWItdGV4dCIgZmlsbD0iIzE2NjUzNCI+VsO9c2xlZGVrIHZ5aGxlZMOhdsOhbsOtIC8gxI10ZW7DrSBzb3Vib3J1PC90ZXh0PgogIDwvZz4KCiAgPCEtLSBSZUFjdCBGZWVkYmFjayBMb29wIEFycm93OiBPYnNlcnZhdGlvbiAtPiBDb250ZXh0IFdpbmRvdyAtLT4KICA8cGF0aCBkPSJNIDUyMCA0NTIgTCAzNjAgNDUyIEwgMzYwIDI0MiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDU5NjY5IiBzdHJva2Utd2lkdGg9IjIuNSIgbWFya2VyLWVuZD0idXJsKCNhcnJvdy1lbWVyYWxkKSIgLz4KCiAgPCEtLSBGZWVkYmFjayBMb29wIEJhZGdlICYgTGFiZWwgLS0+CiAgPGcgZmlsdGVyPSJ1cmwoI3NoYWRvdykiPgogICAgPHJlY3QgeD0iMzc1IiB5PSI0MzUiIHdpZHRoPSIxMjUiIGhlaWdodD0iMzQiIHJ4PSI2IiBmaWxsPSIjZGNmY2U3IiBzdHJva2U9IiMxMGI5ODEiIHN0cm9rZS13aWR0aD0iMS41IiAvPgogICAgPHRleHQgeD0iNDM3LjUiIHk9IjQ1MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgY2xhc3M9Imxvb3AtYmFkZ2UiPlJlQWN0IFNNWcSMS0E8L3RleHQ+CiAgICA8dGV4dCB4PSI0MzcuNSIgeT0iNDYzIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBjbGFzcz0ic3ViLXRleHQiIGZpbGw9IiMwNjVmNDYiPlpwxJt0IGRvIGtvbnRleHR1PC90ZXh0PgogIDwvZz4KCiAgPCEtLSBBbm5vdGF0aW9uIGZvb3RlciBpbnNpZGUgaGFybmVzcyBib3ggLS0+CiAgPHRleHQgeD0iMjUwIiB5PSI1MDAiIGNsYXNzPSJzdWItdGV4dCIgZmlsbD0iIzY0NzQ4YiIgZm9udC1zdHlsZT0iaXRhbGljIj4KICAgIEhhcm5lc3Mgc3ByYXZ1amUga29udGV4dCwgdm9sw6Fuw60gbsOhc3Ryb2rFryBhIGN5a2x1cyBvcGFrdWplLCBkb2t1ZCBhZ2VudCBuZW9obMOhc8OtIGhvdG92byBuZWJvIG5ldnnFvmFkdWplIHZzdHVwIMSNbG92xJtrYS4KICA8L3RleHQ+Cjwvc3ZnPgo=)

*Obrázek 1: Architektura autonomní ReAct smyčky (Reasoning + Acting) a tok dat mezi uživatelem, kontextem, modelem a výkonným prostředím.*

##### 2.3.3.3 Tool Calling (Vyvolávání nástrojů)

Mechanismus, kterým model strukturovaně žádá harness o provedení externí akce nebo funkce s validovanými parametry. <sup><span id="loc-50">(</span><a href="#loc-80" role="doc-biblioref">10</a>)</sup>

###### 2.3.3.3.1 Úvod

##### 2.3.3.4 Skills (Dovednosti)

Znovupoužitelné modulární balíčky instrukcí (typicky definovaných v souboru SKILL.md), procedurálních pravidel a volitelných pomocných skriptů či zdrojů, které harness dynamicky načítá do kontextu agenta podle povahy řešeného úkolu. <sup><span id="loc-53">(</span><a href="#loc-81" role="doc-biblioref">11</a>)</sup>

###### 2.3.3.4.1 Úvod

Se vzrůstající komplexitou úloh nelze veškeré instrukce, skripty a doménové znalosti vkládat do základního systémového promptu. K modulárnímu rozšíření schopností agenta slouží ***Skills (Dovednosti)***<sup>*</sup>.

Architektura dovedností staví na následujících principech:

- Definiční soubor `SKILL.md`: Dovednost tvoří adresář obsahující definiční soubor se strukturovanou hlavičkou (YAML frontmatter vymezující název a popis role) a detailním návodem k použití.
- Dynamické načítání pro úsporu kontextu: Do výchozího promptu se vloží pouze stručný přehled dostupných dovedností. Kompletní instrukce a skripty se do kontextu načtou až v okamžiku, kdy agent danou dovednost explicitně vyvolá.
- Skripty ( Script (Skript) ) a záchytné body ( Hook (Událostní záchytný bod) [Event Hook] ): Dovednosti mohou obsahovat deterministické skripty pro rutinní transformace kódu a událostní háčky vyvolávané při stavových přechodech harnessu.

Kromě kontextových dovedností využívají pokročilé řídicí architektury také programové ***Plugins (Rozšíření)***<sup>*</sup> — [CZ] Rozšíření běžící přímo v prostředí harnessu, která rozšiřují jeho exekuční jádro o specializované systémové adaptéry, ovladače nástrojů a deterministické záchytné body.. Zatímco *Skills* fungují jako kontextové procedury a instrukce interpretované modelem, pluginy rozšiřují samotný harness na nativní systémové úrovni.

##### 2.3.3.5 Context Engineering (Kontextové inženýrství)

Systematický návrh, výběr, pořadí a životní cyklus informací zpřístupňovaných modelu v aktivním kontextu, včetně instrukcí, paměti, nástrojových výsledků a externě načtených dat. <sup><span id="loc-56">(</span><a href="#loc-82" role="doc-biblioref">12</a>)</sup>

###### 2.3.3.5.1 Úvod

##### 2.3.3.6 Graph Engineering (Inženýrství pracovních grafů) [Workflow-graph Engineering]

Návrh agentních nebo automatizačních pracovních postupů jako explicitních grafů uzlů, závislostí a přechodů namísto jediné neomezené smyčky. <sup><span id="loc-59">(</span><a href="#loc-83" role="doc-biblioref">13</a>)</sup>

###### 2.3.3.6.1 Úvod

Monolitická agentní smyčka selhává při řešení komplexních, vícefázových úloh. Pro spolehlivé škálování se v moderních systémech uplatňuje hierarchická dělba práce a formalizace procesu do podoby grafu.

## 3 DarkFactory: Architektura harnessu - Praktická část

Úvod

### 3.1 Development Environment and Practices (Vývojové prostředí a praxe)

Soubor verzovacích, plánovacích, integračních a kontrolních postupů tvořících deterministické prostředí pro agentní vývoj softwaru. <sup>(<a href="#loc-71" role="doc-biblioref">1</a>)</sup>

#### 3.1.1 Úvod

#### 3.1.2 Version control (Správa verzí)

Správa a sledování změn zdrojových souborů a dalších verzovaných artefaktů tak, aby bylo možné změny bezpečně větvit, slučovat, auditovat a v případě potřeby vracet. <sup>(<a href="#loc-72" role="doc-biblioref">2</a>)</sup>

##### 3.1.2.1 Úvod

##### 3.1.2.2 Git

Distribuovaný systém správy verzí, který uchovává historii projektu, podporuje větvení a slučování změn a umožňuje deterministický návrat k předchozím stavům repozitáře. <sup>(<a href="#loc-72" role="doc-biblioref">2</a>)</sup>

###### 3.1.2.2.1 Úvod

## 4 Results and Discussion (Výsledky a diskuse)

## 5 Conclusion (Závěr)

## Seznam zdrojů

- [1.](#loc-19) SOMMERVILLE, Ian. *Software Engineering.*10. Pearson, 2016. ISBN 978-0-13-394303-0.
- [2.](#loc-24) CHACON, Scott a STRAUB, Ben. *Pro Git.*2. New York : Apress, 2014. ISBN 978-1-4842-0076-6.
- [3.](#loc-29) HUMBLE, Jez a FARLEY, David. *Continuous Delivery: Reliable Software Releases through Build, Test, and Deployment Automation.*Boston : Addison-Wesley, 2010. ISBN 978-0-321-60191-9.
- [4.](#loc-32) VASWANI, Ashish, SHAZEER, Noam, PARMAR, Niki, USZKOREIT, Jakob, JONES, Llion, GOMEZ, Aidan N., KAISER, Łukasz a POLOSUKHIN, Illia. Attention Is All You Need. *arXiv preprint arXiv:1706.03762.* Online. 2017. Available from: [https://arxiv.org/abs/1706.03762](https://arxiv.org/abs/1706.03762)
- [5.](#loc-36) MIKOLOV, Tomas, CHEN, Kai, CORRADO, Greg a DEAN, Jeffrey. Efficient Estimation of Word Representations in Vector Space. *arXiv preprint arXiv:1301.3781.* Online. 2013. Available from: [https://arxiv.org/abs/1301.3781](https://arxiv.org/abs/1301.3781)
- [6.](#loc-38) WANG, Lei, MA, Chen, FENG, Xueyang, ZHANG, Zeyu, YANG, Hao, ZHANG, Jingsen, CHEN, Zhiyuan, TANG, Jiakai, CHEN, Xu, LIN, Yankai, ZHAO, Wayne Xin, WEI, Zhewei a WEN, Ji-Rong. A Survey on Large Language Model Based Autonomous Agents. *Frontiers of Computer Science.* Online. 2024. Vol. 18, no. 6, p. 186345. Available from: [https://arxiv.org/abs/2308.11432](https://arxiv.org/abs/2308.11432)
- [7.](#loc-41) ANTHROPIC. Prompt Engineering overview. Online. 2026. Available from: [https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview)
- [8.](#loc-44) Deepseek Harness. *arXiv preprint arXiv:2608.25512.* Online. 2026. Available from: [https://arxiv.org/abs/2608.25512](https://arxiv.org/abs/2608.25512)
- [9.](#loc-47) YAO, Shunyu, ZHAO, Jeffrey, YU, Dian, DU, Nan, SHAFRAN, Izhak, NARASIMHAN, Karthik a CAO, Yuan. ReAct: Synergizing Reasoning and Acting in Language Models. *arXiv preprint arXiv:2210.03629.* Online. 2022. Available from: [https://arxiv.org/abs/2210.03629](https://arxiv.org/abs/2210.03629)
- [10.](#loc-50) SCHICK, Timo, DWIVEDI-YU, Jane, DESS\̀I, Roberto, RAILEANU, Roberta, LOMELI, Maria, ZETTLEMOYER, Luke, CANCEDDA, Nicola a SCIALOM, Thomas. Toolformer: Language Models Can Teach Themselves to Use Tools. *Advances in Neural Information Processing Systems.* Online. 2023. Vol. 36, p. 68539–68551. Available from: [https://arxiv.org/abs/2302.04761](https://arxiv.org/abs/2302.04761)
- [11.](#loc-53) ANTHROPIC. Building effective agents. Online. 2024. Available from: [https://www.anthropic.com/research/building-effective-agents](https://www.anthropic.com/research/building-effective-agents)
- [12.](#loc-56) LIU, Nelson F., LIN, Kevin, HEWITT, John, PARANJAPE, Ashwin, BEVILACQUA, Michele, PETRONI, Fabio a LIANG, Percy. Lost in the Middle: How Language Models Use Long Contexts. *Transactions of the Association for Computational Linguistics.* Online. 2024. Vol. 12, p. 157–173. Available from: [https://arxiv.org/abs/2307.03172](https://arxiv.org/abs/2307.03172)
- [13.](#loc-59) WU, Qingyun, BANSAL, Gagan, ZHANG, Jieyu, WU, Yiran, LI, Beibin, ZHU, Erkang, JIANG, Li, ZHANG, Xiaoyun, ZHANG, Chi, LIU, Jue, AWADALLAH, Ahmed Hassan, WHITE, Ryen W., BURGER, Doug a WANG, Chi. AutoGen: Enabling Next-Gen LLM Applications via Multi-Agent Conversation. *arXiv preprint arXiv:2308.08155.* Online. 2023. Available from: [https://arxiv.org/abs/2308.08155](https://arxiv.org/abs/2308.08155)
- 14.  MARIUS, Patrik. DarkFactory: autonomous, governed software engineering pipelines. Online. 2026. [Accessed 8 září 2026]. Available from: [https://github.com/marius-patrik/DarkFactory](https://github.com/marius-patrik/DarkFactory)
- 15.  ANTHROPIC. Model Context Protocol documentation. Online. 2026. Available from: [https://modelcontextprotocol.io/docs/2026-07-28/getting-started/intro#explore-mcp](https://modelcontextprotocol.io/docs/2026-07-28/getting-started/intro#explore-mcp)
- 16.  DAO, Tri, FU, Daniel Y., ERMON, Stefano, RUDRA, Atri a RÉ, Christopher. FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness. *Advances in Neural Information Processing Systems.* Online. 2022. Vol. 35, p. 16344–16359. Available from: [https://arxiv.org/abs/2205.14135](https://arxiv.org/abs/2205.14135)
- 17.  AINSLIE, Joshua, LEE-THORP, James, JONG, Michiel de, ZEMLYANSKIY, Yury, LEBRÓN, Federico a SANGHAI, Sumit. GQA: Training Generalized Multi-Query Transformer Models from Multi-Head Checkpoints. *arXiv preprint arXiv:2305.13245.* Online. 2023. Available from: [https://arxiv.org/abs/2305.13245](https://arxiv.org/abs/2305.13245)
- 18.  WOOLDRIDGE, Michael a JENNINGS, Nicholas R. Intelligent Agents: Theory and Practice. *The Knowledge Engineering Review*. 1995. Vol. 10, no. 2, p. 115–152.
- 19.  LEWIS, Patrick, PEREZ, Ethan, PIKTUS, Aleksandra, PETRONI, Fabio, KARPUKHIN, Vladimir, GOYAL, Naman, KÜTTLER, Heinrich, LEWIS, Mike, YIH, Wen-tau, ROCKTÄSCHEL, Tim, RIEDEL, Sebastian a KIELA, Douwe. Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks. *Advances in Neural Information Processing Systems.* Online. 2020. Vol. 33, p. 9459–9474. Available from: [https://arxiv.org/abs/2005.11401](https://arxiv.org/abs/2005.11401)
- 20.  JIANG, Huiqiang, WU, Qianhui, LIN, Chin-Yew, YANG, Yuqing a QIU, Lili. LLMLingua: Compressing Context for Accelerated Inference of Large Language Models. *arXiv preprint arXiv:2310.05736.* Online. 2023. Available from: [https://arxiv.org/abs/2310.05736](https://arxiv.org/abs/2310.05736)
- 21.  SHINN, Noah, CASSANO, Federico, GOPINATH, Ashwin, NARASIMHAN, Karthik a YAO, Shunyu. Reflexion: Language Agents with Verbal Reinforcement Learning. *Advances in Neural Information Processing Systems.* Online. 2023. Vol. 36, p. 8634–8652. Available from: [https://arxiv.org/abs/2303.11366](https://arxiv.org/abs/2303.11366)
- 22.  AGACHE, Alexandru, DEACONESCU, Razvan, IORDACHE, Mihai, LUPU, Alexandra, RADU, Vlad, BUGA, Cezar, BALAN, Catalin a FLORESCU, Andreea. Firecracker: Lightweight Virtualization for Serverless Applications. In : *17th USENIX Symposium on Networked Systems Design and Implementation (NSDI 20).* Online. 2020. p. 419–434. Available from: [https://www.usenix.org/conference/nsdi20/presentation/agache](https://www.usenix.org/conference/nsdi20/presentation/agache)
- 23.  MOSQUEIRA-REY, Eduardo, HERNÁNDEZ-PEREIRA, Elena, ALONSO-RÍOS, David, BOBES-BASCARÁN, José a FERNÁNDEZ-LEAL, Ángel. Human-in-the-loop machine learning: a state of the art. *Artificial Intelligence Review.* Online. 2023. Vol. 56, no. 4, p. 3005–3054. Available from: [https://doi.org/10.1007/s10462-022-10246-w](https://doi.org/10.1007/s10462-022-10246-w)
- 24.  SENNRICH, Rico, HADDOW, Barry a BIRCH, Alexandra. Neural Machine Translation of Rare Words with Subword Units. *Proceedings of the 54th Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers).* Online. 2016. P. 1715–1725. Available from: [https://aclanthology.org/P16-1162/](https://aclanthology.org/P16-1162/)
- 25.  MERKEL, Dirk. Docker: lightweight linux containers for consistent development and deployment. *Linux Journal*. 2014. Vol. 2014, no. 239, p. 2.
- 26.  KINSMAN, Timothy, WESSEL, Mairieli, GEROSA, Marco A. a TREUDE, Christoph. How do software developers use GitHub Actions to automate their workflows?. In : *Proceedings of the 18th International Conference on Mining Software Repositories*. 2021. p. 420–431.
- 27.  DABBISH, Laura, STUART, Colleen, TSAY, Jason a HERBSLEB, Jim. Social coding in GitHub: transparency and collaboration in an open software repository. In : *Proceedings of the ACM 2012 conference on Computer Supported Cooperative Work*. 2012. p. 1277–1286.

## Seznam obrázků a tabulek

1. [Obrázek 1: Architektura autonomní ReAct smyčky (Reasoning + Acting) a tok dat mezi uživatelem, kontextem, modelem a výkonným prostředím.](#fig-react-loop)

## Seznam příloh
