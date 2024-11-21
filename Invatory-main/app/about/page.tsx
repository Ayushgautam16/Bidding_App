import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Linkedin } from "lucide-react"
import Image from "next/image"

const founders = [
  {
    name: "Sahil Jadhav",
    role: "Founder & CEO",
    image: "/founder1.jpg",
    linkedin: "https://www.linkedin.com/in/sahil-jadhav-8b3061261"
  },
  {
    name: "Prajakta Naik",
    role: "Co-Founder & COO",
    image: "/founder2.jpg",
    linkedin: "https://www.linkedin.com/in/prajakta-naik-505516261"
  },
]

export default function AboutUsPage() {
  return (
      <main className="flex-1">
        <section className="w-screen min-h-[90vh] py-24 grid place-content-center bg-gray-100 dark:bg-zinc-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  About Invntori
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Revolutionizing construction material procurement through innovative technology and trusted partnerships.
                </p>
              </div>

              <div>
                <img src="/about.png" className="h-[50vh] w-auto" alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 grid justify-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Our Mission</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 mb-16">
              At Invntori, we&apos;re on a mission to streamline the construction material procurement process, 
              making it more efficient, transparent, and cost-effective for all parties involved. We believe in 
              leveraging technology to connect buyers and sellers, fostering a competitive marketplace that benefits 
              the entire construction industry.
            </p>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Our Story</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 mb-16">
              Invntori was born out of the frustration experienced by our founders in the 
              traditional construction material procurement process. Recognizing the need for a more efficient 
              system, we set out to create a platform that would revolutionize how construction materials are 
              bought and sold.
            </p>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Our Values</h2>
            <ul className="list-disc list-inside max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 mb-8 space-y-2">
              <li>Transparency in all transactions</li>
              <li>Innovation in technology and processes</li>
              <li>Commitment to sustainability</li>
              <li>Customer-centric approach</li>
              <li>Integrity in all our dealings</li>
            </ul>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-zinc-900">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Meet Our Founders</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {founders.map((founder) => (
                <Card key={founder.name} className="flex flex-col">
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-4">
                      <Image
                        src={founder.image}
                        alt={founder.name}
                        width={150}
                        height={150}
                        className="rounded-md"
                      />
                    </div>
                    <CardTitle className="text-2xl font-bold">{founder.name}</CardTitle>
                    <p className="text-gray-500">{founder.role}</p>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="flex justify-center space-x-4">
                      <Button variant="outline" size="icon">
                        <a href={founder.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${founder.name}'s LinkedIn profile`}>
                          <Linkedin className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
  )
}