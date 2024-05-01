
import { Button } from "@/components/ui/button"

import { mentors } from "@/lib/data"

function MentorDetailPage() {

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
                        <Button className="mt-8 float-right">Answer Quiz</Button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default MentorDetailPage
