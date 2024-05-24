export default function Footer() {
    return(
        <>
        <footer className="bg-slate-100">
    <hr class=" border-gray-200 sm:mx-auto mx-auto max-w-screen-xl bg-slate-100" />
    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl md:py-8 mt-4">   
        <div class="sm:flex sm:items-center sm:justify-between w-[570px]">
            <a href="#" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <span class="self-center text-xl font-medium whitespace-nowrap ">Butaq</span>
            </a>
        </div>
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="#" class="hover:underline mr-4">Butaq</a> All Rights Reserved.</span>
    </div>
</footer>
        </>
    )
}