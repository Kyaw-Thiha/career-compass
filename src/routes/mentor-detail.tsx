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
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Badge } from "@/components/ui/badge"

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
                    <p className="text-lg font-medium text-muted-foreground">{mentor?.description}</p>
                    <div>
                        <h3 className="text-md mt-12 font-medium">Skills</h3>
                        <div className="flex flex-col gap-2 mt-4 w-max">
                        {mentor?.skills.map((skill) =>
                                <Badge variant="outline" className="px-4 py-2">{skill}</Badge>
                        )}
                        </div>
                    </div>
                </div>
                <div>
                    <Card>
                        <CardHeader>
                            <CardTitle>Book a session</CardTitle>
                            <CardDescription></CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ToggleGroup className="flex flex-col w-full border-2" type="single">
                                {mentor?.sessions.map((session) =>
                                    <ToggleGroupItem value={session.text} className="w-full flex flex-col gap-2 h-full py-2">
                                        <p className="text-lg">{session.text}</p>
                                        <p className="text-muted-foreground">{session.duration} min, {session.fee} per session</p>
                                    </ToggleGroupItem>
                                )
                                }
                            </ToggleGroup>
                        </CardContent>
                        <CardFooter>
                            <Button>Confirm</Button>
                        </CardFooter>
                    </Card>

                </div>
            </div>
        </main>
    )
}

export default MentorDetailPage
