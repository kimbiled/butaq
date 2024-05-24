
export default function Stats() {
    return(
        <>
           <section class="py-20 bg-slate-100">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 class="font-manrope text-4xl text-center text-gray-900 font-bold mb-14">Problems in our country</h2>
            <div class="flex flex-col gap-5 xl:gap-8 lg:flex-row lg:justify-between">
                <div
                    class="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100">
                    <div class="flex gap-5">
                        <div class="font-manrope text-2xl font-bold text-indigo-600">
                        550
                        </div>
                        <div class="flex-1">
                            <h4 class="text-xl text-gray-900 font-semibold mb-2">Billion tenge</h4>
                            <p class="text-xs text-gray-500 font-medium leading-5">that is how much tenge last year Kazakhstan lost in agriculture</p>
                        </div>
                    </div>
                </div>
                <div
                    class="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100">
                    <div class="flex gap-5">
                        <div class="font-manrope text-2xl font-bold text-indigo-600">
                        66%
                        </div>
                        <div class="flex-1">
                            <h4 class="text-xl text-gray-900 font-semibold mb-2">Extent of Degradation</h4>
                            <p class="text-xs font-medium text-gray-500 leading-5">Kazakhstan’s agricultural land is affected by soil degradation. This includes 48 million hectares of arable land suffering from erosion and 30 million hectares from salinization . </p>
                        </div>
                    </div>
                </div>
                <div
                    class="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100">
                    <div class="flex gap-5">
                        <div class="font-manrope text-2xl font-bold text-indigo-600">
                        40%
                        </div>
                        <div class="flex-1">
                            <h4 class="text-xl text-gray-900 font-semibold mb-2">Irrigation Efficiency</h4>
                            <p class="text-xs text-gray-500 font-medium leading-5">Inefficient irrigation systems result in water losses of up to 60%</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}