import { PrismaClient, Sex } from "@prisma/client";
const prisma = new PrismaClient();


async function main() {
const patient = await prisma.patient.upsert({
where: { mrn: "MRN-0001" },
update: {},
create: {
mrn: "MRN-0001",
firstName: "Ava",
lastName: "Patel",
dob: new Date("1989-02-10"),
sex: Sex.F,
},
});


const enc = await prisma.encounter.create({
data: { patientId: patient.id, notes: "Initial visit for cough and fever" }
});


await prisma.symptom.createMany({ data: [
{ name: "Fever" }, { name: "Cough" }, { name: "Shortness of breath" }
], skipDuplicates: true });


console.log({ patient, enc });
}


main().finally(() => prisma.$disconnect());