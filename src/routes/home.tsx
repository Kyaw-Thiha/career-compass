import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

function HomePage() {

    return (
        <main className="mb-40">
            <div className='grid grid-cols-2'>
                <div className='flex flex-col gap-4 justify-center text-center'>
                    <h1 className='text-4xl font-medium '>Find your future today!</h1>
                    <h2 className='text-2xl'>Your most trusted mentorship partner</h2>
                </div>
                <div> <img src="/hero.jpg" alt="Hero Image" className='rounded-3xl h-96' /> </div>
            </div>
            <div className="flex mt-20 items-center justify-center">
                <div className="border-2 p-12">
                    <div className="">
                        <h2 className="text-2xl">Not sure what career to go?</h2>
                        <h3 className="text-xl">Answer a short quiz to find out what careers may suit you!</h3>
                        <Button className="mt-4 float-right">Answer Quiz</Button>
                    </div>
                </div>
            </div>
            <MentorsList />
        </main>
    )
}

export default HomePage

const MentorsList = () => {
    const mentors = [
        {
            name: "Albert Dera",
            position: "Head of Marketing",
            image: "/mentors/albert-dera.jpg",
            skills: ["Interview Preparation", "Goal Setting", "Team Management"]
        },
        {
            name: "John",
            position: "Head of Marketing",
            image: "/mentors/albert-dera.jpg",
            skills: ["Interview Preparation", "Goal Setting", "Team Management"]
        },
        {
            name: "John",
            position: "Head of Marketing",
            image: "/mentors/albert-dera.jpg",
            skills: ["Interview Preparation", "Goal Setting", "Team Management"]
        },
        {
            name: "John",
            position: "Head of Marketing",
            image: "/mentors/albert-dera.jpg",
            skills: ["Interview Preparation", "Goal Setting", "Team Management"]
        },
        {
            name: "John",
            position: "Head of Marketing",
            image: "/mentors/albert-dera.jpg",
            skills: ["Interview Preparation", "Goal Setting", "Team Management"]
        },
        {
            name: "John",
            position: "Head of Marketing",
            image: "/mentors/albert-dera.jpg",
            skills: ["Interview Preparation", "Goal Setting", "Team Management"]
        },
    ]

    return <div>
        <h2 className="text-3xl font-medium mt-20 mb-8 text-center">Mentors</h2>
        <div className="grid grid-cols-4 gap-4 mx-8">
            {mentors.map((mentor) =>
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
            )}
        </div>
    </div>
}
