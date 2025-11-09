# MediAI - AI-Powered Healthcare Diagnosis System

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![Next.js](https://img.shields.io/badge/Next.js-14+-black.svg)](https://nextjs.org/)
[![Prisma](https://img.shields.io/badge/Prisma-6+-blue.svg)](https://prisma.io/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15+-blue.svg)](https://postgresql.org/)

MediAI is a comprehensive AI-powered healthcare diagnosis system that connects patients, doctors, and advanced machine learning algorithms to provide accurate medical insights and streamline healthcare workflows.

## 🚀 Features

### For Patients
- **AI-Powered Diagnosis**: Upload medical reports and receive AI-generated diagnoses with confidence scores
- **Secure File Upload**: Support for X-rays, lab reports, and medical documents (JPG, PNG, PDF)
- **Health Dashboard**: Track medical history, upcoming appointments, and health metrics
- **Doctor Communication**: Direct messaging with healthcare providers
- **Health Suggestions**: AI-generated personalized health recommendations

### For Doctors
- **Patient Management**: Comprehensive patient profiles with medical history
- **AI-Assisted Diagnosis**: Review and confirm AI-generated diagnoses
- **Report Management**: Access to all patient reports and attachments
- **Appointment Scheduling**: Manage consultations and follow-ups
- **Analytics Dashboard**: Track diagnosis accuracy and patient outcomes

### AI & ML Features
- **Multi-Modal Analysis**: Process images, text reports, and structured data
- **Confidence Scoring**: Transparent probability scores for all diagnoses
- **Continuous Learning**: Models improve with doctor feedback and corrections
- **Medical Standards**: ICD-10 coding and HIPAA compliance

## 🏗️ Architecture

### System Overview
```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Next.js       │    │   Fastify       │    │   PostgreSQL    │
│   Frontend      │◄──►│   Backend API   │◄──►│   Database      │
│                 │    │                 │    │                 │
│ - React 18      │    │ - Node.js 18+   │    │ - Prisma ORM    │
│ - TypeScript    │    │ - TypeScript    │    │ - Patient Data  │
│ - Tailwind CSS  │    │ - JWT Auth      │    │ - Encounters    │
│ - Shadcn/ui     │    │ - CORS          │    │ - Diagnoses     │
└─────────────────┘    └─────────────────┘    └─────────────────┘
                              │
                              ▼
                   ┌─────────────────┐
                   │   AI/ML Models  │
                   │                 │
                   │ - MedicalVision │
                   │ - NLP Analysis  │
                   │ - Risk Scoring  │
                   └─────────────────┘
```

### Tech Stack

#### Frontend
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Shadcn/ui
- **State Management**: React Hooks + Context
- **HTTP Client**: Native fetch API
- **Forms**: React Hook Form + Zod validation

#### Backend
- **Framework**: Fastify
- **Language**: TypeScript
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: JWT with bcrypt hashing
- **Validation**: Zod schemas
- **CORS**: Configured for frontend origin

#### Database
- **Engine**: PostgreSQL 15+
- **ORM**: Prisma 6+
- **Migration**: Automated schema management
- **Seeding**: Sample data for development

#### DevOps
- **Containerization**: Docker + Docker Compose
- **Database**: PostgreSQL in Docker
- **Development**: Hot reload for both frontend and backend
- **Environment**: Separate configs for dev/staging/production

## 📊 Database Schema

### Core Models

#### User Management
- **User**: Base user model with authentication
- **Doctor**: Extended profile for healthcare providers
- **Patient**: Extended profile for patients

#### Medical Records
- **Encounter**: Medical visit/appointment records
- **Diagnosis**: AI and doctor-confirmed diagnoses
- **Prediction**: AI model predictions with probabilities
- **Attachment**: File uploads (X-rays, reports, documents)

#### Supporting Models
- **Model**: AI model metadata and versions
- **Symptom**: Standardized symptom database

### Key Relationships
```
User (1) ──── (1) Doctor/Patient
Doctor (1) ──── (N) Encounter
Patient (1) ──── (N) Encounter
Encounter (1) ──── (N) Diagnosis
Encounter (1) ──── (N) Prediction
Encounter (1) ──── (N) Attachment
```

## 🔌 API Endpoints

### Authentication
```
POST   /api/auth/login     - User login
POST   /api/auth/signup    - User registration
GET    /api/auth/me        - Get current user profile
```

### Patients
```
GET    /api/patients              - List all patients (doctor only)
POST   /api/patients              - Create new patient
GET    /api/patients/:id          - Get patient details
PUT    /api/patients/:id          - Update patient
GET    /api/patients/:id/reports  - Get patient reports
```

### Encounters
```
GET    /api/encounters            - List encounters
POST   /api/encounters            - Create new encounter
GET    /api/encounters/:id        - Get encounter details
PUT    /api/encounters/:id        - Update encounter
POST   /api/encounters/:id/upload - Upload attachment
```

### Diagnoses & Predictions
```
GET    /api/diagnoses     - List diagnoses
POST   /api/diagnoses     - Create diagnosis
GET    /api/predictions  - List predictions
POST   /api/predictions  - Create prediction
```

### Health & Monitoring
```
GET    /api/health        - Health check
GET    /api/ping          - Simple ping
GET    /api/suggestions   - AI health suggestions
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- Docker & Docker Compose
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd medi-ai
   ```

2. **Start the database**
   ```bash
   cd Backend/prisma
   docker-compose up -d
   ```

3. **Install backend dependencies**
   ```bash
   cd ../..
   cd Backend
   npm install
   ```

4. **Set up the database**
   ```bash
   npm run migrate
   npm run seed
   ```

5. **Install frontend dependencies**
   ```bash
   cd ../Frontend
   npm install
   ```

6. **Start the development servers**

   **Terminal 1 - Backend:**
   ```bash
   cd Backend
   npm run dev
   ```

   **Terminal 2 - Frontend:**
   ```bash
   cd Frontend
   npm run dev
   ```

7. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:4000
   - Database: localhost:5432

### Environment Variables

Create `.env` files in both Backend and Frontend directories:

**Backend/.env:**
```env
DATABASE_URL="postgresql://app:app@localhost:5432/aimed?schema=public"
JWT_SECRET="your-super-secret-jwt-key"
CORS_ORIGIN="http://localhost:3000"
BCRYPT_ROUNDS=10
```

**Frontend/.env.local:**
```env
NEXT_PUBLIC_API_URL=http://localhost:4000
```

## 🔄 Application Flow

### Patient Journey
1. **Registration/Login**: Create account or sign in
2. **Upload Reports**: Submit medical documents and images
3. **AI Analysis**: System processes uploads with ML models
4. **Review Results**: View AI diagnosis with confidence scores
5. **Doctor Consultation**: Share results with healthcare provider
6. **Follow-up**: Schedule appointments and track progress

### Doctor Workflow
1. **Dashboard**: View patient list and pending cases
2. **Review Cases**: Examine AI diagnoses and patient data
3. **Confirm/Adjust**: Validate or modify AI recommendations
4. **Patient Communication**: Direct messaging and updates
5. **Report Generation**: Create comprehensive medical reports

### AI Processing Pipeline
1. **Data Ingestion**: Receive and validate file uploads
2. **Preprocessing**: Extract text, normalize images
3. **Model Inference**: Run multiple AI models for analysis
4. **Result Aggregation**: Combine predictions with confidence
5. **Risk Assessment**: Calculate overall health risk scores
6. **Recommendation Engine**: Generate personalized suggestions

## 🧪 Testing

### API Testing
```bash
# Health check
curl http://localhost:4000/api/health

# Login test
curl -X POST http://localhost:4000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"patient@example.com","password":"password123"}'
```

### Database Testing
```bash
# Connect to database
cd Backend/prisma
docker-compose exec db psql -U app -d aimed

# Check tables
\dt
```

## 📁 Project Structure

```
medi-ai/
├── Backend/                    # Fastify API server
│   ├── prisma/                # Database schema & migrations
│   │   ├── schema.prisma     # Database models
│   │   ├── seed.ts           # Sample data
│   │   └── docker-compose.yml # Database container
│   ├── src/
│   │   ├── routes/           # API route handlers
│   │   ├── schemas/          # Zod validation schemas
│   │   ├── plugins/          # Fastify plugins
│   │   └── middleware/       # Custom middleware
│   ├── package.json
│   └── tsconfig.json
├── Frontend/                  # Next.js application
│   ├── app/                  # Next.js app router
│   │   ├── (auth)/           # Authentication pages
│   │   ├── patient/          # Patient dashboard
│   │   └── doctor/           # Doctor dashboard
│   ├── components/           # Reusable UI components
│   ├── lib/                  # Utilities and API client
│   ├── hooks/                # Custom React hooks
│   └── public/               # Static assets
├── docker-compose.yml        # Full stack orchestration
├── README.md                 # This file
└── TODO.md                   # Development tasks
```

## 🔒 Security & Compliance

### Authentication & Authorization
- JWT-based authentication with refresh tokens
- Role-based access control (Patient, Doctor, Admin)
- Password hashing with bcrypt
- Session management and timeout

### Data Protection
- HIPAA compliance for medical data
- End-to-end encryption for file uploads
- Secure API endpoints with input validation
- Audit logging for sensitive operations

### Privacy Features
- Data anonymization for AI processing
- User consent management
- Right to data deletion
- Transparent data usage policies

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Use TypeScript for all new code
- Follow ESLint and Prettier configurations
- Write tests for new features
- Update documentation for API changes
- Use conventional commits

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Medical AI models powered by state-of-the-art research
- UI components from Shadcn/ui and Tailwind CSS
- Icons from Lucide React
- Database ORM by Prisma

## 📞 Support

For support, email support@mediai.com or join our Discord community.

---

**MediAI** - Revolutionizing healthcare through artificial intelligence. 🏥🤖
