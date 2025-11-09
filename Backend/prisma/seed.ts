import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // 1️⃣ Create or find patient by email (unique field in your schema)
  const patient = await prisma.patient.upsert({
    where: { email: "ava.patel@example.com" },
    update: {},
    create: {
      firstName: "Ava",
      lastName: "Patel",
      email: "ava.patel@example.com",
      phone: "9876543210",
      dateOfBirth: new Date("1989-02-10"),
      address: "Pune, India",
      bloodType: "O+",
      height: 165.5,
      weight: 60.0,
      allergies: "None",
    },
  });

  // 2️⃣ Create an encounter with JSON data
  const encounter = await prisma.encounter.create({
    data: {
      patientId: patient.id,
      data: {
        notes: "Initial visit for cough and fever",
        vitals: { temp: 101.2, pulse: 88 },
      },
    },
  });

  // 3️⃣ Create some symptoms
  await prisma.symptom.createMany({
    data: [
      { name: "Fever" },
      { name: "Cough" },
      { name: "Shortness of breath" },
    ],
    skipDuplicates: true,
  });

  console.log("✅ Seed completed successfully!");
  console.log({ patient, encounter });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
