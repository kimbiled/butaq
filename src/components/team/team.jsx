import {team} from "../../assets/partners/index";
export default function Stats() {
    return(
        <>
                                                <section class="py-24 bg-slate-100">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center flex-col lg:flex-row md:mt-20">
                <div class="w-full lg:w-1/2">
                    <h2
                        class="font-manrope text-5xl text-gray-900 font-bold leading-[4rem] mb-7 text-center lg:text-left">
                        Our leading, strong & creative team</h2>
                    <p class="text-lg text-gray-500 mb-16 text-center lg:text-left">These people work on making our
                        product best.</p>
                </div>
                <div class="w-full lg:w-1/2 lg:mt-0 md:mt-40 mt-16 max-lg:max-w-2xl">
                            <img src={team} alt='our team' className="rounded-xl"/>
                </div>
            </div>
        </div>
    </section>
                                            
        </>
    )
}