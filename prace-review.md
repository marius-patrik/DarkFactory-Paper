## DarkFactory: Umělá inteligence v praxi – Agentické a harnessové inženýrství

Patrik Marius · Gymnázium J. K. Tyla · 2026

## Anotace

[CZ] Tato odborná práce se zabývá principy agentického inženýrství (*agentic engineering*): efektivními inženýrskými praktikami pro vývoj pomocí umělé inteligence prostřednictvím agentických systémů a architekturou těchto systémů. Praktickým přínosem práce je návrh a implementace systému DarkFactory — agentního harnessu instalovatelného jako aplikace pro platformu GitHub (GitHub App). Systém usiluje o maximální možnou míru automatizace vývojového cyklu od interpretace požadavků v GitHub Issues, přes plánování, až po vývoj kódu a sloučení změn. Práce reflektuje, že současné agentní systémy nelze vnímat jako plně autonomní: jazykové modely vyžadují deterministické mantinely, správu kontextu a zapojení člověka (*Human-in-the-loop*).

[EN] This thesis examines the principles of agentic engineering: effective engineering practices for development with artificial intelligence through agentic systems and the architecture of these systems. The practical contribution of the thesis is the design and implementation of DarkFactory — an agentic harness installable as a GitHub App. The system aims to maximize automation of the development lifecycle, from interpreting requirements in GitHub Issues, through planning, to code development and merging changes. The thesis reflects that current agentic systems cannot be regarded as fully autonomous: language models require deterministic guardrails, context management, and human involvement (*Human-in-the-loop*).

## Klíčová slova

Agent, Agentické inženýrství [ Agentic Engineering ] , Agentní harness [ Agent Harness ] , Chatbot, Degradace kontextu [ Context Rot ] , Dovednosti [ Skills ] , Git, GitHub, Jazykový model [ Large Language Model ] ( LLM ) , Model Context Protocol ( MCP ) , Požadavek na sloučení [ Pull Request ] , Promptové inženýrství [ Prompt Engineering ] , Rozšíření [ Plugins ] , Smyčka ReAct [ ReAct Loop ] ( Agent Loop ) , Vektorová reprezentace [ Embedding ] , Zapojení člověka do smyčky [ Human-in-the-loop ] ( HITL )

## Obsah

1. [DarkFactory: Umělá inteligence v praxi – Agentické a harnessové inženýrství](#loc-1)
2. [Anotace](#loc-2)
3. [Klíčová slova](#loc-3)
4. [1 Úvod](#loc-4)
  1. [1.1 Motivace a vymezení problému](#loc-5)
  2. [1.2 Cíl práce a výzkumné otázky](#loc-6)
    1. [1.2.1 Hlavní cíl](#loc-7)
    2. [1.2.2 Dílčí cíle](#loc-8)
    3. [1.2.3 Výzkumné otázky](#loc-9)
  3. [1.3 Metodika práce](#loc-10)
5. [2 Teoretická část: Vymezení konceptu](#loc-11)
  1. [2.1 Vývojové prostředí a praxe](#loc-12)
    1. [2.1.1 Správa verzí [Version Control]](#loc-13)
    2. [2.1.2 Git a GitHub](#loc-14)
    3. [2.1.3 Větve (Branches)](#loc-16)
    4. [2.1.4 Pull Request](#loc-17)
    5. [2.1.5 Slučování změn (Commit and Merge)](#loc-18)
    6. [2.1.6 Plánování [Planning]](#loc-19)
    7. [2.1.7 Kontinuální integrace (CI a GitHub Actions)](#loc-20)
    8. [2.1.8 Požadované kontroly (Required Checks)](#loc-22)
    9. [2.1.9 Ochrana větví (Branch Protection)](#loc-23)
  2. [2.2 Large Language Model ( LLM ) , chatboti a agenti](#loc-24)
    1. [2.2.1 Úvod](#loc-25)
    2. [2.2.2 Agent vs. Chatbot](#loc-27)
    3. [2.2.3 Tokeny, tokenizace a Vektorová reprezentace [Embedding]](#loc-28)
    4. [2.2.4 Tahy a správa KV cache](#loc-29)
    5. [2.2.5 Kompakce kontextu a ztrátová komprese](#loc-30)
    6. [2.2.6 Sémantický posun (Semantic Drift)](#loc-31)
    7. [2.2.7 Alternativní paměťové architektury (RAG a stavový graf)](#loc-32)
    8. [2.2.8 Degradace kontextu [ Context Rot ]](#loc-33)
  3. [2.3 Agentické inženýrství [ Agentic Engineering ] a Agent Harness](#loc-35)
    1. [2.3.1 Úvod](#loc-36)
    2. [2.3.2 Promptové inženýrství [ Prompt Engineering ] a negativní instrukce](#loc-37)
    3. [2.3.3 - Agentní smyčka a prováděcí cyklus ReAct [+ ]Smyčka ReAct [ ReAct Loop ] ( Agent Loop )](#loc-39)
    4. [2.3.4 Vyvolávání nástrojů [Tool Calling]](#loc-41)
    5. [2.3.5 Sandbox](#loc-42)
    6. [2.3.6 Patologie divergence: perseverace a oscilace](#loc-43)
    7. [2.3.7 Dovednosti [ Skills ]](#loc-44)
    8. [2.3.8 Model Context Protocol ( MCP ) servery](#loc-45)
    9. [2.3.9 Škálování: Multiagentní systémy (Subagenti) a grafy (DAG workflows) [Scaling: Multiagent Systems (Subagents) and DAG Workflows (Graphs)]](#loc-47)
    10. [2.3.10 Zapojení člověka do smyčky [ Human-in-the-loop ] ( HITL )](#loc-48)
6. [3 DarkFactory - Praktická část: Architektura harnessu](#loc-49)
  1. [3.1 Git a GitHub](#loc-50)
7. [4 Výsledky a diskuse](#loc-51)
8. [5 Závěr](#loc-52)
9. [Seznam zdrojů](#loc-53)
10. [Rejstřík](#loc-61)
11. [Seznam příloh](#loc-62)
12. [A Obsah přiloženého média](#loc-63)
13. [B Schéma konfiguračního manifestu darkfactory.json](#loc-64)
14. [C Sdílené workflow pro GitHub Actions](#loc-65)
15. [D Systémové prompty plánovacího a kódovacího agenta](#loc-66)
16. [E Protokol revizních značek v sazebním systému Typst](#loc-67)
  1. [E.1 Vizuální reprezentace jednotlivých prvků v sazbě](#loc-68)
  2. [E.2 Ukázky textových zvýrazňovacích a srovnávacích funkcí v toku odstavce](#loc-69)
  3. [E.3 Role značek v lidském dohledu](#loc-70)

## 1 Úvod

### 1.1 Motivace a vymezení problému

V moderním softwarovém inženýrství dosáhla automatizace vysokého stupně zralosti. Sestavení zdrojových kódů, běh testovacích sad, statická analýza i nasazování do produkce probíhají běžně bez nutnosti lidského zásahu. Hlavním úzkým hrdlem celého vývojového procesu tak zůstává samotná tvorba a modifikace zdrojového kódu — časová prodleva mezi zadáním nového požadavku v podobě úkolu či hlášení chyby a vytvořením otestované, bezpečně začlenitelné změny.

Inspirací pro překonání tohoto omezení je průmyslový koncept temné továrny (*Dark Factory*) — plně automatizovaného výrobního provozu, který funguje samostatně bez nutnosti stálé přítomnosti lidské obsluhy. Cílem tohoto přístupu není vytlačení lidského inženýra, nýbrž posun jeho role: člověk definuje záměr, architekturu a funkční specifikaci, zatímco mechanické, rutinní a opakující se úkony přebírají autonomní systémy.

Nástup velkých jazykových modelů (LLM) otevřel cestu k automatizaci syntézy kódu, avšak stávající nástroje vykazují zásadní limity. Většina současných řešení (konverzační asistenti a doplňování kódu v editoru) řeší pouze izolovaný krok v podobě návrhu textového fragmentu. Chybí jim hlubší integrace do vývojového cyklu repozitáře: přímá práce se souborovým systémem, schopnost interpretovat výstupy překladače, iterativně odstraňovat syntaktické regrese a respektovat deterministická pravidla projektu.

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

- VO1 (Míra automatizace a role člověka): Lze vývojový proces od zadání požadavku (GitHub Issue) po pull request strukturovat tak, aby role vývojáře spočívala výhradně v architektonickém dozoru a schvalování záměru (Human Gate), bez nutnosti ručního psaní rutinního kódu?
- VO2 (Řízení divergence a spolehlivost smyčky): Jakými architektonickými mechanismy lze v harnessu spolehlivě zabránit patologiím modelu (perseveraci, oscilaci a zacyklení v ReAct smyčce)?
- VO3 (Integrita paměti a eliminace sémantického posunu): Jak spravovat kontextové okno agenta při komplexních úlohách, aby nedocházelo k degradaci pozornosti (Context Rot) a ztrátě architektonických invariantů při kompresi?

🔥 **Hloubková kritika / Oponentura:** Oponentura k výzkumným otázkám: Otázka VO1 je formulována binárně („Lze vývojový proces strukturovat…“), což svádí k tautologické odpovědi. Rigorózní oponent bude žádat empirické vymezení: Jaké procento rutinních úloh (např. oprava chyby se selhávajícím testem vs. komplexní refaktoring) harness reálně odbaví bez ručního zásahu do kódu? Doporučujeme otázku v obhajobě doplnit o kritérium mezní složitosti úkolu a míry redukce kognitivní zátěže člověka.

### 1.3 Metodika práce

Práce má teoreticko-architektonický a inženýrský charakter. Vzhledem k dynamickému vývoji v oblasti autonomního softwarového vývoje práce důsledně zachovává a integruje zavedené anglické odborné názvy (např. *harness*, *pull request*, *agent loop*, *prompt engineering*, *skills* či *context rot*). Použití této terminologie je integrální součástí práce, neboť tyto anglické pojmy představují de facto celosvětové průmyslové standardy (*industry standards*), jejichž doslovný český překlad by byl nejednoznačný, zavádějící či v rozporu s běžnou inženýrskou praxí.

Postup práce sleduje strukturu inženýrského cyklu:

-
  1. Analýza konceptu: Systematické zmapování limitů autoregresivních modelů, dynamiky kontextového okna, jevu Context Rot a rozhraní nástrojů.
-
  1. Návrh architektury: Formulace modulárního modelu agent harnessu, správy stavu, exekučního pískoviště, bezpečnostních pojistek a orchestrace subagentů.
-
  1. Kritické zhodnocení: Porovnání navržených principů s volnými agentními smyčkami a vymezení provozních limitů autonomního inženýrství.

📐 **Strukturální upozornění:** Chybějící evaluační rámec v metodice: Metodika práce v současné podobě popisuje inženýrský postup, ale postrádá formální specifikaci evaluačního rámce: definici vzorku úloh pro ověření spolehlivosti (syntetické úlohy vs. reálné bugfixy), stanovení kontrolních metrik (úspěšnost na první pokus, spotřeba tokenů na úspěšný PR) a srovnávací baseline.

## 2 Teoretická část: Vymezení konceptu

Úvod

### 2.1 Vývojové prostředí a praxe

#### 2.1.1 Správa verzí [Version Control]

#### 2.1.2 Git a GitHub

Pro autonomní vývoj softwaru je spolehlivá správa verzí naprosto nezbytným základem. Jazykové modely generují kód na základě statistické pravděpodobnosti, a proto se nevyhnutelně dopouštějí chyb, logických přehmatů či regresí. Verzovací systém vytváří bezpečné a deterministické prostředí, v němž lze každou úpravu zaznamenat, otestovat a v případě selhání kdykoliv vrátit zpět k funkčnímu stavu. Namísto teoretických abstrakcí práce přímo využívá distribuovaný systém [***Git***](#kw-git)★ v kombinaci s platformou [***GitHub***](#kw-github)★.

Klíčové komponenty infrastruktury zahrnují:

- Distribuovaný systém Git ([1](#loc-54)): Ukládá kompletní historii projektu v podobě jednotlivých revizí (*commitů*). Vývojář i agent pracují s plnou lokální kopií repozitáře, což umožňuje provádět změny, přepínat větve a spouštět lokální testy zcela nezávisle na síťovém připojení.
- Platforma GitHub: Slouží jako centrální bod pro sdílení kódu, týmovou koordinaci a automatizaci:
  - Zadávání a sledování úkolů (Issues): Strukturovaná textová zadání požadavků a hlášení chyb, která agentovi slouží jako výchozí specifikace úlohy.
  - Revize změn (Pull Requests): Uživatelské rozhraní pro přehledné zobrazení diffu, diskusi nad kódem a formální schválení člověkem.
  - Automatizace (GitHub Actions): Běhové prostředí pro automatické spouštění testů, linterů a překladů při každé události v repozitáři.

Agent v tomto pojetí nevystupuje jako černá skříňka s proprietárním protokolem, nýbrž jako standardní přispěvatel, který plně respektuje běžné vývojářské zvyklosti a nástroje.

#### 2.1.3 Větve (Branches)

Základním bezpečnostním pravidlem při zapojení autonomních agentů do vývoje je striktní izolace rozpracovaného kódu. Stabilní kód v hlavní větvi (`main`) nesmí být nikdy přímo vystaven experimentům a chybám modelu. Agent proto veškeré úpravy provádí ve vyhrazených pracovních větvích odbočených ze základní linie projektu.

Tento princip přináší následující výhody:

- Ochrana produkční větve: Hlavní větev (`main`) reprezentuje stabilní, otestovaný stav připravený k nasazení. Přímé zapisování do této větve je zakázáno jak lidským vývojářům, tak autonomním agentům.
- Dedikovaná větev pro každý úkol: Agent pro každé zadání dynamicky vytvoří novou samostatnou větev (např. `task/123-oprava-parseru` či `agent/feature-auth`).
- Izolace chyb a mezistavů: Případné syntaktické chyby, dočasné nefunkční stavy ani neúspěšné hypotézy neovlivňují stabilitu hlavní větve ani práci ostatních vývojářů v týmu.
- Bezpečné zahození nezdařených běhů: Pokud se agent dostane do slepé uličky nebo vyčerpá přidělený rozpočet kroků, celou větev lze smazat jedním příkazem bez jakýchkoliv následků pro zbytek repozitáře.

Pokud se hlavní větev během práce agenta posune dopředu v důsledku jiné aktivity v repozitáři, pracovní větev agenta se musí před dokončením zaktualizovat (`git rebase` nebo `git merge`), aby byla zajištěna bezkonfliktní integrace.

#### 2.1.4 Pull Request

- Pull request (PR) představuje stěžejní komunikační uzel mezi autonomním agentem a lidským inženýrem. Jedná se o formální žádost o začlenění navržených změn z pracovní větve do větve hlavní. V tomto bodě se plně uplatňuje princip zapojení člověka do smyčky (Human-in-the-loop): [+ ][***Požadavek na sloučení [ Pull Request ]***](#kw-pull-request)★ — [CZ] Formální návrh na začlenění změn z jedné větve repozitáře do druhé, který slouží jako místo pro automatizované kontroly, lidskou revizi a diskusi nad navrženými úpravami.. V tomto bodě se plně uplatňuje princip [***Zapojení člověka do smyčky [ Human-in-the-loop ] ( HITL )***](#kw-human-in-the-loop)★: agent kód samostatně navrhne a otestuje, avšak konečné rozhodnutí o jeho přijetí náleží vývojáři.

Rozhraní pull requestu integruje všechny podstatné informace na jednom místě:

- Řádkový diff: Vizuální srovnání původního a nového stavu, kde jsou jasně barevně odlišeny přidané, změněné a smazané řádky.
- Strukturovaný souhrn změn: Agent v popisu PR srozumitelně shrne, jaké úpravy provedl, jakou logiku zvolil a na které původní issue reagoval.
- Výsledky automatických kontrol: Přehled stavu automatizovaných testů a linterů z GitHub Actions (zelený či červený indikátor).
- Revizní diskuse: Možnost vývojáře přidávat komentáře k libovolnému řádku kódu, klást doplňující dotazy nebo vyžadovat přepracování konkrétních částí.

Lidský vývojář v roli revizora (Reviewer) posuzuje celkový architektonický záměr a rozhoduje o schválení, vrácení k dopracování, či zamítnutí pull requestu.

#### 2.1.5 Slučování změn (Commit and Merge)

Způsob, jakým se změny z pracovní větve začlení do větve hlavní, má zásadní dopad na dlouhodobou udržitelnost a čitelnost repozitáře. Autonomní agent při řešení úlohy obvykle postupuje iterativní metodou pokus-omyl: upraví soubor, spustí testy, odhalí překlep a provede další drobný commit. V pracovní větvi tak vzniká dlouhá sekvence pomocných a experimentálních záznamů.

Zatímco klasický merge commit přenese do hlavní větve veškeré dílčí commity a rebase je lineárně přeskládá, v agentním vývoji se jako optimální strategie uplatňuje Commit and Merge:

- Sloučení mezikroků: Všechny commity z pracovní větve jsou spojeny do jediného nového commitu, který je vložen do `main`.
- Eliminace interního šumu: Pomocné commity vzniklé při ladění testů se do hlavní větve vůbec nedostanou; historie projektu zůstává čistá a přehledná podle pravidla: jeden úkol = jeden commit.
- Atomický návrat změn (`git revert`): Pokud se v budoucnu ukáže, že začleněná úprava zanesla do produkce nečekanou vadu, lze celý úkol vrátit jediným atomickým příkazem bez nutnosti rozplétat desítky dílčích mezikroků.

#### 2.1.6 Plánování [Planning]

#### 2.1.7 Kontinuální integrace (CI a GitHub Actions)

Samotný jazykový model kód pouze generuje na základě statistických závislostí v trénovacích datech; nemá schopnost vnitřně ověřit, zda je vytvořený program syntakticky bezchybný a funkčně správný. Nezastupitelnou roli objektivního arbitra správnosti proto plní kontinuální integrace (CI) ([2](#loc-55)).

V rámci platformy GitHub zajišťuje kontinuální integraci vestavěný nástroj GitHub Actions:

- Spouštění v čistých kontejnerech: Každé workflow běží v nově alokovaném virtuálním prostředí se zamčenými verzemi nástrojů a závislostí, což vylučuje chyby způsobené lokálním stavem počítače vývojáře.
- Automatická exekuce: Integrační pipeline se automaticky spouští při každém pushi do pracovní větve i při otevření pull requestu.
- Deterministická zpětná vazba pro agenta: Pokud překlad nebo testy selžou, chybový protokol z terminálu je předán zpět do kontextu agenta, který na jeho základě provede informovanou opravu kódu.

🔥 **Hloubková kritika / Oponentura:** Nestálost testů (Flaky Tests) v integračních bězích: Spoléhání se na automatické testy v CI naráží na problém nestálých testů (*flaky tests*), které občas selžou kvůli časování, síťové odezvě či asynchronním stavům, aniž by kód obsahoval chybu. Pokud agent narazí na takto náhodně selhávající test, může začít nesmyslně upravovat správný kód ve snaze chybu odstranit. CI pipeline proto musí nestálé testy minimalizovat nebo umožnit automatické opakování selhaného běhu v čistém prostředí.

#### 2.1.8 Požadované kontroly (Required Checks)

K tomu, aby byla kontinuální integrace efektivní, nestačí testy pouze spouštět — jejich úspěšné dokončení musí být systémově vynuceno.

- Požadované kontroly (*Required Checks*): Seznam úloh v GitHub Actions, které musí skončit explicitním úspěchem (zelený stav), aby bylo technicky možné pull request sloučit:
  - Statická analýza a linter: Kontrola dodržení kódového stylu, odhalování mrtvého kódu a základních syntaktických prohřešků.
  - Typová kontrola a build: Jistota, že kód lze bez chyb zkompilovat a že typový systém nezaznamenal nekonzistence.
  - Automatizované testy: Úspěšný průchod jednotkových i integračních testů ověřujících požadované chování.
- Pravidlo deterministického výsledku: Každá kontrola musí skončit jednoznačným výsledkem; tiché přeskočení testu nebo nejednoznačný stav sloučení zablokuje.

#### 2.1.9 Ochrana větví (Branch Protection)

GitHub poskytuje pravidla ochrany větví (*Branch Protection Rules*), která zabraňují začlenění neověřeného kódu do stabilní větve `main`.

- Povinné schválení člověkem: Požadavek na explicitní autorizaci kódu lidským vývojářem dříve, než GitHub povolí sloučení do produkční větve.

### 2.2 Large Language Model ( LLM ) , chatboti a agenti

📌 **Metodické vymezení / Rozsah práce:** Těžištěm této práce není strojové učení, matematická optimalizace vah ani trénování neuronových sítí. Jazykový model vnímáme jako hotovou inferenční komponentu vystupující v roli stochastického kognitivního jádra. Ústředním předmětem zkoumání je agentické inženýrství (*agentic engineering*) a architektura agent harnessu pro autonomní vývoj softwaru. Následující text je proto záměrně zredukován na nezbytné konceptuální minimum potřebné pro pochopení kontextového okna, spotřeby tokenů, degradace pozornosti a rozhraní nástrojů.

#### 2.2.1 Úvod

V agentickém softwarovém inženýrství vystupuje velký jazykový model (LLM) jako stochastické kognitivní jádro celého systému. Z hlediska vnitřní architektury se jedná o dekodérový transformer (*Decoder-only*), jehož typickými představiteli jsou moderní modely řad Claude, GPT či DeepSeek ([3](#loc-56)). Role modelu nespočívá ve vystupování jako vševědoucí orákulum se spolehlivou znalostí okolního světa, nýbrž jako pokročilý generátor hypotéz, kódu a strukturovaných volání nástrojů řízený obdrženým kontextem.

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
- [***Vektorová reprezentace [ Embedding ]***](#kw-embedding)★ — [CZ] Vícerozměrná vektorová reprezentace tokenů nebo jiných dat, v níž numerické vztahy mezi vektory zachycují užitečné sémantické vztahy mezi reprezentacemi. (např. vektorová analogie
  <math><mtext>král</mtext><mo>−</mo><mtext>muž</mtext><mo>+</mo><mtext>žena</mtext><mo>≈</mo><mtext>královna</mtext></math>
  ).
- Jazyková asymetrie tokenizace: Vzhledem k trénovacím datům optimalizovaným primárně pro angličtinu spotřebovávají flektivní jazyky s bohatou diakritikou (včetně češtiny) 2× až 3× více tokenů pro vyjádření téhož významu.

Z inženýrského hlediska je proto žádoucí vést systémové prompty, technické plány i komunikaci mezi nástroji v angličtině, aby se šetřila kapacita kontextu a snížila latence inference.

#### 2.2.4 Tahy a správa KV cache

Interakce mezi modelem, uživatelem a okolním vývojovým prostředím neprobíhá spojitě, nýbrž v diskrétních krocích označovaných jako tahy (*turns*). Každý tah představuje jednu ucelenou výměnu zprávy, na niž systém reaguje.

Životní cyklus tahů a správa paměti zahrnují:

- Typy tahů v agentní smyčce:
  - Tah uživatele či prostředí (*User Turn*): Nové zadání úkolu nebo vnější událost.
  - Tah modelu (*Model Turn*): Vygenerovaná odpověď nebo strukturovaný požadavek na spuštění nástroje.
  - Tah nástroje (*Tool Execution Turn*): Zpětné hlášení výsledku exekuce (výpis souboru, výstup kompilátoru).
- Správa KV cache (Key-Value Cache): Aby inferenční engine nemusel při každém novém tahu přepočítávat celou historii od začátku, ukládá mezivýpočty klíčů a hodnot matic pozornosti do paměti.
- Kontextové okno (*Context Window*): Pevně limitovaná kapacita paměti modelu. Tento strop je dán hardwarovými limity GPU akcelerátorů a kvadratickou složitostí plné pozornosti (
  <math><mi>𝑂</mi><mrow><mo>(</mo><msup><mi>𝑁</mi><mn>2</mn></msup><mo>)</mo></mrow></math>
   vzhledem k délce sekvence).

#### 2.2.5 Kompakce kontextu a ztrátová komprese

Při rozsáhlejších úlohách se kontextové okno nevyhnutelně zaplní. V okamžiku, kdy objem historie dosáhne kritické hranice, musí agent harness přistoupit ke kompakci kontextu (*compaction*) — model je vyzván, aby dosavadní průběh sezení zkrátil do syntetického souhrnu, který nahradí starší část historie.

Tento proces však představuje destruktivní ztrátovou kompresi:

- Ztráta deterministických detailů: Model při rekurzivním zkracování vynechává přesná čísla řádků, signatury privátních funkcí, přesné cesty k souborům a doslovná chybová hlášení kompilátoru.
- Oslabení negativních pravidel: Explicitní zákazy (např. neměnit veřejné rozhraní API) bývají v souhrnu zevšeobecněny nebo zcela vypuštěny.
- Konfirmační zkreslení (*Confirmation Bias*): Model v souhrnu upřednostňuje fakta odpovídající jeho vnitřním statistickým asociacím na úkor netriviálních specifik konkrétního projektu.

#### 2.2.6 Sémantický posun (Semantic Drift)

Opakovaná ztrátová komprese vede k závažné patologii známé jako sémantický posun (*Semantic Drift*). Pokud je historie sezení v dlouhém vývojovém běhu shrnována vícekrát po sobě, vzniká řetězec ztrátových transformací (

<math><msub><mi>𝑆</mi><mrow><mi>𝑘</mi><mo lspace="0em" rspace="0em">+</mo><mn>1</mn></mrow></msub><mo>=</mo><mi>𝑓</mi><mrow><mo>(</mo><mrow><msub><mi>𝑆</mi><mi>𝑘</mi></msub><mo>,</mo><msub><mi mathvariant="normal">Δ</mi><mi>𝑘</mi></msub></mrow><mo>)</mo></mrow></math>

).

Rizika sémantického posunu spočívají v těchto jevech:

- Efekt tiché pošty: Drobné zkreslení či halucinace vzniklá v kole
  <math><mi>𝑘</mi></math>
   je v kole
  <math><mi>𝑘</mi><mo>+</mo><mn>1</mn></math>
   přijata jako nezpochybnitelný historický fakt.
- Divergence modelu od reality: Po několika cyklech komprese se vnitřní model reality agenta zcela rozejde se skutečným stavem zdrojového kódu v souborovém systému.

Výsledkem je stav, kdy agent sebevědomě reportuje vyřešení úkolu, ačkoliv reálný kód zůstává v nefunkčním či neúplném stavu.

#### 2.2.7 Alternativní paměťové architektury (RAG a stavový graf)

Aby se předešlo ztrátě informací způsobené kompakcí, moderní agentní architektury přesouvají část paměti mimo samotné kontextové okno. Namísto spoléhání se na jediný lineární textový kontext se uplatňují strukturovaná externí úložiště.

K hlavním přístupům patří:

- Hierarchická epizodická paměť (RAG): Ukládání doslovných protokolů nástrojů a historie úloh do externí databáze; do kontextu se selektivně injektují pouze bezprostředně relevantní fragmenty.
- Persistentní graf stavu projektu (*Project State Graph*): Udržování explicitního, strukturovaného přehledu o stavu repozitáře (seznam modifikovaných souborů, otevřené úkoly, výsledky testů a platné invarianty) mimo kontextové okno.

Díky tomu může agent kdykoliv obnovit přesný stav projektu bez závislosti na ztrátovém rekurzivním shrnování.

#### 2.2.8 Degradace kontextu [ Context Rot ]

Schopnost jazykového modelu pracovat s dlouhým kontextem nelze posuzovat pouze podle nominální velikosti okna. Ačkoliv moderní modely deklarují kapacitu statisíců tokenů, jejich schopnost efektivně vyhledávat a logicky propojovat fakta s rostoucí délkou kontextu výrazně klesá. - Tento jev se označuje jako degradace pozornosti (*Context Rot*). [+ ]Tento jev se v agentickém inženýrství označuje jako [***Degradace kontextu [ Context Rot ]***](#kw-context-rot)★ — [CZ] Degradace pozornosti a kvality logického uvažování modelu způsobená zaplněním kontextového okna dlouhou historií, šumem nebo vzájemně si konkurujícími informacemi, která vede k přehlížení instrukcí a ztrátě souvislostí..

V praxi se projevuje dvěma hlavními mechanismy:

- Lost in the Middle ([4](#loc-57)): Pozornostní vrstvy transformeru spolehlivě vnímají informace na samém začátku a konci okna, zatímco fakta umístěná uprostřed dlouhého textu jsou často přehlížena.
- Multi-Needle Reasoning: Schopnost logicky provázat několik na sobě závislých informací rozptýlených napříč různými soubory; s rostoucí délkou kontextu tato schopnost prudce klesá.

Při komplexním křížovém refaktoringu ve velkém kontextu proto model často přehlédne klíčové souvislosti, které by v menším a čistším okně zpracoval bez potíží.

### 2.3 Agentické inženýrství [ Agentic Engineering ] a Agent Harness

#### 2.3.1 Úvod

V terminologii agentického inženýrství používá tato práce pojem [***Agentní harness [ Agent Harness ]***](#kw-harness)★. [CZ] Agentní harness — aplikační a orchestrační vrstva obklopující inferenční jádro modelu, která zajišťuje běhové prostředí nástrojů, dynamickou správu kontextového okna, bezpečnostní mantinely, práci se stavem a deterministické řízení životního cyklu požadavku.. Samotné inferenční jádro provádí výhradně matematické maticové operace nad zadanými váhami a vektory tokenů; veškerou orchestraci, práci se soubory a řízení bezpečnosti zajišťuje harness.

Ústřední komponentou a hlavní prováděcí funkcí, která v architektuře harnessu řídí samotný běh a iterativní koordinaci agenta v reálném vývojovém prostředí, je [***Smyčka ReAct [ ReAct Loop ] ( Agent Loop )***](#kw-agent-loop)★. [CZ] Iterativní prováděcí cyklus autonomního agenta založený na vzoru ReAct (Reasoning + Acting), v němž model střídavě uvažuje, volá nástroje a vyhodnocuje pozorování z běhového prostředí..

#### 2.3.2 Promptové inženýrství [ Prompt Engineering ] a negativní instrukce

- Základní chování agenta vymezuje systémový prompt ([5](#loc-58)), který definuje jeho identitu, sadu dostupných nástrojů a provozní mantinely. [+ ][***Promptové inženýrství [ Prompt Engineering ]***](#kw-prompt-engineering)★ — [CZ] Inženýrská metodika systematického návrhu, strukturování a optimalizace instrukcí a systémových promptů pro řízení chování a mantinelů jazykového modelu. představuje klíčový předpoklad deterministického chování: základní chování agenta vymezuje systémový prompt ([5](#loc-58)), který definuje jeho identitu, sadu dostupných nástrojů a provozní mantinely. Při formulaci těchto pravidel však vývojáři narážejí na specifickou vlastnost autoregresivních modelů — problematické zpracování zákazů a negativních instrukcí.

Příčiny a inženýrská řešení tohoto jevu:

- Úskalí negativních instrukcí: Zákazy formulované negací (např. „nemazat existující testy“) modely často porušují, protože matice pozornosti (
  <math><mi>𝑄</mi><msup><mi>𝐾</mi><mi>𝑇</mi></msup></math>
  ) asociativně aktivuje zakázaný pojem dříve, než autoregresní proces uplatní logický operátor negace.
- Afirmativní formulace: Pravidla je nutné formulovat pozitivně — namísto výčtu zákazů vymezit přesný postup a povolené mantinely chování.
- Deterministická ochrana v harnessu: Kde nestačí prompt, musí zasáhnout kód agent harnessu — například zpřístupněním testovacích souborů pouze pro čtení nebo zablokováním destruktivních operací na úrovni systémového volání.

#### 2.3.3 - Agentní smyčka a prováděcí cyklus ReAct [+ ]Smyčka ReAct [ ReAct Loop ] ( Agent Loop )

Agentní smyčka (*Agent Loop*) představuje výkonné jádro celého agent harnessu. Zatímco pasivní konverzační chatbot jednorázově odpoví na uživatelský dotaz a čeká na další vstup, agentní smyčka autonomně udržuje kontinuální iterativní proces, v němž harness opakovaně vyhodnocuje stav repozitáře, volá jazykový model a vykonává požadované systémové akce.

V každé iteraci agentní smyčky harness zajišťuje tyto klíčové funkce:

- Inicializace a správa sezení: Sestavení systémového promptu, dynamická injekce kontextu repozitáře a sledování spotřeby tokenů.
- Běhové prostředí nástrojů: Bezpečné spouštění příkazů v operačním systému a zpětné předávání výstupů modelu.
- Řízení stavových přechodů a vynucování mantinelů: Dohled nad dodržováním procesních pravidel, detekce a zastavení uvíznutých běhů a vynucování lidských schvalovacích bran.

Vnitřní kognitivní krok modelu uvnitř smyčky se řídí operačním vzorem ReAct (*Reasoning + Acting*) ([6](#loc-59)), který propojuje rozvahu s přímým jednáním. Tento prováděcí cyklus sestává ze čtyř navazujících fází znázorněných na [Obrázek 1](#fig-react-loop):

1. Rozvaha (*Thought*): Model vyhodnotí aktuální stav kontextu a formuluje svůj nejbližší záměr.
2. Volání nástroje (*Tool Call*): Emitování strukturovaného požadavku na provedení konkrétní akce s určenými parametry.
3. Vykonání a pozorování (*Observation*): Harness bezpečně provede akci v systému a výstup (výpis souboru či chybovou zprávu) vloží zpět do kontextu.
4. Navazující iterace: Model v dalším tahu analyzuje získanou odezvu a rozhoduje o dalším kroku.

Kvalita a provozní spolehlivost celého systému tak závisí v prvé řadě na robustnosti architektury harnessu a spolehlivosti jeho agentní smyčky, nikoliv pouze na samotném jazykovém modelu.

![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5MjAgNTQwIiB3aWR0aD0iOTIwIiBoZWlnaHQ9IjU0MCI+CiAgPGRlZnM+CiAgICA8IS0tIEFycm93aGVhZCBtYXJrZXJzIC0tPgogICAgPG1hcmtlciBpZD0iYXJyb3ciIHZpZXdCb3g9IjAgMCAxMCAxMCIgcmVmWD0iNiIgcmVmWT0iNSIgbWFya2VyV2lkdGg9IjYiIG1hcmtlckhlaWdodD0iNiIgb3JpZW50PSJhdXRvLXN0YXJ0LXJldmVyc2UiPgogICAgICA8cGF0aCBkPSJNIDAgMSBMIDEwIDUgTCAwIDkgeiIgZmlsbD0iIzQ3NTU2OSIgLz4KICAgIDwvbWFya2VyPgogICAgPG1hcmtlciBpZD0iYXJyb3ctYmx1ZSIgdmlld0JveD0iMCAwIDEwIDEwIiByZWZYPSI2IiByZWZZPSI1IiBtYXJrZXJXaWR0aD0iNiIgbWFya2VySGVpZ2h0PSI2IiBvcmllbnQ9ImF1dG8tc3RhcnQtcmV2ZXJzZSI+CiAgICAgIDxwYXRoIGQ9Ik0gMCAxIEwgMTAgNSBMIDAgOSB6IiBmaWxsPSIjMjU2M2ViIiAvPgogICAgPC9tYXJrZXI+CiAgICA8bWFya2VyIGlkPSJhcnJvdy1lbWVyYWxkIiB2aWV3Qm94PSIwIDAgMTAgMTAiIHJlZlg9IjYiIHJlZlk9IjUiIG1hcmtlcldpZHRoPSI2IiBtYXJrZXJIZWlnaHQ9IjYiIG9yaWVudD0iYXV0by1zdGFydC1yZXZlcnNlIj4KICAgICAgPHBhdGggZD0iTSAwIDEgTCAxMCA1IEwgMCA5IHoiIGZpbGw9IiMwNTk2NjkiIC8+CiAgICA8L21hcmtlcj4KICAgIDxtYXJrZXIgaWQ9ImFycm93LXZpb2xldCIgdmlld0JveD0iMCAwIDEwIDEwIiByZWZYPSI2IiByZWZZPSI1IiBtYXJrZXJXaWR0aD0iNiIgbWFya2VySGVpZ2h0PSI2IiBvcmllbnQ9ImF1dG8tc3RhcnQtcmV2ZXJzZSI+CiAgICAgIDxwYXRoIGQ9Ik0gMCAxIEwgMTAgNSBMIDAgOSB6IiBmaWxsPSIjN2MzYWVkIiAvPgogICAgPC9tYXJrZXI+CiAgICA8bWFya2VyIGlkPSJhcnJvdy1hbWJlciIgdmlld0JveD0iMCAwIDEwIDEwIiByZWZYPSI2IiByZWZZPSI1IiBtYXJrZXJXaWR0aD0iNiIgbWFya2VySGVpZ2h0PSI2IiBvcmllbnQ9ImF1dG8tc3RhcnQtcmV2ZXJzZSI+CiAgICAgIDxwYXRoIGQ9Ik0gMCAxIEwgMTAgNSBMIDAgOSB6IiBmaWxsPSIjZDk3NzA2IiAvPgogICAgPC9tYXJrZXI+CgogICAgPCEtLSBGaWx0ZXJzIGZvciBzdWJ0bGUgc2hhZG93IC0tPgogICAgPGZpbHRlciBpZD0ic2hhZG93IiB4PSItNSUiIHk9Ii01JSIgd2lkdGg9IjExMCUiIGhlaWdodD0iMTE1JSIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgPGZlRHJvcFNoYWRvdyBkeD0iMCIgZHk9IjIiIHN0ZERldmlhdGlvbj0iMyIgZmxvb2QtY29sb3I9IiMwZjE3MmEiIGZsb29kLW9wYWNpdHk9IjAuMDgiIC8+CiAgICA8L2ZpbHRlcj4KICA8L2RlZnM+CgogIDxzdHlsZT4KICAgIC50aXRsZS10ZXh0IHsgZm9udC1mYW1pbHk6ICdDYXJsaXRvJywgJ0NhbGFkZWEnLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIHNhbnMtc2VyaWY7IGZvbnQtd2VpZ2h0OiBib2xkOyBmb250LXNpemU6IDE0cHg7IH0KICAgIC5zdWItdGV4dCB7IGZvbnQtZmFtaWx5OiAnQ2FybGl0bycsICdDYWxhZGVhJywgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBzYW5zLXNlcmlmOyBmb250LXNpemU6IDExLjVweDsgfQogICAgLmVkZ2UtbGFiZWwgeyBmb250LWZhbWlseTogJ0NhcmxpdG8nLCAnQ2FsYWRlYScsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgc2Fucy1zZXJpZjsgZm9udC1zaXplOiAxMXB4OyBmb250LXdlaWdodDogNjAwOyBmaWxsOiAjNDc1NTY5OyB9CiAgICAuY29kZS1iYWRnZSB7IGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7IGZvbnQtc2l6ZTogMTAuNXB4OyB9CiAgICAubG9vcC1iYWRnZSB7IGZvbnQtZmFtaWx5OiAnQ2FybGl0bycsICdDYWxhZGVhJywgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBzYW5zLXNlcmlmOyBmb250LXdlaWdodDogYm9sZDsgZm9udC1zaXplOiAxMS41cHg7IGZpbGw6ICMwNDc4NTc7IH0KICA8L3N0eWxlPgoKICA8IS0tIEJhY2tncm91bmQgY29udGFpbmVyIC0tPgogIDxyZWN0IHg9IjEwIiB5PSIxMCIgd2lkdGg9IjkwMCIgaGVpZ2h0PSI1MjAiIHJ4PSIxNiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjZTJlOGYwIiBzdHJva2Utd2lkdGg9IjEuNSIgLz4KCiAgPCEtLSBPdXRlciBoYXJuZXNzIGJvdW5kYXJ5IGJveCAtLT4KICA8cmVjdCB4PSIyMzAiIHk9IjI4IiB3aWR0aD0iNjYwIiBoZWlnaHQ9IjQ4NSIgcng9IjEyIiBmaWxsPSIjZjhmYWZjIiBzdHJva2U9IiNjYmQ1ZTEiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtZGFzaGFycmF5PSI2LDQiIC8+CiAgPHRleHQgeD0iMjUwIiB5PSI1MiIgY2xhc3M9ImVkZ2UtbGFiZWwiIGZpbGw9IiM2NDc0OGIiIGZvbnQtc2l6ZT0iMTIiPkFHRU5UIEhBUk5FU1MgJmFtcDsgUFJPU1TFmEVEw408L3RleHQ+CgogIDwhLS0gMS4gVcW+aXZhdGVsIChVc2VyKSAtLT4KICA8ZyBmaWx0ZXI9InVybCgjc2hhZG93KSI+CiAgICA8cmVjdCB4PSIzNSIgeT0iMTQ1IiB3aWR0aD0iMTU1IiBoZWlnaHQ9IjgwIiByeD0iMTAiIGZpbGw9IiNmMWY1ZjkiIHN0cm9rZT0iIzk0YTNiOCIgc3Ryb2tlLXdpZHRoPSIxLjgiIC8+CiAgICA8Y2lyY2xlIGN4PSIxMTIuNSIgY3k9IjE3MyIgcj0iMTQiIGZpbGw9IiNjYmQ1ZTEiIC8+CiAgICA8cGF0aCBkPSJNIDk4IDIwNiBBIDE0IDE0IDAgMCAxIDEyNyAyMDYgWiIgZmlsbD0iI2NiZDVlMSIgLz4KICAgIDx0ZXh0IHg9IjExMi41IiB5PSIyMTUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGNsYXNzPSJ0aXRsZS10ZXh0IiBmaWxsPSIjMGYxNzJhIj5Vxb5pdmF0ZWw8L3RleHQ+CiAgPC9nPgoKICA8IS0tIEFycm93IFVzZXIgLT4gQ29udGV4dCAtLT4KICA8cGF0aCBkPSJNIDE5MCAxNzUgTCAyNjggMTc1IiBmaWxsPSJub25lIiBzdHJva2U9IiMyNTYzZWIiIHN0cm9rZS13aWR0aD0iMiIgbWFya2VyLWVuZD0idXJsKCNhcnJvdy1ibHVlKSIgLz4KICA8cmVjdCB4PSIxOTUiIHk9IjE1MyIgd2lkdGg9IjcwIiBoZWlnaHQ9IjE4IiByeD0iNCIgZmlsbD0iI2VmZjZmZiIgLz4KICA8dGV4dCB4PSIyMzAiIHk9IjE2NiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgY2xhc3M9ImVkZ2UtbGFiZWwiIGZpbGw9IiMxZDRlZDgiPjEuIFphZMOhbsOtPC90ZXh0PgoKICA8IS0tIDIuIEtvbnRleHQgYSBoaXN0b3JpZSAoQ29udGV4dCBXaW5kb3cpIC0tPgogIDxnIGZpbHRlcj0idXJsKCNzaGFkb3cpIj4KICAgIDxyZWN0IHg9IjI3MCIgeT0iMTMwIiB3aWR0aD0iMTgwIiBoZWlnaHQ9IjExMCIgcng9IjEwIiBmaWxsPSIjZWVmMmZmIiBzdHJva2U9IiM2MzY2ZjEiIHN0cm9rZS13aWR0aD0iMiIgLz4KICAgIDxyZWN0IHg9IjI4MiIgeT0iMTQyIiB3aWR0aD0iMTU2IiBoZWlnaHQ9IjI0IiByeD0iNSIgZmlsbD0iI2UwZTdmZiIgLz4KICAgIDx0ZXh0IHg9IjM2MCIgeT0iMTU4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBjbGFzcz0idGl0bGUtdGV4dCIgZmlsbD0iIzMxMmU4MSI+S29udGV4dCBrb252ZXJ6YWNlPC90ZXh0PgogICAgPHRleHQgeD0iMzYwIiB5PSIxODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGNsYXNzPSJzdWItdGV4dCIgZmlsbD0iIzQzMzhjYSI+4oCiIFN5c3RlbSBwcm9tcHQgJmFtcDsgcHJhdmlkbGE8L3RleHQ+CiAgICA8dGV4dCB4PSIzNjAiIHk9IjE5OCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgY2xhc3M9InN1Yi10ZXh0IiBmaWxsPSIjNDMzOGNhIj7igKIgSGlzdG9yaWUgenByw6F2IChUdXJucyk8L3RleHQ+CiAgICA8dGV4dCB4PSIzNjAiIHk9IjIxNiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgY2xhc3M9InN1Yi10ZXh0IiBmaWxsPSIjNDMzOGNhIj7igKIgVsO9c3R1cHkgbsOhc3Ryb2rFryAoTG9nKTwvdGV4dD4KICA8L2c+CgogIDwhLS0gQXJyb3cgQ29udGV4dCAtPiBJbmZlcmVuY2UgLS0+CiAgPHBhdGggZD0iTSA0NTAgMTg1IEwgNTE4IDE4NSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjN2MzYWVkIiBzdHJva2Utd2lkdGg9IjIiIG1hcmtlci1lbmQ9InVybCgjYXJyb3ctdmlvbGV0KSIgLz4KICA8cmVjdCB4PSI0NTYiIHk9IjE2NSIgd2lkdGg9IjYwIiBoZWlnaHQ9IjE4IiByeD0iNCIgZmlsbD0iI2Y1ZjNmZiIgLz4KICA8dGV4dCB4PSI0ODYiIHk9IjE3OCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgY2xhc3M9ImVkZ2UtbGFiZWwiIGZpbGw9IiM2ZDI4ZDkiPlRva2VueTwvdGV4dD4KCiAgPCEtLSAzLiBJbmZlcmVuY2UgJiBNecWhbGVua2EgKFJlYXNvbmluZyAvIFRob3VnaHQpIC0tPgogIDxnIGZpbHRlcj0idXJsKCNzaGFkb3cpIj4KICAgIDxyZWN0IHg9IjUyMCIgeT0iMTE1IiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE0MCIgcng9IjEwIiBmaWxsPSIjZmFmNWZmIiBzdHJva2U9IiNhODU1ZjciIHN0cm9rZS13aWR0aD0iMiIgLz4KICAgIDxyZWN0IHg9IjUzMiIgeT0iMTI3IiB3aWR0aD0iMTc2IiBoZWlnaHQ9IjI2IiByeD0iNSIgZmlsbD0iI2YzZThmZiIgLz4KICAgIDx0ZXh0IHg9IjYyMCIgeT0iMTQ1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBjbGFzcz0idGl0bGUtdGV4dCIgZmlsbD0iIzU4MWM4NyI+TExNIEluZmVyZW5jZSAmYW1wOyBSb3p2YWhhPC90ZXh0PgogICAgPHRleHQgeD0iNjIwIiB5PSIxNzIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGNsYXNzPSJ0aXRsZS10ZXh0IiBmaWxsPSIjN2UyMmNlIj7igJ5NecWhbGVua2HigJwgKFRob3VnaHQpPC90ZXh0PgogICAgPHRleHQgeD0iNjIwIiB5PSIxOTMiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGNsYXNzPSJzdWItdGV4dCIgZmlsbD0iIzZiMjFhOCI+TW9kZWwgYW5hbHl6dWplIHN0YXYsPC90ZXh0PgogICAgPHRleHQgeD0iNjIwIiB5PSIyMTAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGNsYXNzPSJzdWItdGV4dCIgZmlsbD0iIzZiMjFhOCI+cGzDoW51amUgZGFsxaHDrSBrcm9rIGEgcm96aG9kbmU6PC90ZXh0PgogICAgPHRleHQgeD0iNjIwIiB5PSIyMzUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGNsYXNzPSJlZGdlLWxhYmVsIiBmaWxsPSIjNTgxYzg3Ij5Ba2NlIHZzLiBEb2tvbsSNZW7DrTwvdGV4dD4KICA8L2c+CgogIDwhLS0gQnJhbmNoIEE6IE9kZXZ6ZMOhbsOtIHbDvXNsZWRrdSAoRmluYWwgT3V0cHV0KSAtLT4KICA8cGF0aCBkPSJNIDYyMCAxMTUgTCA2MjAgNzggTCAxMTIuNSA3OCBMIDExMi41IDE0MyIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDU5NjY5IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1kYXNoYXJyYXk9IjUsNCIgbWFya2VyLWVuZD0idXJsKCNhcnJvdy1lbWVyYWxkKSIgLz4KICA8cmVjdCB4PSIzMDAiIHk9IjY2IiB3aWR0aD0iMTgwIiBoZWlnaHQ9IjI0IiByeD0iNCIgZmlsbD0iI2VjZmRmNSIgc3Ryb2tlPSIjYTdmM2QwIiAvPgogIDx0ZXh0IHg9IjM5MCIgeT0iODIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGNsYXNzPSJlZGdlLWxhYmVsIiBmaWxsPSIjMDQ3ODU3Ij5Dw61sIHNwbG7Em246IEZpbsOhbG7DrSBvZHBvdsSbxI88L3RleHQ+CgogIDwhLS0gQnJhbmNoIEI6IFRvb2wgQ2FsbCAtLT4KICA8cGF0aCBkPSJNIDYyMCAyNTUgTCA2MjAgMzA4IiBmaWxsPSJub25lIiBzdHJva2U9IiNkOTc3MDYiIHN0cm9rZS13aWR0aD0iMiIgbWFya2VyLWVuZD0idXJsKCNhcnJvdy1hbWJlcikiIC8+CiAgPHJlY3QgeD0iNTQ4IiB5PSIyNzIiIHdpZHRoPSIxNDQiIGhlaWdodD0iMjAiIHJ4PSI0IiBmaWxsPSIjZmZmYmViIiAvPgogIDx0ZXh0IHg9IjYyMCIgeT0iMjg2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBjbGFzcz0iZWRnZS1sYWJlbCIgZmlsbD0iI2I0NTMwOSI+UG90xZllYmEgYWtjZSAoQWN0KTwvdGV4dD4KCiAgPCEtLSA0LiBUb29sIENhbGwgKEpTT04vQmFzaCkgLS0+CiAgPGcgZmlsdGVyPSJ1cmwoI3NoYWRvdykiPgogICAgPHJlY3QgeD0iNTI1IiB5PSIzMTAiIHdpZHRoPSIxOTAiIGhlaWdodD0iODYiIHJ4PSIxMCIgZmlsbD0iI2ZmZmJlYiIgc3Ryb2tlPSIjZjU5ZTBiIiBzdHJva2Utd2lkdGg9IjIiIC8+CiAgICA8cmVjdCB4PSI1MzciIHk9IjMyMiIgd2lkdGg9IjE2NiIgaGVpZ2h0PSIyNCIgcng9IjUiIGZpbGw9IiNmZWYzYzciIC8+CiAgICA8dGV4dCB4PSI2MjAiIHk9IjMzOCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgY2xhc3M9InRpdGxlLXRleHQiIGZpbGw9IiM3ODM1MGYiPlZvbMOhbsOtIG7DoXN0cm9qZSAoVG9vbCBDYWxsKTwvdGV4dD4KICAgIDx0ZXh0IHg9IjYyMCIgeT0iMzYyIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBjbGFzcz0iY29kZS1iYWRnZSIgZmlsbD0iIzkyNDAwZSI+eyJuYW1lIjogImdyZXAiLCAiYXJncyI6IHsuLi59fTwvdGV4dD4KICAgIDx0ZXh0IHg9IjYyMCIgeT0iMzgwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBjbGFzcz0ic3ViLXRleHQiIGZpbGw9IiNiNDUzMDkiPm5lYm8gQmFzaCAvIENvZGUgZXhlY3V0aW9uPC90ZXh0PgogIDwvZz4KCiAgPCEtLSBBcnJvdyBUb29sIENhbGwgLT4gRXhlY3V0aW9uIEVudmlyb25tZW50IC0tPgogIDxwYXRoIGQ9Ik0gNzE1IDM1MyBMIDc1OCAzNTMiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzQ3NTU2OSIgc3Ryb2tlLXdpZHRoPSIyIiBtYXJrZXItZW5kPSJ1cmwoI2Fycm93KSIgLz4KCiAgPCEtLSA1LiBWw71rb25uw6kgcHJvc3TFmWVkw60gKEV4ZWN1dGlvbiBFbnZpcm9ubWVudCkgLS0+CiAgPGcgZmlsdGVyPSJ1cmwoI3NoYWRvdykiPgogICAgPHJlY3QgeD0iNzYwIiB5PSIzMDAiIHdpZHRoPSIxMjAiIGhlaWdodD0iMTEwIiByeD0iMTAiIGZpbGw9IiNmMGZkZmEiIHN0cm9rZT0iIzBkOTQ4OCIgc3Ryb2tlLXdpZHRoPSIyIiAvPgogICAgPHJlY3QgeD0iNzY4IiB5PSIzMTAiIHdpZHRoPSIxMDQiIGhlaWdodD0iMjQiIHJ4PSI1IiBmaWxsPSIjY2NmYmYxIiAvPgogICAgPHRleHQgeD0iODIwIiB5PSIzMjYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGNsYXNzPSJ0aXRsZS10ZXh0IiBmaWxsPSIjMTE1ZTU5Ij5Qcm9zdMWZZWTDrTwvdGV4dD4KICAgIDx0ZXh0IHg9IjgyMCIgeT0iMzQ4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBjbGFzcz0ic3ViLXRleHQiIGZpbGw9IiMwZjc2NmUiPuKAoiBTYW5kYm94IC8gT1M8L3RleHQ+CiAgICA8dGV4dCB4PSI4MjAiIHk9IjM2OCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgY2xhc3M9InN1Yi10ZXh0IiBmaWxsPSIjMGY3NjZlIj7igKIgU291Ym9yeSAvIEdpdDwvdGV4dD4KICAgIDx0ZXh0IHg9IjgyMCIgeT0iMzg4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBjbGFzcz0ic3ViLXRleHQiIGZpbGw9IiMwZjc2NmUiPuKAoiBNQ1Agc2VydmVyeTwvdGV4dD4KICA8L2c+CgogIDwhLS0gQXJyb3cgRXhlY3V0aW9uIC0+IE9ic2VydmF0aW9uIC0tPgogIDxwYXRoIGQ9Ik0gODIwIDQxMCBMIDgyMCA0NTIgTCA3MjIgNDUyIiBmaWxsPSJub25lIiBzdHJva2U9IiMwNTk2NjkiIHN0cm9rZS13aWR0aD0iMiIgbWFya2VyLWVuZD0idXJsKCNhcnJvdy1lbWVyYWxkKSIgLz4KCiAgPCEtLSA2LiBWw71zdHVwIG7DoXN0cm9qZSAoT2JzZXJ2YXRpb24pIC0tPgogIDxnIGZpbHRlcj0idXJsKCNzaGFkb3cpIj4KICAgIDxyZWN0IHg9IjUyMCIgeT0iNDE1IiB3aWR0aD0iMjAwIiBoZWlnaHQ9Ijc1IiByeD0iMTAiIGZpbGw9IiNmMGZkZjQiIHN0cm9rZT0iIzE2YTM0YSIgc3Ryb2tlLXdpZHRoPSIyIiAvPgogICAgPHJlY3QgeD0iNTMyIiB5PSI0MjUiIHdpZHRoPSIxNzYiIGhlaWdodD0iMjQiIHJ4PSI1IiBmaWxsPSIjZGNmY2U3IiAvPgogICAgPHRleHQgeD0iNjIwIiB5PSI0NDEiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGNsYXNzPSJ0aXRsZS10ZXh0IiBmaWxsPSIjMTQ1MzJkIj5Qb3pvcm92w6Fuw60gKE9ic2VydmF0aW9uKTwvdGV4dD4KICAgIDx0ZXh0IHg9IjYyMCIgeT0iNDYzIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBjbGFzcz0ic3ViLXRleHQiIGZpbGw9IiMxNTgwM2QiPlbDvXN0dXAgeiBuw6FzdHJvamUgKHN0ZG91dC9zdGRlcnIpPC90ZXh0PgogICAgPHRleHQgeD0iNjIwIiB5PSI0NzgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGNsYXNzPSJzdWItdGV4dCIgZmlsbD0iIzE2NjUzNCI+VsO9c2xlZGVrIHZ5aGxlZMOhdsOhbsOtIC8gxI10ZW7DrSBzb3Vib3J1PC90ZXh0PgogIDwvZz4KCiAgPCEtLSBSZUFjdCBGZWVkYmFjayBMb29wIEFycm93OiBPYnNlcnZhdGlvbiAtPiBDb250ZXh0IFdpbmRvdyAtLT4KICA8cGF0aCBkPSJNIDUyMCA0NTIgTCAzNjAgNDUyIEwgMzYwIDI0MiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDU5NjY5IiBzdHJva2Utd2lkdGg9IjIuNSIgbWFya2VyLWVuZD0idXJsKCNhcnJvdy1lbWVyYWxkKSIgLz4KCiAgPCEtLSBGZWVkYmFjayBMb29wIEJhZGdlICYgTGFiZWwgLS0+CiAgPGcgZmlsdGVyPSJ1cmwoI3NoYWRvdykiPgogICAgPHJlY3QgeD0iMzc1IiB5PSI0MzUiIHdpZHRoPSIxMjUiIGhlaWdodD0iMzQiIHJ4PSI2IiBmaWxsPSIjZGNmY2U3IiBzdHJva2U9IiMxMGI5ODEiIHN0cm9rZS13aWR0aD0iMS41IiAvPgogICAgPHRleHQgeD0iNDM3LjUiIHk9IjQ1MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgY2xhc3M9Imxvb3AtYmFkZ2UiPlJlQWN0IFNNWcSMS0E8L3RleHQ+CiAgICA8dGV4dCB4PSI0MzcuNSIgeT0iNDYzIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBjbGFzcz0ic3ViLXRleHQiIGZpbGw9IiMwNjVmNDYiPlpwxJt0IGRvIGtvbnRleHR1PC90ZXh0PgogIDwvZz4KCiAgPCEtLSBBbm5vdGF0aW9uIGZvb3RlciBpbnNpZGUgaGFybmVzcyBib3ggLS0+CiAgPHRleHQgeD0iMjUwIiB5PSI1MDAiIGNsYXNzPSJzdWItdGV4dCIgZmlsbD0iIzY0NzQ4YiIgZm9udC1zdHlsZT0iaXRhbGljIj4KICAgIEhhcm5lc3Mgc3ByYXZ1amUga29udGV4dCwgdm9sw6Fuw60gbsOhc3Ryb2rFryBhIGN5a2x1cyBvcGFrdWplLCBkb2t1ZCBhZ2VudCBuZW9obMOhc8OtIGhvdG92byBuZWJvIG5ldnnFvmFkdWplIHZzdHVwIMSNbG92xJtrYS4KICA8L3RleHQ+Cjwvc3ZnPgo=)

*Obrázek 1: Architektura autonomní ReAct smyčky (Reasoning + Acting) a tok dat mezi uživatelem, kontextem, modelem a výkonným prostředím.*

#### 2.3.4 Vyvolávání nástrojů [Tool Calling]

Aby mohl agent provádět reálné inženýrské operace, musí mu agent harness zpřístupnit systémové nástroje. Způsob, jakým jsou nástroje modelům předkládány, zásadně ovlivňuje ergonomii vývoje i bezpečnost celého systému.

Strukturované volání nástrojů (*Tool / Function Calling*) používá vstupy a výstupy striktně validované vůči formálním JSON schématům. Zajišťuje vysokou typovou bezpečnost, avšak přináší režii tokenů spotřebovaných na definice schémat.

#### 2.3.5 Sandbox

Přímé spouštění kódu (*Code Execution*) umožňuje agentovi generovat skripty (bash, Python), které harness spouští v izolovaném terminálu. Tento model poskytuje maximální flexibilitu pro softwarový vývoj, avšak vyžaduje nekompromisní bezpečnostní izolaci.

🔥 **Hloubková kritika / Oponentura:** Iluzorní bezpečnost pískoviště: Přímé spouštění netestovaného syntetického kódu v běžném Docker kontejneru nelze považovat za plnohodnotnou bezpečnostní hranici (*security boundary*). Přístup k síti otevírá prostor pro útoky typu Server-Side Request Forgery (SSRF), úniky environmentálních tajností (GitHub tokeny, API klíče k LLM) přes skryté síťové kanály a kompromitaci CI infrastruktury. Pro bezpečný produkční provoz je nezbytná formální izolace na bázi microVM (např. AWS Firecracker, gVisor) a striktní izolace síťových jmenných prostorů.

#### 2.3.6 Patologie divergence: perseverace a oscilace

Ponechání jazykového modelu v neomezené prováděcí smyčce vede k předvídatelným selháním. V důsledku autoregresivní povahy se v kontextu snadno vytvoří pravděpodobnostní atraktor, který model uvězní v neproduktivním cyklu.

Mezi typické patologie patří:

- Perseverace a zacyklení: Opakované volání identického nástroje se stejnými neplatnými argumenty (např. čtení neexistujícího souboru) i po obdržení chybové zprávy.
- Oscilace a těkání (*Thrashing*): Střídavé přepínání mezi dvěma protichůdnými zásahy (úprava modulu A rozbije modul B a následná oprava B rozbije modul A).
- Nekontrolovaná spotřeba zdrojů (*Context Runaway*): Rychlé vyčerpání kontextového okna i finančního rozpočtu na volání API bez dosažení cíle.

#### 2.3.7 Dovednosti [ Skills ]

Se vzrůstající komplexitou úloh nelze veškeré instrukce, skripty a doménové znalosti vkládat do základního systémového promptu. K modulárnímu rozšíření schopností agenta slouží [***Dovednosti [ Skills ]***](#kw-skills)★ — [CZ] Znovupoužitelné modulární balíčky instrukcí (typicky definovaných v souboru SKILL.md), procedurálních pravidel a volitelných pomocných skriptů či zdrojů, které harness dynamicky načítá do kontextu agenta podle povahy řešeného úkolu..

Architektura dovedností staví na následujících principech:

- Definiční soubor `SKILL.md`: Dovednost tvoří adresář obsahující definiční soubor se strukturovanou hlavičkou (YAML frontmatter vymezující název a popis role) a detailním návodem k použití.
- Dynamické načítání pro úsporu kontextu: Do výchozího promptu se vloží pouze stručný přehled dostupných dovedností. Kompletní instrukce a skripty se do kontextu načtou až v okamžiku, kdy agent danou dovednost explicitně vyvolá.
- Skripty a záchytné body (*Scripts & Hooks*): Dovednosti mohou obsahovat deterministické skripty pro rutinní transformace kódu a událostní háčky vyvolávané při stavových přechodech harnessu.

-  [+ ]Kromě kontextových dovedností využívají pokročilé řídicí architektury také programové [***Rozšíření [ Plugins ]***](#kw-plugins)★ — [CZ] Rozšíření běžící přímo v prostředí harnessu, která rozšiřují jeho exekuční jádro o specializované systémové adaptéry, ovladače nástrojů a deterministické záchytné body.. Zatímco *Skills* fungují jako kontextové procedury a instrukce interpretované modelem, pluginy rozšiřují samotný harness na nativní systémové úrovni.

#### 2.3.8 Model Context Protocol ( MCP ) servery

- Pro sjednocení rozhraní mezi jazykovými modely a externími nástroji či datovými zdroji vznikl otevřený standard Model Context Protocol (MCP) ([7](#loc-60)). Namísto vytváření proprietárních rozhraní pro každou službu definuje MCP univerzální protokol. [+ ]Pro sjednocení rozhraní mezi jazykovými modely a externími nástroji či datovými zdroji vznikl [***Model Context Protocol ( MCP )***](#kw-mcp)★ — [CZ] Model Context Protocol — otevřený standard původně navržený společností Anthropic pro standardizovanou komunikaci AI aplikací s externími nástroji, zdroji a daty prostřednictvím zpráv JSON-RPC. ([7](#loc-60)). Namísto vytváření proprietárních rozhraní pro každou službu definuje MCP univerzální protokol.

Základní vlastnosti protokolu MCP:

- Protokolové rozhraní: Komunikace probíhá prostřednictvím standardu JSON-RPC (přes standardní vstup/výstup `stdio` nebo proud událostí `Server-Sent Events / SSE`).
- Architektonické oddělení: Implementace nástrojů běží jako samostatný proces mimo jádro harnessu. MCP servery fungují jako znovupoužitelné komponenty, které lze snadno sdílet napříč různými agenty a projekty.

#### 2.3.9 Škálování: Multiagentní systémy (Subagenti) a grafy (DAG workflows) [Scaling: Multiagent Systems (Subagents) and DAG Workflows (Graphs)]

Monolitická agentní smyčka selhává při řešení komplexních, vícefázových úloh. Pro spolehlivé škálování se v moderních systémech uplatňuje hierarchická dělba práce a formalizace procesu do podoby grafu.

Klíčové přístupy ke škálování zahrnují:

- Subagenti (*Subagents*): Hlavní orchestrátor dekomponuje rozsáhlou úlohu a deleguje dílčí kroky na specializované agenty (např. průzkumník repozitáře, plánovač, kódovací dělník). Po dokončení je kontext subagenta zahozen a orchestrátor obdrží pouze čistý výsledek, což chrání primární kontext před znečištěním (*context pollution*).
- Pracovní postupy jako grafy (DAG / Graph Engineering): Životní cyklus požadavku je modelován jako orientovaný acyklický graf (příjem
  <math><mo lspace="0em" rspace="0em" stretchy="false">→</mo></math>
   plán
  <math><mo lspace="0em" rspace="0em" stretchy="false">→</mo></math>
   kód
  <math><mo lspace="0em" rspace="0em" stretchy="false">→</mo></math>
   testy
  <math><mo lspace="0em" rspace="0em" stretchy="false">→</mo></math>
   schválení). Hrany definují striktní závislosti (`needs`); selhání v libovolném uzlu okamžitě zastaví navazující kroky.

#### 2.3.10 Zapojení člověka do smyčky [ Human-in-the-loop ] ( HITL )

Základním principem navrženého řešení není nekritická plná autonomie, nýbrž efektivní kooperace člověka a stroje. Autonomnímu systému náleží mechanické a rutinní úkony, zatímco klíčová architektonická a nevratná rozhodnutí zůstávají plně pod kontrolou vývojáře.

Řízení lidského dohledu staví na těchto pilířích:

- Lidské schvalovací brány (*Human Gates*): Formální procesní uzly, v nichž se automatický běh pozastaví a vyčká na autorizaci operátora:
  -
    1. brána (Záměr a plán): Člověk autorizuje technický plán a rozpad požadavku dříve, než agent začne modifikovat kód v souborech.
  -
    1. brána (Sémantická revize): Člověk provádí finální kontrolu diffu v pull requestu před jeho začleněním do hlavní větve.
- Prevence únavy z revizí (*Review Fatigue*): Vyvážená frekvence kontrol — zamezení mikromanagementu na úrovni jednotlivých souborů při zachování kontroly nad celkovým architektonickým směrem.
- Dohledatelnost původního zadání: Trvalé uchovávání doslovného znění požadavku (GitHub Issue) bez ztrátových parafrází modelem, což brání vymizení okrajových podmínek v průběhu vývoje.
- Transparentnost selhání a deterministická eskalace: Zákaz tichého pohlcování chyb či halucinovaných omluv při selhání. Při vyčerpání rozpočtu nebo selhání testů harness vygeneruje strukturovaný diagnostický incident (diff, chybové hlášení, stav kontextu) a předá jej vývojáři k manuálnímu zásahu.

🔥 **Hloubková kritika / Oponentura:** Kognitivní limity lidské schvalovací brány (Review Fatigue): Spoléhání se na finální sémantickou kontrolu diffu v pull requestu naráží na lidské kognitivní limity. Výzkumy prokazují, že u rozsáhlých diffů (nad 300–400 řádků) dramaticky klesá hloubka lidské pozornosti — vývojář kód pouze zběžně prohlédne a spoléhá na zelenou fajfku z CI. Aby byla lidská brána efektivní, harness musí diffy rozkládat do sémanticky sevřených mikrokroků, generovat interaktivní vysvětlení netriviálních rozhodnutí a explicitně zvýrazňovat změny v kritických architektonických komponentách.

## 3 DarkFactory - Praktická část: Architektura harnessu

Úvod

### 3.1 Git a GitHub

## 4 Výsledky a diskuse

## 5 Závěr

📌 **Metodické vymezení / Rozsah práce:** Poznámka k vypracování závěru: Závěr práce bude sepsán jako poslední krok po definitivním ucelení teoretických východisek agentického inženýrství a detailní architektury agent harnessu. Tato závěrečná kapitola syntetizuje zjištění o deterministickém řízení autonomních agentů a zhodnotí formulované principy a výzkumné otázky bez vazby na dřívější ad-hoc testovací repozitáře.

## Seznam zdrojů

- [1.](#loc-15) CHACON, Scott a STRAUB, Ben. *Pro Git.*2. New York : Apress, 2014. ISBN 978-1-4842-0076-6.
- [2.](#loc-21) HUMBLE, Jez a FARLEY, David. *Continuous Delivery: Reliable Software Releases through Build, Test, and Deployment Automation.*Boston : Addison-Wesley, 2010. ISBN 978-0-321-60191-9.
- [3.](#loc-26) VASWANI, Ashish, SHAZEER, Noam, PARMAR, Niki, USZKOREIT, Jakob, JONES, Llion, GOMEZ, Aidan N., KAISER, Łukasz a POLOSUKHIN, Illia. Attention Is All You Need. *arXiv preprint arXiv:1706.03762.* Online. 2017. Available from: [https://arxiv.org/abs/1706.03762](https://arxiv.org/abs/1706.03762)
- [4.](#loc-34) LIU, Nelson F., LIN, Kevin, HEWITT, John, PARANJAPE, Ashwin, BEVILACQUA, Michele, PETRONI, Fabio a LIANG, Percy. Lost in the Middle: How Language Models Use Long Contexts. *Transactions of the Association for Computational Linguistics.* Online. 2024. Vol. 12, p. 157–173. Available from: [https://arxiv.org/abs/2307.03172](https://arxiv.org/abs/2307.03172)
- [5.](#loc-38) ANTHROPIC. Prompt Engineering overview. Online. 2026. Available from: [https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview)
- [6.](#loc-40) YAO, Shunyu, ZHAO, Jeffrey, YU, Dian, DU, Nan, SHAFRAN, Izhak, NARASIMHAN, Karthik a CAO, Yuan. ReAct: Synergizing Reasoning and Acting in Language Models. *arXiv preprint arXiv:2210.03629.* Online. 2022. Available from: [https://arxiv.org/abs/2210.03629](https://arxiv.org/abs/2210.03629)
- [7.](#loc-46) ANTHROPIC. Model Context Protocol documentation. Online. 2026. Available from: [https://modelcontextprotocol.io/docs/2026-07-28/getting-started/intro#explore-mcp](https://modelcontextprotocol.io/docs/2026-07-28/getting-started/intro#explore-mcp)
- 8.  MARIUS, Patrik. DarkFactory: autonomous, governed software engineering pipelines. Online. 2026. [Accessed 8 září 2026]. Available from: [https://github.com/marius-patrik/DarkFactory](https://github.com/marius-patrik/DarkFactory)
- 9.  Deepseek Harness. *arXiv preprint arXiv:2608.25512.* Online. 2026. Available from: [https://arxiv.org/abs/2608.25512](https://arxiv.org/abs/2608.25512)
- 10.  DAO, Tri, FU, Daniel Y., ERMON, Stefano, RUDRA, Atri a RÉ, Christopher. FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness. *Advances in Neural Information Processing Systems.* Online. 2022. Vol. 35, p. 16344–16359. Available from: [https://arxiv.org/abs/2205.14135](https://arxiv.org/abs/2205.14135)
- 11.  AINSLIE, Joshua, LEE-THORP, James, JONG, Michiel de, ZEMLYANSKIY, Yury, LEBRÓN, Federico a SANGHAI, Sumit. GQA: Training Generalized Multi-Query Transformer Models from Multi-Head Checkpoints. *arXiv preprint arXiv:2305.13245.* Online. 2023. Available from: [https://arxiv.org/abs/2305.13245](https://arxiv.org/abs/2305.13245)

## Rejstřík

[Agent](#kw-agent)
[Agentické inženýrství [ Agentic Engineering ]](#kw-agentic-engineering)
[Agentní harness [ Agent Harness ]](#kw-harness)
[Chatbot](#kw-chatbot)
[Degradace kontextu [ Context Rot ]](#kw-context-rot)
[Dovednosti [ Skills ]](#kw-skills)
[Generování rozšířené vyhledáváním [ Retrieval-Augmented Generation ] ( RAG )](#kw-rag)
[Git](#kw-git)
[GitHub](#kw-github)
[GitHub Actions ( Actions )](#kw-github-actions)
[Inženýrství pracovních grafů [ Workflow-graph Engineering ] ( Graph Engineering )](#kw-graph-engineering)
[Inženýrství prováděcí smyčky [ Execution-loop Engineering ] ( Loop Engineering )](#kw-loop-engineering)
[Jazykový model [ Large Language Model ] ( LLM )](#kw-language-model)
[Kompakce kontextu [ Context Compaction ] ( Compaction )](#kw-context-compaction)
[Kontextové inženýrství [ Context Engineering ]](#kw-context-engineering)
[Kontextové okno [ Context Window ]](#kw-context-window)
[Mezipaměť klíčů a hodnot [ Key–Value Cache ] ( KV Cache )](#kw-kv-cache)
[Model Context Protocol ( MCP )](#kw-mcp)
[Orientovaný acyklický graf [ Directed Acyclic Graph ] ( DAG )](#kw-dag)
[Požadavek na sloučení [ Pull Request ]](#kw-pull-request)
[Promptové inženýrství [ Prompt Engineering ]](#kw-prompt-engineering)
[Průběžná integrace [ Continuous Integration ] ( CI )](#kw-continuous-integration)
[Rozšíření [ Plugins ]](#kw-plugins)
[Skript [ Script ]](#kw-script)
[Sloučení commitů [ Commit Squashing ] ( Squash )](#kw-squash)
[Sloučení větví [ Branch Merge ] ( Merge )](#kw-merge)
[Smyčka ReAct [ ReAct Loop ] ( Agent Loop )](#kw-agent-loop)
[Softwarové inženýrství [ Software Engineering ]](#kw-software-engineering)
[Softwarový kontejner [ Software Container ] ( Container )](#kw-container)
[Správa verzí [ Version control ]](#kw-version-control)
[Tah interakce [ Interaction Turn ] ( Turn )](#kw-turn)
[Token](#kw-token)
[Tokenizér [ Tokenizer ]](#kw-tokenizer)
[Transformerová architektura [ Transformer Architecture ] ( Transformer )](#kw-transformer)
[Událostní záchytný bod [ Event Hook ] ( Hook )](#kw-hook)
[Vektorová reprezentace [ Embedding ]](#kw-embedding)
[Větev repozitáře [ Repository Branch ] ( Branch )](#kw-branch)
[Zapojení člověka do smyčky [ Human-in-the-loop ] ( HITL )](#kw-human-in-the-loop)

### A

#### Agent

[CZ] Softwarový systém řízený jazykovým modelem a vybavený nástroji, který samostatně plánuje, vnímá stav prostředí a provádí vícekrokové akce směřující k dosažení zadaného inženýrského cíle.

[EN] A software system driven by a language model and equipped with tools that independently plans, observes its environment, and performs multi-step actions toward a specified engineering goal.

#### Agentické inženýrství [ Agentic Engineering ]

[CZ] Inženýrská disciplína zaměřená na návrh, orchestraci a provoz agentických systémů kolem jazykových modelů, včetně nástrojů, kontextu, prováděcích smyček, bezpečnostních mantinelů a lidského dohledu.

[EN] An engineering discipline focused on designing, orchestrating, and operating agentic systems around language models, including tools, context, execution loops, guardrails, and human oversight.

#### Agentní harness [ Agent Harness ]

[CZ] Agentní harness — aplikační a orchestrační vrstva obklopující inferenční jádro modelu, která zajišťuje běhové prostředí nástrojů, dynamickou správu kontextového okna, bezpečnostní mantinely, práci se stavem a deterministické řízení životního cyklu požadavku.

[EN] Agent harness — an application and orchestration layer surrounding a model's inference core that provides the tool runtime, dynamic context-window management, guardrails, state handling, and deterministic control over the request lifecycle.

### C

#### Chatbot

[CZ] Systém založený na jazykovém modelu určený primárně k textové interakci s uživatelem; odpovídá na jednotlivé požadavky, ale sám o sobě nedisponuje autonomní prováděcí smyčkou ani nástroji pro samostatnou modifikaci okolního prostředí.

[EN] A language-model-based system designed primarily for text interaction with a user; it responds to individual requests but does not by itself provide an autonomous execution loop or tools for independently modifying the surrounding environment.

### D

#### Degradace kontextu [ Context Rot ]

[CZ] Degradace pozornosti a kvality logického uvažování modelu způsobená zaplněním kontextového okna dlouhou historií, šumem nebo vzájemně si konkurujícími informacemi, která vede k přehlížení instrukcí a ztrátě souvislostí.

[EN] Degradation in a model's attention and reasoning quality caused by long, noisy, or internally competing context, leading to missed instructions and loss of relationships between facts.

#### Dovednosti [ Skills ]

[CZ] Znovupoužitelné modulární balíčky instrukcí (typicky definovaných v souboru SKILL.md), procedurálních pravidel a volitelných pomocných skriptů či zdrojů, které harness dynamicky načítá do kontextu agenta podle povahy řešeného úkolu.

[EN] Reusable modular packages of instructions (typically defined in a SKILL.md file), procedural rules, and optional helper scripts or resources that a harness dynamically loads into an agent's context for a particular class of task.

### G

#### Generování rozšířené vyhledáváním [ Retrieval-Augmented Generation ] ( RAG )

[CZ] Architektura, v níž systém před generováním nebo během něj vyhledá relevantní informace z externího zdroje a vloží je do kontextu modelu, aby výstup mohl být založen na načtených datech.

[EN] An architecture in which a system retrieves relevant information from an external source before or during generation and places it into model context so the output can be grounded in the retrieved data.

#### Git

[CZ] Distribuovaný systém správy verzí, který uchovává historii projektu, podporuje větvení a slučování změn a umožňuje deterministický návrat k předchozím stavům repozitáře.

[EN] A distributed version-control system that records project history, supports branching and merging, and enables deterministic return to earlier repository states.

#### GitHub

[CZ] Cloudová platforma pro hosting gitových repozitářů, správu vývojového cyklu pomocí Issues a Pull Requests a automatizaci CI/CD pracovních postupů.

[EN] A platform for hosting Git repositories and coordinating the software-development lifecycle through features such as Issues, Pull Requests, and CI/CD automation.

#### GitHub Actions ( Actions )

[CZ] Automatizační platforma GitHubu, která spouští deklarované workflow a jejich joby v reakci na události repozitáře nebo ruční spuštění.

[EN] GitHub's automation platform for running declared workflows and their jobs in response to repository events or manual dispatch.

### I

#### Inženýrství pracovních grafů [ Workflow-graph Engineering ] ( Graph Engineering )

[CZ] Návrh agentních nebo automatizačních pracovních postupů jako explicitních grafů uzlů, závislostí a přechodů namísto jediné neomezené smyčky.

[EN] The design of agentic or automation workflows as explicit graphs of nodes, dependencies, and transitions rather than as one unconstrained loop.

#### Inženýrství prováděcí smyčky [ Execution-loop Engineering ] ( Loop Engineering )

[CZ] Návrh a řízení iterativní prováděcí smyčky agenta: stavových přechodů, podmínek ukončení, rozpočtů, opakování, eskalací a vazby mezi rozhodováním modelu a nástroji.

[EN] The design and control of an agent's iterative execution loop, including state transitions, termination conditions, budgets, retries, escalation, and the connection between model decisions and tools.

### J

#### Jazykový model [ Large Language Model ] ( LLM )

[CZ] Velký jazykový model je neuronový model trénovaný nad rozsáhlými textovými daty, který autoregresivně zpracovává a generuje posloupnosti tokenů. V této práci vystupuje jako inferenční kognitivní jádro agentního systému.

[EN] A large language model is a neural model trained on large-scale textual data that autoregressively processes and generates token sequences. In this thesis it serves as the inference-based cognitive core of an agentic system.

### K

#### Kompakce kontextu [ Context Compaction ] ( Compaction )

[CZ] Proces zmenšení aktivního kontextu, typicky shrnutím, výběrem nebo nahrazením starších částí historie kompaktnější reprezentací tak, aby se běh vešel do kontextového okna.

[EN] The process of reducing active context, typically by summarizing, selecting, or replacing older history with a more compact representation so execution remains within the context window.

#### Kontextové inženýrství [ Context Engineering ]

[CZ] Systematický návrh, výběr, pořadí a životní cyklus informací zpřístupňovaných modelu v aktivním kontextu, včetně instrukcí, paměti, nástrojových výsledků a externě načtených dat.

[EN] The systematic design, selection, ordering, and lifecycle management of information made available to a model in active context, including instructions, memory, tool results, and externally retrieved data.

#### Kontextové okno [ Context Window ]

[CZ] Maximální rozsah tokenové sekvence, kterou model při jednom běhu dokáže zahrnout do aktivního kontextu. Prakticky omezuje součet instrukcí, historie, nástrojových výstupů a dalších dat předávaných modelu.

[EN] The maximum token-sequence span a model can include in active context during one inference run. In practice it limits the combined instructions, history, tool outputs, and other data supplied to the model.

### M

#### Mezipaměť klíčů a hodnot [ Key–Value Cache ] ( KV Cache )

[CZ] Mezipaměť dříve vypočtených vektorů klíčů a hodnot v pozornostních vrstvách transformeru, která při autoregresivním generování omezuje nutnost opakovaně přepočítávat předchozí tokeny.

[EN] A cache of previously computed key and value vectors in transformer attention layers that reduces repeated computation of earlier tokens during autoregressive generation.

#### Model Context Protocol ( MCP )

[CZ] Model Context Protocol — otevřený standard původně navržený společností Anthropic pro standardizovanou komunikaci AI aplikací s externími nástroji, zdroji a daty prostřednictvím zpráv JSON-RPC.

[EN] Model Context Protocol — an open standard originally introduced by Anthropic for standardized communication between AI applications and external tools, resources, and data through JSON-RPC messages.

### O

#### Orientovaný acyklický graf [ Directed Acyclic Graph ] ( DAG )

[CZ] Orientovaný graf bez orientovaného cyklu. V pracovních postupech umožňuje explicitně vyjádřit závislosti mezi kroky a pořadí, které z nich vyplývá.

[EN] A directed graph containing no directed cycle. In workflows it can explicitly represent dependencies among steps and the ordering implied by those dependencies.

### P

#### Požadavek na sloučení [ Pull Request ]

[CZ] Formální návrh na začlenění změn z jedné větve repozitáře do druhé, který slouží jako místo pro automatizované kontroly, lidskou revizi a diskusi nad navrženými úpravami.

[EN] A formal proposal to integrate changes from one repository branch into another, providing a place for automated checks, human review, and discussion of the proposed changes.

#### Promptové inženýrství [ Prompt Engineering ]

[CZ] Inženýrská metodika systematického návrhu, strukturování a optimalizace instrukcí a systémových promptů pro řízení chování a mantinelů jazykového modelu.

[EN] An engineering discipline for systematically designing, structuring, and optimizing instructions and system prompts to guide and constrain language-model behavior.

#### Průběžná integrace [ Continuous Integration ] ( CI )

[CZ] Vývojová praxe, při níž se změny často integrují a automaticky ověřují sestavením, testy a dalšími kontrolami, aby se integrační chyby odhalily co nejdříve.

[EN] A development practice in which changes are integrated frequently and automatically verified by builds, tests, and other checks so integration failures are detected early.

### R

#### Rozšíření [ Plugins ]

[CZ] Rozšíření běžící přímo v prostředí harnessu, která rozšiřují jeho exekuční jádro o specializované systémové adaptéry, ovladače nástrojů a deterministické záchytné body.

[EN] Programmatic extension modules running directly in the harness environment that extend its execution core with specialized system adapters, tool drivers, and deterministic hooks.

### S

#### Skript [ Script ]

[CZ] Soubor nebo posloupnost příkazů určených k automatizovanému vykonání interpretem, shellem nebo jiným běhovým prostředím.

[EN] A file or sequence of commands intended for automated execution by an interpreter, shell, or another runtime.

#### Sloučení commitů [ Commit Squashing ] ( Squash )

[CZ] Operace, při níž se více po sobě jdoucích commitů nahradí jedním souhrnným commitem, obvykle za účelem zjednodušení historie před integrací změn.

[EN] An operation that replaces multiple consecutive commits with one aggregate commit, commonly to simplify history before integrating changes.

#### Sloučení větví [ Branch Merge ] ( Merge )

[CZ] Operace správy verzí, která kombinuje změny nebo historii dvou vývojových linií do společného výsledného stavu; konflikty vyžadují explicitní vyřešení.

[EN] A version-control operation that combines changes or history from two lines of development into a common resulting state; conflicts require explicit resolution.

#### Smyčka ReAct [ ReAct Loop ] ( Agent Loop )

[CZ] Iterativní prováděcí cyklus autonomního agenta založený na vzoru ReAct (Reasoning + Acting), v němž model střídavě uvažuje, volá nástroje a vyhodnocuje pozorování z běhového prostředí.

[EN] An iterative execution cycle of an autonomous agent based on the ReAct pattern (Reasoning + Acting), in which the model alternates between reasoning, tool calls, and evaluation of observations from the runtime environment.

#### Softwarové inženýrství [ Software Engineering ]

[CZ] Systematické uplatňování inženýrských principů na specifikaci, návrh, implementaci, ověřování, provoz a údržbu softwarových systémů.

[EN] The systematic application of engineering principles to the specification, design, implementation, verification, operation, and maintenance of software systems.

#### Softwarový kontejner [ Software Container ] ( Container )

[CZ] Izolované uživatelské běhové prostředí balící aplikaci a její závislosti při sdílení jádra hostitelského operačního systému; úroveň bezpečnostní izolace závisí na konkrétní implementaci a konfiguraci.

[EN] An isolated user-space runtime packaging an application and its dependencies while sharing the host operating-system kernel; its security isolation depends on the implementation and configuration.

#### Správa verzí [ Version control ]

[CZ] Správa a sledování změn zdrojových souborů a dalších verzovaných artefaktů tak, aby bylo možné změny bezpečně větvit, slučovat, auditovat a v případě potřeby vracet.

[EN] The management and tracking of changes to source files and other versioned artifacts so changes can be safely branched, merged, audited, and reverted when necessary.

### T

#### Tah interakce [ Interaction Turn ] ( Turn )

[CZ] Jedna diskrétní jednotka interakce v konverzačním nebo agentním protokolu, například zpráva uživatele, odpověď modelu nebo samostatně evidovaný výsledek nástroje.

[EN] One discrete unit of interaction in a conversational or agentic protocol, such as a user message, model response, or separately recorded tool result.

#### Token

[CZ] Diskrétní jednotka zpracovávaná jazykovým modelem. Token odpovídá položce slovníku tokenizéru a je reprezentován číselným identifikátorem; nemusí odpovídat celému slovu.

[EN] A discrete unit processed by a language model. A token corresponds to an entry in the tokenizer vocabulary and is represented by a numeric identifier; it need not correspond to a whole word.

#### Tokenizér [ Tokenizer ]

[CZ] Komponenta, která převádí text nebo jiný vstup na posloupnost tokenů a jejich identifikátorů a podle podporovaného směru také provádí zpětnou dekódovací transformaci.

[EN] A component that maps text or another input into a sequence of tokens and token identifiers and, where supported, performs the reverse decoding transformation.

#### Transformerová architektura [ Transformer Architecture ] ( Transformer )

[CZ] Architektura neuronových sítí založená na mechanismu pozornosti, která modeluje vztahy mezi prvky sekvence a tvoří základ většiny současných velkých jazykových modelů.

[EN] A neural-network architecture based on attention mechanisms that models relationships among sequence elements and underlies most contemporary large language models.

### U

#### Událostní záchytný bod [ Event Hook ] ( Hook )

[CZ] Definovaný bod životního cyklu nebo události, na který lze navázat vlastní deterministickou logiku před, po nebo místo standardního chování systému.

[EN] A defined lifecycle or event point to which custom deterministic logic can be attached before, after, or in place of standard system behavior.

### V

#### Vektorová reprezentace [ Embedding ]

[CZ] Vícerozměrná vektorová reprezentace tokenů nebo jiných dat, v níž numerické vztahy mezi vektory zachycují užitečné sémantické vztahy mezi reprezentacemi.

[EN] A multidimensional vector representation of tokens or other data in which numerical relationships between vectors capture useful semantic relationships between representations.

#### Větev repozitáře [ Repository Branch ] ( Branch )

[CZ] Pojmenovaná vývojová linie v systému správy verzí, která umožňuje provádět změny odděleně od jiné linie historie a později je porovnat nebo sloučit.

[EN] A named line of development in version control that allows changes to proceed separately from another history line and later be compared or merged.

### Z

#### Zapojení člověka do smyčky [ Human-in-the-loop ] ( HITL )

[CZ] Návrhový vzor, v němž lidský operátor zůstává součástí rozhodovacího procesu systému prostřednictvím schvalovacích bran (Human Gates), zejména před významnými nebo nevratnými systémovými operacemi.

[EN] A design pattern in which a human operator remains part of the system's decision process through approval gates (Human Gates), especially before consequential or irreversible system operations.

## Seznam příloh

1. [A Obsah přiloženého média](#loc-63)
2. [B Schéma konfiguračního manifestu darkfactory.json](#loc-64)
3. [C Sdílené workflow pro GitHub Actions](#loc-65)
4. [D Systémové prompty plánovacího a kódovacího agenta](#loc-66)
5. [E Protokol revizních značek v sazebním systému Typst](#loc-67)

## A Obsah přiloženého média

Odevzdaný archiv obsahuje kompletní zdrojové soubory práce, sazební šablonu, řídicí skripty a zdrojový kód autonomního systému DarkFactory.

```
mono-OdbornaPrace/
├── prace/                          # Rukopis a sazba odborné práce
│   ├── kapitoly/                   # Texty jednotlivých kapitol (01-uvod až 06-prilohy)
│   ├── lib/odborna-prace.typ       # Sazební šablona, recenzní značky a formátování GJKT
│   ├── img/                        # Vektorová procesní schémata (SVG) a grafické podklady
│   ├── fonts/                      # Metricky shodná patková písma (Caladea)
│   ├── bib/references.bib          # Bibliografická databáze citovaných zdrojů
│   ├── scripts/                    # Pomocné a náhledové skripty
│   ├── main.typ                    # Hlavní řídicí dokument sazby
│   ├── metadata.typ                # Údaje o autorovi, vedoucím a anotace
│   └── Makefile                    # Příkazy pro automatizovanou kompilaci a kontrolu
├── darkfactory/                    # Zdrojový kód systému DarkFactory (submodul)
│   ├── .github/workflows/          # Sdílené šablony kontinuální integrace
│   └── src/                        # Výkonné orchestrační jádro systému
├── out/prace.pdf                   # Výsledný vysázený tiskový dokument v PDF
└── README.md                       # Dokumentace a návod na reprodukci prostředí
```

*Výpis 1: Stromová adresářová struktura odevzdaného elektronického archivu a doprovodných repozitářů.*

## B Schéma konfiguračního manifestu darkfactory.json

📐 **Strukturální upozornění:** Příloha v rekonstrukci: Formální JSON schéma manifestu bude doplněno po stabilizaci nového schématu v přestavěném systému DarkFactory.

💡 **Návrh na vylepšení:** Placeholder: Zde bude uvedeno úplné JSON Schema vymezující validní syntaxi nového konfiguračního manifestu.

## C Sdílené workflow pro GitHub Actions

📐 **Strukturální upozornění:** Příloha v rekonstrukci: Definice sdílených a volajících workflow pro GitHub Actions budou aktualizována po dokončení přestavby orchestrátoru.

💡 **Návrh na vylepšení:** Placeholder: Zde budou uvedeny ukázky znovupoužitelného a volajícího workflow nové verze DarkFactory.

## D Systémové prompty plánovacího a kódovacího agenta

📐 **Strukturální upozornění:** Příloha v rekonstrukci: Systémové prompty pro plánovací a implementační fáze budou aktualizovány podle nových rolí a instrukčních šablon v přestavěném systému.

💡 **Návrh na vylepšení:** Placeholder: Zde budou uvedeny kompletní systémové prompty pro jednotlivé fáze životního cyklu požadavku.

## E Protokol revizních značek v sazebním systému Typst

Tato příloha uvádí referenční definici a použití vizuálních revizních značek pro řízení a dohled nad generovaným textem v sazebním formátu Typst.

```
#import "../templates/registry.typ": note, issue, alert, critique, added, draft, accepted, finalized, diff

// --- 1. Panely na okraji textu (Callouty) ---
#note[Doplňte porovnání rychlosti kompilace mezi verzemi 0.1 a 0.2.]
#issue[Chybná signatura funkce: chybí povinný parametr timeout.]
#alert[Sekce postrádá shrnutí naměřených výsledků před diskusí.]
#critique[Metodologická absence baseline prokazující přínos nového modulu.]
#blue-note[Metodické vymezení: rozsah práce a oddělení agentického inženýrství od strojového učení.]

// --- 2. Textové revizní funkce (zvýraznění v toku textu) ---
#draft[Tento odstavec tvoří neověřený koncept čekající na schválení.]
#added[Nově vygenerovaná sekce automaticky začleněná agentem.]
#accepted[Uživatelem přijatý text, který ještě nebyl finalizován.]
#removed[Zastaralý text navržený k odstranění.]
// Návrh změny: nový text je automaticky unconfirmed a raw drží starou stranu.
#diff[Původní chybné znění textu.][Navržené nové znění textu.]

// Po schválení se diff odstraní a zůstane pouze správná delta:
#accepted[Schválené nové znění textu.]
#finalized[Uzavřené nové znění nebo strukturální prvek.]
```

*Výpis 2: Ukázka zápisu a použití revizních značek a textových funkcí v jazyce Typst.*

### E.1 Vizuální reprezentace jednotlivých prvků v sazbě

Pro přehlednost jsou níže uvedeny reálné ukázky jednotlivých revizních panelů a textových funkcí v jejich finální vizuální podobě:

💡 **Návrh na vylepšení:** Ukázka zeleného panelu doporučení (`#note`): Konstruktivní návrh na vylepšení, doplnění diagramu nebo námět na architektonickou optimalizaci.

⚠️ **Chyba / Nesrovnalost k opravě:** Ukázka červeného panelu vady (`#issue`): Zjištěná faktická nesrovnalost, logická mezera, syntaktická chyba či překlep vyžadující opravu.

📐 **Strukturální upozornění:** Ukázka žlutého panelu strukturálního upozornění (`#alert` / `#struct-alert`): Hloubková nevyváženost podkapitol, nekonzistence osnovy či absence klíčových náležitostí práce.

🔥 **Hloubková kritika / Oponentura:** Ukázka oranžového panelu oponentury (`#critique`): Břitká, nekompromisní oponentura — zpochybnění neověřených předpokladů, analýza slabin metodiky a příprava na otázky zkušební komise.

📌 **Metodické vymezení / Rozsah práce:** Ukázka modrého panelu metodického vymezení (`#blue-note` / `#scope-note`): Vymezení rozsahu práce, formulace mantinelů a architektonických abstrakcí.

### E.2 Ukázky textových zvýrazňovacích a srovnávacích funkcí v toku odstavce

- Neověřený koncept (`#draft` / `#unconfirmed`): Tento text představuje koncept čekající na posouzení autorem.
- Nově přidaný text (`#added`): [+ ]Tato pasáž byla nově vygenerována autonomním agentem na základě požadavku.
- Přijatý text (`#accepted`): Text byl odsouhlasen uživatelem, ale může ještě projít dalším začištěním.
- Finalizovaný text (`#finalized`): Text nebo struktura je považována za uzavřenou součást práce.
- Navrženo k odstranění (`#removed`): - Tato neaktuální věta je navržena k úplnému smazání z rukopisu.
- Srovnávací diff (`#diff`): - Původní platné znění pasáže. [+ ]Navržené nové znění čekající na posouzení.
- Čistý neoznačený text: Běžný text bez explicitního workflow stavu; sám o sobě neznamená finalizaci.

### E.3 Role značek v lidském dohledu

- Čistý neoznačený text: Běžný text bez explicitního workflow stavu.
- Žluté podbarvení (`#unconfirmed`): Neověřený koncept čekající na lidské posouzení.
- Zelené podbarvení (`#added`): Nově vygenerované návrhy agenta.
- Modré podtržení (`#accepted`): Uživatelem přijatý text, který zůstává dále editovatelný.
- Zelené podtržení (`#finalized`): Uzavřený text nebo strukturální prvek.
- Srovnávací diff (`#diff`): Návrh změny; review zobrazí starou červenou stranu a novou zelenou stranu, jejíž obsah je současně neověřený. Raw/final zachová staré znění až do schválení. Po přijetí nebo finalizaci se diff zcela odstraní.
- Postranní panely (Callouty): Striktní oddělení námětů, chyb a oponentury od těla textu.
