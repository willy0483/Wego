# Wego

WeGo er en online service der tilbyder bæredygtig samkørsel til sine registrerede brugere. Som bruger kan man søge og booke ture med forskellige præferencer til en given destination.

## Hvad består Wego af?

Wego er bygget med populære teknologier:

- **React**: Et bibliotek til at bygge interaktive dele af hjemmesiden.
- **TypeScript**: Gør det nemmere at skrive fejlfri kode ved at tjekke den løbende.
- **Vite**: Et lynhurtigt værktøj til at starte projektet op i udvikling.
- **Tanstack Router**: Hjælper med at styre navigation og sider i appen.
- **Tanstack Query**: Gør det nemt at hente, cache og opdatere data.
- **Tailwind CSS**: Gør det let at style hjemmesiden med færdige klasser.

## Hvordan starter jeg

### 1. Hent project

```bash
git clone https://github.com/willy0483/Wego
cd wego/frontend
```

### 2. Sæt proxy op

For at kunne hente billeder fra backend, skal du tilføje følgende til din `vite.config.ts`:

```typescript
server: {
  proxy: {
    "/images": "http://localhost:8000",
  },
},
```

### 3. Install dependencies

```bash
npm install
```

### 4. Run dit project

```bash
npm run dev
```
