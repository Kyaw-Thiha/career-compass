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
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Calendar } from "@/components/ui/calendar"
import { useState } from "react"
import { DialogClose } from "@radix-ui/react-dialog"
import { useToast } from "@/components/ui/use-toast"

function MentorDetailPage() {
    const params = useParams()
    const mentor = mentors.find((mentor) => mentor.id.toString() == params.id)

    const [date, setDate] = useState<Date | undefined>(new Date())
    const { toast } = useToast()

    const [sessionType, setSessionType] = useState("")

    return (
        <main className="mb-40">
            <div className="relative bg-primary h-52">
                <div className="absolute flex flex-row bottom-[-30%] left-8">
                    <img src={mentor?.image} alt={mentor?.name} className="rounded-[50%] h-32 w-32 md:h-48 md:w-48 object-cover object-top" />
                    <div className="flex flex-col justify-center ml-4">
                        <h2 className="text-white text-2xl font-medium">{mentor?.name}</h2>
                        <h3 className="text-xl text-muted-foreground"> {mentor?.position}</h3>
                    </div>
                </div>
            </div>
            <div className="mt-20 mx-4 md:mx-12 flex flex-col gap-4 md:grid md:grid-cols-2">
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
                            <ToggleGroup value={sessionType}
                                onValueChange={(value) => {
                                    if (value) setSessionType(value);
                                }}
                                className="flex flex-col w-full border-2" type="single">
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
                            <Dialog>
                                <DialogTrigger asChild><Button>Confirm</Button></DialogTrigger>
                                <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle>Choose your date</DialogTitle>
                                        <DialogDescription>
                                            Ensure you are free
                                        </DialogDescription>
                                    </DialogHeader>
                                    <Calendar
                                        mode="single"
                                        selected={date}
                                        onSelect={setDate}
                                        className="rounded-md border flex items-center justify-center"
                                    />
                                    <div className="flex gap-4">
                                        <DialogClose asChild>
                                            <Button onClick={() => {
                                                toast({
                                                    title: `Sheduled: ${sessionType}`,
                                                    description: `Friday, ${date?.toLocaleString()}`,
                                                })
                                            }}>
                                                Confirm
                                            </Button>
                                        </DialogClose>
                                        <DialogClose asChild>
                                            <Button type="button" variant="secondary">
                                                Cancel
                                            </Button>
                                        </DialogClose>
                                    </div>
                                </DialogContent>
                            </Dialog>

                        </CardFooter>
                    </Card>

                </div>
            </div>
        </main>
    )
}

export default MentorDetailPage
