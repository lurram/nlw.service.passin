import {prisma} from '../src/lib/prisma'

async function seed() {
  await prisma.event.create({
    data: {
      id: 'e2f8deef-bfdd-4f5c-bb46-b6d7728718cf',
      title: 'Unite Summit',
      slug: 'unite-summit',
      details: 'Um evento para devs apaixonados por código',
      maximumAttendees: 120,
    }
  })
}

seed().then(() => {
  console.log('Database seeded');
  prisma.$disconnect()
})