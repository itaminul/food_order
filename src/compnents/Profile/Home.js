const Home = () => {
    return(
        <>
      <div class="flex  p-0 bg-blue-50">
    <div class="flex w-96 bg-white drop-shadow-md rounded-lg p-8">
        <div class="flex flex-col px-5 py-1">
            <h4 class="font-bold text-xl text-pink-600">Aminul Huq</h4>
            <p class="mt-1 flex-1 font-light text-lg text-slate-500">
            I am experienced in leveraging agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.
            </p>
            <a class="mt-2 inline-block px-2 py-1 border bg-blue-500 text-center text-white text-sm hover:underline" href="#">
                View Profile
            </a>
        </div>
    </div>
    

    <div class="flex w-96 bg-white drop-shadow-md rounded-lg p-8">
        <img class="w-96 h-28 rounded-full border-4 border-slate-50 object-cover"
            src="https://www.kindacode.com/wp-content/uploads/2022/05/cute.jpeg" />

        <div class="flex flex-col px-5 py-1">
            <h4 class="font-bold text-lg text-pink-600">The Big Boss</h4>
            <p class="mt-1 flex-1 font-light text-sm text-slate-500">CEO & Co-Founder of XYZ</p>
            <a class="mt-2 inline-block px-2 py-1 border bg-blue-500 text-center text-white text-sm hover:underline" href="#">
                View Profile
            </a>
        </div>
    </div>
</div>
            </>

    )
}
export default Home;