# API Documentation

Base URL: `http://localhost:3000`

## Health Check

Check if the API is running.

```bash
curl -X GET http://localhost:3000/api/health
```

## Affirmations

### Get Random Affirmation

Get a random affirmation.

```bash
curl -X GET http://localhost:3000/api/affirmations/random
```

### Get Affirmation (General)

Get a random affirmation (alternative endpoint).

```bash
curl -X GET http://localhost:3000/api/affirmations
```

### Get Affirmation by Category

Get an affirmation for a specific category.

**Parameters:**
- `category` (query param): The category of the affirmation (e.g., Love, Success, Health).

```bash
curl -X GET "http://localhost:3000/api/affirmations?category=Love"
```

## Categories

### Get All Categories

Get a list of available affirmation categories.

```bash
curl -X GET http://localhost:3000/api/categories
```
