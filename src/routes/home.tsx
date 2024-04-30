import './App.css'

function HomePage() {

    return (
        <div className='grid grid-cols-2'>
            <div className='flex flex-col gap-4 justify-center'>
                <h1 className='text-4xl font-medium '>Find your future today!</h1>
                <h2 className='text-2xl'>Your most trusted mentorship partner</h2>
            </div>
            <div> <img src="/hero.jpg" alt="Hero Image" className='rounded-3xl h-96'/> </div>
        </div>
    )
}

export default HomePage
