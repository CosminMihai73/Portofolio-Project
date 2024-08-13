Sigur, iată întregul fișier `README.md` scris în format Markdown:

```markdown
# Portfolio Management System

## Descriere

Această aplicație permite utilizatorilor să gestioneze un portofoliu online, oferind funcționalități pentru a adăuga, edita, șterge și vizualiza lucrări. Proiectul include o interfață de administrare pentru lucrări și o interfață de vizualizare a portofoliului destinată utilizatorilor.

## Tehnologii Utilizate

- **Frontend**: React, Material-UI
- **Backend**: ExpressJS, TypeORM
- **Baza de Date**: MySQL
- **Dependențe suplimentare**: Axios pentru cererile HTTP, React Router pentru navigare

## Instalare

### 1. Clonează repository-ul

```bash
git clone https://github.com/CosminMihai73/Portofolio-Project
```

### 2. Frontend

- Navighează în directorul frontend și instalează dependențele:

```bash
cd ./portfolio-frontend/
npm install
```

- Rulează aplicația:

```bash
npm start
```

### 3. Backend

- Navighează în directorul backend și instalează dependențele:

```bash
cd ./portfolio-backend/
npm install
```

- Creează baza de date în MySQL folosind următoarele comenzi SQL:

```sql
CREATE DATABASE portfolio_db;
```

- Configurează variabilele de mediu (.env) pentru conexiunea la baza de date MySQL.

- Rulează serverul:

```bash
npm run dev
```

## Utilizare

- Accesează interfața de administrare pentru a adăuga sau modifica lucrări.
- Filtrează lucrările după status (Visible/Hidden).
- Accesează interfața de client pentru a vizualiza lucrările.

## Documentație Tehnică

### 1. Arhitectura Proiectului

#### 1.1 Prezentare Generală a Arhitecturii

Proiectul utilizează o arhitectură Client-Server. Frontend-ul este responsabil pentru interacțiunea cu utilizatorul, în timp ce backend-ul gestionează logica de afaceri și interacțiunea cu baza de date MySQL.

#### 1.2 Diagrama Arhitecturală

```
Client (React, Material-UI) <-> Backend (ExpressJS, TypeORM) <-> MySQL Database
```

#### 1.3 Fluxul de Date

1. Utilizatorul interacționează cu interfața web (React) pentru a vizualiza sau modifica portofoliul.
2. Cererile sunt trimise către backend (Express) prin API-uri REST.
3. Backend-ul procesează cererile, interacționează cu baza de date folosind TypeORM și returnează răspunsul la client.

### 2. Module și Componente

#### 2.1 Frontend

- **WorkList Component**: Afișează lista lucrărilor, oferind opțiuni de filtrare și navigare către detaliile fiecărei lucrări.
- **WorkItem Component**: Afișează detaliile unei lucrări individuale, inclusiv opțiunile de editare și ștergere.
- **Navbar Component**: Navigarea principală a aplicației, cu link-uri către pagina principală și portofoliu.

#### 2.2 Backend

- **Work Service**: Gestiunea logicii de afaceri pentru adăugarea, actualizarea și ștergerea lucrărilor.
- **Database Models**: Modelele TypeORM pentru lucrări, inclusiv validarea și relațiile cu alte tabele.

### 3. Documentația API-ului

#### 3.1 Endpoint-uri disponibile

- **GET /works**: Returnează lista tuturor lucrărilor.
- **GET /works/:id**: Returnează detalii pentru o lucrare specifică.
- **POST /works**: Adaugă o nouă lucrare.
- **PUT /works/:id**: Actualizează o lucrare existentă.
- **DELETE /works/:id**: Șterge o lucrare.

#### 3.2 Exemplu de Request și Response

**GET /works**

Request:

```bash
GET http://localhost:3001/works
```

Response:

```json
[
  {
    "id": 1,
    "title": "Lucrare 1",
    "description": "Descrierea lucrării 1",
    "clientUrl": "http://client1.com",
    "imageUrl": "/uploads/image1.jpg",
    "status": true
  },
  ...
]
```
```

