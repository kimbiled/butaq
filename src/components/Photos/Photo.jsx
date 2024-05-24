import {one,two, three, four} from "../../assets/partners/index";
export default function Stats() {
    return(
        <>

        <div className="w-full bg-slate-100">
        <div class="grid grid-cols-2 gap-2 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div>
            <img class="h-auto max-w-full rounded-lg" src={one} alt="" />
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src={two} alt="" />
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src={three} alt="" />
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src={four} alt="" />
        </div>
        </div>
        </div>

        </>
    )
}