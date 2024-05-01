import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

import { mentors } from "@/lib/data"
import { useToast } from "@/components/ui/use-toast"

function HomePage() {
    const { toast } = useToast()
    return (
        <main className="mb-40 mx-4">
            <div className='md:grid md:grid-cols-2 flex flex-col-reverse'>
                <div className='flex flex-col gap-2 md:gap-4 justify-center text-center mt-4 md:mt-0'>
                    <h1 className='text-2xl md:text-4xl font-medium '>Find your future today!</h1>
                    <h2 className='text-xl md:text-2xl'>Your most trusted mentorship partner</h2>
                </div>
                <div className="flex item-center justify-center">
                    <img src="/hero.jpg" alt="Hero Image" className='rounded-3xl h-48 md:h-96' />
                </div>
            </div>
            <div className="flex mt-20 items-center justify-center">
                <div className="border-2 p-4 md:p-12">
                    <div>
                        <h2 className="text-xl md:text-3xl mb-2">Not sure what career to go?</h2>
                        <h3 className="text-muted-foreground text-md md:text-xl">Answer a short quiz to find out what careers may suit you!</h3>
                        <Button className="mt-8 float-right" onClick={() => {
                            toast({
                                title: "Navigate to quiz page",
                                description: "Not yet implemented",
                            })
                        }}
                        >Answer Quiz</Button>
                    </div>
                </div>
            </div>
            <MentorsList />
        </main>
    )
}

export default HomePage

const MentorsList = () => {

    return <div>
        <h2 className="text-3xl font-medium mt-20 mb-8 text-center">Mentors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {mentors.map((mentor) =>
                <Link to={`mentors/${mentor.id}`}>
                    <Card className="hover:opacity-75 active:opacity-90 cursor-pointer">
                        <CardHeader>
                            <img src={mentor.image} alt={mentor.name} className="h-60 object-cover object-top" />
                        </CardHeader>
                        <CardContent>
                            <CardTitle>{mentor.name}</CardTitle>
                            <CardDescription>{mentor.position}</CardDescription>
                        </CardContent>
                        <CardFooter className="flex flex-wrap gap-2">
                            {mentor.skills.map((skill) =>
                                <span className="text-sm rounded-xl border px-2 py-1">{skill}</span>
                            )}
                        </CardFooter>
                    </Card>
                </Link>
            )}
        </div>
    </div>
}
