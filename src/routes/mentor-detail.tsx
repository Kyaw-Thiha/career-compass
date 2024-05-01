import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { mentors } from "@/lib/data"
import { useParams } from "react-router-dom"

function MentorDetailPage() {
    const params = useParams()
    const mentor = mentors.find((mentor) => mentor.id.toString() == params.id)

    return (
        <main className="mb-40">
            <div className="relative bg-primary h-52">
                <div className="absolute flex flex-row bottom-[-30%] left-8">
                    <img src={mentor?.image} alt={mentor?.name} className="rounded-[50%] h-48 w-48 object-cover object-top" />
                    <div className="flex flex-col justify-center ml-4">
                        <h2 className="text-white text-2xl font-medium">{mentor?.name}</h2>
                        <h3 className="text-xl text-muted-foreground"> {mentor?.position}</h3>
                    </div>
                </div>
            </div>
            <div className="mt-20 mx-4 grid grid-cols-2">
                <div>
                    <p className="text-lg font-medium">{mentor?.description}</p>
                </div>
                <div>
                    <Card>
                        <CardHeader>
                            <CardTitle>Book a session</CardTitle>
                            <CardDescription></CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>Card Content</p>
                        </CardContent>
                        <CardFooter>
                            <p>Card Footer</p>
                        </CardFooter>
                    </Card>

                </div>
            </div>
        </main>
    )
}

export default MentorDetailPage
