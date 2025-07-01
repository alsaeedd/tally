# 🧾 Tally - Automated Receipt Processing System

> **Eliminate manual expense reporting forever.** Snap a photo, get instant extraction of vendor, amount, date, items, and smart categorization powered by Claude AI.

![Microservices](https://img.shields.io/badge/Architecture-Microservices-brightgreen)
![NestJS](https://img.shields.io/badge/Framework-NestJS-red)
![TypeScript](https://img.shields.io/badge/Language-TypeScript-blue)
![PostgreSQL](https://img.shields.io/badge/Database-PostgreSQL-336791)
![Claude AI](https://img.shields.io/badge/AI-Claude%203.5%20Haiku-orange)

## 🚀 What This Does

Tally transforms receipt processing from tedious manual data entry into a seamless automated experience:

1. **📸 Snap a photo** of any receipt
2. **🤖 AI extracts everything** - vendor, amount, date, individual items, smart category detection
3. **💾 Automatically stores** structured data in your database
4. **📊 Ready for reporting** - no more Excel hell

## 🏗️ Architecture

Clean microservices architecture built for scale:

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   API Gateway   │────│  Auth Service   │    │ Receipts Service│
│   Port: 3000    │    │   Port: 3001    │    │   Port: 3002    │
│                 │    │                 │    │                 │
│ • File uploads  │    │ • User reg/auth │    │ • OCR processing│
│ • HTTP routing  │    │ • JWT tokens    │    │ • Claude AI     │
│ • Load balancing│    │ • User mgmt     │    │ • Data storage  │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         └───────────────────────┼───────────────────────┘
                                 │
                    ┌─────────────────┐
                    │   PostgreSQL    │
                    │   Database      │
                    │                 │
                    │ • Users table   │
                    │ • Receipts table│
                    │ • JSONB items   │
                    └─────────────────┘
```

## 🛠️ Tech Stack

- **Framework**: NestJS with TypeScript
- **Database**: PostgreSQL with TypeORM
- **AI**: Claude 3.5 Haiku for OCR
- **Architecture**: TCP-based microservices
- **File Handling**: Multer for uploads
- **Validation**: Class-validator pipes

## 📋 Prerequisites

- **Node.js** 18+
- **PostgreSQL** (local or cloud)
- **Claude API Key** from Anthropic

## 🎯 API Endpoints

### Authentication

```
POST /auth/create    - Register new user
GET  /auth/findAll      - List all users
```

### Receipts

```
POST /receipts/create        - Upload & process receipt
GET  /receipts/find        - Get user's receipts
```

## 📊 Sample Response

Upload a receipt and get instant structured data:

```json
{
  "id": "91ffa900-643d-4a4b-98d4-d09991952eaf",
  "user_id": "1",
  "image_path": "hc_receipt_2025_08.jpg",
  "amount": 4.0,
  "vendor": "Healthy Calorie",
  "date": "2019-01-03T00:00:00.000Z",
  "category": "Food",
  "items": [
    { "name": "Chicken Sandwich", "price": 2.3 },
    { "name": "Orange Juice", "price": 1.7 }
  ]
}
```

## 🔮 What's Next

On the list of to-dos:

- **JWT authentication** with refresh tokens
- **Export to Ready Email** with customizable templates
- **Rate limiting** and API security
- **File storage** to S3/CloudFlare
- **Docker containers** for easy deployment
- **API documentation** with Swagger
- **Monitoring** and logging
- **Frontend dashboard** for expense management

## 📈 Scaling Considerations

This architecture is built to scale:

- **Horizontal scaling**: Add more instances of any service
- **Database separation**: Move to service-per-database pattern
- **Event-driven**: Switch to async message queues (RabbitMQ/Kafka)
- **API Gateway**: Add authentication, rate limiting, load balancing

## 🤝 Contributing

Built with ❤️ as a learning project. Feel free to fork and extend!

## 📄 License

MIT - Build something amazing!

---

**🎉 From zero to production-grade receipt processing in one day. Alhamdulillah!**
